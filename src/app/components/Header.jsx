import React from 'react'

import {HiMenu} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
import Image from 'next/image'
import "../styles/Header.css"
import { Lato } from 'next/font/google'

const lato400 = Lato({weight:'400',subsets:['latin']})
const lato700 = Lato({weight:'700',subsets:['latin']})

import psgLogo from '../public/images/psgLogo.jpeg'
import g20 from '../public/images/G20.png'

export default function Header() {
  return (

    <nav className='wrapper w-full sticky top-0 bg-white z-50'>
        {/*  Top Header */}
        <div className={lato400.className}>
      <div className="flex flex-row w-full p-4 justify-between items-center">
        <div className="flex flex-row w-2/5 items-center">
            <div className="flex">
            <Image src={psgLogo} className='w-auto h-16' alt=""/>
            <Image src={g20} className='w-auto h-16' alt=""/>
            </div>
            <div className=" flex justify-center w-full text-xl text-bold">
                <div className={lato700.className}>PSG College of Technology</div>
            </div>
          
        </div>
        {/* Search Bar */}
        <div className="w-1/5 h-12 border-2 border-gray-300 rounded-3xl focus:border-gray-300 p-1.5 flex flex-row items-center justify-between ">
        <input type="text"  placeholder='Search' className='focus:outline-none px-2'/>
        <BsSearch className='mr-2'/>
        </div>
        {/* Right side */}
        <div className="flex flex-row justify-around w-2/5 items-center">
            <div className="">
              <div className="relative">
                  <input type="checkbox" id="sortboxStudents" className="hidden absolute" />
                  <label for="sortboxStudents" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Students</span>
                  </label>
                      <div id="sortboxmenuStudents" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Student Portal</a></li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxParents" className="hidden absolute" />
                  <label for="sortboxParents" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Parents</span>
                  </label>
                      <div id="sortboxmenuParents" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Parents Portal</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Note to Parents</a></li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxAlumni" className="hidden absolute" />
                  <label for="sortboxAlumni" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Alumni</span>
                  </label>
                      <div id="sortboxmenuAlumni" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Alumni Center</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Alumni achievements</a></li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxCareers" className="hidden absolute" />
                  <label for="sortboxCareers" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Careers</span>
                  </label>
                      <div id="sortboxmenuCareers" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Careers at PSG</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Apply</a></li>
                      </ul>
                  </div>
              </div>
            </div>
            <HiMenu className=' w-6 h-6'/>
        </div>
      </div>
      {/* second half */}
      <div className="flex flex-row w-full p-4 justify-between pl-12 pr-12 border-t-2 border-gray-300 border-b-3 shadow-md mb-4">
        <div className="">
        Home
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxAbout" className="hidden absolute" />
                  <label for="sortboxAbout" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">About</span>
                  </label>
                      <div id="sortboxmenuAbout" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">About PSG</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Campus Life</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxAcademics" className="hidden absolute" />
                  <label for="sortboxAcademics" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Academics</span>
                  </label>
                      <div id="sortboxmenuAcademics" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Departments</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Faculty</a></li> 
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxFacilities" className="hidden absolute" />
                  <label for="sortboxFacilities" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Facilities</span>
                  </label>
                      <div id="sortboxmenuFacilities" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Labs</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Sports</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Events</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxAdmission" className="hidden absolute" />
                  <label for="sortboxAdmission" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Admission</span>
                  </label>
                      <div id="sortboxmenuAdmission" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Dates to note</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Apply Now</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Application Details</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxResearch" className="hidden absolute" />
                  <label for="sortboxResearch" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Research</span>
                  </label>
                      <div id="sortboxmenuResearch" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Publications</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Ongoing work</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Awards</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxIndustry" className="hidden absolute" />
                  <label for="sortboxIndustry" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Industry</span>
                  </label>
                      <div id="sortboxmenuIndustry" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Publications</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Ongoing work</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Awards</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxMore" className="hidden absolute" />
                  <label for="sortboxMore" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">More</span>
                  </label>
                      <div id="sortboxmenuMore" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Featured</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Newest</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: Low to High</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: High to Low</a></li>
                      </ul>
                  </div>
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxContact" className="hidden absolute" />
                  <label for="sortboxContact" className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-md">Contact</span>
                  </label>
                      <div id="sortboxmenuContact" className="absolute mt-3 right-1 top-full m-2 min-w-max shadow opacity-0 bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-right text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Featured</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Newest</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: Low to High</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: High to Low</a></li>
                      </ul>
                  </div>
              </div>
        </div>
      </div>
    </div>

    </nav>
  )
}
