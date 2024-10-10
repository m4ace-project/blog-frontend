import React from 'react'
import Footer2 from '../components/common/Footer2'

function Verify() {
  return (
    <div className='font-mono'>
      <div className='bg-[#FFFCD8] h-[100vh] pt-[4em]'>
        <div className='bg-white w-[70%] mx-auto rounded-[50px]'>

            <img src="./src/assets/Google.svg" className='p-10' alt="" />

            <div className='md:flex mt-10 mx-[5%] pb-[4rem]'>

                <div className='md:w-[40%] text-3xl md:mb-0 mb-8 md:ms-0 ms-10'>
                    <p>Hi Omolola,</p>
                </div>

                <div className='md:w-[60%] md:ms-[20%] ms-10'>
                    <p>To continue, first verify its you</p>
                    <form action="" className='mb-[30px]'>
                        <input type="password" name="" placeholder='password' id="" className='bg-[#EBEDED] md:w-[80%] w-[90%] h-10 pl-3 border-2 border-b-[#A8A8A8] my-4' />
                        <br />
                        <span className='flex'> <input type="checkbox" name="" className='w-5 mr-3' id="" /> <p>Show Password</p> </span>
                    </form>
                    <div className='flex'>
                        <h6 className='text-[#001F54] md:text-xl mr-5'>Forget Password?</h6>
                        <button className='bg-[#FF5722] text-white lg:w-[120px] w-[80px] h-[35px] rounded-lg'>Next</button>
                    </div>
                </div>

            </div>






        </div>
        <div className='md:w-[70%] w-[90%] mx-auto'>
            <Footer2 />
        </div>

      </div>
    </div>
  )
}

export default Verify
