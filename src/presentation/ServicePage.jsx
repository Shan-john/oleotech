import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Headersection from "../Components/Headersection";
import FooterSection from "../Components/FooterSection";
import { useDispatch, useSelector } from "react-redux";
import {  getServicepageDate } from "../features/homepage/appSlice";
import serviceimage from "../assets/images/service.png";
function ServicePage() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getServicepageDate());
  }, [dispatch]);
 const   serviceLoading = useSelector((state) => state.appPage.serviceLoading);
  const serviceDate = useSelector((state)=>state.appPage.serviceData);
   const serviceError = useSelector((state)=>state.appPage.serviceError);
  if (serviceLoading) return <p className="text-black" >Loading...</p>;
  if (serviceError) return <p  className="text-black">Error: {error}</p>;
  if (!serviceDate || serviceDate.length === 0) return <p  className="text-black">No data available.</p>;

  return (
    <div className=" flex flex-col items-center  ">
      <Headersection />
      {/* Header Image Section */}
      <div className=" relative h-[clamp(400px,90vh,900px)] w-full  overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/c0/2d/1f/c02d1f74e721ce59cf6e0cecdb9d5606.jpg"
          alt="Service Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950 opacity-50 "></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 ml-44 left-[clamp(10px,10vw,1 89px)] text-white">
          <h3 className="text-xs md:text-sm mb-2">Home / Servies</h3>
          <h1 className="text-xl md:text-3xl font-bold">Servies</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-[clamp(10px,30vh,210px)] flex md:flex-col        flex-col lg:flex-row items-center justify-between px-6 gap-10    ">
      
        {/* Left Column: Testimonial + Progress */}
        <div className="flex flex-col flex-1 space-y-6 items-start  border-l-4 border-black pl-6">
          {/* Quote */}
          
          <div className="flex items-start space-x-4">
            <FaQuoteLeft size={30} color="black" />
            <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
               {serviceDate[0].services[0].heading}
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-gray-600 max-w-md  text-balance">
            {serviceDate[0]?.services[0].description}
          </p>

          {/* Author Info */}
          {/* <div className="mt-6">
            <p className="text-gray-400">
              <strong className="text-xl text-black font-semibold">
                Kevin Martin
              </strong>{" "}
              - Co-Founder
            </p>
          </div> */}
        </div>

        {/* Right Column: Image with Animation */}
        <div className="flex  sm:left-2 xs:left-5 md:left-3   lg:left-13 relative  w-[clamp(80px,90vw,500px)] h-[clamp(80px,60vh,500px)]     ">
          <div className="absolute  inset-0 bg-blue-900 rounded-2xl animate-pulse-Animation z-0  top-[50px]  w-[300px] h-[300px]"></div>

          <img
            className="relative  left-5 inset-0 w-[clamp(60px,85vw,450px)] h-[clamp(60px,45vh,500px)]  rounded-2xl   z-10  object-cover  transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3"
            src={
              "https://i.pinimg.com/736x/db/04/6b/db046bcf75e47322d4cca62bf7a95292.jpg"
            }
            alt=""
          />
        </div>
      </div>
      {/* // */}
      <div className="  w-5/6  ">
        <div className="w-5/6 flex  justify-end mt-[clamp(10px,5vh,50px)]     ">
          <div className="h-[clamp(80px,50vh,300px)] w-[3px] mr-9 bg-black">
            {" "}
          </div>
          <div className="flex    flex-col ">
            <div className="flex items-start space-x-4">
              <FaQuoteLeft size={30} color="black" />
              <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
                {serviceDate[0]?.services[1].heading}
              </h1>
            </div>

            <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
               {serviceDate[0]?.services[1].description}
            </p>
          </div>
        </div>
        {/* /// */}
        <div className="w-5/6 sm:flex mt-[clamp(10px,50vh,100px)] lg:flex-row     justify-around ">
          <div className="  flex ">
            <div className="h-[clamp(80px,50vh,300px)] w-[3px] mr-9 bg-black">
              {" "}
            </div>
            <div className="flex    flex-col ">
              <div className="flex items-start space-x-4">
                <FaQuoteLeft size={30} color="black" />
                <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
                 {serviceDate[0]?.services[2].heading}
                </h1>
              </div>

              <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
                {serviceDate[0]?.services[2].description}
              </p>
            </div>
          </div>

          <img
            className="w-[clamp(200px,45vw,400px)] h-auto  ml-[clamp(30px,10vw,50px)] "
            src={serviceimage}
            alt=""
          />
        </div>
      </div>
      <div className=" ml-5 lg:flex  lg:space-x-[290px] mt-[clamp(10px,50vh,100px)]">
        <div className="flex  mb-20  flex-col ">
          <div className="flex items-start space-x-4">
            <FaQuoteLeft size={30} color="black" />
            <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
            {serviceDate[0]?.services[3].heading}
            </h1>
          </div>

          <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
           {serviceDate[0]?.services[3].description}
          </p>
        </div>
        <div className="flex    flex-col ">
          <div className="flex items-start space-x-4">
            <FaQuoteLeft size={30} color="black" />
            <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
             {serviceDate[0]?.services[4].heading}
            </h1>
          </div>

          <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
            {serviceDate[0]?.services[4].description}
          </p>
        </div>
      </div>

      {/* // */}
      <FooterSection />
    </div>
  );
}

export default ServicePage;
