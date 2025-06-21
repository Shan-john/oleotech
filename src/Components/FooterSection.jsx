import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from '../assets/images/oleotechlogo.png'

function FooterSection() {
  return (
    <div className="w-full bg-gray-900 text-white mt-[250px] relative  ">
      <div className="max-w-7xl mx-auto  py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="p-2  rounded-lg shadow-lg">
                <img className="w-[120px] h-auto" src={logo} alt="OleoTech Logo" />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading IT solutions provider specializing in software development, 
              web design, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-800  transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800   transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800  transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800  transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-800   transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Web Design & Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">IT Training Programs</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Web Hosting Solutions</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Digital Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-800 text-gray-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-green-400" size={20} />
                <span className="text-sm">45 New Eskaton Road, Austria</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-green-400" size={20} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-green-400" size={20} />
                <span className="text-sm">info@oleotech.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none"
                />
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-r-md hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 OleoTech. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-800 text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-800 text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-800 text-gray-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-800 text-gray-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
