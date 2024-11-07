import React from 'react'
import Widget from '../components/common/Widget';

function Users() {
  return (
    <div className='bg-[#FFFCD8] h-[100vh] flex'>
      <div className='md:w-[20%]'>
        <Widget />
      </div>
        <div className='md:w-[80%]'>
            <header className='bg-white w-full h-[6rem] py-5 px-14 mb-10 flex justify-between'>
                <p className='text-4xl'>Welcome Admin,</p>
                <img src="./src/assets/profile.svg" className='w-14' alt="" />
            </header>
            <div ClassName=''>
            <div className='bg-white px-14 mx-14 rounded-[2rem]'>
                <div className='flex justify-between py-5 mb-8 border-b-2 border-b-black'>
                <h5 className='text-[1.5rem] font-bold'>Users</h5>
                <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>View all</button>
                </div>

                <div>
                <table>
                    <thead>
                        <tr className='grid grid-cols-4 gap-[13rem] place-self-start py-5'>
                            <th>Username</th>
                            <th>E-mail</th>
                            <th>E-mail Verify</th>
                            <th>Last Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Trendy</td>
                            <td>trendy@gmail.com</td>
                            <td>true</td>
                            <td>2024-09-24 13:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Sita</td>
                            <td>sita24@gmail.com</td>
                            <td>true</td>
                            <td>2024-06-21 12:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Seeker</td>
                            <td>seeker@gmail.com</td>
                            <td>true</td>
                            <td>2024-4-24 10:50</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Xander</td>
                            <td>xar@gmail.com</td>
                            <td>true</td>
                            <td>2024-05-01 11:35</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Adrian</td>
                            <td>adrian@gmail.com</td>
                            <td>true</td>
                            <td>2024-08-14 01:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Amy</td>
                            <td>amy1@yahoo.com</td>
                            <td>true</td>
                            <td>2024-07-04 09:15</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Tobi</td>
                            <td>toby@yahoo.com</td>
                            <td>true</td>
                            <td>2024-10-10</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Elizabeth</td>
                            <td>lizzy@yahoo.com</td>
                            <td>true</td>
                            <td>2024-09-24 13:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Sam</td>
                            <td>sam@gmail.com</td>
                            <td>true</td>
                            <td>2024-09-24 13:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Toni</td>
                            <td>onit@gmail.com</td>
                            <td>true</td>
                            <td>2024-06-11 06:25</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5'>
                            <td>Future</td>
                            <td>future@gmail.com</td>
                            <td>true</td>
                            <td>2024-07-12 13:05</td>
                        </tr>
                        <tr className='grid grid-cols-4 gap-[10rem] pl-5 my-2'>
                            <td>Femi</td>
                            <td>femi@gmail.com</td>
                            <td>true</td>
                            <td>2024-05-04 14:04</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Users
