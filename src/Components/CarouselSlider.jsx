import React from "react";
import image1 from "../assets/images/ca-1.png";
import image2 from "../assets/images/ca-3.png";
import image3 from "../assets/images/ca-4.png";
import {
  IoLocationOutline,
  IoArrowDown,
  IoBicycleSharp,
} from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { PiMoneyLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function CarouselSlider() {
  const images = [image1, image2, image3];
  const navigate = useNavigate();
  const gotoServicepage = () => {
    navigate("/service", );
  };
  const captions = [
    "Driving Business Through Technology",
    "Reliable Web Solutions for Growing Brands",
    "Where Innovation Meets Execution",
  ];
  const Subcaptions = [
    "Empowering Ideas with Technology",
    "Building Smart Solutions for a Digital World",
    "Your Vision, Our Code",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState("next");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center">
      <div className="relative  w-full   ">
        <div
          key={currentIndex}
          className={`   h-[clamp(400px,90vh,800px)]    overflow-hidden    relative`}
        >
          <img
            src={images[currentIndex]}
            alt="carousel"
            className={`absolute inset-0  h-[clamp(400px,90vh,800px)]  object-cover   transition-opacity duration-700 ease-in-out opacity-100 animate-fade-in-${direction}`}
          />
          <div className="absolute inset-0 w-[clamp(400px,800px,full)] h-auto opacity-50 bg-black"></div>
        </div>

        {/* Text Caption */}
        <div className="absolute inset-0 flex flex-col   justify-center text-white   w-[clamp(100vm,100vw,100vw)]       h-[clamp(400px,90vh,800px)]  pl-[clamp(1vw,10vw,10vw)]    ">
          <h3 className="text-[clamp(0.9rem,1.6vw,1.6rem)]   animate-fade-slide-text pointer-events-auto">
            Get Unmatched Digital Joy With Us
          </h3>
          <h2 className="text-[clamp(0.9rem,10vw,3rem)]  font-semibold text-start animate-fade-slide-text pointer-events-auto leading-tight max-w-2xl">
            {captions[currentIndex]}
          </h2>
          <h4 className="text-[clamp(0.9rem,1.6vw,1.6rem)]  mt-1 animate-fade-slide-text pointer-events-auto">
            {Subcaptions[currentIndex]}
          </h4>
          <div className="flex flex-wrap gap-6 mt-10 pointer-events-auto md:justify-start">
            <button
              onClick={() => {
                document.getElementById("project-Section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="group relative overflow-hidden h-[clamp(4rem,2vh,1rem)]   w-[clamp(20rem,15vw,16rem)] bg-blue-500 text-[clamp(1.3rem,1.6vw,1.6rem)] flex items-center justify-center uppercase rounded-full backdrop-blur-md text-white shadow-md border-0 transition-all duration-500"
            >
              <span className="z-10">View Projects</span>
              <span className="absolute inset-0 bg-blue-950 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out rounded-full" />
            </button>

            <button
              onClick={ gotoServicepage}
              className="group relative overflow-hidden  h-[clamp(4rem,2vh,1rem)]   w-[clamp(20rem,15vw,16rem)]  text-[clamp(1.3rem,1.6vw,1.6rem)] flex items-center justify-center uppercase rounded-full bg-transparent border-white text-white shadow-md border transition-all duration-500"
            >
              <span className="z-10">Our Service</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out rounded-full" />
            </button>
          </div>
        </div>

        {/* Vertical Control Buttons */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 flex-col items-center gap-2 hidden lg:flex">
          <button
            onClick={() => {
              setDirection("next");
              setCurrentIndex((currentIndex + 1) % images.length);
            }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "next" : "prev");
                setCurrentIndex(index);
              }}
              className={`h-[50px] w-[1px] transition-all duration-300 ${
                currentIndex === index
                  ? "bg-black"
                  : "bg-white hover:bg-green-500"
              }`}
            />
          ))}

          <button
            onClick={() => {
              setDirection("prev");
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              );
            }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="absolute z-10 bg-white border-green-300 border-2 rounded-[50px] flex flex-wrap md:flex-nowrap items-center justify-around w-[clamp(280px,80vw,1200px)]  md:w-[clamp(480px,60vm,980px)] md:h-[clamp(100px,10vh,100px)] h-[clamp(100px,50vh,350px)]   top-[clamp(89vh,15vh,20px)]  md:top-[clamp(880px,30vh,50px)]     ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start   pl-1 py-1 gap-0 md:gap-0 over">
          <div className="flex flex-col md:flex-row justify-around  items-center    text-black w-[clamp(280px,80vw,1200px)]  md:w-[clamp(480px,60vm,980px)]  md:h-[clamp(90px,10vh,100px)] h-[clamp(80px,40vh,330px)] px-2     ">
            <div className="flex items-center justify-around w-[clamp(50vw,50vw,300px)]  md:w-[clamp(05vw ,50vw,300px)] gap-2   ">
              <IoLocationOutline />
              <h2>14+ Years in IT</h2>
              <IoArrowDown />
            </div>
            <div className="h-[1px] md:h-[20px] w-full md:w-[1px] hidden md:block bg-black md:mx-[clamp(0px,2px,4px)]"></div>
            <div className="flex items-center justify-around  w-[clamp(50vw,50vw,300px)]  md:w-[clamp(50vw ,50vw,300px)] gap-2 ">
              <IoBicycleSharp />
              <h2>50+ Enterprise Apps</h2>
              <IoArrowDown />
            </div>
            <div className="h-[1px] md:h-[20px] w-full md:w-[1px] hidden md:block bg-black  md:mx-[clamp(0px,2px,4px)]"></div>
            <div className="flex items-center justify-around w-[clamp(50vw,50vw,300px)]  md:w-[clamp(50vw ,50vw,300px)] gap-[clamp(0px,1px,2px)]">
              <FaRegClock />
              <h2>99% Retention</h2>
              <IoArrowDown />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlider;
