import React from 'react';
import Navbar from './components/nav/navbar';

const LabelServices: React.FC = () => {
  const services = [
    { title: "Product Labels", description: "Branding and product information for a wide range of items, from food to electronics." },
    { title: "Barcode Labels", description: "Essential for inventory management, retail operations, and tracking purposes." },
    { title: "Address Labels", description: "Customized labels for mailing and shipping, featuring your name and address." },
    { title: "Shipping Labels", description: "Designed for packages, including all necessary sender, recipient, and handling information." },
    { title: "Name Badges", description: "For identification at events, conferences, and in the workplace." },
    { title: "Warning Labels", description: "Conveying safety information with clear warnings like 'Caution' and 'Danger'." },
    { title: "Asset Tags", description: "For tracking and managing business equipment and assets efficiently." },
    { title: "Custom Stickers", description: "Versatile branding or personal use stickers in various shapes and sizes." },
    { title: "Security Labels", description: "Tamper-evident labels to protect products from theft or tampering." },
    { title: "Wine Labels", description: "Elegant labels for wine bottles, detailing winery, grape variety, and vintage." },
    { title: "Promotional Labels", description: "Marketing labels with discounts, codes, or QR codes to engage customers." },
    { title: "Cosmetic Labels", description: "Including ingredients, usage instructions, and branding for cosmetic products." },
    { title: "Food Labels", description: "Providing nutritional information, ingredients, and allergen warnings." },
    { title: "Clothing Labels", description: "For textiles, offering care instructions and brand information." },
    { title: "Water Bottle Labels", description: "Custom labels for events, weddings, or branding, wrapping around bottles." },
    { title: "Health and Safety Labels", description: "Safety instructions and warnings for workplaces and public spaces." },
    { title: "Electrical Labels", description: "Indicating wiring and safety information on electrical panels and devices." },
    { title: "Oil Change Labels", description: "Reminders for vehicle maintenance from auto service centers." },
    { title: "Library Labels", description: "For book classification, identification, and tracking in libraries." },
    { title: "QR Code Labels", description: "Containing QR codes to access more information or websites via smartphones." },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-10">Our Labeling & Tagging Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabelServices;
//import Navbar from './components/nav/navbar';
//const CustomTags: React.FC = () => {
//  return (
//    <div>
//      <Navbar />
//      <div className="max-w-4xl mx-auto p-5">
//        <div>
//          <h1 className="text-4xl font-bold text-center mb-4">Custom Bulk Tags by West Michigan Tag & Label</h1>
//          <p className="text-lg mb-4">
//            At West Michigan Tag & Label, we specialize in crafting high-quality, custom tags designed to meet the diverse needs of our clients. 
//            Whether you&apos;re looking to brand products, provide critical information, or enhance operational efficiency, our custom tag solutions are tailored 
//            to your specific requirements. With decades of experience, we ensure precision, durability, and functionality in every tag we produce.
//          </p>
//          <p className="text-lg mb-6">
//            Our bulk production capabilities allow us to offer competitive pricing without compromising on quality. Equipped with the latest in offset and digital printing technologies, 
//            we can handle orders of any size, from small batches to millions of tags, all while maintaining consistent quality and color accuracy. Our range of materials, including paper, plastic, and metal, 
//            alongside various finishes and adhesives, ensures that your tags perform exactly as needed in any environment.
//          </p>
//          <p className="text-lg mb-6">
//            Partnering with West Michigan Tag & Label means access to a dedicated team that works with you from design to delivery. 
//            We provide expert advice on material selection, design optimization, and cost-effective production strategies to make your tags stand out. 
//            Whether you need rugged industrial tags, elegant retail labels, or anything in between, we are here to turn your vision into reality.
//          </p>
//          <p className="text-lg">
//            Let West Michigan Tag & Label be your trusted partner for custom tag solutions. Contact us today to discuss your project and how we can help bring your tags to life.
//          </p>
//        </div>
//      </div>
//    </div>
//  );
//};
//
//export default CustomTags;
