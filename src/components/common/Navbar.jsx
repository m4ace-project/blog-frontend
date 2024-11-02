import React from 'react'

function Navbar() {
  return (
    <div  className="flex text-[#001F54] ">
        <div>
            <img className="w-11 mt-2 ml-2" src="./src/assets/Frame 199.png" alt="" />
        </div>
        <ul className=" hidden bg-white md:flex  md:mx-auto  space-x-5 md:space-x-10 pl-4 text-xs py-5 md:text-sm font-bold lg:">
            <li className="flex text-[13px] "> Services <img className="h-[0.7em] w-[0.6em] mt-[0.6em] ml-1" src="./src/assets/Vector.png" alt="" /></li>
            <li className="flex text-[13px]"> Articles <img className="h-[0.7em] w-[0.6em] mt-[0.6em] ml-1" src="./src/assets/Vector.png" alt=""/></li>
            <li className="flex text-[13px]"> Pricing <img className="h-[0.7em] w-[0.6em] mt-[0.6em] ml-1" src="./src/assets/Vector.png" alt="" /></li>
            <li className="flex text-[13px]"> Resources <img className="h-[0.7em] w-[0.6em] mt-[0.6em] ml-1" src="./src/assets/Vector.png" alt="" /></li>
            <li className="flex text-[13px]"> Contact us<img className="h-[0.7em] w-[0.6em] mt-[0.6em] ml-1" src="./src/assets/Vector.png" alt="" /> </li>  
        </ul>
        <img className=" md:hidden mt-3 h-4 ml-[14em]" src="./src/assets/burger.png" alt="" />
        <div className="flex border-[1px] ml-3 md:relative right-[5%] border-[#001F54] rounded-full mt-[1.2%]  w-[10em] h-7">
            <img className=" ml-1 mt-2 w-3 h-3" src="./src/assets/search-normal.png" alt=""/>
            <input className=" text-[#6a7fa4] w-[3em] text-xs ml-1 " value="Search" type="text" />
        </div>
</div>
  )
}

export default Navbar
