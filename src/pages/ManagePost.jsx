import React from 'react'
import Widget2 from '../components/common/Widget2';

function ManagePost() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh] overflow-auto flex'>
      <div className='md:w-[20%]'>
        <Widget2 />
      </div>
      <div className='md:w-[80%]'>
            <header className='bg-white w-full h-[6rem] py-5 px-14 mb-10 flex justify-between'>
                <p className='text-4xl'>Welcome Admin,</p>
                <img src="./src/assets/profile.svg" className='w-14' alt="" />
            </header>

            <div className='bg-white min-w-full overflow-x-auto px-5 md:px-14 mx-5 md:mx-14 rounded-[2rem]'>
                <div className='flex justify-between py-5 mb-8 border-b-2 border-b-black'>
                    <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>Manage Posts</button>
                    <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>View all</button>
                </div>
                <table>
                    <thead>
                        <tr className='grid grid-cols-8 gap-[6rem]'>
                            <th>S/N</th>
                            <th className='col-span-2'>Title</th>
                            <th className='pl-5'>Author</th>
                            <th className='col-span-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5 my-2'>
                            <td>1.</td>
                            <td className='col-span-2'>EPL: FA takes decision on punishing Haaland for throwing ball at Gabriel</td>
                            <td className='text-center'>Amy</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5'>
                            <td>2.</td>
                            <td className='col-span-2'>The Rise of Affordable Solar Generators.</td>
                            <td className='text-center'>Adrian</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5 my-2'>
                            <td>3.</td>
                            <td className='col-span-2'>How to Help Survivors of Sexual Abuse Get Justice</td>
                            <td className='text-center'>Future</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5'>
                            <td>4.</td>
                            <td className='col-span-2'>Police arrests Telegram Ceo in France</td>
                            <td className='text-center'>Xander</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5 my-2'>
                            <td>5.</td>
                            <td className='col-span-2'>How to make Jollof Rice in a Rice Cooker</td>
                            <td className='text-center'>Tobi</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5'>
                            <td>6.</td>
                            <td className='col-span-2'>Bobrisky Defends Diddy’s Children Amid Arrest Controversy</td>
                            <td className='text-center'>Tobi</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5 my-2'>
                            <td>7.</td>
                            <td className='col-span-2'>Edo Guber: Damage you caused will haunt your children – Peter Obi tells INEC, others.</td>
                            <td className='text-center'>Adriani</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5'>
                            <td>8.</td>
                            <td className='col-span-2'>The Rise of Affordable Solar Generators.</td>
                            <td className='text-center'>Amy</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                        <tr className='grid grid-cols-8 gap-[0.5rem] pl-5 my-2'>
                            <td>9.</td>
                            <td className='col-span-2'>7 red flags in women that men must not ignore</td>
                            <td className='text-center'>Elizabethi</td>
                            <td className='text-right'>Edit</td>
                            <td className='text-right'>Delete</td>
                            <td className='text-[#A62B05] text-center'>Report</td>
                            <td className='text-[#008D0E] text-left'>Publish</td>
                        </tr>
                    </tbody>
                </table>
            </div>

      </div>
    </div>
  )
}

export default ManagePost
