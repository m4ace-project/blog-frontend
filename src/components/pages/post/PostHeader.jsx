import React from 'react'

function PostHeader() {
  return (
    <div>
      <div className='bg-white md:flex p-5 lg:px-[12%] lg:justify-between h-[5rem]'>
        <div className='hidden md:flex gap-5 items-center list-none'>
            <li className='flex gap-2'>Services <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Articles <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Pricing <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Resources <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Contact us <img src="./src/assets/Vector2.svg" alt="" /></li>
        </div>
        
        <div className='hidden md:flex md:w-8 md:gap-3 md:ml-10'>
          <img src="./src/assets/notification.svg" alt="" />
          <img src="./src/assets/setting.svg" alt="" />
          <img src="./src/assets/profile.svg" alt="" />
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
    </div>
  )
}

export default PostHeader
