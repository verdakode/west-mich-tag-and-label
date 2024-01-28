import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Detailed description of services...</p>
      <Link href="/" legacyBehavior><a>Home</a></Link>
    </div>
  );
};

export default Services;

