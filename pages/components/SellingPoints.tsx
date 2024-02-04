import UniqueSellingPoint from '../components/home/SellingPoint';
const SellingPoints = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-8">Why Choose West Michigan Tag & Label</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UniqueSellingPoint title="Short & Long Run Capability" detail="From 500 to over 1,000,000 units, catering to all order sizes." />
            <UniqueSellingPoint title="Advanced Printing Options" detail="Up to 8-color flexographic printing and 4-color process digital printing." />
            <UniqueSellingPoint title="Customization & Quality" detail="Diverse options like UV varnishing, laminating, barcoding, and consecutive numbering." />
            {/* ... other USPs ... */}
          </div>
        </div>
      </section>
    );
};
export default SellingPoints;
