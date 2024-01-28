import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-blue-900 text-white text-center py-12">
      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-bold mb-4">Start Your Custom Project Today</h4>
        <Link href="/contact" legacyBehavior><a className="bg-yellow-500 text-blue-900 px-6 py-3 rounded hover:bg-yellow-400">Contact Us</a></Link>
      </div>
    </section>
  );
};

export default ContactSection;
