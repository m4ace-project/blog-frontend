import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Widget from '../components/common/Widget';
import PostHeader from '../components/pages/post/PostHeader';


function CreatePost() {



  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  const getToken = () => {
    return localStorage.getItem('token');
  };



  useEffect(() => {
    const token = getToken();
    if (!token) {
      setMessage('Error: You must log in to create a post.');
      navigate('/login');
    }
  }, [navigate]);




  const handlePublish = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setMessage('');

    const apiUrl = 'https://olaniyi.pythonanywhere.com/api/posts/';


    const token = getToken();

    if (!token) {
      setMessage('Error: Missing authentication token.');
      setLoading(false);
      return;
    }


    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Post created successfully!');
        setTitle('');
        setContent('');
        console.log('Post created:', data); 
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.detail || 'Failed to create post'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: Unable to create post');
    } finally {
      setLoading(false);
    }
  };





  return (
    <div className='bg-[#FFFCD8] h-[100vh] md:flex'>
      <div className='md:w-[20%]'>
          <Widget />
      </div>
      <div className='md:w-[80%]'>
        <PostHeader />
        <div className='mx-14 lg:flex lg:gap-[5rem] mt-5 lg:mx-10'>
          <div className='lg:w-[45%] mb-14 md:mb-0'>
            <form onSubmit={handlePublish} className='w-full'>
            <input type="text" name="Title" placeholder='Title' value={title}
            onChange={(e) => setTitle(e.target.value)} className='bg-white h-10 rounded-[1rem]  w-full mb-5 ps-5' />
            <br/>
            <textarea name="Content" placeholder='Text' value={content}
            onChange={(e) => setContent(e.target.value)} className='bg-white h-[7rem] lg:h-[7rem] rounded-[1rem] w-full p-5'/>


            <div className='flex gap-[8rem] my-10 lg:my-5 justify-center'>
              <div className='flex gap-5'>
                <img src="./src/assets/image.svg" alt="" />
                <img src="./src/assets/lucide_video.svg" alt="" />
                <img src="./src/assets/edit-circle-outline.svg" alt="" />
              </div>
              <button
                type='submit'
                disabled={loading}
                className='bg-[#FF5722] text-white w-[9rem] h-[2rem] rounded-xl mt-4'
              >
                {loading ? 'Publishing...' : 'Publish'}
              </button>
            </div>
            </form>
            {message && <p className='mt-4 text-red-600'>{message}</p>}
            <div>
            <h5 className='text-[#001F54] text-xl font-bold text-center mb-10 lg:mb-4'>Recent Posts</h5>
            <div className='md:w-[100%] md:flex md:justify-between md:gap-5 ml-5 '>
            <Link to={'/readpost'}>
              <div className='sm:w-[50%] md:w-[45%] mb-14 mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 345.svg" className='lg:h-[60%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>How to Style Long Shorts for Work this Summer</p>
              </div>
              </Link>
              <div className='sm:w-[50%] md:w-[45%] mx-auto lg:w-[50%]'>
                <img src="./src/assets/Rectangle 346.svg" className='lg:h-[50%]' alt="" />
                <p className='my-3 text-[#001F54] font-bold'>Naira Depreciates to N1,595$ in Parallel Market</p>
              </div>
            </div>
          </div>
          </div>
          <div className='ml-10 lg:w-[45%]'>
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
              <p>Drama as popular comedian, Osama berates Rhythm FM & OAP David King on live Radio</p>
              <p className='my-6 lg:my-2'>You Have to See Nini Singh’s Style Delivery at London Fashion Week</p>
              <p>FG Unveils Schedule For 2024 Independence Day Celebration</p>
              <p className='my-6 lg:my-2'>#BNxBBNaija9: Handi, Shaun & Tjay Evicted in Triple Exit | Highlights You Missed</p>
              <p>HerMoneyHerPower: Funke Akindele Shares How “Jenifa’s Diary” Came To Life by a Woman’s Support</p>
              <p className='my-6 lg:my-2'>Crypto Market Making : Basics That You Need to Know</p>
              <p>How to Achieve the Quiet Luxury Trend … </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
