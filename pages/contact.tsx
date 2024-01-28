import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Contact form and details...</p>
      <Link href="/" legacyBehavior><a>Home</a></Link>
    </div>
  );
};

export default Contact;
