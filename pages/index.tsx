import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to West Michigan Tag and Label Company</h1>
      <p>Your trusted source for high-quality tags and labels.</p>
      <nav>
        <Link href="/services" legacyBehavior><a>Services</a></Link> | 
        <Link href="/about" legacyBehavior><a>About Us</a></Link> | 
        <Link href="/contact" legacyBehavior><a>Contact</a></Link>
      </nav>
    </div>
  );
};

export default Home;

