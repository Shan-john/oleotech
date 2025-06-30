import React from 'react'
import carouselimage from "../assets/images/aboutus.png"
import Headersection from '../Components/Headersection'
import FooterSection from '../Components/FooterSection'
function Aboutpage() {
  return (
    <div>
      <Headersection/>
        <div className='flex flex-col lg:flex-row   justify-center mt-10 items-center   gap-9 '>
         <div className=' text-black flex flex-col  justify-center       '>
          <h2 className='text-[clamp(0.9rem,5vw,25px)] font-semibold mb-[5px]'>About us</h2>
          <p className=' text-[clamp(0.6rem,4vw,17px)] font-normal h-auto  w-[clamp(350px,30vw,643px)]'>We can grant our live presence anywhere in Kerala or India physically & virtually across the globe. We believe in being a medium capable of making optimistic & sustainable revolutions in our clients overall business process. We work with clients in diverse sectors like Agro Industry, Banking & Finance, Construction, Education, Energy, Travel &Tourism, Hospitality, Health Care, Micro- Enterprises etc.</p>
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