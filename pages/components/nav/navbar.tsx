import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-200 text-navy shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        <div className="text-lg font-bold">
  <Link href="/">
      <Image src="/WestMichTagAndLabel/wmtl_logo.png" alt="West Michigan Tag & Label Logo" className="hover:opacity-75" width={250} height={150} />
  </Link>
        </div>
        <div className="flex items-center relative text-xl">
          <Link href="/"  className="navbar-item">Home</Link>
          <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}
             className="navbar-item cursor-pointer">Printing
            {isDropdownOpen && (
              <div className="absolute bg-blue-200 mt-2 py-3 rounded shadow-lg">
                <Link href="/printing/flexo" className="block px-4 py-2 hover:bg-gray-100">Flexo</Link>
                <Link href="/printing/digital"  className="block px-4 py-2 hover:bg-gray-100">Digital</Link>
                <Link href="/printing/offset"  className="block px-4 py-2 hover:bg-gray-100">Offset</Link>
              </div>
            )}
          </div>
          <Link href="/tags"  className="navbar-item">Tags</Link>
          <Link href="/graphic-design"  className="navbar-item">Graphic Design</Link>
          <Link href="/contact"  className="navbar-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
