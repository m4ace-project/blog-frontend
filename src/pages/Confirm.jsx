import React from 'react'
import { Link } from 'react-router-dom'

function Confirm() {
  return (
    <div className='font-mono'>
        <div className="bg-[#FFFCD8] font-mono px-[8%] lg:px-[15%] md:pt-[4.3rem] pt-[5rem] h-[100vh]">

            <div className="bg-gradient-to-l from-[#E4F5F4] to-white pt-5 px-5 md:px-14 rounded-[40px] h-[32rem] md:h-[30rem] border-r-[0.5rem] border-b-[0.5rem]">
                <Link to={'/facebook'}><p className='text-right text-2xl md:text-4xl'>X</p> </Link>
                <h3 className='text-[1.7rem] font-bold md:text-[2rem] mt-1 md:my-[2rem]'>Choose a way to confirm that its you</h3>
                <div className='bg-white rounded-t-3xl ps-4 md:px-6 py-3 my-3 border-b-4 flex justify-between'>
                    <div>
                        <h5 className='font-bold'>Notification on another device</h5>
                        <p>Approve the login from another device</p>
                    </div>
                    <p className='text-lg pt-3 pr-5 hidden md:flex'>O</p>
                </div>
                <div className='bg-white rounded-b-3xl ps-4 md:px-6 py-2 my-6 p-4 flex justify-between'>
                    <div>
                        <h5 className='font-bold'>Whatsapp</h5>
                        <p>We'll send a code to +234********81</p>
                    </div>
                    <p className='text-lg pt-3 pr-5 hidden md:flex'>O</p>
                </div>
                <div className='flex justify-center'>
                    <Link to={'/check'} className='bg-red-500 text-white p-10 py-2 rounded-full'>Continue</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirm
