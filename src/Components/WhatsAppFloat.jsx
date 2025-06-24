import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      setShowButton(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <a
          href="https://wa.me/9497711275" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-6 z-50 bg-green-500   text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300`}
        >
          <FaWhatsapp className="text-[24px]" />
        </a>
      )}

      {showButton && (
        <a
          href="https://instagram.com/yourprofile" // Replace with your Instagram profile
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 z-50 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
        >
          <FaInstagram className="text-[24px]" />
        </a>
      )}
    </>
  );
}

export default WhatsAppFloat;
