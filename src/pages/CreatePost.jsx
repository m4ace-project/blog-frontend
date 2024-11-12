import React from 'react'
import Widget from '../components/common/Widget';
import PostHeader from '../components/pages/post/PostHeader';
import { Link } from 'react-router-dom';

function CreatePost() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex'>
      <div className='md:w-[20%]'>
          <Widget />
      </div>
      <div className='md:w-[80%]'>
        <PostHeader />
        <div className='mx-14 lg:flex lg:gap-[5rem] mt-5 lg:mx-10'>
          <div className='lg:w-[45%] mb-14 md:mb-0'>
            <h5 className='bg-white h-[10rem] w-[70%] place-self-center lg:w-full lg:h-[7rem] rounded-[1rem] flex justify-center items-center'>TEXTS</h5>
            <div className='flex gap-[8rem] my-10 lg:my-5 justify-center'>
              <div className='flex gap-5'>
                <img src="./src/assets/image.svg" alt="" />
                <img src="./src/assets/lucide_video.svg" alt="" />
                <img src="./src/assets/edit-circle-outline.svg" alt="" />
              </div>
              <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>Publish</button>
            </div>
            <div>
            <h5 className='text-[#001F54] text-xl font-bold text-center mb-10 lg:mb-4'>Recent Posts</h5>
            <div className='md:w-[100%] md:flex md:justify-between md:gap-5 ml-5 '>
            <Link to={'/readpost'}>
              <div className='sm:w-[50%] md:w-[45%] mb-14 mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 345.svg" className='lg:h-[60%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>How to Style Long Shorts for Work this Summer</p>
              </div>
              </Link>
              <div className='sm:w-[50%] md:w-[45%] mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 346.svg" className='lg:h-[50%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>Naira Depreciates to N1,595$ in Parallel Market</p>
              </div>
            </div>
          </div>
          </div>
          <div className='ml-10 lg:w-[45%]'>
            <div className='bg-white md:w-[72%] h-[6rem] rounded-[1rem] mb-14 lg:mb-4 p-3'>
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
            <div className='text-[#001F54]'>
              <h5 className='font-bold text-center mb-8 text-3xl lg:text-lg lg:mb-3'>Top Posts</h5>
              <p>Drama as popular comedian, Osama berates Rhythm FM & OAP David King on live Radio</p>
              <p className='my-6 lg:my-2'>You Have to See Nini Singh’s Style Delivery at London Fashion Week</p>
              <p>FG Unveils Schedule For 2024 Independence Day Celebration</p>
              <p className='my-6 lg:my-2'>#BNxBBNaija9: Handi, Shaun & Tjay Evicted in Triple Exit | Highlights You Missed</p>
              <p>HerMoneyHerPower: Funke Akindele Shares How “Jenifa’s Diary” Came To Life by a Woman’s Support</p>
              <p className='my-6 lg:my-2'>Crypto Market Making : Basics That You Need to Know</p>
              <p>How to Achieve the Quiet Luxury Trend … </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
