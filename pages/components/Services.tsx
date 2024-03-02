import ServiceCard from '../components/home/ServiceCard';
const Services = () => {
    return (
      <section className="py-16 bg-gray-100 text-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl text-center font-semibold p-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Digital Printing" description="Shorter lead times, laser cutting, and computer-driven printing." imageUrl="/WestMichTagAndLabel/OrangeAndRedThings.png" />
            <ServiceCard title="Flexographic Printing" description="From standard black labels to high-quality multi-color labels." imageUrl="/WestMichTagAndLabel/flexographic.webp" />
            <ServiceCard title="Graphic Design" description="In-house design services for logos, branding, and custom visuals." imageUrl="/WestMichTagAndLabel/graphicdesign.jpg" />
          </div>
        </div>
      </section>
    );
};

export default Services;

