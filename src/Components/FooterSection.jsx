import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from '../assets/images/oleotechlogo.png'

function FooterSection() {
  return (
    <div className="w-full bg-blue-950 text-white mt-[clamp(50px,15vh,250px)] relative">
      <div className="max-w-7xl mx-auto px-[clamp(10px,3vw,24px)] py-[clamp(20px,5vh,48px)]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(20px,4vw,32px)] mb-[clamp(20px,4vw,32px)]">
          
          {/* Company Info */}
          <div className="space-y-[clamp(10px,2vh,16px)]">
            <div className="flex items-center">
              <div className="p-[clamp(8px,1.5vw,16px)]  rounded-lg shadow-lg">
                <img className="w-[clamp(80px,15vw,120px)] h-auto" src={logo} alt="OleoTech Logo" />
              </div>
            </div>
            <p className="text-gray-300 text-[clamp(12px,1.5vw,14px)] leading-relaxed">
              Leading IT solutions provider specializing in software development, 
              web design, and digital transformation services.
            </p>
            <div className="flex space-x-[clamp(8px,1.5vw,16px)]">
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-[clamp(10px,2vh,16px)]">
            <h3 className="text-[clamp(16px,2vw,18px)] font-semibold text-white">Our Services</h3>
            <ul className="space-y-[clamp(6px,1vh,8px)] text-gray-300">
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Software Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Web Design & Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">IT Training Programs</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Web Hosting Solutions</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Digital Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-[clamp(10px,2vh,16px)]">
            <h3 className="text-[clamp(16px,2vw,18px)] font-semibold text-white">Company</h3>
            <ul className="space-y-[clamp(6px,1vh,8px)] text-gray-300">
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">About Us</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Our Team</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Careers</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Blog</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors text-[clamp(12px,1.5vw,14px)]">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-[clamp(10px,2vh,16px)]">
            <h3 className="text-[clamp(16px,2vw,18px)] font-semibold text-white">Contact Us</h3>
            <div className="space-y-[clamp(8px,1.5vh,12px)] text-gray-300">
              <div className="flex items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdLocationOn className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">45 New Eskaton Road, Austria</span>
              </div>
              <div className="flex items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdPhone className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-[clamp(8px,1.5vw,12px)]">
                <MdEmail className="text-green-400" size={20} />
                <span className="text-[clamp(11px,1.3vw,14px)]">info@oleotech.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-[clamp(16px,3vh,24px)]">
              <h4 className="text-[clamp(11px,1.3vw,14px)] font-semibold text-white mb-[clamp(6px,1vh,8px)]">Subscribe to Newsletter</h4>
              <div className="flex md:flex-col">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-[clamp(8px,1.5vw,12px)] py-[clamp(6px,1vh,8px)] text-[clamp(11px,1.3vw,14px)] text-gray-900 bg-white rounded-l-md focus:outline-none"
                />
                <button className="  px-[clamp(12px,2vw,16px)] py-[clamp(6px,1vh,8px)] bg-green-600 text-white text-[clamp(11px,1.3vw,14px)] font-medium rounded-r-md hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-[clamp(16px,3vh,32px)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-[clamp(12px,2vh,16px)] md:space-y-0">
            <div className="text-gray-400 text-[clamp(10px,1.2vw,14px)]">
              © 2024 OleoTech. All rights reserved.
            </div>
            <div className="flex space-x-[clamp(12px,2vw,24px)] text-[clamp(10px,1.2vw,14px)]">
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-800 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
