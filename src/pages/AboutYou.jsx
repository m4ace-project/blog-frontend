import React from 'react'

function AboutYou() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh]'>
      <div className='flex w-[70%] float-end gap-[3rem] mt-5'>
        <div className='w-[25rem]'>
          <h5 className='text-[#001F54] font-bold text-xl text-center'>About</h5>
          <div className='bg-white text-[#001F54] w-full h-[16rem] p-5 mt-8'>
            <h5 className='font-bold text-center text-lg'>Tell the world about yourself</h5>
            <p className='my-7'>Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.</p>
            <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl mx-[30%] flex justify-center items-center gap-2'>Get Started <img src="./src/assets/Arrow 8.svg" alt="" /></button>
          </div>
          <div className='bg-white w-full h-[8rem] rounded-2xl p-5 mt-8 space-y-4'>
            <h5 className='flex justify-center items-center pt-8 font-bold'>Texts</h5>
            <div className='flex'>
              <img src="./src/assets/image.svg" alt="" />
              <p>Insert Photo</p>
            </div>
          </div>
          <h5 className='text-xl font-bold  mt-[5rem]'>20 Following</h5>
        </div>
        <div className='bg-white p-5'>
          <div className='flex gap-5 mb-10'>
            <h5 className='text-[#001F54] font-bold text-xl flex items-center'>Profile information</h5>
            <div>
              <img src="./src/assets/profile.svg" className='justify-self-center' alt="" />
              <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl mt-3'>Upload</button>
            </div>
          </div>
          <form className=''>
            <label for="">Name*</label><br/>
            <input type="text" className='border border-black rounded-full w-full h-10 mb-10' id="" name="" /><br/>
            <label for="">Username*</label><br/>
            <input type="text" className='border border-black rounded-full w-full h-10 mb-10' id="" name="" /><br/>
            <label for="">Short Bio*</label>
            <input type="text" className='border border-black rounded-full w-full h-10' id="" name="" />
          </form>
          <div className='mt-14 flex justify-between'>
            <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl mt-3'>Save</button>
            <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl mt-3'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutYou
