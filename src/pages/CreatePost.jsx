import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Editor from "../components/common/Editor";
import Widget from "../components/common/Widget";
import PostHeader from "../components/pages/post/PostHeader";
import PostCategory from "../components/common/PostCategory";


function CreatePost() {

  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("none");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log("Post Details:", { title, content });
    // console.log(editorRef.current);
    
    const token = localStorage.getItem('token');

    console.log(token);

    
    if (!token) {
      alert("User not authenticated. Please log in.");
      setLoading(false);
      return;
    };

  try {
      const response = await axios.post("https://olaniyijoe.pythonanywhere.com/api/posts/",
        {
          title: title,
          content: content,
          category: category,
        },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    alert("Post created successfully!");
    console.log(response.data);
  
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Failed to create the post. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex'>
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
            <br/>

            <div className="mb-5">
            <h2 className="mb-3 font-semibold">BLOG BODY CONTENT</h2>
            < Editor editorRef={editorRef} onChange={(data) => {setContent(data)}} />
            </div>
            <h2 className="mb-3 font-semibold">SELECT A CATEGORY</h2>
            <PostCategory onCategoryChange={setCategory} />      
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
            <div className='bg-white md:w-[72%] h-[6rem] rounded-[1rem] mb-14 lg:mb-4 p-3'>
              <div className='flex gap-4 mb-2'>
                <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl'>Last 7 Days</button>
                <p>Last 30 Days</p>
                <p>All</p>
              </div>
              <div className='flex gap-3'>
                <p>Shares</p>
                <img src="./src/assets/share-outlined.svg" alt="" />
                <p>O</p>
              </div>
            </div>
            <div className='text-[#001F54]'>
              <h5 className='font-bold text-center mb-8 text-3xl lg:text-lg lg:mb-3'>Top Posts</h5>
              <p>Drama as popular comedian, Osama berates Rhythm FM & OAP David King on live Radio</p>
              <p className='my-6 lg:my-2'>You Have to See Nini Singh’s Style Delivery at London Fashion Week</p>
              <p>FG Unveils Schedule For 2024 Independence Day Celebration</p>
              <p className='my-6 lg:my-2'>#BNxBBNaija9: Handi, Shaun & Tjay Evicted in Triple Exit | Highlights You Missed</p>
              <p>HerMoneyHerPower: Funke Akindele Shares How “Jenifa’s Diary” Came To Life by a Woman’s Support</p>
              <p className='my-6 lg:my-2'>Crypto Market Making : Basics That You Need to Know</p>
              <p>How to Achieve the Quiet Luxury Trend … </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
