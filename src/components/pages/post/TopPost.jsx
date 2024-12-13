import React, { useState, useEffect } from 'react';

function TopPost() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Authorization token not found.');
          setLoading(false);
          return;
        }
  
        try {
          const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/posts/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
  
          const data = await response.json();
          setPosts(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);





  return (
    <div>
      <div className='bg-white md:w-[72%] h-[6rem] rounded-[1rem] mb-14 lg:mb-4 p-3'>
              <div className='flex gap-4 mb-2'>
                <button className='bg-[#FF5722] text-white w-[8rem] h-[2rem] rounded-xl'>Last 7 Days</button>
                <p>Last 30 Days</p>
                <p>All</p>
              </div>
              <div className='flex gap-3'>
                <p>Shares</p>
                <img src="./src/assets/share-outlined.svg" alt="" />
                <p>O</p>
              </div>
            </div>
            <div className='text-[#001F54]'>
              <h5 className='font-bold text-center mb-8 text-3xl lg:text-lg lg:mb-3'>Top Posts</h5>
              {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <li key={index} className="my-6 lg:my-2">
                {post.title}
              </li>
            ))
          ) : (
            !loading && <p>No posts available.</p>
          )}
        </ul>
            </div>
    </div>
  )
}

export default TopPost
