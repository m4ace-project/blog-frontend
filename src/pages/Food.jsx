import React from 'react'

function Food() {
  return (
    <div>
      <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center '>
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] w-[60vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400'>
        <div className='text-center'>
        <Suggest/>
        </div>
        <p className='text-center font-bold mt-3 text-xs md:text-base'>Food and Cooking</p>
        <div className='flex text-[#001F54] justify-center items-center mt-5'>
          <ul className=' text-xs md:text-sm font-semibold'>
            <li className='mt-3 ' >Gordon Ramsay</li>
            <li className='mt-3 '>Julia Child</li>
            <li className='mt-3 '>Ina Garten</li>
            <li className='mt-3 '>Nigella Lawson</li>
            <li className='mt-3 '>Jamie Oliver</li>
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
    </div>
  )
}

export default Food
