import React from 'react'
import Widget2 from '../components/common/Widget2';

function RecentArticles() {
  return (
    <div className='bg-[#FFFCD8] overflow-auto h-[100vh] flex'>
      <div className='md:w-[20%]'>
        <Widget2 />
      </div>
      <div className='md:w-[80%]'>
        <header className='bg-white w-full h-[5rem] py-4 px-14 flex justify-between'>
            <p className='text-2xl'>Welcome Admin,</p>
            <img src="./src/assets/profile.svg" className='w-7' alt="" />
        </header>
        <div className='py-5 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:gap-5 place-self-center lg:p-8 lg:justify-center'>
            <div className='bg-[#FF5722] p-5 text-white w-[12rem] h-[7rem] mt-5 lg:mt-0 flex gap-7 rounded-xl'>
                <div>
                  <p className='text-4xl'>50.3k</p>
                  <p>Article views</p>
                </div>
                <img src="./src/assets/Vector (2).svg" className='w-5' alt="" />
            </div>
            <div className='bg-[#FF5722] my-5 lg:my-0 p-5 text-white w-[12rem] h-[7rem] flex gap-10 rounded-xl'>
                <div>
                  <p className='text-4xl'>225</p>
                  <p>Comments</p>
                </div>
                <img src="./src/assets/Vector (3).svg" className='w-8' alt="" />
            </div>
            <div className='bg-[#FF5722] mb-5 md:mb-5 p-5 text-white w-[12rem] h-[7rem] flex gap-10 rounded-xl'>
                <div>
                  <p className='text-4xl'>100k</p>
                  <p>Likes</p>
                </div>
                <img src="./src/assets/Vector (4).svg" className='w-8' alt="" />
            </div>
            <div className='bg-[#FF5722] p-5 text-white w-[12rem] h-[7rem] flex gap-10 rounded-xl'>
                <div>
                  <p className='text-4xl'>30</p>
                  <p>Published</p>
                </div>
                <img src="./src/assets/Vector (5).svg" className='w-8' alt="" />
            </div>
        </div>
        <div ClassName=''>
          <div className='bg-white min-w-full overflow-x-auto px-5 md:px-14 mx-5 md:mx-14 rounded-[2rem]'>
            <div className='flex justify-between py-5 mb-8 border-b-2 border-b-black'>
             <h5 className='text-[1.5rem] font-bold'>Recent Articles</h5>
             <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>View all</button>
            </div>
            <table className='mx-auto'>
                <thead>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] place-self-start py-5'>
                        <th>Article</th>
                        <th>Views</th>
                        <th>Comments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5'>
                        <td>Article 10</td>
                        <td>200K</td>
                        <td>210</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5 my-2'>
                        <td>Article 11</td>
                        <td>2.1K</td>
                        <td>179</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5'>
                        <td>Article 12</td>
                        <td>100K</td>
                        <td>300</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5 my-2'>
                        <td>Article 13</td>
                        <td>3.6K</td>
                        <td>50</td>
                        <td className='text-[#DB0303]'>Pending</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5'>
                        <td>Article 14</td>
                        <td>350K</td>
                        <td>112</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5 my-2'>
                        <td>Article 15</td>
                        <td>225K</td>
                        <td>22</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                    <tr className='grid grid-cols-4 gap-[5rem] lg:gap-[10rem] pl-5'>
                        <td>Article 16</td>
                        <td>1.1K</td>
                        <td>150</td>
                        <td className='text-[#008D0E]'>Published</td>
                    </tr>
                </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RecentArticles
