"use client";
import { Inter } from 'next/font/google'
import AppModal from '../components/Modal';
import React, { useState } from 'react';
import Strip from '../components/Strip.jsx';


const array = [...Array(12)] // using spread syntax (produces the same as above)
const inter = Inter({ subsets: ['latin'] })


export default function Upcoming() {
  //javascript to open modal

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

    //addition of further strips automatically align with its child position and color
    //js renders strips from ../components/strip.js

     <div>
      <span className="  background  sm:block md:grid  justify-center h-120 mt-20 p-8 w-[80%] ml-[10%]">
          <section className="md:flex sm:block flex-wrap gap-4 h-auto" >

              {/* {array.map(_=><Strip/>) }
               */}
               {array.map((_, index) => <Strip key={index} onclick={openModal} />)}
          </section>            
      </span>

{/*--------------------------------------------------------code for strips ends here-----------------------------------------------------------------------------*/}
      

{/* ------------------------------------------------code for the modal window behaviour on click------------------------------------------------------------------ */}

{/*The js file for the initial base modal component is in ../components/Modal.js*/ }

    <div>
      <AppModal isOpen={modalIsOpen} closeModal={closeModal}>
        <center><h1 className='text-2xl pb-1 rounded-xl w-[250px]  text-white font-bold'>Event name</h1></center>
        <br/>
        <div className='text-white'>
          <p>Some description about the event that has been taken place and some of the events that has to be taken place
          Some description about the event that has been taken place and some of the events that has to be taken placeSome description about the
          in the campus
        </p></div>
        <br/>
        <hr/>
        <br/>
        <center><div className='bg-[#fff] font-bold h-16 p-2 w-[250px] rounded-xl border-black '><span className=' w-[100%] text-center'>Date : --/--/----</span><br/>
        <span >Venue : ---Venue---</span></div></center>
        <center><div className='btn w-[120px] p-1 text-white font-semibold text-center h-9 border-[#fff] border-2 mt-8 rounded-lg hover:bg-[#fff] hover:text-black hover:cursor-pointer' onClick={closeModal}>View details</div>
        <br/>
        <span className='p-1 text-xl absolute w-[30px] bg-[#fff] top-[10px] right-[10px] border-2 border-black rounded-[30%] h-[40px] text-semibold hover:bg-white hover:cursor-pointer ' onClick={closeModal}>X</span>
        <div className='btn w-[70px] p-1  text-white font-semibold text-center h-9 border-[#fff] border-2 rounded-lg hover:bg-[#fff] hover:text-black hover:cursor-pointer' onClick={closeModal}>Close</div></center>
      </AppModal>
    </div>

</div>
  )
}



