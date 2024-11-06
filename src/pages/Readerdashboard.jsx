import React from 'react';
import { Link } from 'react-router-dom';
import NavbarReader from '/src/components/common/NavbarReader';
import FooterReader from '/src/components/common/FooterReader';
import Frame340 from '../assets/Frame 340.png';
import Frame338 from '../assets/Frame 338.png';
import Frame339 from '../assets/Frame 339.png';
import Rectangle24 from '../assets/Rectangle 24.png';
import Rectangle25 from '../assets/Rectangle 25.png';
import Rectangle27 from '../assets/Rectangle 27.png';
import Rectangle28 from '../assets/Rectangle 28.png';
import Govnor from '../assets/Govnor.png';
import MessageIcon from'../assets/messages.png';

function ReaderDashboard() {
  return (
    <div className="bg-[#FFFCD8] min-h-screen">
      <NavbarReader />
      <div className="max-w-8xl mx-auto px-4 py-8">
       <div className="mb-6">
        <Link 
         to="/readersdashboard2" >
          <img src={Frame340} alt="Featured" className="w-full rounded-lg" />
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            Vegan Parenting Tips: Raising Children on a Plant-Based Diet
          </h2>
        </Link>
        </div>
        <div className="flex gap-2 mb-6">
          <div className="relative w-1/2 overflow-hidden rounded-lg">
            <img src={Frame338} alt="Article 1" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative w-1/2 overflow-hidden rounded-lg">
            <img src={Frame339} alt="Article 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-4">Top Posts</h3>
        <div className="flex flex-wrap -mx-1">
          {[Rectangle24, Rectangle25, Govnor, Rectangle27].map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-1 mb-4">
              <img src={image} alt={`image${index}`} className="w-full rounded-lg" />
              <p className="mt-2 text-[#001F54] font-inter font-medium text-sm">
                {index === 0
                  ? "The Ladies are back! Season 2 of “The Smart Money woman” returns with more drama."
                  : index === 1
                  ? "EPL: FA takes decision on punishing Haaland for throwing ball at Gabriel"
                  : index === 2
                  ? "Edo Guber: Damage you caused will haunt your children - Peter Obi tells INEC, others."
                  : "Greenbox Commitment to Public Health. The Rise of Affordable Solar Generators."}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse mb-5 mt-4 md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-100">
            <img src={Rectangle28} alt="Subscription Image" className="w-full ml-3 md:h-96 object-cover mx-auto" />
          </div>
          <div className="md:w-96 ml-12 text-center p-1">
            <div>
            <p className="text-[#001F54] font-inter align-left font-semibold mr-12 mt-4 text-sm md:text-2xl">
              Never miss a post, video, or exclusive announcement. Subscribe to our newsletter to get instant access to the best men’s style content, delivered straight to your inbox.
            </p>
            <div className="mt-6 flex place-content-center">
              <button className="bg-[#FF5722] text-[#FFFFFF] rounded-md font-inter font-medium text-md w-32 md:w-40 px-4 py-2 mr-3">
                Subscribe
              </button>
            </div>
            </div>
            <div className="">
            <Link 
            to="/chat" >
            <img src={MessageIcon} alt="messageicon"/> </Link>
            </div>
          </div>
        </div>
        <FooterReader/>
      </div>
    </div>
  );
}

export default ReaderDashboard;
