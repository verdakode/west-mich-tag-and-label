import React from 'react';

interface UniqueSellingPointProps {
  title: string;
  detail: string;
}

const UniqueSellingPoint: React.FC<UniqueSellingPointProps> = ({ title, detail }) => {
  return (
    <div className="mb-6">
      <h4 className=" text-2xl">{title}</h4>
      <p className ="text-1xl">{detail}</p>
    </div>
  );
};

export default UniqueSellingPoint;
