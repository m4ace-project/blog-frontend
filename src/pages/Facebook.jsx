import React from 'react'
import CreateAccount from '../components/pages/Facebook_login/CreateAccount';

function Facebook() {
  return (
    <div>
        <div  className='font-mono bg-[#FFFCD8] h-[100vh]'>

            <div className='inline-flex bg-[#3B5998] text-white p-[20px] w-[100%]'>
            
                <h3 className='md:text-6xl text-3xl pl-14 pr-5'>facebook</h3>
                <div className='md:pt-4 pt-1'>
                    <CreateAccount />
                </div>
            </div>

            <div className='bg-white mx-auto md:w-[70%] w-[80%] mt-[50px] rounded-[30px]'>

                <div className='pt-[40px]'>

                    <h5 className='md:text-3xl text-2xl text-center'>Login to facebook</h5>
                    
                    <form className='lg:mx-[25%] lg:w-[80%] md:mx-[20%] mx-[10%] w-[100%]'>

                        <input type="text" name="" placeholder='Email address or phone number' id="" className='bg-[#EBEDED] w-[80%] md:w-[62%] h-10 pl-5 border-2 border-b-[#A8A8A8] my-5' />
                        <br/>
                        <input type="password" name="" placeholder='password' id="" className='bg-[#EBEDED] w-[80%] md:w-[62%] h-10 pl-5 border-2 border-b-[#A8A8A8]' />
                        <br/>
                        <button className='bg-[#3B5998] w-[80%] md:w-[62%] h-10 my-5 text-white'>Login</button>
                    
                    </form>

                    <div className='text-center pb-10'>
                    
                        <p>Forget password?</p>
                        
                        <p className='py-3'>or</p>

                        <CreateAccount />

                    </div>

                </div>

            </div>

        </div>




    </div>
  )
}

export default Facebook
