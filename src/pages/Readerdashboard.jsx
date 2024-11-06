import React from 'react';
import NavbarReader from '../components/common/NavbarReader';
import Frame340 from '../assets/Frame 340.png';
import Frame338 from '../assets/Frame 338.png';
import Frame339 from '../assets/Frame 339.png';
import Rectangle25 from '../assets/Rectangle 25.png';
import Rectangle28 from '../assets/Rectangle 28.png';
import Govnor from '../assets/Govnor.png';

function ReaderDashboard() {
  return (
    <div className="bg-[#FFFCD8] min-h-screen">
      <NavbarReader />

      <div className="max-w-4xl mx-auto py-8">
       
        <div className="mb-6">
          <img src={Frame340} alt="Featured" className="w-full rounded-lg" />
          <h2 className="text-xl font-bold mt-2">
            Vegan Parenting Tips: Raising Children on a Plant-Based Diet
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <img src={Frame338} alt="Article 1" className="w-full h-60 object-cover rounded-lg" />
            <div className="absolute bottom-0 bg-opacity-75 bg-black text-white p-2 w-full rounded-b-lg">
              <p>Police arrests Telegram CEO in France</p>
            </div>
          </div>
          <div className="relative">
            <img src={Frame339} alt="Article 2" className="w-full h-60 object-cover rounded-lg" />
            <div className="absolute bottom-0 bg-opacity-75 bg-black text-white p-2 w-full rounded-b-lg">
              <p>How to Help Survivors of Sexual Abuse Get Justice</p>
            </div>
          </div>
        </div>

       
        <h3 className="text-lg font-bold mb-4">Top Posts</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <img src={Rectangle25} alt="Top Post 1" className="w-full h-32 object-cover rounded-lg" />
            <div className="absolute bottom-0 bg-opacity-75 bg-black text-white p-2 w-full rounded-b-lg">
              <p>Top Post 1 Title</p>
            </div>
          </div>
          <div className="relative">
            <img src={Rectangle28} alt="Top Post 2" className="w-full h-32 object-cover rounded-lg" />
            <div className="absolute bottom-0 bg-opacity-75 bg-black text-white p-2 w-full rounded-b-lg">
              <p>Top Post 2 Title</p>
            </div>
          </div>
          <div className="relative">
            <img src={Govnor} alt="Top Post 3" className="w-full h-32 object-cover rounded-lg" />
            <div className="absolute bottom-0 bg-opacity-75 bg-black text-white p-2 w-full rounded-b-lg">
              <p>Top Post 3 Title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReaderDashboard;
