import React from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <div>
        <div className='bg-[#FFFCD8] h-[100vh] font-mono'>
    
            <img src="./src/assets/Logo.svg" alt="M_Trend Logo" className='p-10 w-[150px]' />

            <p className='text-center font-bold text-6xl mb-5'>WELCOME BACK</p>
        
            <div className='grid w-[300px] mx-auto mb-6'>
            
                 <Link to={'/login'} className='flex justify-center items-center mt-7 border border-black h-10 rounded-full font-bold'>Continue with Email</Link>
                <Link to={'/google'} className='flex justify-center items-center my-7 border border-black h-10 rounded-full font-bold'>Continue with Google</Link>
                <Link to={'/facebook'} className='flex justify-center items-center border border-black h-10 rounded-full font-bold'>Continue with Facebook</Link>
  
            </div>
        
            <div className='flex place-content-center'>
            
                <p>Don't have an account?</p>
                <Link to={'/signin'}><p className='font-bold ps-5'>Sign up</p></Link>
            
            </div>

        </div>
    </div>
  )
}

export default Welcome
