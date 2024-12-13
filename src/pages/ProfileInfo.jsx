import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProfileIcon from '../assets/profile.png'; 

function ProfileInfo() {


  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(profilePicture);

    const url = 'https://olaniyijoe.pythonanywhere.com/api/reader/profile/create/';
    
    const token = localStorage.getItem('token');

    console.log(token);


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
            navigate('/personalization');
        } catch (error) {
            console.error('Error creating profile:', error);
            alert('Failed to create profile. Please try again.');
        }
    };



    return (
        <div className="bg-[#F8F8F8] min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                <div className=" flex mb-8">
                    <div className="text-2xl font-semibold text-[#001F54] mt-14">Profile Information</div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className='mt-10 md:mt-0'>
              <label htmlFor="profilePicture">Profile Picture*</label>
              <br />
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={(e) => setProfilePicture(e.target.files[0])}/>
             </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#001F54]">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} required
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#001F54]">Username*</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)} required
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-[#001F54]">Short Bio*</label>
                        <input
                            type="text"
                            id="bio"
                            name="bio"
                            value={bio}
                            onChange={(e)=> setBio(e.target.value)} required
                            placeholder="Short Bio"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
                            className="bg-[#FF5722] hover:bg-[#ff3b00] text-white py-2 px-8 rounded-lg font-semibold">
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-[#FF5722] hover:bg-[#ff3b00] text-white py-2 px-8 rounded-lg font-semibold">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileInfo;
