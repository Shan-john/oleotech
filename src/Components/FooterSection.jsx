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

function FooterSection() {
  return (
    <footer className="w-full bg-white text-gray-800 mt-[clamp(50px,15vh,250px)] relative border-t border-gray-200">
      <div className="max-w-full flex justify-center items-center mx-auto px-[clamp(10px,3vw,24px)] py-[clamp(20px,5vh,48px)]">
        <div className=" w-[500px] flex     justify-center items-center    mb-[clamp(20px,4vw,32px)]">

          {/* Company Info */}
          <div className="flex-1 max-w-md text-center md:text-left space-y-[clamp(10px,2vh,16px)]">
            <div className="flex justify-center md:justify-start items-center">
              <div className="p-[clamp(8px,1.5vw,16px)] rounded-lg shadow-lg">
                <img
                  className="w-[clamp(80px,15vw,120px)] h-auto"
                  src={logo}
                  alt="OleoTech Logo"
                />
              </div>
            </div>
            <p className="text-gray-600 text-[clamp(12px,1.5vw,14px)] leading-relaxed">
              Leading IT solutions provider specializing in software development,
              web design, and digital transformation services.
            </p>
            <div className="flex justify-center md:justify-start space-x-[clamp(8px,1.5vw,16px)]">
              <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 max-w-md text-center md:text-left space-y-[clamp(10px,2vh,16px)] mt-10">
            <h3 className="text-[clamp(16px,2vw,18px)] font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-[clamp(8px,1.5vh,12px)] text-gray-600">
              <div className="flex justify-center md:justify-start items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdLocationOn className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">45 New Eskaton Road, Austria</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdPhone className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdEmail className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">info@oleotech.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
