import React from 'react';
import Frame199 from '../assets/Frame 199.png'; 
import MailIcon from '../assets/mail.png'; 

function Inbox() {
    return (
        <div className="bg-[#FFFCD8] min-h-screen">
            <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
          
            <div className="text-center justify-center mt-20 max-w-md mx-auto px-8 sm:px-6 md:px-8">
                
                <img src={MailIcon} alt="Mail Icon" className="mx-auto h-12 w-12 mb-3 " />

                <h2 className="text-4xl  font-medium text-[#000000] mt-2 ">Check your inbox</h2>

                <p className="text-[#000000]  test-lg font-regular">
                    We've emailed you a sign-in link
                </p>
                <p className="text-[#000000] font-regular test-lg ">Wrong e-mail</p>
                
                <button className="bg-[#FF5722] hover:bg-[#ff3b00] text-[#FFFFFF]  text-sm mt-2 py-3 px-12 rounded-[10px]  font-inter font-semibold">
                    Change
                </button>
            </div>
        </div>
    );
}

export default Inbox;
