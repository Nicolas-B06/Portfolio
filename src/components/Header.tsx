"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[var(--card)] text-[var(--card-foreground)] py-4 fixed w-screen z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="bg-transparent text-[var(--foreground)] lg:pl-0 pl-4 ">
            Nicolas BERNARD
          </Link>
        </div>
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="bg-transparent hover:text-[var(--accent)]">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/#about" className="bg-transparent hover:text-[var(--accent)]">
            À propos
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="bg-transparent hover:text-[var(--accent)]">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="bg-transparent hover:text-[var(--accent)]">
              Expérience
            </Link>
          </li>
          <li>
            <Link href="/contact" className="bg-transparent hover:text-[var(--accent)]">
              Contact
            </Link>
          </li>
        </ul>
        <div className="lg:hidden mr-4">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--card)] text-[var(--card-foreground)] py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li>
              <Link href="/" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about-projects" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/experience" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                Expérience
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
