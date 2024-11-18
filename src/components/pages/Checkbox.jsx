import React from 'react'

<<<<<<< HEAD
function Checkbox() {
  return (
    <div>
      <ul class="text-[#3a4c6b] md:text-sm font-semibold text-xs ">
        <li class="flex mt-3"><img class="mr-2 w-2 h-2 mt-[8%] " src="./src/assets/Click  on.png" alt="" /> Checkbox</li>
        <li class="flex mt-3"><img  class="mr-2 w-2 h-2 mt-[8%] "src="./src/assets/Click  on.png" alt="" /> Checkbox</li>
        <li class="flex mt-3" ><img   class="mr-2 w-2 h-2 mt-[8%] "src="./src/assets/Click  on.png" alt="" /> Checkbox</li>
        <li class="flex mt-3" ><img  class="mr-2 w-2 h-2 mt-[8%] " src="./src/assets/Click  on.png" alt="" /> Checkbox</li>
        <li class="flex mt-3"><img  class="mr-2 w-2 h-2 mt-[8%] " src="./src/assets/Click  on.png" alt="" /> Checkbox</li>
    </ul>
    </div>
=======
function Checkbox({text, id}) {
  return (
        <div className="flex justify-between w-[70%] ">
        <label className='block text-[#3a4c6b] md:text-sm font-semibold text-xs' htmlFor={id}>{text}</label>
        <div className="">
        <input className='text-[#3a4c6b] md:text-sm font-semibold text-xs' type="checkbox" id={id} /> 
        {/* <span>Checkbox</span> */}
        </div>
        </div>
        
>>>>>>> 8160ff821976a8e7fdae9101255d5e63b6a8a7fa
  )
}

export default Checkbox
