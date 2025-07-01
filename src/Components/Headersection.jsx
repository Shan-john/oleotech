import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image from "../assets/images/oleotechlogo.png";
import logobg from "../assets/images/logobg.png";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const currentDate = new Date().toLocaleString();

function Headersection() {
  const handleGmailRedirect = () => {
    const email = "0leotechsolution@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi there, I'd like to know more about your services.";

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank"); // opens in new tab
  };

  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  
  const gotoContactpage=()=>{
    navigate("/contactus");
  }
  const gotoServicepage = () => {
    navigate("/service", );
  };
  const gotoHomePage = () => {
    navigate("/",);
  };
  const gotoAboutUs = ()=>{
    navigate("/aboutus");
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.offsetHeight) {
        const scrolledToBottom = window.innerHeight + window.scrollY >= -550;
        setShowButton(scrolledToBottom);
      } else {
        const scrolledToBottom = window.innerHeight + window.scrollY >= 150;
        setShowButton(scrolledToBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuButtonClicked, setMenuButtonState] = useState(false);
  return (
    <div className={`w-full relative transition-transform duration-300 border-b  `}>
      <div className="  h-[clamp(10px,5vh,50px)] overflow-hidden  w-full bg-white   flex justify-between items-center       gap-1">
        <div className=" lg:flex sm:flex    justify-start  text-black  pl-[clamp(4px,5vw,0px)] h-[clamp(10px,5vh,50px)]  w-[clamp(100px,50vw,700px)]    hidden sm:block  text-[clamp(0rem,2vw,12px)]">
          {" "}
          <div className=" flex items-center   gap-2">
            {" "}
            <IoLocationOutline />{" "}
            <h2>Sun to Friday: 8.00 am - 7.00 pm, Austria</h2>{" "}
          </div>
          <div className="h-[clamp(10px,5vh,20px)]  w-[1px] bg-black m-2 "></div>
          <div className=" flex items-center pl-3 gap-2">
            {" "}
            <FaRegClock /> <h2>{currentDate}</h2>
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
            <a className="md:text-[15px] text-[0.4rem,5vw,10px]">faq</a>
          </div>
          <div className="h-[35px]  w-[1px] bg-black m-2 md:text-[14px]   "></div>
          <div>
            <a href="" className="text-[0.4rem,5vw,10px]">
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
      <div
        className={`w-full flex  items-center bg-white h-[clamp(17px,15vw,70px)] justify-between transition-transform duration-300 `}
      >
        <div className="relative flex items-center justify-center">
          <img
            className="w-[clamp(20px,70vw,300px)] h-[clamp(20px,18vw,73px)] object-contain"
            src={logobg}
            alt="Background Logo"
          />

          <img
            className="absolute w-[clamp(20px,50vw,90px)] h-[clamp(8px,35vw,55px)]   object-contain"
            src={image}
            alt="Overlay Logo"
            style={{
              left: "25%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <nav className="  hidden lg:block      ">
          <ul className="flex justify-between gap-[clamp(0px,1vw,50px)] items-center text-[clamp(0.1rem,1.7vw,15px)] py-4 ">
            <li className=" w-[50px]">
              <a onClick={gotoHomePage} className="text-gray-800 font-semibold  ">Home</a>
            </li>
           

            <li className="relative   w-auto">
              <a onClick={gotoServicepage} className="text-gray-800 font-semibold cursor-pointer">
                Services
              </a>

              
            </li>

     
            <li className=" w-auto">
              <a onClick={gotoContactpage} className="text-gray-800 font-semibold ">Contact</a>
            </li>
            
            <li className=" w-auto ">
              <a onClick={ gotoAboutUs} className="text-gray-800 font-semibold   ">AboutUs</a>
            </li>
          </ul>
        </nav>
        <div className="bg-blue-400  h-[clamp(30px,30vh,35px)]   flex rounded-[10px] items-center justify-center w-[clamp(30px,30vw,35px)]   lg:hidden mr-[50px] ">
          <CiMenuBurger
            size={20}
            onClick={() => {
              setMenuButtonState(!isMenuButtonClicked);
            }}
          />
        </div>

        <div className="  justify-center  hidden lg:flex">
          <button
            onClick={handleGmailRedirect}
            className="w-[clamp(25px,30vw,180px)] mr-[10px] relative   items-center justify-center overflow-hidden   font-semibold text-white rounded-[49px] h-[clamp(10px,10vw,50px)] bg-gray-800 group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-center text-[clamp(0.6rem,1vw,14px)]">
            Enquiry <FaArrowRight />    
            </span>
            <span className="absolute inset-0 bg-green-500 rounded-r-[50px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
      {/* menu option only for mobile */}
      {isMenuButtonClicked == true ? (
        <div className="   inset-0  z-20 fixed block lg:hidden  w-[clamp(50vw,50vh,350px)] h-full bg-gray-200">
          <div className="h-[clamp(20px,50vh,150px)] w-auto bg-gray-500 flex items-center justify-center">
            <img
              src={image}
              alt=""
              className="h-[clamp(20px,50vh,80px)] w-auto  "
            />
          </div>
          <div className=" flex justify-center flex-col items-center  ">
            <div>
              <nav class="        ">
                <ul class="flex flex-col justify-between gap-[clamp(60px,30vw,30px)] items-center text-[clamp(0.1rem,2.7vw,15px)] py-10 ">
                  <li className=" w-[50px]">
                    <a class="text-gray-800 font-semibold  ">Home</a>
                  </li>
                  <li className=" w-auto ">
                    <a className="text-gray-800 font-semibold  ">AboutUs</a>
                  </li>
                  <li className=" w-auto ">
                    <a className="text-gray-800 font-semibold ">Destinations</a>
                  </li>
                  <li className=" w-auto">
                    <a
                      onClick={gotoServicepage}
                      className="text-gray-800 font-semibold  "
                    >
                      Services
                    </a>
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
        </div>
      ) : null}
    </div>
  );
}

export default Headersection;
