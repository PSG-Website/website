"use client"
import React from 'react'

import { useState } from 'react';
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

    const [dropdown1Open, setDropdownOpen] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);
    const [dropdown3Open, setDropdown3Open] = useState(false);
    const [dropdown4Open, setDropdown4Open] = useState(false);
    const [dropdown5Open, setDropdown5Open] = useState(false);
    const [dropdown6Open, setDropdown6Open] = useState(false);
    const [dropdown7Open, setDropdown7Open] = useState(false);
    const [dropdown8Open, setDropdown8Open] = useState(false);
    const [dropdown9Open, setDropdown9Open] = useState(false);
    const [dropdown10Open, setDropdown10Open] = useState(false);
    const [dropdown11Open, setDropdown11Open] = useState(false);
    const [dropdown12Open, setDropdown12Open] = useState(false);


  const toggleDropdown1 = () => {
    setDropdownOpen(!dropdown1Open);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
    setDropdownOpen(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown4 = () => {
    setDropdown4Open(!dropdown4Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown5 = () => {
    setDropdown5Open(!dropdown5Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown6 = () => {
    setDropdown6Open(!dropdown6Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown7 = () => {
    setDropdown7Open(!dropdown7Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown8 = () => {
    setDropdown8Open(!dropdown8Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown9 = () => {
    setDropdown9Open(!dropdown9Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown10 = () => {
    setDropdown10Open(!dropdown10Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown11Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown11 = () => {
    setDropdown11Open(!dropdown11Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown12Open(false);
  };

  const toggleDropdown12 = () => {
    setDropdown12Open(!dropdown12Open);
    setDropdownOpen(false);
    setDropdown2Open(false);
    setDropdown3Open(false);
    setDropdown4Open(false);
    setDropdown5Open(false);
    setDropdown6Open(false);
    setDropdown7Open(false);
    setDropdown8Open(false);
    setDropdown9Open(false);
    setDropdown10Open(false);
    setDropdown11Open(false);
  };


  

  return (

    <nav className='wrapper w-full sticky top-0 bg-white z-50'>
        {/*  Top Header */}
        <div className={lato400.className}>
      <div className="flex flex-row w-full p-4 justify-between items-center bg-[#3E59B8] text-white">
        <div className="flex flex-row w-2/5 items-center">
            <div className="flex">
            <Image src={psgLogo} className='w-auto h-16' alt=""/>
            <Image src={g20} className='w-auto h-16 hidden' alt=""/>
            </div>
            <div className=" flex pl-2 w-full text-xl text-bold">
                <div className={lato700.className}>PSG College of Technology</div>
            </div>
          
        </div>
        {/* Search Bar */}
        <div className="w-1/5 h-12 border-2 border-gray-300 rounded-3xl focus:border-gray-300 p-1.5 flex flex-row items-center justify-between ">
        <input type="text"  placeholder='Search' className='focus:outline-none bg-[#3E59B8] px-2'/>
        <BsSearch className='mr-2'/>
        </div>
        {/* Right side */}
        <div className="flex flex-row justify-around w-2/5 items-center">
            <div className="">
              <div className="relative">
                  <input type="checkbox" id="sortboxStudents" className="hidden absolute" />
                  <label for="sortboxStudents" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown4} className="text-md">Students</span>
                  </label>
                  {dropdown4Open && (
                      <div id="sortboxmenuStudents" className="absolute mt-3 right-[-30px]  min-w-max shadow bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Student Portal</a></li>
                      </ul>
                  </div>
                  )}
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxParents" className="hidden absolute" />
                  <label for="sortboxParents" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown1} className="text-md">Parents</span>
                  </label>
                  {dropdown1Open && (
                      <div id="sortboxmenuParents" className="absolute mt-3 right-[-50px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Parents Portal</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Note to Parents</a></li>
                      </ul>
                  </div>
                  )}
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxAlumni" className="hidden absolute" />
                  <label for="sortboxAlumni" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown2} className="text-md">Alumni</span>
                  </label>
                  {dropdown2Open && (
                      <div id="sortboxmenuAlumni" className="absolute mt-3 right-[-70px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Alumni Center</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Alumni achievements</a></li>
                      </ul>
                  </div>
                  )}
              </div>
            </div>
            <div className="">
            <div className="relative">
                  <input type="checkbox" id="sortboxCareers" className="hidden absolute" />
                  <label for="sortboxCareers" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown3} className="text-md">Careers</span>
                  </label>
                  {dropdown3Open && (
                      <div id="sortboxmenuCareers" className="absolute mt-3 right-[-50px] top-full m-2 min-w-max shadow bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block  text-gray-900 space-y-1 text-center">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Careers at PSG</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Apply</a></li>
                      </ul>
                  </div>
                  )}
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
                  <span onClick={toggleDropdown5} className="text-md">About</span>
                  </label>
                  {dropdown5Open && (
                      <div id="sortboxmenuAbout" className="absolute mt-3 right-[-40px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">About PSG</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Campus Life</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxAcademics" className="hidden absolute" />
                  <label for="sortboxAcademics" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown6} className="text-md">Academics</span>
                  </label>
                  {dropdown6Open && (
                      <div id="sortboxmenuAcademics" className="absolute mt-3 right-[-30px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Departments</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Faculty</a></li> 
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxFacilities" className="hidden absolute" />
                  <label for="sortboxFacilities" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown7} className="text-md">Facilities</span>
                  </label>
                  {dropdown7Open && (
                      <div id="sortboxmenuFacilities" className="absolute mt-3 right-[-10px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Labs</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Sports</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Events</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxAdmission" className="hidden absolute" />
                  <label for="sortboxAdmission" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown8} className="text-md">Admission</span>
                  </label>
                  {dropdown8Open && (
                      <div id="sortboxmenuAdmission" className="absolute mt-3 right-[-50px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Dates to note</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Apply Now</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Application Details</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxResearch" className="hidden absolute" />
                  <label for="sortboxResearch" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown9} className="text-md">Research</span>
                  </label>
                  {dropdown9Open && (
                      <div id="sortboxmenuResearch" className="absolute mt-3 right-[-40px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Publications</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Ongoing work</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Awards</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxIndustry" className="hidden absolute" />
                  <label for="sortboxIndustry" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown10} className="text-md">Industry</span>
                  </label>
                  {dropdown10Open && (
                      <div id="sortboxmenuIndustry" className="absolute mt-3 right-[-40px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Publications</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Ongoing work</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Awards</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxMore" className="hidden absolute" />
                  <label for="sortboxMore" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown11} className="text-md">More</span>
                  </label>
                  {dropdown11Open && (
                      <div id="sortboxmenuMore" className="absolute mt-3 right-[-50px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-10 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Featured</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Newest</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: Low to High</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: High to Low</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
        <div className="">
        <div className="relative">
                  <input type="checkbox" id="sortboxContact" className="hidden absolute" />
                  <label for="sortboxContact" className="flex items-center space-x-1 cursor-pointer">
                  <span onClick={toggleDropdown12} className="text-md">Contact</span>
                  </label>
                  {dropdown12Open && (
                      <div id="sortboxmenuContact" className="absolute mt-3 right-[-40px] top-full m-2 min-w-max shadow  bg-slate-200 border-0 border-gray-400 transition delay-75 ease-in-out z-50 rounded-xl">
                      <ul className="block text-center text-gray-900 space-y-1">
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Featured</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Newest</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: Low to High</a></li>
                          <li><a href="#" className="block px-3 py-2 hover:bg-gray-50 hover:border-b-2 hover:border-slate-300 ">Price: High to Low</a></li>
                      </ul>
                  </div>
                  )}
              </div>
        </div>
      </div>
    </div>

    </nav>
   
  )
}
