
"use client"
import { useState } from 'react';
import Image from 'next/image';
import tray1 from '../public/images/contract.png'
import tray2 from '../public/images/picture.png'
import tray3 from '../public/images/planner.png'
import tray4 from '../public/images/top-three.png'
import logo from '../public/images/roundlogo.png'
import { Lato } from 'next/font/google'


const lato700 = Lato({ weight: '700', subsets: ['latin'] });

const Tray = () => {
  
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    

   

  return (
    <main className={lato700.className}>
    <div className="flex">
      <div className="bg-[#3e59b8] text-white absolute inset-x-[95%] inset-y-[20%] w-[60px] h-[350px] z-20  roundwed rounded-l-[15px]">
        <div className='relative inset-x-[20%] inset-y-[10%] hover:bg-[#d1dbfd] h-[20%] w-[80%] rounded-l-[30%]' onClick={toggleSidebar}>
        <Image src={tray1} width={30} height={30} className='relative inset-x-[10%] inset-y-[30%] cursor-pointer'></Image>
        </div>
        <div className='relative inset-x-[20%] inset-y-[10%] hover:bg-[#d1dbfd] h-[20%] w-[80%] rounded-l-[30%] cursor-pointer' onClick={toggleSidebar}>
        <Image src={tray2} width={30} height={30} className='relative inset-x-[10%] inset-y-[30%]'></Image>
        </div>
        <div className='relative inset-x-[20%] inset-y-[10%] hover:bg-[#d1dbfd] h-[20%] w-[80%] rounded-l-[30%] cursor-pointer' onClick={toggleSidebar}>
        <Image src={tray3} width={30} height={30} className='relative inset-x-[10%] inset-y-[30%]'></Image>
        </div>
        <div className='relative inset-x-[20%] inset-y-[10%] hover:bg-[#d1dbfd] h-[20%] w-[80%] rounded-l-[30%] cursor-pointer' onClick={toggleSidebar}>
        <Image src={tray4} width={30} height={30} className='relative inset-x-[10%] inset-y-[30%]'></Image>
        </div>
      </div>
      <div className={`fixed inset-y-[25%] right-0 w-[23%] rounded-l-[20px] z-40 overflow-hidden h-[450px] bg-[#2B324A] text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button className="absolute top-4 right-4 text-xl text-[#ffffff] bg-[#2B324A] w-[9%] hover:bg-white rounded-[5px] hover:text-[#2B324A] transition" onClick={toggleSidebar}>
        X
      </button>
      <div className=' h-[100%] rounded-l-[15%]'>
        {/* Sidebar content goes here */}
        <div className='w-[100%] h-[30%]  bg-[#3e59b8] shadow-md shadow-[#5d70b6]'>
          
          <span className='relative w-80 inset-x-[5%] inset-y-[45%] text-[25px]'>PSG College Of Technology</span>
        </div>
        <ul className="space-y-2 relative inset-x-[5%] inset-y-[10%] ">
          <li className='border-b-2 border-[#3e59b8] text-[#3e59b8] rounded-l-[10px] m-[7px] mt-[15px] p-[10px]  align-text-bottom bg-white hover:bg-[#3e59b8] hover:text-[#fff] transition cursor-pointer'><a href='#'>Academics</a></li>
          <li className='border-b-2 border-[#3e59b8] text-[#3e59b8] rounded-l-[10px] m-[7px] my-[15px] p-[10px]  align-text-bottom bg-white hover:bg-[#3e59b8] hover:text-[#fff] transition cursor-pointer' ><a href='#'>Gallery</a></li>
          <li className='border-b-2 border-[#3e59b8] text-[#3e59b8] rounded-l-[10px] m-[7px] my-[15px] p-[10px]  align-text-bottom bg-white hover:bg-[#3e59b8] hover:text-[#fff] transition cursor-pointer'><a href='#'>Events</a></li>
          <li className='border-b-2 border-[#3e59b8] text-[#3e59b8] rounded-l-[10px] m-[7px] my-[15px] p-[10px]  align-text-bottom bg-white hover:bg-[#3e59b8] hover:text-[#fff] transition cursor-pointer'><a href='#'>Rankings</a></li>
          {/* Add more menu items */}
        </ul>
      </div>
    </div>
    </div>
    </main>
  );
};

export default Tray;