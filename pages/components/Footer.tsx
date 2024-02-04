import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-navy text-white text-sm py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-2">About West Michigan Tag & Label</h4>
            <p>Brief info about the company, its mission, or values. Maybe a couple of sentences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
              <li><Link href="/services" legacyBehavior><a>Services</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
              {/* More links as needed */}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            {/* Contact Details */}
            <p>123 Business Rd, City, State, Zip</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@wmtl.com</p>

            {/* Social Media Icons */}
            <div className="flex mt-4">
              {/* Icons or links to social media profiles */}
              {/* Use icons from a library like Font Awesome or custom SVGs */}
              <a href="https://facebook.com" className="mr-2">FB</a>
              <a href="https://twitter.com" className="mr-2">TW</a>
              <a href="https://linkedin.com">IN</a>
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} West Michigan Tag & Label. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
