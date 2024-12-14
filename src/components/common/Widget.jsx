import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logout from './Logout';

function Widget() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="hidden md:block md:h-[100vh] h-[5rem] w-[100%] md:bg-gradient-to-b from-[#FFEB36] to-[#FFFFFF] bg-[#FFEB36] md:pt-8 md:px-2 lg:p-8">
        <img src="./src/assets/Logo.svg" className='md:block md:w-[3rem]' alt="" />

        <div className='md:grid gap-5 mt-12 text-white'>
            <Link to={'/readpost'} className='flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2'> <img src="./src/assets/mdi_home-outline.svg" alt="" /> Homepage</Link>
            <Link to={'/aboutyou'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/profile-circle.svg" alt="" />Profile</Link>
            <Link to={'/createpost'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/eos-icons_cluster-management-outlined.svg" alt="" />Manage Posts</Link>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/Vector.svg" alt="" />Privacy Policy</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/map_volume-control-telephone.svg" alt="" />Help Center</button>
        </div>
        <div className='mt-[9rem]'>
          <Logout />
        </div>
      </div>
      {/* <button className="md:hidden fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white rounded-full shadow-lg">
          <img src="./src/assets/right-arrow-svgrepo-com.svg" className='w-10' alt="" />      
        </button> */}


<div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#FFEB36] to-[#FFFFFF] transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <img src="./src/assets/Logo.svg" className="w-[3rem]" alt="" />
        </div>
        <div className="grid gap-5 mt-12 mx-5 text-white">
          <Link to={'/readpost'} className="flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2">
            <img src="./src/assets/mdi_home-outline.svg" alt="" /> Homepage
          </Link>
          <Link to={'/aboutyou'} className="flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2">
            <img src="./src/assets/profile-circle.svg" alt="" /> Profile
          </Link>
          <Link to={'/createpost'} className="flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2">
            <img src="./src/assets/eos-icons_cluster-management-outlined.svg" alt="" /> Manage Posts
          </Link>
          <button className="flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2">
            <img src="./src/assets/Vector.svg" alt="" /> Privacy Policy
          </button>
          <button className="flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2">
            <img src="./src/assets/map_volume-control-telephone.svg" alt="" /> Help Center
          </button>
        </div>
        <div className="mt-[9rem] mx-5">
          <Logout />
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white rounded-full shadow-lg z-50"
      >
        <img
          src="./src/assets/right-arrow-svgrepo-com.svg"
          className={`w-10 transition-transform duration-300 ${
            isSidebarOpen ? 'rotate-180' : ''
          }`}
          alt=""
        />
      </button>


    </div>
  )
}

export default Widget
