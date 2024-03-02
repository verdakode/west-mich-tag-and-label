import Link from 'next/link';
import Image from 'next/image'; // Import Image component for the right-side picture

const Hero = () => {
    return (
        // Outer section with flexbox to center the white box horizontally and vertically
        <section className="flex justify-center items-center pt-10 pb-20 bg-blue-200">
            {/* White box container with flex to position content and image side by side */}
            <div className="flex items-center bg-white shadow-lg overflow-hidden mx-4 w-full text-navy" style={{ minHeight: '70vh', maxWidth: '90rem' }}>
                {/* Content on the left */}
                <div className="pl-12 flex-1">
                    <h1 className="text-7xl font-bold mb-4">Quality Labels & Tags for Your Business</h1>
                    <p className="text-2xl mb-6">Innovative Printing Solutions Tailored to Your Needs</p>
                    <Link href="/contact" className="bg-navy text-blue-200 px-6 py-3 rounded hover:bg-gray-100 text-2xl">Get a Quote
                    </Link>
                </div>
                {/* Image on the right */}
                <div className="flex-1 pr-12">
                    <Image src="/WestMichTagAndLabel/wmtl_building.png" alt="Picture Description" width={700} height={1000} objectFit="cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
