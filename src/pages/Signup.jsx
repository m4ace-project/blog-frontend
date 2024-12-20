import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Frame199 from '../assets/Frame 199.png';
import GoogleIcon from '../assets/google.png';
import FacebookIcon from '../assets/facebook.png';
import {baseUrl} from '../utils/url'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function SignUp() {
    // const [data, setData] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cursor, setCursor] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [alert, setAlert] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const url = `https://m4aceblog.onrender.com/register`
    const navigate = useNavigate();
    let { state } = useLocation();
    
    if (email != '' && password != ''){
        () => setCursor(false)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsLoading(true)

        axios.post("https://olaniyijoe.pythonanywhere.com/api/register/",
            {
                email: email,
                password: password,
                password2: password,
                role: state.role
            })
          .then(function (response) {
            console.log(response);
                       
            // setShowAlert(true)
            // toast.error(response.data.email[0]);
            navigate("/inbox");
          })
          .catch(function (error) {
            console.log(error);
            toast.error(error);
            setIsLoading(false)
          }).finally(()=>{
            setIsLoading(false)
          });
        
    }

    useEffect(()=>{
        setTimeout(() => {
            setShowAlert(false)
        }, 6000);
    }, [showAlert])
    return (
        <div className="bg-[#FFFCD8] min-h-screen">
            <ToastContainer/>
            <Link to='/'>
              <img src={Frame199} alt="logo" className="h-12 w-auto pt-2 ml-3" />
            </Link>
            <div className="w-full max-w-md mx-auto p-6 rounded-md mt-7 items-center justify-center">
                {
                    showAlert && <h1 className='left-1 bg-red-400 p-2 text-white'>{alert}</h1>
                }
              <h1 className="text-4xl font-semibold font-inter text-center text-[#001F54] mb-6">Sign Up</h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm"></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-center placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm text-[#001F54]"></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-center placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]" />
                        <p className="text-[#001F54] text-xs mt-1 ml-1">About 10 characters</p>
                    </div>
                    <div className="flex items-center text-[#001F54] text-sm">
                        <label htmlFor="terms" className="mr-10 ml-7">
                            I agree to terms and condition
                        </label>
                        <input type="checkbox" id="terms" className="ml-10" />
                    </div>
                    <div className=" ">
                    <button 
                        onClick={handleSubmit}
                        className="w-full inline-block py-3 text-center bg-[#FF5722] hover:bg-[#ff3b00] text-[#FFFFFF] rounded-full font-semibold font-inter text-lg">
                        {isLoading ? "loading..." : "Continue" }
                        </button>
                    
                    </div>
                    <div className="flex items-center justify-center mt-4 space-x-4 text-[#001F54]">
                        <div className="text-center text-sm md:text-base font-medium">Sign up with</div>

                        <div className="flex space-x-1">
                        <Link 
                         to="/google" 
                     className="w-10 h-10 flex items-center justify-center rounded-full">
                        <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
                                </Link>
                            <Link 
                                to="/facebook" 
                               className="w-10 h-10 flex items-center justify-center rounded-full">
                                <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
