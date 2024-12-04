import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Policy Impact Tracker</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/policies" className="hover:underline">
              Policies
            </Link>
          </li>
          <li>
            <Link href="/impact" className="hover:underline">
              Impact Metrics
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
