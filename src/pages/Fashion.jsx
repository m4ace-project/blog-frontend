import React from 'react'
import Navbar from '../components/common/Navbar'
import Checkbox from '../components/pages/Checkbox'
import Suggest from '../components/common/Suggest'
import Subscribe from '../components/common/Subscribe'
import Footer from '../components/common/Footer'

function Fashion() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center '>
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] w-[60vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400'>
        <div className='text-center'>
        <Suggest/>
        </div>
        <p className='text-center font-bold mt-3 text-xs md:text-base'>Fashion and Beauty</p>
        <div className='flex text-[#001F54] justify-center items-center mt-5'>
          <ul className=' text-xs md:text-sm font-semibold'>
            <li className='mt-3 ' >Anna Wintour</li>
            <li className='mt-3 '>Chiara Ferragni</li>
            <li className='mt-3 '>Zoella (Zoe Sugg)</li>
            <li className='mt-3 '>Pat McGrath</li>
            <li className='mt-3 '>Huda Kattan</li>
          </ul>
          <div className='ml-[20%] ' >
            <Checkbox/>
          </div>
        </div>
        <Subscribe/>
      </div>
      <div className=' bg-white w-[100vw] -mb-24 mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Fashion
