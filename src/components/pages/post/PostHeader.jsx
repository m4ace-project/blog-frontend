import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PostHeader() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div>
      <div className='bg-white md:flex p-5 lg:px-[12%] lg:justify-between h-[5rem]'>
        <div className='hidden md:flex gap-5 items-center list-none'>
            <li className='flex gap-2'>Services <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Articles <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Pricing <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Resources <img src="./src/assets/Vector2.svg" alt="" /></li>
            <li className='flex gap-2'>Contact us <img src="./src/assets/Vector2.svg" alt="" /></li>
        </div>
        
        <div className='hidden md:flex md:w-8 md:gap-3 md:ml-10'>
          <img src="./src/assets/notification.svg" alt="" />
          <img src="./src/assets/setting.svg" alt="" />
          <Link to={'/aboutyou'}><img src="./src/assets/profile.svg" alt=""/></Link>
        </div>
        <div className="md:hidden flex items-center justify-between">
        <Link to='/'>
          <img src="./src/assets/Logo.svg" className='w-[3rem]' alt="" />
        </Link>
          <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1" onClick={toggleMenu}>
            <div className="w-10 h-1 bg-gray-800"></div>
              <div className="w-10 h-1 bg-gray-800"></div>
              <div className="w-10 h-1 bg-gray-800"></div>
            </div>
          </div>
        </div>


        {menuOpen && (
        <div className="bg-white flex flex-col gap-3 p-5 md:hidden">
          <Link to="/services" className="py-2 border-b">Services</Link>
          <Link to="/articles" className="py-2 border-b">Articles</Link>
          <Link to="/pricing" className="py-2 border-b">Pricing</Link>
          <Link to="/resources" className="py-2 border-b">Resources</Link>
          <Link to="/contact" className="py-2 border-b">Contact us</Link>
        </div>
      )}



    </div>
  )
}

export default PostHeader
