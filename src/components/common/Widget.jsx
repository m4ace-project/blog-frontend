import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Widget() {

  const [menuOpen, setMenuOpen] = useState(false);



  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://olaniyi.pythonanywhere.com/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NDMzNTU3LCJpYXQiOjE3Mjk0Mjk5NTcsImp0aSI6ImQ1Mjk5ZmE5ZmQ2NjQ1ZWFhMWEzMjUyZmM3M2U3NWRhIiwidXNlcl9pZCI6Mn0.KHqBxpQzhHUdBS1udJiIVwDyUQgjrkhpw9JwHH8ca8w',
        },
        body: JSON.stringify({
          refresh_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTUxNjM1NywiaWF0IjoxNzI5NDI5OTU3LCJqdGkiOiI0M2M4YTI5ZmNlMzA0MDE5YTk3N2MxMjY2NGI2ZDk3NiIsInVzZXJfaWQiOjJ9.zMwvmYr6EESbfCmITz5rlyCRC39T4oq7zNdz-ncS9cQ',
        }),
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      const result = await response.json();
      console.log('Logout successful:', result);

      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed. Please try again.');
    } finally {
      setLoading(false); 
    }
  };



  return (
    <div>
      <div className="hidden md:block md:h-[100vh] h-[5rem] w-[100%] md:bg-gradient-to-b from-[#FFEB36] to-[#FFFFFF] bg-[#FFEB36] md:pt-8 md:px-2 lg:p-8">
        <img src="./src/assets/Logo.svg" className='md:block md:w-[3rem]' alt="" />

        <div className='md:grid gap-5 mt-12 text-white'>
            <Link to={'/readpost'} className='flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2'> <img src="./src/assets/mdi_home-outline.svg" alt="" /> Homepage</Link>
            <Link to={'/aboutyou'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/profile-circle.svg" alt="" />Profile</Link>
            <Link to={'/createpost'} className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/eos-icons_cluster-management-outlined.svg" alt="" />Manage Posts</Link>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/Vector.svg" alt="" />Privacy Policy</button>
            <button className='flex justify-center items-center bg-[#FF5722] h-10 rounded-2xl gap-2'> <img src="./src/assets/map_volume-control-telephone.svg" alt="" />Help Center</button>
        </div>
        
        <button className='hidden md:flex gap-2 md:justify-center mt-[10rem]' onClick={handleLogout}><img src="./src/assets/hugeicons_logout-04.svg" alt="" /> {loading ? 'Logging out...' : 'Logout'} </button>

      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white rounded-full shadow-lg">
          <img src="./src/assets/right-arrow-svgrepo-com.svg" className='w-10' alt="" />      
        </button>



        {menuOpen && (
        <div className="">
          <Link to="" className="flex justify-center items-center bg-[#A62B05] h-10 rounded-2xl gap-2">
            Homepage
          </Link>
          <button
            className="flex justify-center items-center bg-red-500 h-10 rounded-2xl gap-2 text-white"
            onClick={handleLogout}
          >
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      )}




    </div>
  )
}

export default Widget
