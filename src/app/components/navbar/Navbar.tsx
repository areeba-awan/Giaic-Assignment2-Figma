// Navbar Links Page  

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="text-white flex justify-between items-center p-6 pt-2">
      {/* Company Name */}
      <div className="pl-12">
        <h3 className="font-Montserrat font-bold text-2xl leading-8 tracking-wide pl-8">
          BrandName
        </h3>
      </div>

      {/* Navigation Links */}
      <div className="flex pr-52 text-sm font-bold gap-5 text-white">
        <Link href="#" className="text-white hover:text-gray-400 ">Home</Link>
        <Link href="#" className="text-white hover:text-gray-400 ">Product</Link>
        <Link href="#" className="text-white hover:text-gray-400 ">Pricing</Link>
        <Link href="#" className="text-white hover:text-gray-400 ">Contact</Link>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 pr-20">
        {/* Login Button */}
        <button className="text-white font-bold text-sm py-3 px-5 hover:text-gray-400">
          Login
        </button>
        
        {/* Join Us Button */}
        <button
          className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-5 hover:bg-blue-600 transition-all rounded-md"
        >
          JOIN US
        </button>
      </div>
    </nav>
  );
};


