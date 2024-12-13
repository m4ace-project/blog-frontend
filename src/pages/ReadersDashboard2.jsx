import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavbarReader from '/src/components/common/NavbarReader';
import FooterReader from '/src/components/common/FooterReader';
import Rectanglefood from '../assets/Food.png';
import Rectangle34 from '../assets/Rectangle 34.png';
import Rectangle35 from '../assets/Rectangle 35.png';
import Rectangle36 from '../assets/Rectangle 36.png';
import Rectangle22 from '../assets/Rectangle 22.png';
import MessageIcon from'../assets/messages.png';
import HeartIcon from'../assets/heart.png';
import Vector8 from'../assets/Vector (8).png';
import Vector3 from'../assets/Vector (3).png';
import Vector4 from'../assets/Vector (4).png';
import Vector5 from'../assets/Vector (5).png';
import Vector7 from'../assets/Vector (7).png';
import Vector9 from'../assets/Vector (9).png';
function ReadersDashboard2() {

  const {id} = useParams();
  const [post, setPost] = useState();


    return (
      <div className="bg-[#FFFCD8] min-h-screen">
        <ToastContainer />
        <NavbarReader />
      <div className="px-3  mt-2 text-[#001F54] font-inter font-medium text-sm w-full">
        {/* <div className="flex justify-between w-full">
        <p>Monday, May 20 2024</p>
        <p className="mx-auto">Food & Cooking</p>
        <p>Tomi Makanjuola</p>
        </div> */}
      </div>

    <div className="w-full items-center justify-center">
       <h1 className="mt-2 text-[#001F54] font-inter font-medium text-xl text-center">
        Vegan Parenting Tips: Raising Children on a Plant-Based Diet
      </h1>
       <div className="w-full max-w-md mx-auto mt-4">
        <img src={Rectangle22} alt="Featured" className="w-full " />
      </div>
      <div className="flex flex-col items-center text-[#001F54] font-inter font-medium text-sm px-4">
    
    <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-justify">
        <p className="mb-4 text-sm md:text-base leading-relaxed">
            As a first-time mum, here are some food-focused tips I can share when it comes to raising your child as a vegan. Please note that I am not a doctor, so you should always seek medical advice from your pediatrician or medical professional if you have any concerns.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
            Raising children on a vegan or plant-based diet is a rewarding choice, offering numerous health and environmental benefits. However, it comes with unique challenges that require careful planning to ensure a well-balanced diet for growing bodies.
        </p>
    </div>
    <div className="flex space-x-4 items-center justify-center mt-4">
        <img src={HeartIcon} alt="Heart" className="h-6 w-6" />
        <img src={Vector8} alt="Icon" className="h-6 w-6" /> 
        <img src={Vector3} alt="Icon" className="h-6 w-6" />
        <img src={Vector4} alt="Icon" className="h-6 w-6" />
        <img src={Vector5} alt="Icon" className="h-6 w-6" />
        <img src={Vector7} alt="Icon" className="h-6 w-6" />
    </div>
    <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl mt-8 mx-auto mb-6">
      <div className="absolute inset-0 flex items-center justify-center ">
        <img src={Vector7} alt="Icon" className="h-5 w-5 text-gray-400 mr-2" />
        <span className="text-gray-500 text-sm">Write a comment</span>
    </div>
    <textarea
        className="w-full h-24 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001F54] resize-none bg-transparent text-sm text-gray-800 placeholder-transparent"
        placeholder="Write a comment"
    ></textarea>
</div>


   </div>
  </div>
      <h1 className="text-[#001F54] font-inter font-medium text-xl ml-3 ">More posts from the Author</h1>
      <div className="flex flex-wrap">
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
           </div>
        <FooterReader/>
        </div>

  );
}

export default ReadersDashboard2;
