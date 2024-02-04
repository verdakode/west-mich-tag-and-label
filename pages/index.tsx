import React from 'react';
import Navbar from './components/nav/navbar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';

import '../styles/globals.css';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ContactSection />
        <Footer />
    </div>
  );
};

export default HomePage;
