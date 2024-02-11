import React from 'react';
import Navbar from './components/nav/navbar';
import ContactSection from './components/ContactSection';
import Services from './components/Services';
import SellingPoints from './components/SellingPoints';
import Footer from './components/Footer';
import Hero from './components/Hero';

import '../styles/globals.css';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SellingPoints />
        <Services />
        <ContactSection />
        <Footer />
    </div>
  );
};

export default HomePage;
