import React from 'react'
import carouselimage from "../assets/images/aboutus.png"
import Headersection from '../Components/Headersection'
import FooterSection from '../Components/FooterSection'
import { useSelector } from 'react-redux'
function Aboutpage() {
  const homepageData = useSelector((state)=> state.appPage.homepageData);
  const homepageLoading = useSelector((state)=> state.appPage.homepageLoading);
  const  homepageError = useSelector((state)=> state.appPage.homepageError);
  if (homepageLoading) return <p>Loading...</p>;
  if (homepageError) return <p>Error: {homepageError}</p>;
  if (!homepageData || homepageData.length === 0) return <p>No data available.</p>;

  return (
    <div>
      <Headersection/>
        <div className='flex flex-col lg:flex-row   justify-center mt-10 items-center   gap-9 '>
         <div className=' text-black flex flex-col  justify-center       '>
          <h2 className='text-[clamp(0.9rem,5vw,25px)] font-semibold mb-[5px]'>About us</h2>
          <p className=' text-[clamp(0.6rem,4vw,17px)] font-normal h-auto  w-[clamp(350px,30vw,643px)]'>{homepageData[0].aboutus.fulldetail}</p>
         </div>
         <div className='    overflow-hidden   align-middle'> <img 
          className=' w-[clamp(450px,40vw,643px)] p-6'
        src={carouselimage} alt="" /></div>
        </div> 
         <FooterSection/>
    </div>
  )
}

export default Aboutpage