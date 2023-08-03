'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import Hostel from "../public/images/Hostel.png";
import Lib from "../public/images/Lib.png"
import radioHub from "../public/images/C_RadioHub.png"


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Facilities extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className="flex flex-col">
          
        <div className=" h-auto w-auto bg-stone-200">
        <div className ="m-10 pl-40 pt-10">
            <div class="text-blue-900 text-[23px]  uppercase leading-7 tracking-wide font-sans font-normal">
                PSG college of technology
            </div>
            <div class="text-gray-900 text-[40px] font-light leading-[48px] tracking-wide pt-4">
              College Facilities
              </div>
        </div>
          <div >
          <div className="m-20">
          <Slider {...settings} >
            
              <div className="flex  justify-between">
                  <div className="w-[351px] h-[571px] bg-white rounded-[32px]  ml-14 mb-10 shadow-xl" >
                      <div className = "flex flex-col">
                        <img src={Hostel} alt="" />
                        <div className="text-gray-900 font-sans leading-[30px] tracking-2 text-xl">
                            <div className="font-sans m-4 tracking-wide font-light">
                            GRD MEMORIAL<br/> LIBRARY
                            </div>
                        </div>
                        
                        <div class="text-gray-900 text-opacity-75 text-lg font-normal leading-[28.80px] tracking-wide ml-5 mt-2">
                          Something about how the library<br/> is great
                          </div>
                      
                      </div>
                  </div>
              </div>
              <div>
                  <div className="w-[351px] h-[571px] bg-white rounded-[32px] shadow-xl ml-14" >
                      <div className = "flex flex-col">
                        <img src={Lib} alt="" />
                        <div className="text-gray-900 font-sans leading-[30px] tracking-2 text-xl">
                            <div className="font-sans m-4 tracking-wide font-light">
                            PSG HOSTELS
                            </div>
                        </div>
                        <div class="text-gray-900 text-opacity-75 text-lg font-normal leading-[28.80px] tracking-wide ml-5 mt-9">
                        Something about how the hostel <br/>is great
                          </div>
                      </div>
                  </div>
              </div>
              
              <div>
                <div className="w-[351px] h-[571px] bg-white rounded-[32px] shadow-xl ml-14" >
                      <div className = "flex flex-col">
                        <img src={radioHub} alt="" />
                        <div className="text-gray-900 font-sans leading-[30px] tracking-2 text-xl">
                            <div className="font-sans m-4 tracking-wide font-light">
                            PSG COMMUNITY<br/> RADIO
                            </div>
                        </div>
                        
                        <div class="text-gray-900 text-opacity-75 text-lg font-normal leading-[28.80px] tracking-wide ml-5 mt-2">
                          Something about how the library<br/> is great
                          </div>
                      
                      </div>
                  </div>
              </div>

              <div>
                  <div className="w-[351px] h-[571px] bg-white rounded-[32px] shadow-xl ml-10" >
                      <div className = "flex flex-col">
                        <img src={radioHub} alt="" />
                        <div className="text-gray-900 font-sans leading-[30px] tracking-2 text-xl">
                            <div className="font-sans m-4 tracking-wide font-light">
                            GRD MEMORIAL<br/> LIBRARY
                            </div>
                        </div>
                        
                        <div class="text-gray-900 text-opacity-75 text-lg font-normal leading-[28.80px] tracking-wide ml-5 mt-2">
                          Something about how the library<br/> is great
                          </div>
                      
                      </div>
                  </div>
              </div>
              <div>
                  <div className="w-[351px] h-[571px] bg-white rounded-[32px] shadow-xl ml-14" >
                      <div className = "flex flex-col">
                        <img src={Lib} alt="" />
                        <div className="text-gray-900 font-sans leading-[30px] tracking-2 text-xl">
                            <div className="font-sans m-4 tracking-wide font-light">
                            PSG HOSTELS
                            </div>
                        </div>
                        <div class="text-gray-900 text-opacity-75 text-lg font-normal leading-[28.80px] tracking-wide ml-5 mt-9">
                        Something about how the hostel <br/>is great
                          </div>
                      </div>
                  </div>
              </div>
              
            </Slider>
            </div>
          </div>
          </div>
        </div>
      );
    }
  }