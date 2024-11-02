import React from 'react'

function PostHeader() {
  return (
    <div>
      <div className='bg-white flex gap-[16rem] p-5 ps-9 float-end w-[65%] h-[20%]'>
        <div className='flex gap-5 items-center list-none'>
            <li className='flex gap-2'>Services <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Articles <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Pricing <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Resources <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Contact us <img src="./src/assets/Vector2.svg" alt="" /></li>
        </div>
        
        <div className='flex w-8 gap-3'>
          <img src="./src/assets/notification.svg" alt="" />
          <img src="./src/assets/setting.svg" alt="" />
          <img src="./src/assets/profile.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PostHeader
