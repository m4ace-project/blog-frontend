import React from 'react'
import { Link } from 'react-router-dom'

function Find() {
  return (
    <div className="bg-[#FFFCD8] h-[100vh] flex flex-col justify-center">
    <div>
        <img className="w-11  ml-2 " src="./src/assets/Frame 199.png" alt="" />
    </div> 
    <div className="bg-white h-[80vh] w-[80vw] flex flex-col justify-center mx-auto rounded-xl 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400">
        <div >
            <p className="text-[#001F54] ml-5 pt-10 md:pt-36 md:ml-28 lg:ml-[15em]"><span className="text-3xl font-semibold ">Find Your Account</span>
                <br /><span className="text-sm">Please enter your email address 
                or mobile number to search for your email</span></p>
            <input className="bg-[#e9e9e9] text-xs md:text-sm  placeholder:text-[#5B575E] font-semibold block mx-auto mt-20 md:mt-3
             md:ml-28 lg:ml-[17em] lg:mr-28 border-b-[1.5px] border-x-2 shadow-md lg:px-10
            border-b-gray-400 px-2 py-2  w-[20em] md:w-[25em]"  type="email" placeholder="Email address or phone number" />
        </div>
        <div className="md:flex text-sm  md:pt-16 "><Link to={'/login'} className=" block mx-auto mt-10 md:ml-[28em]
             md:-mr-20 lg:ml-[40em] bg-[#FF5722]
            text-white md:mt-8 px-12 py-1 rounded-md">Cancel</Link>
            <button className=" block mx-auto mt-10 md:ml-24 bg-[#FF5722]
            text-white md:mt-8  px-12 py-1  rounded-md">Search</button>
        </div>
    </div>
    </div>
  )
}

export default Find
