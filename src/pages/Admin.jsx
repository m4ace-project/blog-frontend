import React from 'react';
import Frame199 from '../assets/Frame 199.png'; 

function Admin() {
    return (
        <div className="bg-[#FFFCD8] min-h-screen">
              <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
            <div className="w-full max-w-md mx-auto p-6 rounded-md mt-12 items-center justify-center">
              <h1 className="text-4xl font-semibold font-inter text-center text-[#001F54] mb-6">Admin</h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm"></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-[#001F54] font-semibold rounded-full bg-transparent placeholder:text-center placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm text-[#001F54]"></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="w-full px-4 py-2 border border-[#001F54] font-semibold rounded-full bg-transparent placeholder:text-center placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]" />
                    </div>
                   
                    <div className="w-full inline-block py-3 mt-3 mb-1 text-center bg-[#FF5722] hover:bg-[#ff3b00] text-[#001F54] rounded-full font-semibold font-inter text-lg">
                        Continue
                       
                    
                    </div>
                    <div className="flex place-content-center">
                    <p>Do you have an Account? </p>
                    <p className="className='font-bold  font-inter text-xl text-[#001F54] ps-5 ml-10">Create</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;
