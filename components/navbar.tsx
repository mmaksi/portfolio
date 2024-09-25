import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-background p-2 ps-24 border-grey-700 border-b-2">
      <nav className="container py-2 flex justify-between items-center">
        <Link href="/" className="text-lg">
          Mark Maksi
        </Link>
        <div className="flex items-center gap-1"></div>
      </nav>
    </div>
  );
};

export default Navbar;
