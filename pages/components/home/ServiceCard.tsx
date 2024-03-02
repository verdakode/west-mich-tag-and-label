import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
    imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-lg p-6 text-navy">
      <h3 className="text-2xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-center text-xl">{description}</p>
        <br />
        <Image src={imageUrl} alt={title} className="mb-3" width={500} height={300} /> {/* Display the image here */}
    </div>
  );
};

export default ServiceCard;
