import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Frame199 from '../assets/Frame 199.png';
import MailIcon from '../assets/mail.png';

function Inbox() {

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();




    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const otpCode = otp.join(""); 

        try {
            const response = await axios.post("https://olaniyi.pythonanywhere.com/api/verify-email/", {
                otp: otpCode,
            });

            if (response.status === 200) {
                setMessage("Verification successful!");
                setTimeout(() => navigate("/login"), 1500); 
            }
        } catch (error) {
            setMessage("Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };





    return (
        <div className="bg-[#FFFCD8] min-h-screen">
            <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
          
            <div className="text-center justify-center mt-20 max-w-md mx-auto px-8 sm:px-6 md:px-8">
                <img src={MailIcon} alt="Mail Icon" className="mx-auto h-12 w-12 mb-5" />

                <h2 className="text-4xl font-medium text-[#000000] mb-[5rem]">Check your inbox</h2>
                
                <form onSubmit={handleSubmit} className="justify-center space-x-2 mb-10">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}                 className="w-10 h-10 rounded-lg text-center text-xl text-[#FFFFFF] bg-[#FF5722]"
                        />
                    ))}
                        <br />
                    <button
                        type="submit"
                        className="bg-[#FF5722] hover:bg-[#ff3b00] text-[#FFFFFF] text-sm mt-6 py-3 px-12 rounded-[10px] font-inter font-semibold"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </form>
                {message && <p className="text-[#FF5722] font-medium">{message}</p>}

                <div className='flex justify-center'>
                <p className="text-[#000000] font-regular text-lg mr-5">Wrong e-mail?</p>
                
                <Link to="/signup" className="over:bg-[#ff3b00] text-[#00000] text-lg   rounded-[10px] font-inter font-semibold">Change Email</Link>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
