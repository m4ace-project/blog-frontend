import React from 'react';
import { Link } from 'react-router-dom';


function NavbarReader() {
  return (
    <div>
      <nav className="bg-[#FFFFFF] p-4">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center">
              <img src= './src/assets/Frame 198.png' alt="logo" className="h-12 w-auto"/>
              <div className="hidden md:flex space-x-4 ml-12">
                {['Services', 'Articles', 'Pricing', 'Resources', 'Contact Us'].map((item, index) => (
                  <a key={index} href="#" className="text-[#001F54] font-inter font-medium flex hover:text-orange-500">
                    {item}
                    <img src='./src/assets/Vector.png' alt="vector" className="h-2 w-2 ml-3 mt-2 hover:text-[#FF5722]" />
                  </a>
                ))}
                <form className="relative w-50 flex ml-10 " role="search">
                  <span className="absolute inset-y-0 left-2 flex">
                    <img src='./src/assets/search-normal.png' alt="search" className="w-4 h-4 mt-2 " />
                  </span>
                  <input
                    className="w-full p-1 pl-7 pr-5 border text-[#001F54] rounded-full focus:outline-none focus:border-blue-500"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                   <Link 
                   to="/profileinfo" >
                <img src='./src/assets/profile.png' alt="Profile Icon" className="h-8 w-auto mt-1 ml-10" />
                </Link>
                </form>
              </div>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" className="p-2 text-[#001F54] rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                  <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarReader;
