import React from 'react';
import Image from 'next/image';
import radioClub from "../public/images/RadioClub.png";
import glfLogo from "../public/images/GlfLogo.png";
import IIC from "../public/images/Rectangle 31.png";
import Dramatix from "../public/images/Dramatix.png";
import PSGTECHCLUB from "../public/images/PSGTECHCLUB.png";
import { Lexend_Deca } from 'next/font/google';

const Lexend700 = Lexend_Deca({weight:'700',subsets:['latin']})
const Lexend500 = Lexend_Deca({weight:'500',subsets:['latin']})

export default function Highlights() {
    return(
        <div className='w-full'>
            <div className="card flex flex-col item-center text-center bg-gradient-to-r from-[rgba(43,75,171,0.9)] to-[rgba(0,0,0,0.9)] w-full">
                <div className="flex text-center w-full pt-8">
                    <div className="flex w-full text-white opacity-90 text-5xl justify-center pr-2">
                        <p className={Lexend700.className}>Not just Academics</p>
                        <div className={Lexend700.className}><p className="text-[#ffff00] pl-2">There&apos;s more!</p></div>
                    </div>
                </div> 
                <div className='text-center text-[rgba(255,255,255,0.59)] text-2xl'>

                    <div className="pt-4 "><p className={Lexend500.className}>Clubs and Councils to enjoy, learn, and experience.</p></div>
                    <div className="pt-4"><p className={Lexend500.className}>By the students, and For the Students</p></div>
                </div>
                <div className="flex flex-row pt-20 items-center justify-center ">
                    <div>
                        <Image src={radioClub} alt=""  className=''/>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row space-x-5 items-center justify-center h-1/2">
                            <div>
                                <Image className ="pl-5" src={glfLogo} alt="" />
                            </div>
                            <div className ="bg-[#D9D9D9] rounded-xl w-94">
                                <div>
                                    <Image className="p-5 " src={IIC} alt="" /> 
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row h-1/2 items-baseline">
                            <div>
                                <Image className="pl-10 pr-5 h-48 " src={Dramatix} alt="" />
                            </div>
                            <div>
                                <Image className="pt-5" src={PSGTECHCLUB} alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex items-end justify-center pt-16 pb-6">
                    <div className="flex">
                        <button className='bg-blue-600 rounded-lg p-4 text-lg text-bold text-white'>
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}


