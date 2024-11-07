import React from 'react'
import Widget from '../components/common/Widget';
import PostHeader from '../components/pages/post/PostHeader';

function ReadPost() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex overflow-scroll'>
      <div className='md:w-[20%]'>
          <Widget />
      </div>
      <div className='md:w-[80%]'>
        <PostHeader />
        <div className='lg:flex lg:gap-[2rem] mt-10 lg:mt-4 mx-14 lg:ml-14'>
          <div className=' w-[100%] lg:w-[60%] mb-10 lg:mb-0'>
            <div>
              <img src="./src/assets/Frame 230.svg" className='place-self-center lg:h-[14rem]' alt="" />
              <p className='mt-3 text-justify'>As temperatures rise and the flowers bloom, it’s time to give your work wardrobe a fresh update for spring. Long shorts, once considered solely casual attire, have now emerged as a versatile and stylish option for the office. In case you haven’t noticed, long shorts will be a must-have this spring/summer season, and if you are thinking about how you can style long shorts for work this spring, keep reading below for great tips. With the right styling techniques, you can effortlessly incorporate long shorts into your workwear rotation while staying polished and professional.</p>
            </div>
              <div className='flex gap-5 h-[1.3rem] my-10 lg:my-4'>
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

          <div className='pb-14'>
            <div className='bg-white md:w-[60%] lg:w-[100%] h-[6rem] rounded-[1rem] mb-14 lg:mb-4 p-3'>
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
                  <h5 className='text-center text-xl mb-10 lg:my-5'>Recent Posts</h5>
                  <div className='md:flex md:gap-5'>
                      <div className='md:w-[50%] mb-14 place-items-center lg:w-[10rem]'>
                          <img src="./src/assets/Rectangle 347.svg" className='lg:w-[10rem] lg:h-[15rem] mb-5 lg:mb-2' alt=" " />
                          <p>Cooking Gas Reaches N16,500, All time Highest In Nigeria</p> 
                      </div>
                      <div className='md:w-[50%] place-items-center lg:w-[10rem]'>
                          <img src="./src/assets/Rectangle 347.svg" className='lg:w-[10rem] lg:h-[15em] mb-5 lg:mb-2' alt=" " />
                          <p>How to Dress for a Cocktail Party This Year</p> 
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadPost
