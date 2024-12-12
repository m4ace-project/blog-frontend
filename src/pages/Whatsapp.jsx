import React from 'react'

function Whatsapp() {
  return (
    <div>
       <div class="text-end text-[#20488e] mt-3 pr-3">
        Omolola Adesanya Facebook
    </div>
    <div>
        <p class="text-[#001F54] mt-10 ml-10"><span class="text-2xl md:text-3xl">Check your whatsapp for a code</span> 
            <br/><span class="text-sm">Lorem, ipsum dolor.</span></p> 
        <div class="mt-10 md:mt-[8em]">
            <input class=" block mx-auto  mt-20 md:mt-3 
             border-b-[1.5px] border-x-2 shadow-md lg:px-1
            border-b-gray-400 px-2 w-[20em] md:w-[25em] py-2 text-sm" type="code" placeholder="Input code"/>
            <button class=" block mx-auto mt-16 md:ml-[45em] lg:ml-[65em] bg-[#FF5722]
            text-white md:mt-8 px-12 py-1 rounded-md text-sm">Next</button>
        </div>
        <div class="flex ml-5 mt-[6em] md:mt-[5em]">
            <img  class="w-[15px] h-[15px] mt-3 mr-5" src="./src/assets/mynaui_dots-circle.png" alt="" />
            <p class="text-[#001F54] text-sm"><span>Waiting for approval</span><br />
                <span class="text-xs">Lorem ipsum dolor sit amet consectetur.</span> </p>
        </div>
    </div>
    </div>
  )
}

export default Whatsapp
