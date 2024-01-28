import Link from 'next/link';

import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        <div className="text-lg font-bold">
          <Link href="/" legacyBehavior><a className="hover:text-blue-300">West Michigan Tag & Label</a></Link>
        </div>
        <div className="flex items-center relative">
          <Link href="/" legacyBehavior><a className="px-4 py-2 hover:bg-blue-700 rounded-md">Home</a></Link>
          <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <a className="px-4 py-2 hover:bg-blue-700 rounded-md cursor-pointer">Printing</a>
            {isDropdownOpen && (
              <div className="absolute bg-blue-800 mt-2 py-2 rounded shadow-lg">
                <Link href="/printing/flexo" legacyBehavior><a className="block px-4 py-2 hover:bg-blue-700">Flexo</a></Link>
                <Link href="/printing/digital" legacyBehavior><a className="block px-4 py-2 hover:bg-blue-700">Digital</a></Link>
                <Link href="/printing/offset" legacyBehavior><a className="block px-4 py-2 hover:bg-blue-700">Offset</a></Link>
              </div>
            )}
          </div>
          <Link href="/tags" legacyBehavior><a className="px-4 py-2 hover:bg-blue-700 rounded-md">Tags</a></Link>
          <Link href="/graphic-design" legacyBehavior><a className="px-4 py-2 hover:bg-blue-700 rounded-md">Graphic Design</a></Link>
          <Link href="/contact" legacyBehavior><a className="px-4 py-2 hover:bg-blue-700 rounded-md">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
