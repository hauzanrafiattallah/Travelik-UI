import React from "react";
import FooterLogo from "../../assets/logo.webp";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-6 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Konten Footer */}
          <div className="py-6 bg-white/80 backdrop-blur-sm rounded-t-lg flex flex-col items-center text-center">
            <div className="py-4 px-6">
              <div className="flex flex-col items-center gap-3 mb-4">
                <img
                  src={FooterLogo}
                  alt="Logo"
                  className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]" // Ukuran logo lebih besar di layar besar
                />
                <h1 className="text-2xl sm:text-5xl font-bold">
                  Travelik Tour
                </h1>
              </div>
              <p className="text-md sm:text-lg leading-relaxed mb-4">
                Kami adalah perusahaan perjalanan yang memberikan layanan
                terbaik untuk eksplorasi tempat wisata yang menakjubkan di
                seluruh Indonesia.
              </p>
              <div className="flex flex-col items-center gap-2 text-sm sm:text-base mb-6">
                <div className="flex items-center gap-2">
                  <FaLocationArrow />
                  <p>Bali, Indonesia</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobileAlt />
                  <p>+62-81323563283</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center mb-6">
                <a href="#" className="text-gray-700 hover:text-primary">
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary">
                  <FaFacebook className="text-2xl sm:text-3xl" />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary">
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
              </div>
              <div className="text-center text-gray-500 text-sm sm:text-base mt-4">
                &copy; 2024 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
