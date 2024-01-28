import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Company history and values...</p>
      <Link href="/" legacyBehavior><a>Home</a></Link>
    </div>
  );
};

export default About;
