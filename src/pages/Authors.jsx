import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Navbar from '../components/common/Navbar'
import Checkbox from '../components/pages/Checkbox'
import Suggest from '../components/common/Suggest'
import Footer from '../components/common/Footer'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

function Travel() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState("");
  let { state } = useLocation();

  console.log(state);

  useEffect(() => {
    const fetchAuthors = async () => {
      const token = localStorage.getItem('token');
      try {
        
        const response = await fetch(`https://olaniyijoe.pythonanywhere.com/api/categories/${id}/top-authors/`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setAuthors(data);
        console.log(data);

        if (data.length === 0) {
          toast.error('No author available in this category yet.')
        };
        
      } catch (err) {
        setError(err.message);
      } 
    };


    fetchAuthors();
  }, []);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');

    const payload = authors.map((authorId) => ({
      category_id: parseInt(id),
      author_id: authorId.author_id,
    }));

    console.log(payload);

    try {
      const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/add-favourite-author/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      toast.success('Favorite authors submitted successfully!');
      setSelectedAuthors([]);
      navigate('/readerdashboard');
    } catch (err) {
      toast.error('Failed to submit favorite authors.');
    }
  };




  
  return (
    <div className='bg-[#FFFCD8] h-[100vh] flex flex-col  justify-center items-center'>
      <ToastContainer />
      <div className=' bg-white w-[100vw] -mt-24'>
        <Navbar/>
      </div>
      <div className='text-[#001F54] bg-white mt-5 h-[70vh] w-[60vw] flex flex-col justify-center 
                border-b-[1.5px] border-x-[1px] shadow-md border-b-gray-400'>
        <div className='text-center'>
        <Suggest/>
        </div>

        <p className='text-center font-bold mt-3 text-xs md:text-base'>{state}</p>
          <div className='flex flex-col text-[#001F54] justify-center items-center mt-5' >
  

          {authors.map( (author) => (
            <Checkbox 
            key={author.id}
            text={author.author_name} 
            id={author.id}
            onChange={() => handleCheckboxChange(author.id)}
            />
            ))}

            
          </div>
          <div>
            <button className="bg-[#FF5722] text-white font-semibold rounded-md text-sm px-10 py-1 mt-[5em] block mx-auto" onClick={handleSubmit}>Subscribe</button>
          </div>
      </div>
      <div className=' bg-white w-[100vw] -mb-24 mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Travel
