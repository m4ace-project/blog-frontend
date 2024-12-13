import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Editor from "../components/common/Editor";
import Widget from "../components/common/Widget";
import PostHeader from "../components/pages/post/PostHeader";
import PostCategory from "../components/common/PostCategory";
import TopPost from "../components/pages/post/TopPost";
import { toast, ToastContainer } from "react-toastify";


function CreatePost() {

  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("none");
  const [content, setContent] = useState("");
  const [blogPicture, setBlogPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const token = localStorage.getItem('token');
    
    if (!token) {
      toast.error("User not authenticated. Please log in.");
      setLoading(false);
      return;
    };

  try {
      const response = await axios.post("https://olaniyijoe.pythonanywhere.com/api/posts/",
        {
          title: title,
          content: content,
          category: category,
          blog_pic: blogPicture,
        },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );


    toast.success("Post created successfully!");
    window.location.reload();
  
  } catch (error) {
    console.error("Error creating post:", error);
    toast.error("Failed to create the post. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className='bg-[#FFFCD8] min-h-max md:flex'>
      <ToastContainer/>
      <div className='md:w-[20%]'>
          <Widget />
      </div>
      <div className='md:w-[80%]'>
        <PostHeader />
        <div className='mx-14 lg:flex lg:gap-[5rem] mt-5 lg:mx-10'>
          <div className='lg:w-[45%] mb-14 md:mb-0'>
            <form onSubmit={handleSubmit} className='w-full'>
            <h2 className="mb-3 font-semibold">POST TITLE</h2>
            <input 
            type="text" 
            name="Title" 
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-white h-10 border-2  w-full mb-5 ps-5' 
            />
            <h2 className="mb-3 font-semibold">POST IMAGE</h2>
            <input
                type="file"
                id="blogPicture"
                name="blogPicture"
                onChange={(e) => setBlogPicture(e.target.files[0])} className="mb-5"/>
            <br/>
            <h2 className="mb-3 font-semibold">SELECT A CATEGORY</h2>
            <PostCategory onCategoryChange={setCategory} />
            <div className="mb-5">
            <h2 className="mb-3 font-semibold">BLOG BODY CONTENT</h2>
            < Editor editorRef={editorRef} onChange={(data) => {setContent(data)}} />
            </div>
                  
            <div className='flex gap-[8rem] my-10 lg:my-5 justify-center'>
            <button
                  type="submit"
                  className="bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl mt-4"
                  disabled={loading}
                >
                  {loading ? "Publishing..." : "Publish"}
                </button>
            </div>
            </form>
            <div>
            <h5 className='text-[#001F54] text-xl font-bold text-center mb-10 lg:mb-4'>Recent Posts</h5>
            <div className='md:w-[100%] md:flex md:justify-between md:gap-5 ml-5 '>
            <Link to={'/readpost'}>
              <div className='sm:w-[50%] md:w-[45%] mb-14 mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 345.svg" className='lg:h-[60%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>How to Style Long Shorts for Work this Summer</p>
              </div>
              </Link>
              <div className='sm:w-[50%] md:w-[45%] mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 346.svg" className='lg:h-[50%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>Naira Depreciates to N1,595$ in Parallel Market</p>
              </div>
            </div>
          </div>
          </div>
          <div className='ml-10 lg:w-[45%]'>
            <TopPost />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
