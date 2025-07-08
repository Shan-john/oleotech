import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import itrainingimage from "../../assets/images/ittraining.png";
import featuresimage from "../../assets/images/features.png";
import webhostingiamge from "../../assets/images/webhosting.png";
import webdesignimage from "../../assets/images/webdesign.png";
import webdevelopmentimage from "../../assets/images/webdevelopment.png";
import softwaredevelopmentimage from "../../assets/images/softwaredevelopment.png";
import { useNavigate } from "react-router-dom";

function BodySection() {
  // Access redux state
 
  const homepageData = useSelector((state)=>state.appPage.homepageData);
 
  const handleGmailRedirect = () => {
    const email = "0leotechsolution@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi there, I'd like to know more about your services.";

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank"); // opens in new tab
  };
  const navigate = useNavigate();
  const gotoAboutUs =()=>{
navigate("./aboutus")
  }

  return (
    <div className=" md:mt-[50px]  bg-gradient-to-b from-green-50 mb-20 overflow-hidden  to-transparent flex flex-col  items-center  ">
      <div className="w-full   flex flex-wrap md:pt-[120px] pt-[310px] justify-center items-center gap-[clamp(20px,5vw,50px)] px-6 py-10">
        {/* Project Done */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 text-green-800 rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-blue-500/50 hover:shadow-2xl hover:border-2 hover:border-blue-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-blue-100 transition-colors duration-300">
            { homepageData[0]?.projectdonecount ||  "120+"}
          </h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-blue-200 transition-colors duration-300">
            Projects Done
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="bg-gradient-to-br from-green-100 to-green-50  text-green-800 rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-green-500/50 hover:shadow-2xl hover:border-2 hover:border-green-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-green-100 transition-colors duration-300">
            {homepageData[0]?.happyclientcount || "0"}
          </h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-green-200 transition-colors duration-300">
            Ongoing Projects
          </p>
        </div>

        {/* Active Projects */}
        <div className="bg-gradient-to-br from-green-100 to-green-50  text-green-800 rounded-2xl shadow-lg w-[clamp(180px,25vw,250px)] h-[clamp(100px,25vh,150px)] flex flex-col justify-center items-center transition-all duration-500 hover:shadow-purple-500/50 hover:shadow-2xl hover:border-2 hover:border-purple-300 cursor-pointer relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <h1 className="text-[clamp(1.5rem,4vw,40px)] font-bold group-hover:text-purple-100 transition-colors duration-300">
            {homepageData[0]?.employeecount || "0"}
          </h1>
          <p className="text-[clamp(0.8rem,2vw,18px)] font-medium group-hover:text-purple-200 transition-colors duration-300">
            Active Projects
          </p>
        </div>
      </div>

      <div
        id="About-section"
        className=" md:mt-[150px] mt-[190px] mb-5 text-center"
      >
        <h3 className="text-xl text-green-950 font-[cursive]">
          Your Partner in Digital Excellence
        </h3>
        <h1 className="   text-6xl font-bold text-green-900 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text  ">
          <span className="   z-10">About Our Company</span>
        </h1>
      </div>

      <div className=" lg:mt-10 mt-16 flex items-center justify-center ">
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
              details{" "}
            </h1>
            <p className="text-[clamp(0.9rem,2vw,28px)] text-green-950 font-semibold lg:text-base lg:leading-relaxed    ">
              {homepageData[0]?.aboutus.details ||
       "OleoTech Solution is a tailor end Web Development consulting company functioning since 2014. The company is promoted and managed by a team of experts from the different streams of Technology & Management."}       </p>
            <button
              onClick={gotoAboutUs }
              className="group relative overflow-hidden text-white w-[100px]  h-[50px]  font-[cursive] bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="relative z-10">More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out delay-100"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Showcase Heading */}
      <div id="project-Section" className="text-center mt-40  ">
        <h1 className="text-1xl font-bold text-green-900  ">Portfolio</h1>
      </div>
      <div id="project-Section" className="text-center   mb-8">
        <h1 className="text-5xl font-bold text-green-900 mb-4">
          Check our latest work
        </h1>
      </div>

      <div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 p-7 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(20px,5vw,40px)] transition-all duration-500 ease-in-out  
           
           `}
        >
          {homepageData[0]?.project?.map((project, index) => (
            <div
              key={index}
              className={`group relative p-3 overflow-hidden rounded-[50px] border-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                index % 2 === 0
                  ? "bg-gradient-to-tr from-green-800"
                  : "bg-gradient-to-tr from-blue-800"
              }`}
            >
              <img
                className="w-[clamp(200px,80vw,400px)] h-[clamp(100px,40vh,250px)] object-cover transition-transform duration-500  rounded-[40px]    group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodySection;
