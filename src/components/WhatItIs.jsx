import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WhatItIs = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="what-it-is" className="animate-on-scroll" ref={observe(ref)}>
      <div className="text-center p-8 bg-gradient-to-r from-[#00A6A6] to-[#75B7B7] rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-white">
          Introducing: Mwalimu's Toolkit
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
          This isn't another heavy, confusing content platform. It's a lifeline designed for the{' '}
          <span className="font-bold">aspirational but under-resourced teacher</span>. The
          Mwalimu's Toolkit is a lightweight, fast, and intuitive web application built to put
          time back in your day and power in your hands. It’s an ally in the classroom, not
          another burden on your desk.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm animate-on-scroll" ref={observe(ref)}>
            <h4 className="font-bold text-white text-lg">Your Timekeeper</h4>
            <p className="text-white/80 text-sm">
              Automated lesson planners and assessment creators save valuable hours every week.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm animate-on-scroll" ref={observe(ref)}>
            <h4 className="font-bold text-white text-lg">Your Digital Bridge</h4>
            <p className="text-white/80 text-sm">
              Designed to work seamlessly even with unreliable internet connections and on basic
              devices.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm animate-on-scroll" ref={observe(ref)}>
            <h4 className="font-bold text-white text-lg">Your Resource Library</h4>
            <p className="text-white/80 text-sm">
              Access a library of teacher-vetted, CBC-aligned resources, accessible to all.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm animate-on-scroll" ref={observe(ref)}>
            <h4 className="font-bold text-white text-lg">Your Digital Coach</h4>
            <p className="text-white/80 text-sm">
              Intuitive design provides practical, on-the-job digital upskilling without a steep
              learning curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
