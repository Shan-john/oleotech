import React,{useEffect} from "react";
import carouselimage from "../assets/images/aboutus.png";
import Headersection from "../Components/Headersection";
import FooterSection from "../Components/FooterSection";
import { useSelector } from "react-redux";
   import { getHomepageData } from "../features/homepage/appSlice";
import { useDispatch } from "react-redux";
function Aboutpage() {
    const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getHomepageData());
       
    }, [dispatch]);
  const homepageData = useSelector((state) => state.appPage.homepageData);
  const homepageLoading = useSelector((state) => state.appPage.homepageLoading);
  const homepageError = useSelector((state) => state.appPage.homepageError);
  if (homepageLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          <p className="text-slate-700 text-lg font-medium">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  if (homepageError) return <p>Error: {homepageError}</p>;
  if (!homepageData || homepageData.length === 0)
    return <p >No data available.</p>;

  return (
    <div>
      <Headersection />
      <div className="flex flex-col lg:flex-row   justify-center mt-10 items-center    gap-9 ">
        <div className=" text-black flex flex-col  justify-center       ">
          <h2 className="text-[clamp(0.9rem,5vw,25px)] font-semibold mb-[5px]">
            About us
          </h2>
          <p className=" text-[clamp(0.6rem,4vw,17px)] font-normal h-auto  w-[clamp(350px,30vw,643px)]">
            {homepageData[0].aboutus.fulldetail}
            
          </p>
        </div>
        <div className="    overflow-hidden   align-middle">
          {" "}
          <img
            className=" w-[clamp(450px,40vw,643px)] p-6"
            src={carouselimage}
            alt=""
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default Aboutpage;
