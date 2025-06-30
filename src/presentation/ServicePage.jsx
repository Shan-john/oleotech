import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Headersection from "../Components/Headersection";
import FooterSection from "../Components/FooterSection";
import { useDispatch, useSelector } from "react-redux";
import { getHomepageData } from "../features/homepage/homepageslice";
import serviceimage from "../assets/images/service.png";
function ServicePage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getHomepageData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;
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
      <div className="w-full max-w-6xl mt-[clamp(10px,30vh,210px)] flex flex-col lg:flex-row items-center justify-between px-6 gap-10">
        <div className="h-[clamp(80px,50vh,300px)] w-[3px]   bg-black"> </div>
        {/* Left Column: Testimonial + Progress */}
        <div className="flex flex-col flex-1 space-y-6 items-start">
          {/* Quote */}

          <div className="flex items-start space-x-4">
            <FaQuoteLeft size={30} color="black" />
            <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
              Web Development
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-gray-600 max-w-md  text-balance">
            At Oleotech Solutions, we build high-performance websites that work
            flawlessly across all devices. Our web development team specializes
            in creating customized, scalable, and secure solutions using the
            latest technologies like HTML5, CSS3, JavaScript, React, and PHP.
            Whether you're looking for a corporate website, a personal
            portfolio, or an interactive platform, we ensure your site is
            optimized for speed, responsiveness, and SEO compatibility. Every
            line of code we write is structured for performance and future
            scalability.
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
                Mobile Development
              </h1>
            </div>

            <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
              At Oleotech Solutions, we build high-performance websites that
              work flawlessly across all devices. Our web development team
              specializes in creating customized, scalable, and secure solutions
              using the latest technologies like HTML5, CSS3, JavaScript, React,
              and PHP. Whether you're looking for a corporate website, a
              personal portfolio, or an interactive platform, we ensure your
              site is optimized for speed, responsiveness, and SEO
              compatibility. Every line of code we write is structured for
              performance and future scalability.
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
                  Domain Registration & Web Hosting
                </h1>
              </div>

              <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
                We offer fast, secure, and reliable domain registration and web
                hosting services. No need to juggle multiple vendors—get
                everything under one roof. Our hosting solutions include
                cloud-based options, dedicated servers, and shared hosting plans
                with features like daily backups, SSL certificates, unlimited
                bandwidth, and 24/7 monitoring. Rest assured, your site stays
                online and secure—always.
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
             SEO & Digital Marketing
            </h1>
          </div>

          <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
            Having a website is just the start—getting found online is where we
            come in. Our digital marketing and SEO services help improve your
            website's visibility on Google and other search engines. We use
            proven white-hat SEO techniques, keyword strategies, link-building,
            and content optimization to drive more organic traffic to your site.
            We also run PPC campaigns, email marketing, and social media
            strategies to boost your brand presence and generate quality leads.
          </p>
        </div>
        <div className="flex    flex-col ">
          <div className="flex items-start space-x-4">
            <FaQuoteLeft size={30} color="black" />
            <h1 className="text-black max-w-md text-2xl font-serif font-bold text-balance">
              Website  Maintenance & Support
            </h1>
          </div>

          <p className="text-gray-600 xs:mt-9 sm:mt-10 md:mt-10 lg:mt-19 max-w-md  text-balance">
            Let us handle the tech while you focus on your business. Our website
            maintenance service ensures that your site is always updated,
            secure, and fast. We provide regular content updates, performance
            monitoring, bug fixes, security audits, and backups to give you
            peace of mind. Whether it's a minor change or a critical issue, our
            support team is just a call away—always available to keep your site
            running smoothly
          </p>
        </div>
      </div>

      {/* // */}
      <FooterSection />
    </div>
  );
}

export default ServicePage;
