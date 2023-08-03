import React from 'react';
import Image from 'next/image';

const Announcements = () => {
  return (
    <div className="w-full bg-white text-center">
      <p className="text-4xl text-black font-normal py-6">Announcements</p>
      {/* First Row */}
      <div className="flex justify-center pt-4">
        <div className="flex justify-center gap-4">
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
        </div>
      </div>
      {/* Second Row */}
      <div className="flex justify-center mt-4">
        <div className="flex justify-center gap-4">
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
          <Image src="/Announcements_EX.jpg" alt="My Image" width={400} height={300} />
        </div>
      </div>
      {/* Link */}
      <div className="flex justify-center mt-8">
        <a href="https://github.com/PSG-Website/psg-website/tree/main/public" className="text-2xl text-black font-normal underline">
          READ                    ANNOUNCEMENTS                  AND                 CIRCULARS
        </a>
      </div>
      {/* Padding below the Link */}
      <div className="py-8"></div>
    </div>
  );
};

export default Announcements;
