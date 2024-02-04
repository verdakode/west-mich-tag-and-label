import Link from 'next/link';

const Hero = () => {
    return (
<section className="bg-blue-200 text-navy text-center py-20">
        <h1 className="text-6xl font-bold mb-4">Quality Labels & Tags for Your Business</h1>
        <p className="text-xl mb-6">Innovative Printing Solutions Tailored to Your Needs</p>
          <Link href="/contact" 
               className="bg-navy text-blue-200 px-6 py-3 rounded hover:bg-gray-100">Get a Quote
          </Link>

      </section>
    );
};

export default Hero;

