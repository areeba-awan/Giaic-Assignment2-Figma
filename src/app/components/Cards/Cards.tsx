// Component of cards through Figma

import React from 'react'

export default function Cards() {
  return (
    <section className='flex justify-center text-center items-center gap-8 pt-[-10px] pb-20 '>

         {/* Card 1 */}
    <div className='bg-white w-80 h-72'>
        <div className='bg-[#FFDCD1] w-16 h-16 mt-5 ml-5 rounded-xl'></div>
        <h3 className='font-bold text-base mt-5 relative right-20'>training Courses</h3>
        <div className='w-12 h-1 bg-[#E74040] mt-5 ml-5'></div>
        <p className='text-sm font-normal w-[222px] h-[60px] mt-5 ml-5 text-left'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>

         {/* Card 2 */}
    <div className='bg-white w-80 h-72'>
        <div className='bg-[#B9EAA8] w-16 h-16 mt-5 ml-5 rounded-xl'></div>
        <h3 className='font-bold text-base mt-5 relative right-20'>2,769 online courses</h3>
        <div className='w-12 h-1 bg-[#E74040] mt-5 ml-5'></div>
        <p className='text-sm font-normal w-[222px] h-[60px] mt-5 ml-5 text-left'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>

         {/* Card 3 */}
    <div className='bg-[#23A6F0] w-80 h-72'>
        <div className='bg-white w-16 h-16 mt-5 ml-5 rounded-xl'></div>
        <h3 className='font-bold text-white text-base mt-5 relative right-20'>training courses</h3>
        <div className='w-12 h-1 bg-white mt-5 ml-5'></div>
        <p className='text-sm text-white font-normal w-[222px] h-[60px] mt-5 ml-5 text-left'>The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>

    </section>
  );
};

