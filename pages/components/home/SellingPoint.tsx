import React from 'react';

interface UniqueSellingPointProps {
  title: string;
  detail: string;
}

const UniqueSellingPoint: React.FC<UniqueSellingPointProps> = ({ title, detail }) => {
  return (
    <div className="mb-6">
      <h4 className="font-bold">{title}</h4>
      <p>{detail}</p>
    </div>
  );
};

export default UniqueSellingPoint;
