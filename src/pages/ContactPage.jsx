import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="max-w-[600px] w-full mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#1E1B4B] mb-6">
          Get answers to all your questions.
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-[500px] mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </p>

        {/* Contact Button */}
        <button className="bg-[#35B7FF] text-white font-semibold py-4 px-8 rounded-md mb-12 hover:bg-[#2DA1E5] transition-colors duration-300">
          CONTACT OUR COMPANY
        </button>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6">
          <Link to="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300">
            <Twitter size={24} strokeWidth={1.5} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-[#4267B2] transition-colors duration-300">
            <Facebook size={24} strokeWidth={1.5} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300">
            <Instagram size={24} strokeWidth={1.5} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300">
            <Linkedin size={24} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

