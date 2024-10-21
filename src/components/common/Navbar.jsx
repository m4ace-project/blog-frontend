import React from 'react'

function Navbar() {
  return (
    <div  class="flex text-[#001F54] ">
        <div>
            <img class="w-11 mt-2 ml-2" src="./Assets/Frame 199.png" alt="" />
        </div>
        <ul class=" hidden bg-white md:flex  md:mx-auto  space-x-5 md:space-x-10 pl-4 text-xs py-5 md:text-sm font-bold lg:">
            <li class="flex text-[13px] "> Services <img class="h-[0.8em] w-[0.5em] mt-[0.6em] ml-1" src="./Assets/Vector.png" alt="" /></li>
            <li class="flex text-[13px]"> Articles <img class="h-[0.8em] w-[0.5em] mt-[0.6em] ml-1" src="./Assets/Vector.png" alt=""/></li>
            <li class="flex text-[13px]"> Pricing <img class="h-[0.8em] w-[0.5em] mt-[0.6em] ml-1" src="./Assets/Vector.png" alt="" /></li>
            <li class="flex text-[13px]"> Resources <img class="h-[0.8em] w-[0.5em] mt-[0.6em] ml-1" src="./Assets/Vector.png" alt="" /></li>
            <li class="flex text-[13px]"> Contact us<img class="h-[0.8em] w-[0.5em] mt-[0.6em] ml-1" src="./Assets/Vector.png" alt="" /> </li>  
        </ul>
        <img class=" md:hidden mt-6 h-4 ml-[14em]" src="./Assets/burger.png" alt="" />
        <div class="flex border-[1px] ml-3 md:relative right-14 border-[#001F54] rounded-full mt-5 w-[10em] h-7">
            <img class=" ml-1 mt-2 w-3 h-3" src="./Assets/search-normal.png" alt=""/>
            <input class=" text-[#6a7fa4] w-[3em] text-xs ml-1 " value="Search" type="text" />
        </div>
</div>
  )
}

export default Navbar
