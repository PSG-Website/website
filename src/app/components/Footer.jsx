import React from 'react';
import "../styles/footer.css"
import bgImg from "../public/images/footerBg.png";
import map from "../public/images/mapLocation.png";
import logo from "../public/images/Logo.png"
import g20 from "../public/images/G20.png"
import Image from 'next/image';

 import { AiFillPhone } from "react-icons/ai";
  import { AiOutlineAim } from "react-icons/ai";
  import { AiFillPrinter } from "react-icons/ai";
  import { BiLogoFacebookCircle } from "react-icons/bi";
  import { BiLogoGmail } from "react-icons/bi";
  import { BiLogoYoutube } from "react-icons/bi";
  import { BiLogoLinkedinSquare } from "react-icons/bi";
  import { BiLogoTwitter } from "react-icons/bi";
  


export default function Footer() {
    return (
    <div >
       <div className="bg-[#1D2D58] opacity-90 h-[650px] w-full">
            {/* <Image width={10000} height={10000} src={bgImg} alt="PSG College of Technology" /> */}
            <div className="flex flex-col" >
                <div className="UpperPortion flex ">
                    <div>
                        <Image className="Map" src={map} alt="" widht={300} height={300}/>
                    </div>
                    <div className="flex flex-col h-full">
                    
                            <div className="flex flex-col pt-5">  
                                <h1 className="text-yellow-500">Quick Links</h1>
                                <div className=" flex pt-3">
                                    <p className="Inner-text">Annual Report </p>
                                    <p className="Inner-text">Feedback </p>
                                    <p className="Inner-text">contact </p>
                                    <p className="Inner-text">Quality Policy </p>
                                    <p className="Inner-text">ISO 9001:2015 </p>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className="text-yellow-500 pt-10">Explore</h1>
                                    <div className=" flex pt-3">
                                        <p className="Inner-text">Home </p>
                                        <p className="Inner-text">Academics </p>
                                        <p className="Inner-text">Admissions </p>
                                        <p className="Inner-text">Exam </p>
                                        <p className="Inner-text">NAAC </p>
                                        <p className="Inner-text">Research </p>
                                        <p className="Inner-text">Industry </p>
                                        <p className="Inner-text">InduTech </p>
                                    </div>
                                    <div className=" flex pt-6">
                                        <p className="Inner-text">PSG Mail </p>
                                        <p className="Inner-text">Student </p>
                                        <p className="Inner-text">Parent </p>
                                        <p className="Inner-text">Alumni </p>
                                        <p className="Inner-text">Career </p>
                                        <p className="Inner-text">IIC </p>
                                        <p className="Inner-text">Library </p>
                                        <p className="Inner-text">UGC/ AICTE Mandatory Committee</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-yellow-500 pt-9">Department</h1>
                        </div>
                        <div className="pl-48 pt-10">
                            <div className="flex">
                                <div>
                                    <Image className="pr-1" src={logo} alt="" width={80} height={80}/>
                                </div>                          
                                <div className='flex flex-col'>
                                    <div className="PSG_LOGO text-white font-medium">PSG</div>
                                    <div className="logo_text">College of </div>                                
                                    <div className="logo_text">Technology </div>                                
                                </div>
                                <div className="border-t border-black my-4"></div>
                                <div className='tagline'></div>
                                <Image className="px-5" src={g20} alt="" widht={200} height={100}/>
                            </div>
                        </div> {/*  logo portion is done */}
                    <div/>
                    </div>
                </div>    {/*  upper portion is done  */}
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex">
                            <AiOutlineAim className=" ml-5 text-white text-3xl opacity-90 mt-2 mr-3"/>
                            <div className="flex flex-col">
                                <div className="address">Post Box No. 1611</div>
                                <div className="address">Peelamedu</div>
                                <div className="address">Coimbatore - 641004</div>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <AiFillPhone className=" ml-5 text-white text-3xl opacity-90  mr-3"/>
                            <div className="flex flex-col">
                                <div className="address mt-1">0422-2572177, 2572477, 4344777</div>                           
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <AiFillPrinter className=" ml-5 text-white text-3xl opacity-90 mr-3"/>
                            <div className="flex flex-col">
                                <div className="address mt-1">0422-2592277</div>
                            </div>
                        </div>
                        <div className="text-yellow-500 px-5 pt-5 font-semibold">
                            Social Connect
                        </div>
                        <div className="flex space-x-3 px-5 pt-5 ">
                            <BiLogoFacebookCircle className=" text-4xl text-slate-200"/>
                            <BiLogoGmail className=" text-4xl text-slate-200"/>
                            <BiLogoYoutube className="text-4xl text-slate-200"/>
                            <BiLogoTwitter className=" text-4xl text-slate-200"/>
                            <BiLogoLinkedinSquare className=" text-4xl text-slate-200"/>
                        </div>
                    </div>
                    
                        <div className="flex  pl-4">
                            <div className="flex flex-col">
                                <p className="Inner-text">Apparel & Fashion Design  </p>
                                <p className="Inner-text">Mechanical Engineering </p>
                                <p className="Inner-text">Applied Mathematics & Computational Sciences </p>
                                <p className="Inner-text">Metallurgy Engineering </p>
                                <p className="Inner-text">Applied Science </p>
                                <p className="Inner-text">Physics  </p>
                                <p className="Inner-text">Production Engineering </p>
                                <p className="Inner-text">Biotechnology</p>
                                <p className="Inner-text">Automation Engineering</p>
                            </div>
                            <div className="flex flex-col pl-10">
                                <p className="Inner-text">Biomedical Engineering </p>
                                <p className="Inner-text">Textile Engineering </p>
                                <p className="Inner-text">Chemistry </p>
                                <p className="Inner-text">Management Sciences</p>
                                <p className="Inner-text">Civil Engineering </p>
                                <p className="Inner-text">Library   </p>
                                <p className="Inner-text">Computer Science and Engineering </p>
                                <p className="Inner-text">Electronics & Communication Engineering </p>
                                <p className="Inner-text">Physical Engineering</p>
                                <p className="Inner-text"> Humanities</p>
                            </div>
                            <div className="flex flex-col pl-10">
                                <p className="Inner-text">Electrical & Electronics Engineering </p>
                                <p className="Inner-text">Fashion Technology </p>
                                <p className="Inner-text">English  </p>
                                <p className="Inner-text">Instrumentation & Control System Engineering</p>
                                <p className="Inner-text">Information Technology </p>
                                <p className="Inner-text">Mathematics </p>
                                <p className="Inner-text">Computer Application </p>
                            </div>
                        </div>
                    </div>  {/*  lower portion is done */}

                    <div className="w-full h-[60px] bg-gray-800 mt-8">
                        <div className="px-5 pt-4 text-white opacity-80">
                            Copyright © 2020 PSG. All Rights Reserved
                        </div>
                    </div>
            </div>
        </div>
    )
}


