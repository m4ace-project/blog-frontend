import React, { useState } from 'react';
import Frame199 from '../assets/Frame 199.png';
import MailIcon from '../assets/mail.png';

function Inbox() {
    const [otp, setOtp]  = useState("6776".split(""));
    const [loading, setLoading] = useState(false);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== "" && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const verifyEmail = async () => {
        if (otp.some((digit) => digit === "") || otp.length !== 4) {
            alert("Please enter a valid 4-digit OTP.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('https://olaniyi.pythonanywhere.com/api/verify-email/', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ otp: otp.join("") }) 
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "Verification failed. Please try again.");
                return;
            }

            const data = await response.json();
            alert("Email verification successful!");
        } catch (error) {
            console.error('Verification error:', error);
            alert("An error occurred during verification.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#FFFCD8] min-h-screen">
            <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
          
            <div className="text-center justify-center mt-20 max-w-md mx-auto px-8 sm:px-6 md:px-8">
                <img src={MailIcon} alt="Mail Icon" className="mx-auto h-12 w-12 mb-3" />

                <h2 className="text-4xl font-medium text-[#000000] mt-2">Check your inbox</h2>
                
                <div className="flex justify-center space-x-2 mt-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="w-10 h-12 text-center text-xl text-[#FFFFFF] bg-[#FF5722]"
                        />
                    ))}
                </div>

                <p className="text-[#000000] font-regular test-lg">Wrong e-mail</p>
                
                <button
                    className={`bg-[#FF5722] hover:bg-[#ff3b00] text-[#FFFFFF] text-sm mt-2 py-3 px-12 rounded-[10px] font-inter font-semibold ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={verifyEmail}
                    disabled={loading}>
                    {loading ? "Loading..." : "Change"}
                </button>
            </div>
        </div>
    );
}

export default Inbox;
