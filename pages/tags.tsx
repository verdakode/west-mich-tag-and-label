import React from 'react';
import Link from 'next/link';

import Navbar from './components/nav/navbar';
const CustomTags: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-5">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Custom Bulk Tags by West Michigan Tag & Label</h1>
          <p className="text-lg mb-4">
            At West Michigan Tag & Label, we specialize in crafting high-quality, custom tags designed to meet the diverse needs of our clients. 
            Whether you&apos;re looking to brand products, provide critical information, or enhance operational efficiency, our custom tag solutions are tailored 
            to your specific requirements. With decades of experience, we ensure precision, durability, and functionality in every tag we produce.
          </p>
          <p className="text-lg mb-6">
            Our bulk production capabilities allow us to offer competitive pricing without compromising on quality. Equipped with the latest in offset and digital printing technologies, 
            we can handle orders of any size, from small batches to millions of tags, all while maintaining consistent quality and color accuracy. Our range of materials, including paper, plastic, and metal, 
            alongside various finishes and adhesives, ensures that your tags perform exactly as needed in any environment.
          </p>
          <p className="text-lg mb-6">
            Partnering with West Michigan Tag & Label means access to a dedicated team that works with you from design to delivery. 
            We provide expert advice on material selection, design optimization, and cost-effective production strategies to make your tags stand out. 
            Whether you need rugged industrial tags, elegant retail labels, or anything in between, we are here to turn your vision into reality.
          </p>
          <p className="text-lg">
            Let West Michigan Tag & Label be your trusted partner for custom tag solutions. Contact us today to discuss your project and how we can help bring your tags to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomTags;
