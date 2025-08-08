import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 md:p-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-gray-400">&copy; 2024 Mwalimu's Toolkit. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#about" className="text-gray-400 hover:text-white transition duration-300">
            About
          </a>
          <a href="#join-us" className="text-gray-400 hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
