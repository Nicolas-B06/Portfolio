"use client";

import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)]  mt-40 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/Profileimg.webp"
            alt="Nicolas BERNARD"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full"
          />
        </div>
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white">
            Bienvenue sur mon{" "}
            <span className="text-[var(--accent)]">portfolio</span>
          </h1>
          <p className="text-sm sm:text-md text-gray-200 my-3 sm:my-5">
            Plongez dans mes réalisations en développement web, où chaque projet
            témoigne de ma passion et de mon engagement envers des solutions
            créatives et efficaces.
          </p>
          <div className="mt-4 sm:mt-6 space-x-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
            <a
              href="/contact"
              className="hover:bg-[var(--accent)] bg-transparent rounded-3xl text-white font-semibold hover:text-black py-3 px-8 sm:px-10 border border-white hover:border-transparent mb-3 sm:mb-0"
            >
              Me contacter
            </a>
            <a
              href="/cv_bernard_nicolas_compressed.pdf"
              download
              className="hover:bg-[var(--accent)] bg-transparent rounded-3xl text-white font-semibold hover:text-black py-3 px-8 sm:px-10 border border-white hover:border-transparent"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
