import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Widget from '../components/common/Widget';
import PostHeader from '../components/pages/post/PostHeader';

function AboutYou() {



  const [formData, setFormData] = useState({
    name: '',
    username: '',
    bio: '',
    profilePicture: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://olaniyi.pythonanywhere.com/api/content-creator/profile/create/';
    
    const token = localStorage.getItem('token', data.access_token);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('username', formData.username);
    data.append('bio', formData.bio);
    if (formData.profilePicture) {
      data.append('profile_picture', formData.profilePicture);
    }

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile created successfully:', response.data);
      alert('Profile created successfully!');
      navigate('/createpost');
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Failed to create profile. Please try again.');
    }
  };




  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex'>
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
              <p className='my-7'>Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.</p>
              <div className='flex justify-center'>
                <button className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl'>Get Started</button>
              </div>
            </div>
            <div className='bg-white w-full h-[8rem] rounded-2xl p-5 mt-8 space-y-4'>
              <h5 className='flex justify-center items-center pt-8 font-bold'>Texts</h5>
              <div className='flex'>
                <img src="./src/assets/image.svg" alt="" />
                <p>Insert Photo</p>
              </div>
            </div>
            <h5 className='text-xl font-bold  mt-[3rem]'>20 Following</h5>
          </div>
          <div className='bg-white lg:w-[40%] mx-14 lg:mx-0 px-5 mt-10 pb-14 lg:pb-0 lg:mt-0 pt-5'>
            <div className='md:flex md:justify-between md:gap-5 mb-8'>
              <h5 className='text-[#001F54] font-bold text-xl flex items-center'>Profile information</h5>
              <div className='mt-10 md:mt-0'>
              <label htmlFor="profilePicture">Profile Picture*</label>
              <br />
              <input
                type="file"
                className="border-2 border-black rounded-full w-14 h-14 my-5"
                id="profilePicture"
                name="profilePicture"
                onChange={handleFileChange}/>
                {/* <img src="./src/assets/profile.svg" className='md:justify-self-center' alt="" />
                <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl mt-3'>Upload</button> */}
              </div>
            </div>
            <form onSubmit={handleSubmit} className=''>
              <label htmlFor="name">Name*</label><br/>
              <input type="text" className='border border-black rounded-full pl-3 w-full h-10 mb-7' id="name"
              name="name"
              value={formData.name}
              onChange={handleChange} required/><br/>
              <label htmlFor="username">Username*</label><br/>
              <input type="text" className='border border-black rounded-full pl-3 w-full h-10 mb-7' id="username"
              name="username"
              value={formData.username}
              onChange={handleChange} required/><br/>
              <label htmlFor="bio">Short Bio*</label>
              <input type="text" className='border border-black rounded-full pl-3 w-full h-10' id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange} required/>
              <div className="mt-10 flex justify-between">
                <button type="submit" className="bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl">
                  Save
                </button>
                <button
                  type="button"
                  className="bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl"
                  onClick={() => setFormData({ name: '', username: '', bio: '', profilePicture: null })}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutYou
