import React, { useState, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const JoinUs = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    county: '',
    email: '',
  });
  const ref = useRef(null);
  const observe = useIntersectionObserver();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({ name: '', school: '', county: '', email: '' });
  };

  return (
    <section id="join-us" className="animate-on-scroll" ref={observe(ref)}>
      <div className="text-center p-8 mt-16">
        <h2 className="text-3xl font-bold text-[#F28E13] mb-4">
          Join Us in Empowering Kenya's Teachers
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          This is your invitation to be a part of the movement. Register your interest and join
          our waiting list to be among the first to experience Mwalimu's Toolkit.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-[#00A6A6] mb-6">
          Register Your Interest
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#75B7B7] focus:border-[#75B7B7] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">
              School Name
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#75B7B7] focus:border-[#75B7B7] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="county" className="block text-sm font-medium text-gray-700">
              County
            </label>
            <input
              type="text"
              id="county"
              name="county"
              value={formData.county}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#75B7B7] focus:border-[#75B7B7] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#75B7B7] focus:border-[#75B7B7] sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-[#E55B3C] hover:bg-[#D54A2B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E55B3C] transition duration-300 ease-in-out animate-pulse-btn"
            >
              Join the Movement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
