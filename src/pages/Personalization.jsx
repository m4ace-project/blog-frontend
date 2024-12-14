import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


function Personalization() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        
        const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/categories/');

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data);
        
      } catch (err) {
        toast.error(err.message);
      } 
    };


    fetchCategories();
  }, []);


  return (
    <div>
      <ToastContainer/>
      <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center'>
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] md:w-[60vw] w-[90vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 px-5'>
        <p className='text-center font-bold text-2xl'>Select area of interest</p>
        <div className=' mx-[10%] text-[#001F54] mt-10 text-xs md:text-sm font-bold'>
          <ul className='text-center grid md:grid-cols-2 gap-x-10 gap-y-6 grid-cols-1'>
            {categories.map( (category) => (
              <li className=' bg-white border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400 rounded-full  py-1' ><Link to={`/authors/${category.id}`} state={`${category.name}`}>{category.name}</Link></li>
            ))}
                     
          </ul>
        </div>
        {/* <div><button className="block mx-auto font-bold bg-[#FF5722] rounded-full mt-10 text-white px-20 py-1 text-sm">Continue</button>
        </div> */}
      </div>
      <div className=' bg-white w-[100vw] -mb-24 mt-10'>
        <Footer/>
      </div>
    </div>
    </div>

  )
}

export default Personalization
