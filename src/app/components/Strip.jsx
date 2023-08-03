import React from 'react';

function Strip(){
    return(
        <div id='card' className="card md:m-0 hover:cursor-pointer relative left-0 md:w-[60px] rounded-lg md:h-[450px] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,0.5)] bg-[#576CBC] 
                flex-[0.25]  [&:nth-child(3n)]:bg-[#0B2447] md:[&:nth-child(3n)]:mt-[100px] md:odd:mr-0 md:even:ml-0
                [&:nth-child(3n)]:text-white even:bg-[#19376D] md:even:mt-[50px]
                even:text-black sm:h-20 sm:w-[90%] sm:mt-[20px] sm:even:mt-[20px] sm:[&:nth-child(3n)]:mt-[20px] sm:odd:mr-[30px] sm:even:ml-[30px]
                hover:mt-[-20px] hover:duration-500 even:hover:mt-[30px] [&:nth-child(3n)]:hover:mt-[80px] ">  
                <a  href="#">
                <div className='text-[#ffe047]'>
                              <span className='month absolute md:left-0 md:top-0 md:w-[100%] font-extrabold md:text-center sm:left-4 sm:top-3 text-white'>JUN</span>
                              <span className='date absolute md:left-0  md:w-[100%] font-bold text-center md:top-[18px] text-3xl sm:left-4 sm:top-7'>12</span>
                                <span className='event absolute w-[100%] bottom-[30px] rotate-[270deg] font-bold text-white'>EVENT</span>
                            </div>
                      </a>
            </div>
    )
}

export default Strip;
