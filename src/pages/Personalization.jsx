import React from 'react'
<<<<<<< HEAD
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
=======
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'

>>>>>>> 8160ff821976a8e7fdae9101255d5e63b6a8a7fa

function Personalization() {
  return (
    <div>
      <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center'>
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] md:w-[60vw] w-[90vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 px-5'>
        <p className='text-center font-bold text-2xl'>Select area of interest</p>
        <div className=' mx-[10%] md:flex  text-[#001F54] justify-center mt-10 text-xs md:text-sm font-bold'>
          <ul className='text-center'>
            <li className=' bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1' ><Link to={'/travel'}  >Travel and Adventure</Link></li>
            <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1'><Link to={'/food'}  >Food and Cooking</Link></li>
            <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full px-3 py-1'><Link to={'/fitness'}  >Fitness and Wellness</Link></li>
            <li className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full py-1'><Link to={'/tech'} >Tech and Gadgets</Link></li>
            <li className='mt-3 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full py-1 md:px-1'><Link to={'/personalfinance'} className='' >Personal Finance and Investing</Link></li>
          </ul>
          <ul className='text-center lg:ml-[20%]'>
          <li className=' mt-3 md:mt-0 bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1'><Link to={'/fashion'}  > Fashion and Beauty</Link></li>
          <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1 md:px-1'><Link to={'/homediy'}  >Home Improvement and DIY</Link></li>
          <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1'><Link to={'/arts'} >Arts and Crafts</Link></li>
          <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1'><Link to={'/games'}  >Gaming and Esports</Link></li>
          <li className='mt-3  bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1'><Link to={'/parenting'}  >Parenting and Family</Link></li>
          </ul>
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
