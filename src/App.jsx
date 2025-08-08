import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CrisisOverview from './components/CrisisOverview';
import TeacherCapacity from './components/TeacherCapacity';
import WhatItIs from './components/WhatItIs';
import HowItWorks from './components/HowItWorks';
import WhyCrucial from './components/WhyCrucial';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-gray-800">
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <Hero />
        <main className="space-y-16">
          <CrisisOverview />
          <TeacherCapacity />
          <WhatItIs />
          <HowItWorks />
          <WhyCrucial />
          <JoinUs onFormSubmit={handleFormSubmit} />
        </main>
      </div>
      <Footer />
      <SuccessModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default App;
