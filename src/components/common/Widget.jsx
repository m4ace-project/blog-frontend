import React from 'react'
import { Link } from 'react-router-dom'

function Widget() {
  return (
    <div>
      <div className='hidden md:block md:h-[100vh] h-[5rem] w-[100%] md:bg-gradient-to-b from-[#FFEB36] to-[#FFFFFF] bg-[#FFEB36] md:pt-8 md:px-2 lg:p-8'>
        <img src="./src/assets/Logo.svg" className='md:block md:w-[3rem]' alt="" />

        <div className='md:grid gap-5 mt-12 text-white'>
            <Link to={'/readpost'} className='flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2'> <img src="./src/assets/mdi_home-outline.svg" alt="" /> Homepage</Link>
            <Link to={'/aboutyou'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/profile-circle.svg" alt="" />Profile</Link>
            <Link to={'/createpost'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/eos-icons_cluster-management-outlined.svg" alt="" />Manage Posts</Link>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/Vector.svg" alt="" />Privacy Policy</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/map_volume-control-telephone.svg" alt="" />Help Center</button>
        </div>
        
        <p className='hidden md:flex gap-2 justify-center mt-[10rem]'><img src="./src/assets/hugeicons_logout-04.svg" alt="" /> Login </p>

      </div>
      <button className="md:hidden fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white rounded-full shadow-lg">
          <img src="./src/assets/right-arrow-svgrepo-com.svg" className='w-10' alt="" />      
        </button>
    </div>
  )
}

export default Widget
