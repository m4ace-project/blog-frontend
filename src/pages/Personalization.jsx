import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function Personalization() {
  return (
    <div>
      <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center'>
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] md:w-[60vw] w-[90vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 '>
        <p className='text-center font-bold text-2xl'>Select area of interest</p>
        <div className='flex text-[#001F54] justify-center mt-10 text-xs md:text-sm font-bold'>
          <ul className='text-center -ml-[1%]'>
            <Link to={'/travel'}  className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1' >Travel and Adventure</Link>
            <Link to={'./food'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1 ' >Food and Cooking</Link>
            <Link to={'./fitness'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1 ' >Fitness and Wellness</Link>
            <Link to={'/tech'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full py-1 ' >Tech and Gadgets</Link>
            <Link to={'/personalfinance'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1 ' >Personal Finance and Investing</Link>
          </ul>
          <div className='ml-[10%] ' >
          <ul className='text-center'>
            <Link to={'/fashion'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1' > Fashion and Beauty</Link>
            <Link to={'/homediy'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1 ' >Home Improvement and DIY</Link>
            <Link to={'/arts'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1 ' >Arts and Crafts</Link>
            <Link to={'/gaming'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-10 py-1 ' >Gaming and Esports</Link>
            <Link to={'/parenting'} className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-10 py-1 ' >Parenting and Family</Link>
          </ul>
          </div>
        </div>
        <div><button className="block mx-auto font-bold bg-[#FF5722] rounded-full mt-10 text-white px-20 py-1 text-sm">Continue</button>
        </div>
      </div>
      <div className=' bg-white w-[100vw] -mb-24 mt-10'>
        <Footer/>
      </div>
    </div>
    </div>

  )
}

export default Personalization
