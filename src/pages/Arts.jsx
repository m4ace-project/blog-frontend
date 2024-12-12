import React from 'react'
import Navbar from '../components/common/Navbar'
import Checkbox from '../components/pages/Checkbox'
import Suggest from '../components/common/Suggest'
import Subscribe from '../components/common/Subscribe'
import Footer from '../components/common/Footer'

function Arts() {
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
        <p className='text-center font-bold mt-3 text-xs md:text-base'> Arts and Crafts</p>
          <div className='flex flex-col text-[#001F54] justify-center items-center mt-5' >
          <Checkbox text={'Martha Stewart'} id={'ana'}/>
            <Checkbox text={'Bob Ross'} id={'gladys'}/>
            <Checkbox text={'Tim Holtz'} id={'hh'}/>
            <Checkbox text={'Kristina Werner'} id={'pat'}/>
            <Checkbox text={'Laura Vitale'} id={'huda'}/>
          </div>
        <Subscribe/>
      </div>
      <div className=' bg-white w-[100vw] -mb-24 mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Arts
