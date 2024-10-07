import React from 'react'

function Google() {
  return (
    <>

    <div className="bg-[#FFFCD8] font-mono px-[8%] py-[70px] lg:px-[15%] lg:py-[7.15%]">

        <div className="bg-white rounded-[40px] md:h-[400px]">

            <div>
                <div className='inline-flex px-10 py-5 mb-5 border-black border-b-4 w-[100%]'>
                    <img src="./src/assets/google.svg" className='w-[30px] mr-5' alt="Google logo"/>
                    <h5 className='text-xl'>Sign in with Google</h5>
                </div>
                
                <div className='w-[100%] md:inline-flex pl-[7%] pe-[5%] pt-[45px] pb-[100px]'>
                        
                    <div className='lg:pr-[5%]'>
                        <h2 className='text-4xl'>Choose an account</h2>
                        <p>to continue to M Trends</p>
                    </div>
                    
                    <div className='md:w-[50%] pt-14 md:pt-0'>
                        <div>
                            <div className='inline-flex  border-black border-b-2 pb-4 w-[100%]'>
                                <h1 className='bg-[#001F54] rounded-full ps-[15px] pt-[4px] w-[50px] h-[50px] text-white text-4xl  mr-5'>O</h1>
                                <div>
                                        <h3 className='text-xl'>Omolola Adesanya</h3>
                                        <p>omololaadesanya@gmail.com</p>
                                </div>
                            </div>
    
                            <div className='inline-flex  border-black border-b-2 w-[100%] pb- mb-4'>
                                <img src="./src/assets/dp.png" alt=""/>
                                <h3 className='text-xl ms-7 pt-5'>Use another account</h3>    
                            </div>
                            <p className='pe-5 mb-5'>Before using this app, can review M4Ace.com’s
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

        <div className='grid grid-cols-2 mt-8 md:ms-10'>
            <p className=''>English (United States) </p>
            <div className='inline-flex gap-5 ps-[30%] md:ps-[45%]'>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>

    </div>

    </>
  )
}

export default Google
