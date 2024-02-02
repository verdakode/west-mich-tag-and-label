import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-blue-200 text-white text-center py-12">
      <div className="container mx-auto px-4">
        <h4 className="text-2xl text-navy font-bold mb-4">Start Your Custom Project Today</h4>
        <Link href="/contact" legacyBehavior><a className="bg-navy text-white px-6 py-3 rounded hover:bg-blue-400">Contact Us</a></Link>
      </div>
    </section>
  );
};

export default ContactSection;
