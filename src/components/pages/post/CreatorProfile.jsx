import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatorProfile() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
  
    const navigate = useNavigate();
  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log(profilePicture);
      
        const url = 'https://olaniyijoe.pythonanywhere.com/api/content-creator/profile/create/';
      
      const token = localStorage.getItem('token');
       
      const data = {
        name: name,
        username: username,
        bio: bio,
        profilePicture: profilePicture.name,
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
      <div className=''>
        <div className='bg-white lg:w-[100%] mx-14 lg:mx-0 px-5 mt-10 pb-14 lg:pb-0 lg:mt-0 pt-5'>
              <div className='md:flex md:justify-between md:gap-5 mb-8'>
                <h5 className='text-[#001F54] font-bold text-xl flex items-center'>Profile information</h5>
                
              </div>
              <form onSubmit={handleSubmit} className='pb-10'>
              <div className='mt-10 md:mt-0'>
                <label htmlFor="profilePicture">Profile Picture*</label>
                <br />
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  onChange={(e) => setProfilePicture(e.target.files[0])}/>
              </div>
                <label htmlFor="name">Name*</label><br/>
                <input type="text" className='border border-black rounded-full pl-3 w-full h-10 mb-7' id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} required/><br/>
                <label htmlFor="username">Username*</label><br/>
                <input type="text" className='border border-black rounded-full pl-3 w-full h-10 mb-7' id="username"
                name="username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)} required/><br/>
                <label htmlFor="bio">Short Bio*</label>
                <input type="text" className='border border-black rounded-full pl-3 w-full h-10' id="bio"
                name="bio"
                value={bio}
                onChange={(e)=> setBio(e.target.value)} required/>
                <div className="mt-10 flex justify-between">
                  <button type="submit" className="bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl">
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </form>
        </div>    
      </div>
    )
}

export default CreatorProfile
