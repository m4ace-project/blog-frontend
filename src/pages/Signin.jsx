import React from 'react';
import { Link } from 'react-router-dom';
import Frame199 from '../assets/Frame 199.png';
import circle from '../assets/record circle.png';

function Signin() {
    return (
        <div className="min-h-screen bg-[#FFFCD8]">

                <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
            <div className="text-center justify-center mt-20 max-w-md mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-3xl md:text-4xl font-inter font-semibold text-[#001F54]">Get Started</h1>
                <p className="text-lg md:text-xl font-inter text-[#001F54] font-semibold mb-8">Select a category</p>
                <div className="space-y-6">
                <Link 
                  to="/signup" 
                  className="w-full md:w-96 flex items-center py-3 bg-[#FF5722] text-[#FFFFFF] rounded-[20px] text-base md:text-lg font-semibold shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">                  
                  <div className="flex items-center justify-center w-4 h-8 rounded-full mr-2">
                   <img src={circle} alt="Icon" className="w-3 h-6 ml-4 object-contain rounded-full" />
                     </div>
                       <span className="flex ml-12 text-center font-inter text-sm md:text-base font-medium"> 
                       Content Creator
                       </span>
                        </Link>
                        <Link 
                         to="/signup" 
                    className="w-full md:w-96 flex items-center py-3 bg-[#FF5722] text-[#FFFFFF] rounded-[20px] text-base md:text-lg font-semibold shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <div className="flex items-center justify-center w-4 h-8 rounded-full mr-4">
                        <img src={circle} alt="Icon" className="w-3 h-6 ml-4 object-contain rounded-full" />
                        </div>
                        <span className="flex ml-12 font-inter text-sm md:text-base font-medium">Reader</span>
                        </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
