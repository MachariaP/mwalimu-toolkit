import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HowItWorks = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="how-it-works" className="animate-on-scroll" ref={observe(ref)}>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-2xl font-bold text-center text-[#F28E13] mb-6">
          How It Works: Simple, Effective, Empowering
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center animate-on-scroll" ref={observe(ref)}>
            <div className="w-16 h-16 bg-[#00A6A6] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              1
            </div>
            <h4 className="text-xl font-semibold mb-2">Login & Go</h4>
            <p className="text-gray-600">
              Securely access the toolkit from any device—even a basic phone. No downloads, no
              complicated setup. Just your browser and your passion.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-on-scroll" ref={observe(ref)}>
            <div className="w-16 h-16 bg-[#00A6A6] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              2
            </div>
            <h4 className="text-xl font-semibold mb-2">Create & Plan</h4>
            <p className="text-gray-600">
              Use our intuitive tools to generate lesson plans, create assessments, and find
              CBC-aligned resources in minutes, not hours.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-on-scroll" ref={observe(ref)}>
            <div className="w-16 h-16 bg-[#00A6A6] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              3
            </div>
            <h4 className="text-xl font-semibold mb-2">Teach & Inspire</h4>
            <p className="text-gray-600">
              Reclaim your time and energy. Focus on what matters most: connecting with your
              students and inspiring a love for learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
