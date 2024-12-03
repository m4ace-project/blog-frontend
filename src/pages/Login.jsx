import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const userLogin = async (title, body) => {
    await fetch(' https://m4aceblog.onrender.com/api/login/', {
       method: 'POST',
       body: JSON.stringify({
          email: email,
          password: password,
          userId: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((response) => response.json())
       .then((data) => {
          setLogin((login) => [data, ...login]);
          setEmail('');
          setPassword('');
       })
       .catch((err) => {
          console.log(err.message);
       });
 };
 
 const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
 };    



  return (
    <div className="bg-[#FFFCD8] h-[100vh]">
  <div>
    <img className="w-11 pt-2 ml-2" src="./src/assets/Frame 199.png" alt="" />
  </div>
  <div className=" text-[#001F54] mt-24  ">
    <p className="font-bold text-3xl text-center" >Login</p>
    <form onSubmit={handleSubmit}>
    <div className="mt-5 ">
      <input className="block mx-auto font-bold text-sm placeholder:text-center placeholder:text-[#001F54] 
      border-[1px] border-[#001F54] rounded-full bg-transparent pb-2 pt-1 px-5 "
       type="email" placeholder="Email" value={email}
       onChange={(e) => setEmail(e.target.value)}/></div>
      <div className="mt-5">
        <input  className="block mx-auto font-bold text-sm placeholder:text-center  placeholder:text-[#001F54] border-[1px] border-[#001F54] rounded-full bg-transparent pb-2 pt-1 px-5 "
       type="password" placeholder="password" value={password}
       onChange={(e) => setPassword(e.target.value)}/>
      </div>
    <div className="text-xs flex mt-5 justify-center ">
    <input type="checkbox" id="terms" className="ml-10" />
      <p className="">Remember password?</p>
      <p className="ml-5">forgot password?</p>
    </div>
    <div className='flex  justify-center items-center  '>
    <Link  to={'/personalization'} className="w-[20vw] font-bold bg-[#FF5722] flex justify-center items-center  rounded-full mt-5 text-white px-20 py-1 text-sm">Continue</Link>
    </div>
    </form>
  </div> 
    </div>
  )
}

export default Login
