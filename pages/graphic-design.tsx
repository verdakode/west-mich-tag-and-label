import React from 'react';
import Navbar from './components/nav/navbar';

const GraphicDesignServices: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-10">Graphic Design Services</h1>

        {/* How to Send Files Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-5">How to Send Files</h2>
          <p className="text-lg mb-4">
            We make it easy to send your designs directly to our team. Utilize our secure file transfer portal, compatible with various file formats including PDF, AI, and PSD. Ensure your files are print-ready with embedded fonts and high-resolution images to streamline the design process.
          </p>
          <a href="/upload" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Send Your Files</a>
        </section>

        {/* Templates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-5">Templates</h2>
          <p className="text-lg mb-4">
            Access our extensive library of customizable templates designed to kickstart your project. From labels to tags, our templates are crafted for ease of use and flexibility, accommodating various industries and applications.
          </p>
          <a href="/templates" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">Browse Templates</a>
        </section>

        {/* Barcodes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-5">Barcodes</h2>
          <p className="text-lg mb-4">
            Enhance your product functionality and traceability with our barcode solutions. From UPCs to QR codes, our team ensures accurate, scannable barcodes tailored to your product needs and compliance requirements.
          </p>
          <a href="/barcodes" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-200">Learn More</a>
        </section>

        {/* What Graphic Design Service Can Look Like Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-5">What Graphic Design Service Can Look Like</h2>
          <p className="text-lg mb-4">
            Discover the potential of professional graphic design with our portfolio. From sleek and modern to classic and elegant, see how our services can transform your ideas into visually compelling tags and labels that stand out.
          </p>
          <a href="/portfolio" className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-200">View Portfolio</a>
        </section>

      </div>
    </div>
  );
};

export default GraphicDesignServices;
