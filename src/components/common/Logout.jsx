import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('token');
    // const refreshToken = localStorage.getItem('refresh_token'); 

    if (!token) {
      setError('Authentication tokens are missing!');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://olaniyijoe.pythonanywhere.com/api/logout/',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem('token');
        // localStorage.removeItem('refresh_token');
        navigate('/'); 
      }
    } catch (err) {
      setError('An error occurred while logging out. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
        <button
        onClick={handleLogout}
        disabled={loading}
        className="flex justify-center items-center w-[100%] bg-[#FF5722] h-10 rounded-2xl text-white"
      >
        {loading ? 'Logging out...' : 'Logout'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Logout
