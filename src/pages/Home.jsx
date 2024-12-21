import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Frame198 from '../assets/Frame 198.png';
import Vector from '../assets/Vector.png';
import Frame6 from '../assets/Frame 6.png';
import OrangeBackground from '../assets/orange.jpeg';
import SearchIcon from '../assets/search-normal.png';
import PlaceHolder from '../assets/placeholder.gif'
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {

      AOS.init({
        duration: 2000,
        easing: 'ease-in-out',
        once: true,
      });

      try {
        const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/postview/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data); 
console.log(data);

        
        setLoading(false);
      } catch (err) {
        toast.error(err.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  
  

  return (
    <div>
      <div
        className="bg-cover bg-fixed h-screen w-full overflow-x-hidden bg-right-bottom"
        style={{ backgroundImage: `url(${OrangeBackground})` }}>
          <ToastContainer/>
        <nav className="bg-[#FFFFFF] p-4">
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-center justify-between flex-wrap">
            <div className=" w-full sm:w-auto flex ">
              <Link to='/'>
                <img src={Frame198} alt="logo" className="h-12 w-auto " />
              </Link>
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
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto" data-aos="fade-left">
            <div className="md:w-96 ml-12 text-center p-1">
              <h6 className="text-[#001F54] font-inter font-bold text-5xl md:text-5xl">
                Welcome to Our Creative Hub
              </h6>
              <p className="text-[#001F54] font-inter font-semibold mt-4 text-lg md:text-2xl">
                Create. Share. Inspire. Connect
              </p>
              <div className="mt-6 flex place-content-center">
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mb-2 mr-3" data-aos="flip-left">
                  <Link to="/Readerdashboard" className="text-[#FFFFFF]">
                    Read
                  </Link>
                </button>
                <button className="bg-[#FF5722] hover:bg-orange-600 text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mb-2 ml-3" data-aos="flip-right">
                  <Link to="/Welcome" className="text-[#FFFFFF]">
                    Create
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:w-100" data-aos="zoom-in">
              <img
                src={Frame6}
                alt="Creative workspace"
                className="w-full ml-3 md:h-96 object-cover mx-auto"/>
            </div>
          </div>
          <div className="flex flex-wrap ml-10 my-4">
            {loading ? (
              <p className="text-center w-full text-[#001F54] font-medium">Loading...</p>
            ) : error ? (
              <p className="text-center w-full text-red-500 font-medium" data-aos="fade-in">{error}</p>
            ) : (
              posts.map((post, index) => (
                
                <Link to={`/readersdashboard2/${post.post_id}`} key={index} className="w-full md:w-1/2 lg:w-1/4 p-2" >
                 <img
                  src={PlaceHolder}
                  alt={'img'}
                  className="w-full h-40 object-cover rounded-md"
                />
                  <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">
                    {post.title}
                  </p>
                </Link>
              ))
            )}
          </div>
        </main>
      </div>
          <footer className="bg-[#FFFFFF] text-[#001F54] font-inter font-medium text-sm md:text-lg lg:text-xl p-2 md:p-4 text-center whitespace-nowrap">
          <p>Copyright &copy; Mentorship For Acceleration 2024. All Rights Reserved</p>
        </footer>
    </div>
  );
};

export default Home;
