import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 8160ff821976a8e7fdae9101255d5e63b6a8a7fa

function PostHeader() {
  return (
    <div>
<<<<<<< HEAD
      <div className='bg-white flex gap-[16rem] p-5 ps-9 float-end w-[65%] h-[20%]'>
        <div className='flex gap-5 items-center list-none'>
=======
      <div className='bg-white md:flex p-5 lg:px-[12%] lg:justify-between h-[5rem]'>
        <div className='hidden md:flex gap-5 items-center list-none'>
>>>>>>> 8160ff821976a8e7fdae9101255d5e63b6a8a7fa
            <li className='flex gap-2'>Services <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Articles <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Pricing <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Resources <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Contact us <img src="./src/assets/Vector2.svg" alt="" /></li>
        </div>
        
<<<<<<< HEAD
        <div className='flex w-8 gap-3'>
          <img src="./src/assets/notification.svg" alt="" />
          <img src="./src/assets/setting.svg" alt="" />
          <img src="./src/assets/profile.svg" alt="" />
        </div>
      </div>
=======
        <div className='hidden md:flex md:w-8 md:gap-3 md:ml-10'>
          <img src="./src/assets/notification.svg" alt="" />
          <img src="./src/assets/setting.svg" alt="" />
          <Link to={'/aboutyou'}><img src="./src/assets/profile.svg" alt=""/></Link>
        </div>
        <div className="md:hidden flex items-center justify-between">
          <img src="./src/assets/Logo.svg" className='w-[3rem]' alt="" />
          
          <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
            <div className="w-10 h-1 bg-gray-800"></div>
              <div className="w-10 h-1 bg-gray-800"></div>
              <div className="w-10 h-1 bg-gray-800"></div>
            </div>
          </div>
        </div>
>>>>>>> 8160ff821976a8e7fdae9101255d5e63b6a8a7fa
    </div>
  )
}

export default PostHeader
