"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage(); // Utilisez le contexte pour la langue

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[var(--card)] text-[var(--card-foreground)] py-4 fixed w-screen z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="bg-transparent text-[var(--foreground)] lg:pl-0 pl-4">
            Nicolas BERNARD
          </Link>
        </div>
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="bg-transparent hover:text-[var(--accent)]">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/#about" className="bg-transparent hover:text-[var(--accent)]">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="bg-transparent hover:text-[var(--accent)]">
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="bg-transparent hover:text-[var(--accent)]">
              {t("experience")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="bg-transparent hover:text-[var(--accent)]">
              {t("contact")}
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex space-x-4">
          <button
            className={`p-2 rounded ${language === "fr" ? "bg-[var(--accent)]" : ""}`}
            onClick={() => setLanguage("fr")}
          >
            FR
          </button>
          <button
            className={`p-2 rounded ${language === "en" ? "bg-[var(--accent)]" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
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
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href="/#experience" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                {t("experience")}
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu} className="bg-transparent hover:text-[var(--accent)]">
                {t("contact")}
              </Link>
            </li>
            <div className="flex space-x-4">
              <button
                className={`p-2 rounded ${language === "fr" ? "bg-[var(--accent)]" : ""}`}
                onClick={() => setLanguage("fr")}
              >
                FR
              </button>
              <button
                className={`p-2 rounded ${language === "en" ? "bg-[var(--accent)]" : ""}`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
