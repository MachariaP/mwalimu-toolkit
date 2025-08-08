import React, { useRef } from 'react';
import TeacherRatioChart from './charts/TeacherRatioChart';
import DigitalLiteracyChart from './charts/DigitalLiteracyChart';
import TeacherTimeChart from './charts/TeacherTimeChart';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TeacherCapacity = () => {
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  return (
    <section id="teacher-capacity" className="animate-on-scroll" ref={observe(ref)}>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-2xl font-bold text-center mb-1">
          The Human Element: Teacher Preparedness
        </h3>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          Teachers are at the heart of the CBC, but they are often the most under-resourced,
          facing large class sizes and inadequate training for new demands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center animate-on-scroll" ref={observe(ref)}>
            <h4 className="text-xl font-semibold mb-4 text-center">
              Pupil-to-Teacher Ratio Strain
            </h4>
            <div className="chart-container h-80 md:h-96">
              <TeacherRatioChart />
            </div>
            <p className="mt-4 text-center text-gray-500 px-4">
              In some counties, the pupil-to-teacher ratio is as high as 77:1, making effective
              CBC implementation nearly impossible.
            </p>
          </div>
          <div className="flex flex-col items-center animate-on-scroll" ref={observe(ref)}>
            <h4 className="text-xl font-semibold mb-4 text-center">
              The Digital Literacy Gap
            </h4>
            <div className="chart-container h-80 md:h-96">
              <DigitalLiteracyChart />
            </div>
            <p className="mt-4 text-center text-gray-500 px-4">
              Many teachers haven't received the necessary training in digital literacy, creating
              a major barrier to integrating technology in the classroom.
            </p>
          </div>
          <div className="flex flex-col items-center animate-on-scroll" ref={observe(ref)}>
            <h4 className="text-xl font-semibold mb-4 text-center">
              Teacher Time Allocation
            </h4>
            <div className="chart-container h-80 md:h-96">
              <TeacherTimeChart />
            </div>
            <p className="mt-4 text-center text-gray-500 px-4">
              Teachers spend an outsized portion of their day on administrative tasks, leaving
              too little time for direct, quality teaching and student interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherCapacity;
