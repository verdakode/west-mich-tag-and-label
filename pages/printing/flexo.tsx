import React from 'react';
import Link from 'next/link';

import Navbar from '../components/nav/navbar';
const Flexo: React.FC = () => {
return (
    <div>
    <Navbar />
        <div className="max-w-2xl mx-auto p-5">
            <div>
                <h1 className="text-3xl font-bold text-center mb-4">Flexographic Printing</h1>
                <p className="text-lg mb-4">
                    Flexographic printing is a versatile printing method that uses a flexible relief plate. 
                    It&apos;s well-suited for printing on a variety of materials like plastic, metallic films, cellophane, and paper. 
                    This technique is commonly used for large-scale production of high-quality packaging, labels, and newspapers.
                </p>
                <p className="text-lg mb-6">
                    Key benefits include its fast printing speeds, ability to print on non-porous substrates, and 
                    its cost-effectiveness for high-volume jobs. It&apos;s particularly popular in the food packaging industry 
                    due to its use of non-toxic inks and efficiency.
                </p>
            </div>
        </div>
    </div>
  );
};
export default Flexo;
