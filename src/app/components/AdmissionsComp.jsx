import { Lexend_Deca} from 'next/font/google'
import React from 'react'
const Lexend500 = Lexend_Deca({ weight: '500' ,subsets:['latin']})
const Lexend400 = Lexend_Deca({ weight: '400' ,subsets:['latin']})
const Lexend300 = Lexend_Deca({ weight: '300' ,subsets:['latin']})
const Lexend200 = Lexend_Deca({ weight: '200' ,subsets:['latin']})

export default function AdmissionsComp() {
  return (
    <div className="w-full px-12">
        <div className="flex flex-row w-full ">
            <div className="flex flex-col w-1/2 bg-[#3E59B8] pb-8 justify-center">
                <div className=' px-16 pt-12 text-left text-5xl text-bold text-white'>
                <p className={Lexend500.className}>
                    2023 Admissions Open Now!
                </p>
                </div>
                <div className='px-16 text-gray-900 pt-4 text-xl'>
                    <p className={Lexend300.className}>
                    Choose your path to success
                    </p>
                </div>
                <section className="w-3/5 flex flex-row  py-6 justify-left px-16">
                    <div className="">
                        <button className='bg-[#2A324A] text-white p-2 rounded-md'>
                            Learn More
                        </button>
                    </div>
                    <div className="px-6">
                        <button className='text-[#153243] p-2 bg-white rounded-md'>
                            Apply Now
                        </button>
                    </div>       
                </section>
            </div>
            <div className="flex flex-col w-1/2 justify-center items-center bg-[#2A324A] px-20 py-12 ">
                <div className="flex flex-row bg-white item-center p-4 justify-center rounded-xl items-center">
                    <div className="bg-[#3E59B8] w-20 h-16 rounded-full"></div>

                    <div className=" flex flex-col py-4 px-6">
                        <div className='text-3xl text-bold'><p className={Lexend500.className}>Programmes Offered</p></div>
                        <div>
                            <p className={Lexend300.className}>
                            We offer world class engineering courses for almost any field imaginable
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row bg-white item-center p-4 justify-center mt-8 rounded-xl items-center">
                    <div className="bg-[#3E59B8] w-20 h-16 rounded-full"></div>
                    <div className=" flex flex-col py-4 px-6">
                        <div className='text-3xl text-bold '>
                            <p className={Lexend500.className}>
                            Admissions Procedure
                            </p>
                        </div>
                        <div>
                            <p className={Lexend300.className}>
                                We offer world class engineering courses for almost any field imaginable
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/8"></div>
        </div>
    </div>
  )
}
