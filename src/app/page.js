import Image from "next/image";
import Example from "./components/Example";
import "../app/styles/styles.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AdmissionsComp from "./components/AdmissionsComp";
import CollegeStats from "./components/CollegeStats";
import Upcoming from "./components/Upcoming";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
// import BackgroundVideo from './components/BackgroundVideo.jsx'
import BackgroundVideo from './components/BackgroundVideo.jsx'
import Calendar from './components/Calendar.jsx'
import Message from './components/Message.jsx'
import Tray from "./components/Tray2.jsx";
import Facilities from './components/Facilities.jsx'
import { Lexend_Deca } from "next/font/google";
import g20 from "./public/images/G20.png"

const lexend700 = Lexend_Deca({weight:'700' ,subsets:['latin']})


import './styles/styles.css'

// import Facilities from "./components/Facilities";

export default function Home() {
  const currentDate = new Date();
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip">
      <Header className="w-full z-50" />      
      <div className="relative">
        <BackgroundVideo/>
        <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className={lexend700.className}>
            <h2 className="text-3xl">Welcome To</h2>
            <h1 className="text-5xl text-bold">PSG College Of Technology</h1>
          </div>   
          <div className="h-full border-l-2 border-white mx-auto"></div>
          <div>
            <Image
                src={g20}
                alt="G20 Image"
                width={300}
                height={200}
              />
          </div>   
        </div>
        <div className="absolute top-[-30px] left-7">
          <Message />
        </div>
      </div>

      <div className="fixed top-[30%] right-[4%] z-20">
        <Tray />
      </div>
      <div className="my-4"> 
      <Intro className="z-30"/>

        <AdmissionsComp className="w-full" />
      </div>
      {/*  */}
      <Upcoming className="z-0"/>
      <CollegeStats />
      {/* <Example /> */}
      <Highlights />
      {/* <Facilities /> */}
      <Footer />
    </main>
  );
}
