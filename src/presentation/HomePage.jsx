import React,{useEffect} from 'react'
 
import { useDispatch, useSelector } from "react-redux";
import { getHomepageData } from "../features/homepage/appSlice";
import CarouselSlider from '../Components/homepageComponent/CarouselSlider';
import BodySection from '../Components/homepageComponent/BodySection';

import WhatsAppFloat from '../Components/WhatsAppFloat';
import Headersection from '../Components/Headersection';
import FooterSection from '../Components/FooterSection';

function HomePage() {
  const dispatch = useDispatch();

  // Access redux state
  const homepageloading  = useSelector((state) => state.appPage.homepageLoading);
  const homepageData = useSelector((state)=>state.appPage.homepageData);
  const homepageerror = useSelector((state)=> state.appPage.homepageError);
  // Dispatch API call on mount
  useEffect(() => {
    dispatch(getHomepageData());
     
  }, [dispatch]);
 
 
  if (homepageloading) return <p>Loading...</p>;
  if (homepageerror) return <p>Error: {homepageerror}</p>;
  if (!homepageData || homepageData.length === 0) return <p>No data available.</p>;

  return (
    <div> 
        <Headersection/>
        <CarouselSlider/>
        <BodySection  />
        <FooterSection/>
        <WhatsAppFloat/>
    </div>
  )
}

export default HomePage