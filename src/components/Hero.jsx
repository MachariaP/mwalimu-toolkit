import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="about" className="text-center mb-12 animate-on-scroll" ref={observe(ref)}>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#00A6A6] mb-2">
        The CBC Implementation Challenge: A Teacher's Story
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        The Competency-Based Curriculum (CBC) is a forward-thinking reform, but for many
        teachers, it's a daily battle against time, limited resources, and administrative burden.
        We see you, and we're here to help.
      </p>
    </section>
  );
};

export default Hero;
