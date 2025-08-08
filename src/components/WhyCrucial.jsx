import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WhyCrucial = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="why-crucial" className="animate-on-scroll" ref={observe(ref)}>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-2xl font-bold text-center text-[#E55B3C] mb-6">
          Why Mwalimu's Toolkit Is Crucial for Every Teacher
        </h3>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          This toolkit isn't just about saving time; it's about shifting the paradigm of
          education. It’s about building a sustainable future for you, your students, and the
          entire Kenyan education system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start space-y-4 animate-on-scroll" ref={observe(ref)}>
            <h4 className="text-xl font-semibold text-[#00A6A6]">
              Empowerment & Professional Growth
            </h4>
            <p className="text-gray-600">
              The toolkit gives you the confidence and skills to embrace digital-age teaching.
              This isn't just for today—it's building a foundation for a long, successful career.
            </p>
            <h4 className="text-xl font-semibold text-[#00A6A6]">Equity in Education</h4>
            <p className="text-gray-600">
              By providing high-quality, accessible resources, we help bridge the gap between
              well-funded and under-resourced schools. This means every child, everywhere, has a
              chance to succeed.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 animate-on-scroll" ref={observe(ref)}>
            <h4 className="text-xl font-semibold text-[#00A6A6]">Community & Collaboration</h4>
            <p className="text-gray-600">
              The platform is designed to be a hub where teachers can share ideas, best practices,
              and resources, creating a supportive network that lifts everyone up.
            </p>
            <h4 className="text-xl font-semibold text-[#00A6A6]">
              Focus on Teaching, Not Paperwork
            </h4>
            <p className="text-gray-600">
              Imagine a classroom where your full attention is on your students, not on a pile of
              lesson plans. Mwalimu's Toolkit makes that vision a reality by automating the
              mundane so you can focus on the magical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCrucial;
