import React from 'react';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[#00A6A6]">
          Mwalimu's Toolkit
        </a>
        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center md:space-x-4 space-x-2">
          <a
            href="#about"
            className="text-gray-600 hover:text-[#E55B3C] font-semibold transition duration-300"
          >
            About
          </a>
          <a
            href="#what-it-is"
            className="text-gray-600 hover:text-[#E55B3C] font-semibold transition duration-300"
          >
            What It Is
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-[#E55B3C] font-semibold transition duration-300"
          >
            How It Works
          </a>
          <a
            href="#join-us"
            className="ml-4 md:ml-0 bg-[#E55B3C] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#D54A2B] transition duration-300"
          >
            Get Involved
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
