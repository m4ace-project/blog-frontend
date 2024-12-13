import React, { useEffect, useState } from 'react';
import Widget from '../components/common/Widget';
import PostHeader from '../components/pages/post/PostHeader';
import CreatorProfile from '../components/pages/post/CreatorProfile';
import { toast, ToastContainer } from 'react-toastify';


function AboutYou() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isProfileAvailable, setIsProfileAvailable] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); 
      if (!token) {
        toast.error('Authorization token is missing');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/content-creator-profile/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 404) {
          setIsProfileAvailable(false);
        } else if (!response.ok) {
          throw new Error('Failed to fetch profile');
        } else {
        const data = await response.json();
        setName(data.name);
        setUsername(data.username);
        setBio(data.bio);
        setProfileImage(data.profile_pic);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); 


  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex'>
      <ToastContainer/>
      <div className='md:w-[20%]'>
          <Widget />
      </div>
      <div className='md:w-[80%]'>
      <PostHeader />
        <div className='lg:flex gap-[3rem] ml-8 mt-5'>
          <div className='lg:w-[50%] px-14 lg:px-0'>
            <h5 className='text-[#001F54] font-bold text-xl text-center'>About</h5>
            <div className='bg-white text-[#001F54] w-full h-[48%] p-5 mt-5'>
              <h5 className='font-bold text-center text-lg'>Tell the world about yourself</h5>
              <p className='my-7'>{bio || 'Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.'}</p>
              {/* <div className='flex justify-center'>
                <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>Get Started</button>
              </div> */}
            </div>
            <div className='bg-white w-full h-[8rem] rounded-2xl p-5 mt-8 space-y-4'>
            <div className='flex'>
              <div className='flex justify-center items-center mr-5'>
              <img
               src={profileImage || './src/assets/image.svg'}
               alt="Profile"
                className='w-16 h-16 rounded-full'
             />
             </div>
             <div className='font-bold'>
              <p className='mb-3'>{name || 'Fullname'}</p>
              <p>{username || 'Username'}</p>
             </div>
            </div>
            </div>
            <h5 className='text-xl font-bold  mt-[3rem]'>20 Following</h5>
          </div>
          <div>
            <CreatorProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutYou
