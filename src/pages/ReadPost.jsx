import React from 'react'

function ReadPost() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh]'>
      <div className='flex w-[70%] float-end gap-[2rem] mt-5'>
        <div className='w-[33rem]'>
          <div>
            <img src="./src/assets/Frame 230.svg" className='h-[15rem]' alt="" />
            <p className='mt-5 text-justify'>As temperatures rise and the flowers bloom, it’s time to give your work wardrobe a fresh update for spring. Long shorts, once considered solely casual attire, have now emerged as a versatile and stylish option for the office. In case you haven’t noticed, long shorts will be a must-have this spring/summer season, and if you are thinking about how you can style long shorts for work this spring, keep reading below for great tips. With the right styling techniques, you can effortlessly incorporate long shorts into your workwear rotation while staying polished and professional.</p>
          </div>
            <div className='flex gap-5 h-[1.3rem] my-4'>
              <div className='flex'>
                <img src="./src/assets/heart.svg" alt=" " />
                <p>5K</p> 
              </div>
              <div className='flex'>
                <img src="./src/assets/comment.svg" alt=" " />
                <p>50</p> 
              </div>
              <div>
                <img src="./src/assets/edit-circle-outline.svg" alt=" " /> 
              </div>
              <div>
                <img src="./src/assets/share-outlined.svg" alt=" " />
                <p></p> 
              </div>
            </div>
            <div className='bg-white w-[15rem] h-[5rem] rounded-xl ps-4'>
              <p className='py-2'>I am definitely trying this.</p>
              <div className='flex gap-14'>
                <p> -Hadasah</p>
                  <div className='flex'>
                    <img src="./src/assets/heart.svg" alt=" " />
                    <img src="./src/assets/ic_twotone-report-gmailerrorred.svg" alt=" " />
                  </div>
              </div>
            </div>
        </div>

        <div>
            <div className='bg-white w-[20rem] h-[6rem] rounded-[1rem] mb-8 p-3'>
              <div className='flex gap-4 mb-2'>
                <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl'>Last 7 Days</button>
                <p>Last 30 Days</p>
                <p>All</p>
              </div>
              <div className='flex gap-3'>
                <p>Shares</p>
                <img src="./src/assets/share-outlined.svg" alt="" />
                <p>O</p>
              </div>
            </div>
            <div className='text-[#001F54] font-bold'>
                <h5 className='text-center text-xl my-3'>Recent Posts</h5>
                <div className='flex gap-5'>
                    <div className='w-[10rem]'>
                        <img src="./src/assets/Rectangle 347.svg" className='w-[10rem] h-[15rem]' alt=" " />
                        <p>Cooking Gas Reaches N16,500, All time Highest In Nigeria</p> 
                    </div>
                    <div className='w-[10rem]'>
                        <img src="./src/assets/Rectangle 347.svg" className='w-[10rem] h-[15em]' alt=" " />
                        <p>How to Dress for a Cocktail Party This Year</p> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReadPost
