import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarReader from '/src/components/common/NavbarReader';
import FooterReader from '/src/components/common/FooterReader';
import MessageIcon from'../assets/messages.png';

function ReaderDashboard() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authorization token not found in local storage.');
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
    <div className="bg-[#FFFCD8] min-h-screen">
      <NavbarReader />
      <div className="max-w-8xl mx-auto px-4 py-8">

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <h5 className='font-bold mb-6'>FEATURED POST</h5>
      {posts.length > 0 && (
          <div className="mb-6">
            <Link to={`/post/${posts[0].id}`}>
              <img
                src={posts[0].blog_pic}
                alt={posts[0].title}
                className="w-full rounded-lg"
              />
              <h2 className="text-xl md:text-2xl font-bold mt-2">{posts[0].title}</h2>
            </Link>
          </div>
        )}
      
      <h5>TOP POSTS</h5>

      <h3 className="text-lg md:text-xl font-bold mb-4">Top Posts</h3>
        <div className="flex flex-wrap -mx-1">
          {posts.slice(1).map((post, index) => (
            <div key={post.id} className="w-full sm:w-1/2 lg:w-1/4 px-1 mb-4">
              <img
                src={post.blog_pic} 
                alt={post.title}
                className="w-full rounded-lg"
              />
              <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">{post.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse mb-5 mt-4 md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-100">
            <img
              src={posts[1]?.image || '/path/to/fallback-image.jpg'}
              alt="Subscription Image"
              className="w-full ml-3 md:h-96 object-cover mx-auto"
            />
          </div>
          <div className="md:w-96 ml-12 text-center p-1">
            <div>
              <p className="text-[#001F54] font-inter align-left font-semibold mr-12 mt-4 text-sm md:text-2xl">
                Never miss a post, video, or exclusive announcement. Subscribe to our newsletter to get instant access
                to the best men’s style content, delivered straight to your inbox.
              </p>
              <div className="mt-6 flex place-content-center">
                <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mr-3">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Link to="/chat">
                <img src={MessageIcon} alt="messageicon" />
              </Link>
            </div>
          </div>
        </div>
        <FooterReader/>
      </div>
    </div>
  );
}

export default ReaderDashboard;
