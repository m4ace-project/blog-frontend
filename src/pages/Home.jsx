import React from 'react';
<<<<<<< HEAD
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import Frame198 from './assets/Frame 198.png';
import Vector from './assets/Vector.png';
import Frame6 from './assets/Frame 6.png';
import Frame84 from './assets/Frame84.png';
import Frame85 from './assets/Frame 85.png';
import Frame86 from './assets/Frame 86.png'; 
import Frame87 from './assets/Frame 87.png';
import OrangeBackground from './assets/orange.jpeg';
=======
import Frame198 from '../assets/Frame 198.png';
import Vector from '../assets/Vector.png';
import Frame6 from '../assets/Frame 6.png';
import Frame84 from '../assets/Frame84.png';
import Frame85 from '../assets/Frame 85.png';
import Frame86 from '../assets/Frame 86.png'; 
import Frame87 from '../assets/Frame 87.png';
import OrangeBackground from '../assets/orange.jpeg';
import SearchIcon from '../assets/search-normal.png';
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
    <div className="bg-cover h-screen w-full overflow-x-hidden bg-right-bottom" style={{ backgroundImage: `url(${OrangeBackground})` }}>
      <nav className="bg-white p-4">
=======
    <div className="bg-cover bg-fixed h-screen w-full overflow-x-hidden bg-right-bottom" style={{ backgroundImage: `url(${OrangeBackground})` }}>
      <nav className="bg-[#FFFFFF] p-4">
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center">
              <img src={Frame198} alt="logo" className="h-12 w-auto" />
              <div className="hidden md:flex space-x-4 ml-6">
                {['Services', 'Articles', 'Pricing', 'Resources', 'Contact Us'].map((item, index) => (
<<<<<<< HEAD
                  <a key={index} href="#" className="text-blue-900 font-inter font-medium flex hover:text-orange-500">
                    {item}
                    <img src={Vector} alt="vector" className="h-2 w-2 ml-3 mt-2 hover:text-orange-500" />
=======
                  <a key={index} href="#" className="text-[#001F54] font-inter font-medium flex hover:text-orange-500">
                    {item}
                    <img src={Vector} alt="vector" className="h-2 w-2 ml-3 mt-2 hover: text-[#FF5722]" />
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                  </a>
                ))}
                <form className="relative w-40" role="search">
                  <span className="absolute inset-y-0 left-2 flex items-center">
<<<<<<< HEAD
                    <i className="fas fa-magnifying-glass"></i>
                  </span>
                  <input
                    className="w-full p-1 pl-7 pr-5 border border-blue-900 rounded-full focus:outline-none focus:border-blue-500"
=======
                    <img src={SearchIcon} alt="search" className='w-4  h-4' />
                  </span>
                  <input
                    className="w-full p-1 pl-7 pr-5 border text-[#001F54] rounded-full focus:outline-none focus:border-blue-500"
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
<<<<<<< HEAD
                <button className="bg-orange-500 text-white rounded-md font-inter font-medium text-sm w-40 px-6 py-2 mr-3">
                  Get Started
                </button>
                <button className="bg-orange-500 text-white rounded-md font-inter font-medium text-sm w-40 px-6 py-2">
=======
                <button className=" bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-sm w-40 px-6 py-2 mr-3">
                  Get Started
                </button>
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-sm w-40 px-6 py-2">
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                  Log in
                </button>
              </div>
            </div>
            <div className="md:hidden">
<<<<<<< HEAD
              <button id="mobile-menu-button" className="p-2 bg-blue-500 text-white rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
=======
              <button id="mobile-menu-button" className="p-2 text-[#001F54] rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                  <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-96 ml-12 text-center p-1">
<<<<<<< HEAD
            <h6 className="text-blue-900 font-inter font-bold text-5xl md:text-5xl">Welcome to Our Creative Hub</h6>
            <p className="text-blue-900 font-inter font-semibold mt-4 text-lg md:text-2xl">Create. Share. Inspire. Connect</p>
            <div className="mt-6 flex place-content-center">
              <button className="bg-orange-500 text-white rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mr-3">
                Read
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 ml-3">
=======
            <h6 className="text-[#001F54] font-inter font-bold text-5xl md:text-5xl">Welcome to Our Creative Hub</h6>
            <p className="text-[#001F54] font-inter font-semibold mt-4 text-lg md:text-2xl">Create. Share. Inspire. Connect</p>
            <div className="mt-6 flex place-content-center">
              <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mr-3">
                Read
              </button>
              <button className="bg-[#FF5722] hover:bg-orange-600 text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 ml-3">
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                Create
              </button>
            </div>
          </div>
          <div className="md:w-100">
            <img src={Frame6} alt="image" className="w-full ml-3 md:h-96 object-cover mx-auto" />
          </div>
        </div>

        <div className="flex flex-wrap">
          {[Frame84, Frame85, Frame86, Frame87].map((image, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-1">
              <img src={image} alt={`image${index}`} className="w-full" />
<<<<<<< HEAD
              <p className="mt-2 text-blue-900 font-inter font-medium text-sm">
=======
              <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
                {index === 0
                  ? "The Ladies are back! Season 2 of “The Smart Money woman” returns with more drama"
                  : index === 1
                  ? "Governorship Candidate Withdraws Few Hours to Edo Election"
                  : index === 2
                  ? "Google Hit With Massive Fine Threat by UK Regulators"
                  : "Greenbox Commitment to Public Health"}
              </p>
            </div>
          ))}
        </div>
      </main>

<<<<<<< HEAD
      <footer className="bg-white text-blue-900 font-inter font-medium text-sm md:text-lg lg:text-xl p-2 md:p-4 text-center whitespace-nowrap">
=======
      <footer className="bg-[#FFFFFF] text-[#001F54] font-inter font-medium text-sm md:text-lg lg:text-xl p-2 md:p-4 text-center whitespace-nowrap">
>>>>>>> 01d7e4380f0cdcfa1095c412ab4e1a696ccfb80b
        <p>Copyright &copy; Mentorship For Acceleration 2024. All Rights Reserved</p>
      </footer>
    </div>
    </div>
  );
};

export default Home;
