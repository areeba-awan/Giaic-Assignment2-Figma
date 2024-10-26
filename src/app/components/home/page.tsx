// Home Page (component)

import React from 'react';

export default function Home(){
  return (
    <section className='pt-10 pb-20 r'>
        <div className='flex justify-center text-center items-center'>
            <div className='max-w-2xl h-[496px]'>
                <h5 className='text-sm font-bold text-[#23A6F0] font-montserrat'>Welcome</h5>
            
                <h1 className='text-6xl py-10 text-white font-bold font-montserrat'>Selling on the internet like a pro</h1>

                <h4 className='text-xl text-white'>We know how large objects will act, but things on a 
                small scale just do not act that way.</h4>

                                    {/* Login Button */}
                <div className="flex justify-center text-center items-centerspace-x-4 py-10 gap-10">

                <button className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-5 hover:bg-blue-600 transition-all rounded-md w-40">
                    Get Quote Now
                    </button>
                             {/* Join Us Button */}
                    <button className="text-white font-bold text-sm border border-[#23A6F0]  hover:text-gray-400 rounded-md w-40">
                        Learn More
                    </button>
        
 
                    
                </div>
            </div>
        </div>
    </section>
  );
};

