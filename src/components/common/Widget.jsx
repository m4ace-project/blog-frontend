import React from 'react'

function Widget() {
  return (
    <div>
      <div className='h-[100vh] w-[33%] bg-gradient-to-b from-[#FFEB36] to-[#FFFFFF] p-8'>
        <img src="./src/assets/Logo.svg" className='w-[3rem]' alt="" />

        <div className='grid gap-5 mt-12 text-white'>
            <button className='flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2'> <img src="./src/assets/mdi_home-outline.svg" alt="" /> Homepage</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/profile-circle.svg" alt="" />Profile</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/eos-icons_cluster-management-outlined.svg" alt="" />Manage Posts</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/Vector.svg" alt="" />Privacy Policy</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/map_volume-control-telephone.svg" alt="" />Help Center</button>
        </div>

        <p className='flex gap-2 justify-center mt-[10rem]'><img src="./src/assets/hugeicons_logout-04.svg" alt="" /> Login </p>

      </div>
    </div>
  )
}

export default Widget
