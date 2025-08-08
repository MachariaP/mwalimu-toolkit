import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CrisisOverview = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="crisis-overview" className="animate-on-scroll" ref={observe(ref)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">A System Under Strain</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          This isn't just about curriculum; it's about the systemic hurdles that threaten the
          success of a visionary approach to education. Let's look at the numbers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="kpi-box animate-on-scroll" ref={observe(ref)}>
          <div className="kpi-number">100,000+</div>
          <div className="kpi-label">Teacher Shortage</div>
          <p className="mt-4 text-gray-500">
            A critical shortage places an immense burden on the existing workforce, undermining
            the personalized attention required by the CBC.
          </p>
        </div>
        <div className="kpi-box animate-on-scroll" ref={observe(ref)}>
          <div className="kpi-number">1,600+</div>
          <div className="kpi-label">Schools Lack Labs</div>
          <p className="mt-4 text-gray-500">
            Practical, hands-on learning is a core tenet of the CBC, yet thousands of schools
            lack the basic facilities to implement it effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrisisOverview;
