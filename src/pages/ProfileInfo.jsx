import React from 'react';
import ProfileIcon from '../assets/profile.png'; 

function ProfileInfo() {
    return (
        <div className="bg-[#F8F8F8] min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                <div className=" flex mb-8">
                    <div className="text-2xl font-semibold text-[#001F54] mt-14">Profile Information</div>
                    <div className="flex flex-col ml-12">
                        <img src={ProfileIcon} alt="Profile Icon" className="h-20 w-20 mb-2" />
                        <button className="bg-[#FF5722] hover:bg-[#ff3b00] text-white text-sm py-2 px-6 rounded-lg font-semibold">
                            Upload
                        </button>
                    </div>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#001F54]">Name*</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#001F54]">Username*</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-[#001F54]">Short Bio*</label>
                        <input
                            type="text"
                            id="bio"
                            placeholder="Short Bio"
                            className="w-full px-4 py-2 border border-[#001F54] rounded-full bg-transparent placeholder:text-[#001F54] focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
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
