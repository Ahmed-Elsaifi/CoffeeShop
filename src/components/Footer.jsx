import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <div className="font-bold text-lg">Roast & Brew</div>
          <div className="text-gray-400 text-sm mt-1">Handcrafted coffee since 2020</div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors duration-300"><FaInstagram/></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300"><FaFacebook/></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300"><FaTwitter/></a>
          <a href="#" aria-label="Location" className="hover:text-red-400 transition-colors duration-300"><FaMapMarkerAlt/></a>
        </div>

      </div>
    </footer>
  )
}
