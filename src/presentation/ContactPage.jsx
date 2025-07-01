import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/images/oleotechlogo.png";
import Headersection from "../Components/Headersection";

function ContactPage() {
  return (
    <div>
         <Headersection/>    
    <div className="min-h-screen w-full bg-white  px-6 flex flex-col items-center justify-start mt-11">
       
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="mt-2 text-gray-500">We're here to help and answer any question you might have.</p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Card */}
        <div className="bg-[#ecf0f3] rounded-xl p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">LET’S WORK TOGETHER?</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-3">
                <MdPhone className="text-[#2c3e50]" size={24} />
                <a href="tel:+916238993396" className="hover:underline">+91 89215 71242</a>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-[#2c3e50]" size={24} />
                <a   className="hover:underline">info@oleotechsolutions.com
                oleotechsolutions@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-[#2c3e50]" size={24} />
                <p>2nd Floor, Thekkumkattil Building,
                Good Shepherd Road, Kottayam, Kerala, 686001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Logo */}
        <div className="flex flex-col items-center justify-center bg-green-50       0 text-white rounded-xl p-8 shadow-lg">
          <img src={logo} alt="OleoTech Logo" className="w-28 h-auto mb-6" />
          <p className="text-center mb-6 text-gray-400">Connect with us on social media</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaGithub size={24} /></a>
          </div>
        </div>
      </div>
</div></div>
  );
}

export default ContactPage;
