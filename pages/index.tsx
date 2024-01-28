import React from 'react';
import Link from 'next/link';
import Navbar from './components/nav/navbar';
import ServiceCard from './components/home/ServiceCard';
import UniqueSellingPoint from './components/home/SellingPoint';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import '../styles/globals.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Quality Labels & Tags for Your Business</h1>
        <p className="text-xl mb-6">Innovative Printing Solutions Tailored to Your Needs</p>
          <Link href="/contact" legacyBehavior>
              <a className="bg-yellow-500 text-blue-900 px-6 py-3 rounded hover:bg-yellow-400">Get a Quote</a>
          </Link>

      </section>

      {/* Services Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Digital Printing" description="Shorter lead times, laser cutting, and computer-driven printing." />
            <ServiceCard title="Flexo Printing" description="From standard black labels to high-quality multi-color labels." />
            <ServiceCard title="Graphic Design" description="In-house design services for logos, branding, and custom visuals." />
            {/* ... other services ... */}
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-8">Why Choose West Michigan Tag & Label</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UniqueSellingPoint title="Short & Long Run Capability" detail="From 500 to over 1,000,000 units, catering to all order sizes." />
            <UniqueSellingPoint title="Advanced Printing Options" detail="Up to 8-color flexographic printing and 4-color process digital printing." />
            <UniqueSellingPoint title="Customization & Quality" detail="Diverse options like UV varnishing, laminating, barcoding, and consecutive numbering." />
            {/* ... other USPs ... */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
