import React,{useEffect} from 'react'
 
import { useDispatch, useSelector } from "react-redux";
import { getHomepageData } from "../features/homepage/homepageslice";
import CarouselSlider from '../Components/CarouselSlider';
import BodySection from '../Components/BodySection';

import WhatsAppFloat from '../Components/WhatsAppFloat';
import Headersection from '../Components/Headersection';
import FooterSection from '../Components/footersection';

function HomePage() {
  const dispatch = useDispatch();

  // Access redux state
  const { data, loading, error } = useSelector((state) => state.homepage);
  // Dispatch API call on mount
  useEffect(() => {
    dispatch(getHomepageData());
     
  }, [dispatch]);
 
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;

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