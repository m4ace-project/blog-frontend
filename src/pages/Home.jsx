import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame198 from '../assets/Frame 198.png';
import Vector from '../assets/Vector.png';
import Frame6 from '../assets/Frame 6.png';
import Frame84 from '../assets/Frame84.png';
import Frame85 from '../assets/Frame 85.png';
import Frame86 from '../assets/Frame 86.png';
import Frame87 from '../assets/Frame 87.png';
import OrangeBackground from '../assets/orange.jpeg';
import SearchIcon from '../assets/search-normal.png';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
      <div
        className="bg-cover bg-fixed h-screen w-full overflow-x-hidden bg-right-bottom"
        style={{ backgroundImage: `url(${OrangeBackground})` }}>
        <nav className="bg-[#FFFFFF] p-4">
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-center justify-between flex-wrap">
            <div className=" w-full sm:w-auto flex ">
                <img src={Frame198} alt="logo" className="h-12 w-auto " />
                <div className="sm:hidden flex-grow">
                </div>
                <div className="sm:hidden ">
                  <button
                    id="mobile-menu-button"
                    className="p-2  text-[#001F54] rounded-md  "
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                      className="h-6 w-6 ">
                     <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
               className={`${
                 menuOpen ? 'block' : 'hidden'
               }  flex flex-col space-y-3 ml-12  sm:space-y-0 sm:flex sm:flex-row sm:space-x-4 sm:items-center`}>
               {['Services', 'Articles', 'Pricing', 'Resources', 'Contact Us'].map(
                 (item, index) => (
                   <a
                     key={index}
                     className="text-[#001F54] font-inter font-medium flex hover:text-orange-500" >
                     {item}
                     <img
                       src={Vector}
                       alt="vector"
                       className="h-2 w-2 ml-3 mt-2 hover:text-[#FF5722]" />
                   </a>
                 )
               )}
            <form className="relative w-40" role="search">
                  <span className="absolute inset-y-0 left-2 flex items-center">
                    <img src={SearchIcon} alt="search" className="w-4 h-4" />
                  </span>
                  <input
                    className="w-full p-1 pl-7 pr-5 border text-[#001F54] rounded-full focus:outline-none focus:border-blue-500"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"/>
                </form>
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-sm w-40 px-6 py-2 mr-3">
                  <Link to="/Signin" className="text-[#FFFFFF]">
                    Get Started
                  </Link>
                </button>
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-sm w-40 px-6 py-2">
                  <Link to="/Welcome" className="text-[#FFFFFF]">
                    Log in
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="md:w-96 ml-12 text-center p-1">
              <h6 className="text-[#001F54] font-inter font-bold text-5xl md:text-5xl">
                Welcome to Our Creative Hub
              </h6>
              <p className="text-[#001F54] font-inter font-semibold mt-4 text-lg md:text-2xl">
                Create. Share. Inspire. Connect
              </p>
              <div className="mt-6 flex place-content-center">
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mb-2 mr-3">
                  <Link to="/Readerdashboard" className="text-[#FFFFFF]">
                    Read
                  </Link>
                </button>
                <button className="bg-[#FF5722] hover:bg-orange-600 text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mb-2 ml-3">
                  <Link to="/Welcome" className="text-[#FFFFFF]">
                    Create
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:w-100">
              <img
                src={Frame6}
                alt="Creative workspace"
                className="w-full ml-3 md:h-96 object-cover mx-auto"/>
            </div>
          </div>
          <div className="flex flex-wrap">
            {[Frame84, Frame85, Frame86, Frame87].map((image, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-1">
                <img
                  src={image}
                  alt={`Highlight ${index + 1}`}
                  className="w-full"/>
                <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">
                  {index === 0
                    ? 'The Ladies are back! Season 2 of “The Smart Money Woman” returns with more drama'
                    : index === 1
                    ? 'Governorship Candidate Withdraws Few Hours to Edo Election'
                    : index === 2
                    ? 'Google Hit With Massive Fine Threat by UK Regulators'
                    : 'Greenbox Commitment to Public Health'}
                </p>
              </div>
            ))}
          </div>
        </main>
          <footer className="bg-[#FFFFFF] text-[#001F54] font-inter font-medium text-sm md:text-lg lg:text-xl p-2 md:p-4 text-center whitespace-nowrap">
          <p>Copyright &copy; Mentorship For Acceleration 2024. All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
