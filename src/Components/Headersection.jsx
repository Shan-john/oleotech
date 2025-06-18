import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image from "../assets/images/oleotechlogo.png";
import logobg from "../assets/images/logobg.png";
import { CiMenuBurger } from "react-icons/ci";

function Headersection() {
  const [isMenuButtonClicked,setMenuButtonState] =useState(false);
  return (
    <div className="w-full relative ">
      <div className="  h-[clamp(10px,5vh,50px)] overflow-hidden  w-full bg-white   flex justify-between items-center       gap-1">
        <div className=" lg:flex sm:flex    justify-start  text-black  pl-[clamp(4px,5vw,0px)] h-[clamp(10px,5vh,50px)]  w-[clamp(100px,50vw,700px)]    hidden sm:block  text-[clamp(0rem,2vw,12px)]">
          {" "}
          <div className=" flex items-center   gap-2">
            {" "}
            <IoLocationOutline /> <h2>45 New Eskaton Road, Austria</h2>{" "}
          </div>
          <div className="h-[clamp(10px,5vh,20px)]  w-[1px] bg-black m-2 "></div>
          <div className=" flex items-center pl-3 gap-2">
            {" "}
            <FaRegClock /> <h2>Sun to Friday: 8.00 am - 7.00 pm, Austria</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-[20px]  text-black border-black  pl-2 md:pr-3 pt-1 pb-1 border-[1px]  ml-[0px] ">
            <h2 className=" flex items-center      ">
              language <IoIosArrowDown />{" "}
            </h2>
          </div>
          <div>
            {" "}
            <a className="md:text-[15px] text-[0.9rem,5vw,10px]">faq</a>
          </div>
          <div className="h-[35px]  w-[1px] bg-black m-2 md:text-[14px]   "></div>
          <div>
            <a href="" className="text-[0.9rem,5vw,10px]">
              Support
            </a>
          </div>
          <div className="h-[20px]  w-[1px] bg-black m-[clamp(0px,2px,2px)] "></div>
          <div className="flex items-center  mr-[clamp(0px,2px,4px)] gap-1">
            <a href=""> Sign in/Register </a>
            <IoIosArrowDown color="black" />{" "}
          </div>
        </div>
      </div>
      {/* second header */}
      <div className="w-full flex items-center bg-white  h-[clamp(20px,18vw,70px)]  justify-between ">
        <div>
          <img
            className="realtive inset-0 md:mt-1    md:pt-0 md:h-[76px]      w-[clamp(20px,70vw,300px)]   h-[clamp(20px,18vw,73px)]   md:top-12 "
            src={logobg}
            alt=""
          />

          <img
            className="absolute inset-0 top-[clamp(45px,45vh,45px)]  ml-[clamp(2px,6vw,19px)]   w-[clamp(20px,50vw,100px)]   h-[clamp(10px,40vw,65px)]"
            src={image}
            alt=""
          />
        </div>

        <nav class="  hidden lg:block      ">
          <ul class="flex justify-between gap-[clamp(0px,1vw,30px)] items-center text-[clamp(0.1rem,1.7vw,15px)] py-4 ">
            <li className=" w-[50px]">
              <a class="text-gray-800 font-semibold  ">Home</a>
            </li>
            <li className=" w-auto ">
              <a className="text-gray-800 font-semibold  bg-yellow-400 ">
                AboutUs
              </a>
            </li>
            <li className=" w-auto bg-red-600">
              <a className="text-gray-800 font-semibold ">Destinations</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold  ">Services</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold ">Trip</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold  ">Pages</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold ">Blog</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold   ">ContactUs</a>
            </li>
          </ul>
        </nav>
        <div className="bg-blue-700 h-[clamp(30px,30vh,35px)]  flex rounded-50 items-center justify-center w-[clamp(30px,30vw,35px)] block lg:hidden mr-[50px]">
          <CiMenuBurger size={20} onClick={()=>{setMenuButtonState(!isMenuButtonClicked)}} />
        </div>

        <button class=" w-[clamp(25px,30vw,180px)]  mr-[10px] relative flex items-center justify-center  overflow-hidden hidden lg:block  font-semibold text-white rounded-[49px]      h-[clamp(10px,10vw,50px)] bg-gray-800   group">
          <span class="relative z-10 flex items-center gap-4  text-[clamp(0.6rem,1vw,5px)]">
            Request A Quote <FaArrowRight />{" "}
          </span>
          <span class="absolute inset-0 bg-green-500 rounded-r-[50px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
        </button>
      </div>
      {/* menu option only for mobile */}
     { isMenuButtonClicked==true? <div className="   inset-0  z-20 fixed block lg:hidden  w-[clamp(50vw,50vh,350px)] h-full bg-gray-200">
         <div className="h-[clamp(20px,50vh,150px)] w-auto bg-gray-500 flex items-center justify-center">
          <img src={image} alt="" className="h-[clamp(20px,50vh,80px)] w-auto  " />
         </div>
           <div className=" flex justify-center flex-col items-center  ">
            
               <div>
                <nav class="        ">
          <ul class="flex flex-col justify-between gap-[clamp(60px,30vw,30px)] items-center text-[clamp(0.1rem,2.7vw,15px)] py-10 ">
            <li className=" w-[50px]">
              <a class="text-gray-800 font-semibold  ">Home</a>
            </li>
            <li className=" w-auto ">
              <a className="text-gray-800 font-semibold  ">
                AboutUs
              </a>
            </li>
            <li className=" w-auto ">
              <a className="text-gray-800 font-semibold ">Destinations</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold  ">Services</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold ">Trip</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold  ">Pages</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold ">Blog</a>
            </li>
            <li className=" w-auto">
              <a className="text-gray-800 font-semibold   ">ContactUs</a>
            </li>
          </ul>
        </nav>
               </div>
             
           </div>
          </div> : null}
    </div>
  );
}

export default Headersection;
