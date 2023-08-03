'use client'
import React , { useState } from 'react'
import Image from 'next/image';
import carousel1 from '../public/images/carousel1.jpg'
import carousel2 from '../public/images/carousel2.jpg'
import carousel3 from '../public/images/carousel3.jpg'
import carousel4 from '../public/images/carousel4.jpg'
import carousel5 from '../public/images/carousel5.jpg'
// import Carousel from './IntroCarousel1'

const images = [
    carousel1,carousel2,carousel3,carousel4,carousel5
  ];


export default function Intro() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <div className='w-full pb-12'>
        <div className="flex flex-col pt-12 w-full">
            <div className='flex justify-center font-bold w-full pb-12 text-3xl'>Welcome to PSG College of Technology</div>
            <div className="flex flex-row w-full px-20">
                <div className="flex w-3/5 items-stretch">


                    {/* <Carousel/> */}
                    <div id="default-carousel" className=" flex w-full flex-row bg-slate-50 rounded-xl">
                        <div className="flex w-1/8">
                        <button type="button" onClick={previousImage} className="top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        </div>

                        <div className=" w-max rounded-xl bg-green-300">
                            <div className="duration-700 ease-in-out">
                                <Image
                                src={images[currentImageIndex]}
                                className="w-98 h-auto object-cover rounded-xl"
                                alt={`Image ${currentImageIndex + 1}`}
                                width={900}
                                height={900}
                                />
                            </div>
                        </div>
                        <div className="flex  w-1/8">
                        <button type="button" onClick={nextImage} className=" top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                        </div>
                    </div>
                    {/* <Carousel/> */}


                </div>
                <div className="flex flex-col w-2/5 px-8 items-center">
                    <p className='text-justify px-8 pb-4'>
                    PSG College of Technology, an ISO 9001:2015 certified institution is one of the foremost institutions founded by the PSG & Sons&apos; Charities Trust (1926). The College was established in the year 1951 and the Founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industry-institute interaction.<br/><br/>
                    Provide world-class Engineering Education, Foster Research and Development. Evolve innovative applications of Technology. Encourage Entrepreneurship. Ultimately mould young men and women capable of assuming leadership of the society for the betterment of the Country.
                    </p>
                    <button type="button" className='bg-[#304EA5] p-3 px-4 text-white rounded-lg'> More about PSG College of Technology</button>
                </div>
                
            </div>
        </div>
    </div>
    )
}
