import React from 'react'
import Footer2 from '../components/common/Footer2'

function Google() {
  return (
    <>

    <div className="bg-[#FFFCD8] font-mono px-[8%] lg:px-[15%] md:pt-[7.15%] pt-[60px] h-[100vh]">

        <div className="bg-white rounded-[40px] md:h-[400px] h-[450px]">

            <div>
                <div className='inline-flex px-10 py-5 mb-5 border-black md:border-b-4 border-b-2 w-[100%]'>
                    <img src="./src/assets/google.svg" className='w-[30px] mr-5' alt="Google logo"/>
                    <h5 className='text-xl'>Sign in with Google</h5>
                </div>
                
                <div className='w-[100%] md:inline-flex pl-[7%] pe-[5%] md:pt-[45px] pt-2 pb-[100px]'>
                        
                    <div className='lg:pr-[5%]'>
                        <h2 className='md:text-4xl text-3xl'>Choose an account</h2>
                        <p>to continue to M Trends</p>
                    </div>
                    
                    <div className='md:w-[50%] md:pt-0 pt-10'>
                        <div>
                            <div className='inline-flex  border-black border-b pb-2 w-[100%]'>
                                <h1 className='bg-[#001F54] rounded-full ps-[15px] pt-[4px] w-[50px] h-[50px] text-white text-4xl  mr-5'>O</h1>
                                <div>
                                        <h3 className='text-xl'>Omolola Adesanya</h3>
                                        <p>omololaadesanya@gmail.com</p>
                                </div>
                            </div>
    
                            <div className='inline-flex  border-black border-b w-[100%] mb-4'>
                                <img src="./src/assets/dp.png" alt=""/>
                                <h3 className='text-xl ms-7 pt-5'>Use another account</h3>    
                            </div>
                            <p className='pe-5 mb-5'>Before using this app, you can review M4Ace.com’s
                            privacy policy and terms of service.</p>
                        </div>
                    </div>
                        
                </div>
                
            </div>
            
            
            <div>
            
                <div>
                
                </div>
                        
                <div>
                
                </div>
                
            </div>

        </div>
        <div>
            <Footer2 />
        </div>



    </div>

    </>
  )
}

export default Google
