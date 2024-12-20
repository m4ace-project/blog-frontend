import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavbarReader from '/src/components/common/NavbarReader';
import FooterReader from '/src/components/common/FooterReader';
import PlaceHolder from '../assets/placeholder.gif'
import HeartIcon from'../assets/heart.png';
import Vector8 from'../assets/Vector (8).png';
import Vector3 from'../assets/Vector (3).png';
import Vector4 from'../assets/Vector (4).png';
import Vector5 from'../assets/Vector (5).png';
import Vector7 from'../assets/Vector (7).png';

function ReadersDashboard2() {

  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      
      const token = localStorage.getItem("token");
      const isAuthenticated = Boolean(token);
      setIsAuthenticated(isAuthenticated);

      const apiUrl = isAuthenticated
        ? `https://olaniyijoe.pythonanywhere.com/api/posts/${id}`
        : `https://olaniyijoe.pythonanywhere.com/api/postview/${id}`;
      const headers = isAuthenticated
        ? { Authorization: `Bearer ${token}` }
        : {};

      try {
        const response = await fetch(apiUrl, { headers });
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.statusText}`);
        }
        const data = await response.json();       
        setPost(data);
      } catch (error) {
        toast.error(`Error fetching post: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center mt-8">No post found.</div>;
  }



    return (
      <div className="bg-[#FFFCD8] min-h-screen">
        <ToastContainer />
        <NavbarReader />

      {/* <div className="px-5 md:px-10  mt-4 mb-10 text-[#001F54] font-inter font-medium text-sm w-full">
        <div className="flex justify-between w-full">
        <p>Monday, May 20 2024</p>
        <p className="mx-auto">Food & Cooking</p>
        <p>Tomi Makanjuola</p>
        </div>
      </div> */}


      

    <div className="w-full items-center justify-center">

    <div className="px-3 mt-5 text-[#001F54] font-inter font-medium text-sm w-full">
        <h1 className="text-xl text-center">{post.title}</h1>
      </div>
      <div className="w-full items-center justify-center">
        <div className="w-full max-w-md mx-auto my-10">
          <img src={PlaceHolder} alt={post.title} className="w-full" />
        </div>
        <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-justify mt-4 px-4">
    
          {isAuthenticated ? (
            <div>
              <p className="text-sm md:text-base leading-relaxed">{post.content}</p>
            </div>
          ) : (
            <div>
              <p className="text-sm md:text-base leading-relaxed">{post.preview} <Link to='/signin' className='underline text-blue-600'>Read More</Link></p>
            </div>
          )}

        </div>
      </div>

      <div className="flex flex-col items-center text-[#001F54] font-inter font-medium text-sm px-4">
        
        <div className="flex space-x-4 items-center justify-center md:gap-4 gap-2 mt-10">
            <img src={HeartIcon} alt="Heart" className="h-6 w-6" />
            <img src={Vector8} alt="Icon" className="h-6 w-6" /> 
            <img src={Vector3} alt="Icon" className="h-6 w-6" />
            <img src={Vector4} alt="Icon" className="h-6 w-6" />
            <img src={Vector5} alt="Icon" className="h-6 w-6" />
            <img src={Vector7} alt="Icon" className="h-6 w-6" />
        </div>
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mt-8 mx-auto mb-6">
              <div className="flex items-center justify-center mb-5">
                <img src={Vector7} alt="Icon" className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-500 text-sm">Write a comment</span>
            </div>
            <textarea
                className="w-full rounded-2xl h-20 p-5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001F54] resize-none bg-transparent text-sm text-gray-800"
                placeholder="Write a comment"
            ></textarea>
        </div>


      </div>
    </div>











      <h1 className="text-[#001F54] font-inter font-medium text-xl ml-3 ">More posts from the Author</h1>
      {/* <div className="flex flex-wrap">
      {[Rectanglefood, Rectangle34, Rectangle35, Rectangle36].map((image, index) => (
       <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
      <img src={image} alt={`image${index}`} className="w-full h-48 object-cover rounded-lg" />
      <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">
        {index === 0
          ? "How to make Jollof Rice in a Rice Cooker"
          : index === 1
          ? "Lovely drinks for any occasion. They are non-alcoholic hence great for the whole family."
          : index === 2
          ? "Onion colors: 4 Types of onions in Nigeria and how to cook with them"
          : "6 healthy eating tips for busy techies in Nigeria"}
         </p>
        </div>
        ))}
          <div className="flex justify-end mt-8 w-full">
           <Link to="/chat">
           <img src={MessageIcon} alt="messageicon" />
           </Link>
           </div>
           </div> */}
        <FooterReader/>
        
        
        </div>

  );
}

export default ReadersDashboard2;
