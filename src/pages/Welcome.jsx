import React from 'react'

function Welcome() {
  return (
    <div>
        <div className='bg-[#FFFCD8] h-[100vh] font-mono'>
    
            <img src="./src/assets/Logo.svg" alt="M_Trend Logo" className='p-10 w-[150px]' />

            <p className='text-center font-bold text-6xl mb-5'>WELCOME BACK</p>
        
            <div className='grid w-[300px] mx-auto mb-6'>
            
                <button className='border border-black h-10 rounded-full font-bold'>Continue with Email</button>
                <button className='my-7 border border-black h-10 rounded-full font-bold'>Continue with Google</button>
                <button className='border border-black h-10 rounded-full font-bold'>Continue with Facebook</button>
            
            </div>
        
            <div className='flex place-content-center'>
            
                <p>Don't have an account?</p>
                <p className='font-bold ps-5'>Sign up</p>
            
            </div>

        </div>
    </div>
  )
}

export default Welcome
