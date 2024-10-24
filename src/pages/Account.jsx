import React from 'react'

function Account() {
  return (
    <div>
      <div className="bg-[#FFFCD8] h-[100vh] flex flex-col justify-center items-center">
    <div className="bg-white h-[80vh] w-[80vw] flex flex-col justify-center rounded-xl
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400">
    <div>
        <img className=" w-10 pt-3 pl-3" src="./src/assets/google.png" alt=""/>.
    </div>
    <div className=" md:flex md:justify-between md:mt-24">
        <p  className="text-[#001F54] text-center md:ml-10 lg:ml-20"> <span className="text-3xl lg:text-5xl lg:"> Choose an account</span> <br/> 
            <span>to Continue to M4ace.com</span>
        </p>
        <div>
            <input className=" block mx-auto mt-20 md:mt-3 md:mr-5 lg:mr-28 border-b-[1.5px] border-x-2 shadow-md lg:px-10
             border-b-gray-500 px-6 py-2" 
            type="email" placeholder="E-mail Address"/> <br/>
            <button className=" block mx-auto mt-10 md:ml-[6.5em] lg:ml-[8em] bg-[#FF5722]
             text-white md:mt-8 px-12 py-1 rounded-md">Next</button>
        </div>
    </div>
    </div>
    <footer>
        <div className="text-xs flex mt-10 lg:justify-center ">
            <p className="ml-7 md:ml-24 lg:-ml-2">English (United States)</p>
          <div className="ml-[16em] md:ml-[35em] lg:ml-[55em] flex space-x-5">
            <p >Help</p>
            <p>Privacy</p>
            <p>Terms</p>
         </div>
        </div>
    </footer> 
</div>
    </div>
  )
}

export default Account
