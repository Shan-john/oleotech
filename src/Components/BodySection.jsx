import React, { Component, useState } from "react";

import itrainingimage from "../assets/images/ittraining.png";
import featuresimage from "../assets/images/features.png";
import webhostingiamge from "../assets/images/webhosting.png";
import webdesignimage from "../assets/images/webdesign.png";
import webdevelopmentimage from "../assets/images/webdevelopment.png";
import softwaredevelopmentimage from "../assets/images/softwaredevelopment.png";
function BodySection() {
   
  return (
    <div className=" bg-gradient-to-b from-green-50 mb-20 overflow-hidden  to-transparent flex flex-col  items-center  ">
      <div className="w-full flex flex-wrap md:pt-[120px] pt-[110px] justify-center items-center gap-[clamp(20px,5vw,50px)] px-6 py-10">
        {/* Project Done */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-blue-500/50 hover:shadow-2xl hover:border-2 hover:border-blue-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-blue-100 transition-colors duration-300">120+</h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-blue-200 transition-colors duration-300">
            Projects Done
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-green-500/50 hover:shadow-2xl hover:border-2 hover:border-green-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-green-100 transition-colors duration-300">8</h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-green-200 transition-colors duration-300">
            Ongoing Projects
          </p>
        </div>

        {/* Active Employees */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-purple-500/50 hover:shadow-2xl hover:border-2 hover:border-purple-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-purple-100 transition-colors duration-300">25</h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-purple-200 transition-colors duration-300">
            Active Employees
          </p>
        </div>
      </div>

      <div className=" md:pt-[100px] pt-[210px] text-center">
        <h3 className="text-xl text-green-950 font-[cursive]">
          Wonderful Place For You
        </h3>
        <h1 className="text-6xl font-bold text-green-900">Tour Categories</h1>
      </div>

      <div className=" lg:mt-10 mt-5 flex items-center justify-center ">
        <div className="  pl-[clamp(0px,5vw,70px)] w-auto pr-[clamp(0px,5vw,70px)] xl:flex items-center justify-around lg:gap-40">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              className="w-[clamp(550px,90vw,700px)] h-auto transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
              src={featuresimage}
              alt="Features"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out delay-100"></div>
          </div>

          <div className="w-[clamp(50px,90vw,700px)]   border-black flex-col lg:gap-10 gap-4 lg:mt-5  rounded-[50px] flex justify-start items-center p-10   ">
            <h1 className="uppercase text-green-900 font-bold text-[clamp(0.9rem,2vw,28px)]  font-[cursive] underline">
              About Us{" "}
            </h1>
            <p className="text-[clamp(0.9rem,2vw,28px)] text-green-950 font-semibold lg:text-base lg:leading-relaxed    ">
              At our core, we are a passionate team of tech innovators dedicated
              to delivering cutting-edge software development, web design, web
              hosting, and full-stack web development solutions. With a strong
              focus on quality and creativity, we help businesses bring their
              digital vision to life — from intuitive user interfaces to
              scalable backend systems. In addition to our development services,
              we offer hands-on IT training programs to empower individuals and
              teams with the skills they need to thrive in today's digital
              world. Whether you're a startup or an enterprise, we are your
              trusted partner in building smart, secure, and future-ready
              digital solutions.
            </p>
            <button className="text-white w-[clamp(12,5vw,60px)] h-[clamp(5px,5vh,50px)] font-[cursive] ">
              Enquiry
            </button>
          </div>
        </div>
      </div>
      <div className="flex grid-col-3 xl:flex-cols flex-wrap justify-center items-center gap-[clamp(5px,5vw,59px)] xl:m-[190px] m-[30px] px-4 py-6">
        {/* Card 1 */}
        <div className="flex items-center border border-blue-400 rounded-tr-[50px] rounded-br-[50px] bg-white w-[clamp(180px,25vw,250px)] h-[clamp(60px,20vh,100px)]">
          <div className="flex items-center justify-center h-full w-[clamp(60px,25vw,100px)] border-green-800 border-2 rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <img
              src={itrainingimage}
              alt=""
              className="h-[80%] w-auto object-contain"
            />
          </div>
          <div className="ml-3 text-black">
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,25px)] leading-tight">
              450+
            </h1>
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,15px)] leading-tight">
              Development
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center border border-blue-400 rounded-tr-[50px] rounded-br-[50px] bg-white w-[clamp(180px,25vw,250px)] h-[clamp(60px,20vh,100px)]">
          <div className="flex items-center justify-center h-full w-[clamp(60px,25vw,100px)] border-green-800 border-2 rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <img
              src={webdesignimage}
              alt=""
              className="h-[80%] w-auto object-contain"
            />
          </div>
          <div className="ml-3 text-black">
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,25px)] leading-tight">
              450+
            </h1>
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,15px)] leading-tight">
              Development
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center border border-blue-400 rounded-tr-[50px] rounded-br-[50px] bg-white w-[clamp(180px,25vw,250px)] h-[clamp(60px,20vh,100px)]">
          <div className="flex items-center justify-center h-full w-[clamp(60px,25vw,100px)] border-green-800 border-2 rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <img
              src={webhostingiamge}
              alt=""
              className="h-[80%] w-auto object-contain"
            />
          </div>
          <div className="ml-3 text-black">
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,25px)] leading-tight">
              450+
            </h1>
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,15px)] leading-tight">
              Development
            </h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center border border-blue-400 rounded-tr-[50px] rounded-br-[50px] bg-white w-[clamp(180px,25vw,250px)] h-[clamp(60px,20vh,100px)]">
          <div className="flex items-center justify-center h-full w-[clamp(60px,25vw,100px)] border-green-800 border-2 rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <img
              src={softwaredevelopmentimage}
              alt=""
              className="h-[80%] w-auto object-contain"
            />
          </div>
          <div className="ml-3 text-black">
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,25px)] leading-tight">
              450+
            </h1>
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,15px)] leading-tight">
              Development
            </h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex items-center border border-blue-400 rounded-tr-[50px] rounded-br-[50px] bg-white w-[clamp(180px,25vw,250px)] h-[clamp(60px,20vh,100px)]">
          <div className="flex items-center justify-center h-full w-[clamp(60px,25vw,100px)] border-green-800 border-2 rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <img
              src={webdevelopmentimage}
              alt=""
              className="h-[80%] w-auto object-contain"
            />
          </div>
          <div className="ml-3 text-black">
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,25px)] leading-tight">
              450+
            </h1>
            <h1 className="font-bold font-[cursive] text-[clamp(0.6rem,2vw,15px)] leading-tight">
              Development
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 p-7 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(20px,5vw,40px)] transition-all duration-500 ease-in-out  
           
           `}
        >
          <div className="group relative overflow-hidden rounded-[50px] border-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-[clamp(200px,80vw,400px)] h-[clamp(100px,40vh,250px)] object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://i.pinimg.com/736x/d4/40/d4/d440d4a13a62c9d9dec50d983410922a.jpg"
              alt="Gallery Image 1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-bold text-lg">Project 1</h3>
              <p className="text-sm">Web Development</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-[50px] border-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-[clamp(200px,80vw,400px)] h-[clamp(100px,40vh,250px)] object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://i.pinimg.com/736x/91/5c/51/915c51f70c37cc00e9a7ab7b428af4dd.jpg"
              alt="Gallery Image 2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-bold text-lg">Project 2</h3>
              <p className="text-sm">UI/UX Design</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[50px] border-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-[clamp(200px,80vw,400px)] h-[clamp(100px,40vh,250px)] object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://i.pinimg.com/736x/9c/af/bc/9cafbc1e8d44f0d59a1ed8c67bbaa69e.jpg"
              alt="Gallery Image 3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-bold text-lg">Project 3</h3>
              <p className="text-sm">Software Development</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[50px] border-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-[clamp(200px,80vw,400px)] h-[clamp(100px,40vh,250px)] object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://i.pinimg.com/736x/d4/40/d4/d440d4a13a62c9d9dec50d983410922a.jpg"
              alt="Gallery Image 4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-bold text-lg">Project 4</h3>
              <p className="text-sm">IT Training</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default BodySection;
