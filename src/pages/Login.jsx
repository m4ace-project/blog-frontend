import React from 'react'

function Login() {
  return (
    <div className="bg-[#FFFCD8] h-[100vh]">
  <div>
    <img className="w-11 pt-2 ml-2" src="./src/assets/Frame 199.png" alt="" />
  </div>
  <div className=" text-[#001F54] mt-24  ">
    <p className="font-bold text-3xl text-center" >Login</p>
    <div className="mt-5 "><input className="block mx-auto font-bold text-sm placeholder:text-center placeholder:text-[#001F54] 
      border-[1px] border-[#001F54] rounded-full bg-transparent pb-2 pt-1 px-5"
       type="email" placeholder="Email" /></div>
    <div className="mt-5"><input  className="block mx-auto font-bold text-sm placeholder:text-center  placeholder:text-[#001F54]
       border-[1px] border-[#001F54] rounded-full bg-transparent pb-2 pt-1 px-5 "
       type="password" placeholder="password" />
    </div>
    <div className="text-xs flex mt-5 justify-center ">
      <img className="w-2 h-2 mr-1 relative top-1" src="./Assets/Click  on.png" alt="" />
      <p className="">Remember password?</p>
      <p className="ml-5">forgot password?</p>
    </div>
    <div><button className="block mx-auto font-bold bg-[#FF5722] rounded-full mt-5 text-white px-20 py-1 text-sm">Continue</button>
    </div>
  </div> 
    </div>
  )
}

export default Login
