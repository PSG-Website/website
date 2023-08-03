import React from 'react'
import { Lexend_Deca , Lato} from 'next/font/google'
import {PiBooks} from 'react-icons/pi'
import Image from 'next/image'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {GiTeacher, GiPodium} from 'react-icons/gi'
import { IoSchool } from 'react-icons/io5'

import PSGBuilding from '../public/images/psgMainBuilding.png'
import Bridge from '../public/images/bridgeArt.jpg'

const lexend500 = Lexend_Deca({weight:'500' ,subsets:['latin']})
const lexend700 = Lexend_Deca({weight:'700' ,subsets:['latin']})
const lexend900 = Lexend_Deca({weight:'900' ,subsets:['latin']})
const lexend300 = Lexend_Deca({weight:'300' ,subsets:['latin']})
const lato400 = Lato({weight:'400',subsets:['latin']})

export default function CollegeStats() {
  return (
    <div className='flex flex-col py-10 w-full items-center bg-[#F5F5F7] mt-4'>
        <div className="text-5xl items-center justify-center pb-4">
            <p className={lexend500.className}>
                College stats
            </p>
        </div>
        <div className="w-full px-10">
            <div className="flex flex-col justify-center py-10 items-center space-y-8 ">
                <div className="flex flex-row space-x-8">
                    <div className=" rounded-xl aspect-square items-center flex justify-center text-center shadow-lg" >
                        <Image
                        src={PSGBuilding}
                        className=' object-cover h-full w-60 rounded-xl shadow-lg'
                        />
                    </div>
                    <div className=" rounded-xl aspect-square items-center flex w-60 flex-col justify-around space-y-8 " >
                        <div className="h-1/2 justify-center flex bg-gradient-to-tr from-white to-slate-300 text-center items-center w-full rounded-xl shadow-md">
                            <div className="flex flex-row">
                                <div className="flex w-1/3 items-center justify-center">
                                    <GiPodium className='flex text-6xl text-blue-500 items-center mb-2'/>
                                </div>
                                <div className="flex flex-col w-2/3 pl-4">
                                    <div className="flex h-1/2 text-3xl">
                                        <p className={lexend700.className}>48th</p>
                                    </div>
                                    <div className="flex h-1/2 text-left">
                                        <p className={lexend500.className}>NIRF Ranking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/2 justify-center flex bg-white text-center items-center w-full rounded-xl shadow-md bg-gradient-to-bl from-white to-slate-300">
                            <div className="flex flex-row">
                                <div className="flex w-1/3 items-center text-center justify-center">
                                    <IoSchool className='text-6xl flex items-center'/>
                                </div>
                                <div className="flex flex-col w-2/3 p-4">
                                    <div className="flex h-1/2 text-3xl">
                                        <p className={lexend700.className}>99%</p>
                                    </div>
                                    <div className="flex h-1/2 text-left">
                                        <p className={lexend500.className}>Graduation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                <div className=" rounded-xl aspect-square items-center flex justify-center text-center" >
                        <div className='w-60'>
                            <div className="flex flex-row space-x-4">
                                <div className="felx flex-col w-1/2 space-y-4">
                                    <div className="flex rounded-xl shadow-lg item-center aspect-square bg-gradient-to-r from-orange-600 to-orange-400 text-center items-center justify-center flex-col">
                                        <PiBooks className='h-1/2 w-1/2 text-white' /> 
                                        <div className="text-xl text-white">
                                            <p className={lexend500.className}>
                                            Library
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex rounded-xl flex-col shadow-lg item-center aspect-square bg-gradient-to-r from-[#647ED3] to-[#889ad7] text-center items-center justify-center">
                                        <HiOutlineDesktopComputer className='w-1/2 h-1/2 text-white'/>
                                        <div className="text-xl text-white">
                                            <p className={lexend500.className}>
                                            Computer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-1/2 rounded-xl shadow-lg bg-gradient-to-r to-[#B9C6F3] from-[#7d96ef] items-center justify-around flex-col py-2">
                                    <div className="flex flex-col ">
                                        <div className="text-xl text-black text-bold">
                                            <p className={lexend900.className}>1000+</p>
                                        </div>
                                        <div className="text-md text-slate-700">
                                            <p className={lexend500.className}>Staffs</p>
                                        </div>
                                    </div> 
                                    <GiTeacher className='w-1/2 h-1/2 text-[#003F80]'/>
                                    <div className="">
                                        <div className="text-xl text-black text-bold">
                                            <p className={lexend900.className}>1000+</p>
                                        </div>
                                        <div className="text-md text-slate-700">
                                            <p className={lexend500.className}>Faculties</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" rounded-xl aspect-square bg-gradient-to-b from-[#f7f7f7] from-50% to-slate-300 items-top flex justify-center text-center shadow-lg" >
                        <div className='w-60 flex flex-col'>
                            <div className="flex h-1/2">
                                <Image src={Bridge} className='h-auto w-auto' alt="" />
                            </div>
                            <div className="flex h-1/2 flex-col text-left pl-5 pt-4 space-y-4">
                                <div className="text-4xl text-black text-bold">
                                    <p className={lexend900.className}>Safety</p>
                                </div>
                                <div className="text-xl text-slate-700">
                                    <p className={lexend500.className}>Is the poririty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
