import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setError(null);

    const url = "https://olaniyijoe.pythonanywhere.com/api/login/";



    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your login details.");
      }

      const data = await response.json();
      console.log(data);
  
      // const { access_token, role, email, id } = data;

      localStorage.setItem('token', data.access_token);

      if (data.role === "content_creator") {
        if (data.name === null) {
          navigate("/aboutyou", { state: { token: data.access_token } });
        } else {
          navigate("/createpost", { state: { token: data.access_token } });
        }; 
      } else if (data.role === "reader") {
        if (data.name === null) {
          navigate("/profileinfo", { state: { token: data.access_token } });
        } else {
          navigate("/readerdashboard", { state: { token: data.access_token } });
        }; 
      } 

    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  





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
       onChange={(e) => setEmail(e.target.value)}
       required/></div>
      <div className="mt-5">
        <input  className="block mx-auto font-bold text-sm placeholder:text-center  placeholder:text-[#001F54] border-[1px] border-[#001F54] rounded-full bg-transparent pb-2 pt-1 px-5 "
       type="password" placeholder="password" value={password}
       onChange={(e) => setPassword(e.target.value)}
       required/>
      </div>
    <div className="text-xs flex mt-5 justify-center ">
    <input type="checkbox" id="terms" className="ml-10" />
      <p className="">Remember password?</p>
      <p className="ml-5">forgot password?</p>
    </div>
    <div className='flex  justify-center items-center  '>
    <button
       type="submit" className="w-[20vw] font-bold bg-[#FF5722] flex justify-center items-center rounded-full mt-5 text-white px-20 py-1 text-sm" disabled={loading}>
       {loading ? "Loading..." : "Continue"}
    </button>
    </div>
    </form>
    {error && <p className="text-red-500 text-center mt-3">{error}</p>}
  </div> 
    </div>
  )
}

export default Login
