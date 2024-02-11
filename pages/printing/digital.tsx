import React from 'react';
import Link from 'next/link';

import Navbar from '../components/nav/navbar';
const DigitalPrint: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-5">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4">Digital Printing</h1>
          <p className="text-lg mb-4">
            Digital printing is a modern printing method that involves the direct transfer of a digital image onto a variety of media. 
            It's ideal for high-quality, small-batch print runs on materials such as paper, canvas, fabric, and plastic.
            This method excels in producing vivid, accurate colors and high-definition details.
          </p>
          <p className="text-lg mb-6">
            Key advantages of digital printing include its quick turnaround times, ability to customize individual prints within the same run, 
            and minimal setup costs. This makes it a perfect choice for personalized marketing materials, on-demand printing, and prototype packaging.
            Its environmental friendliness, due to less waste and use of eco-friendly inks, also stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalPrint;
