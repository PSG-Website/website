"use client"
import { useState, useEffect } from 'react';
import { Lato } from 'next/font/google';

const lato700 = Lato({ weight: '700', subsets: ['latin'] });

export default function Message() {
  const messages = ["Admissions for students for first round BE/Btech councelling", "Regarding orientation sessions for first year BE/Btech Students ", "Announcement of Results for second semester BE/Btech students"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const autoChangeInterval = setInterval(showNextMessage, 5000);
    return () => clearInterval(autoChangeInterval);
  }, [currentMessageIndex]);

  const showNextMessage = () => {
    setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
  };

  const showPreviousMessage = () => {
    setCurrentMessageIndex((currentMessageIndex - 1 + messages.length) % messages.length);
  };

  return (
    <main className={lato700.className}>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-[250px] h-[220px] p-4 border bg-white shadow-md text-center relative rounded-lg">
      <div className="flex justify-between mb-[20px] ">
          <span
            className="text-2xl cursor-pointer p-1  "
            onClick={showPreviousMessage}
          >
            &larr;
          </span>
          <h2 className=' h-[30px] pl-6 pt-[2px] pr-6 rounded-lg mt-2 bg-[#2b324a] text-white'>News</h2>
          
          <span
            className="text-2xl cursor-pointer p-1 "
            onClick={showNextMessage}
          >
            &rarr;
          </span>
        </div>
        <div className="mb-4">
          <p className=" text-md font-bold">{messages[currentMessageIndex]}</p>
        </div>
        
        <span className='p-1 pl-5 pr-5 mt-4 border-2 border-black mb-6 rounded-lg hover:bg-[#3e59b8] cursor-pointer hover:text-white '  > View</span>
        <br/>
        
      </div>
    </div>
    </main>
  );
}
