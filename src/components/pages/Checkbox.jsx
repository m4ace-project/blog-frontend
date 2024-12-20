import React from 'react'

function Checkbox({text, id}) {
  return (
        <div className="flex justify-between w-[70%] ">
        <label className='block text-[#001F54] md:text-sm font-semibold text-xs' htmlFor={id}>{text}</label>
        <div className="">
        <input className='text-[#001F54] md:text-sm font-semibold text-xs' type="checkbox" id={id} /> 
        {/* <span>Checkbox</span> */}
        </div>
        </div>
        
  )
}

export default Checkbox
