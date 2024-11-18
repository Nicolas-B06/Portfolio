"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext"; // Importez le hook du contexte de langue

const About: React.FC = () => {
  const { t } = useLanguage(); // Récupère la fonction de traduction

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-10 sm:pt-[35px] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col justify-around items-center max-w-lg sm:max-w-2xl">
        <h1 className="text-white font-semibold text-4xl sm:text-6xl text-center mb-4">
          {t("about")} {/* Utilisation de la traduction */}
        </h1>
        <p className="tracking-[0.5em] font-light text-[var(--accent)] text-md sm:text-xl text-center mb-10">
          {t("discoverMyJourney")}
        </p>
        <p className="text-gray-300 text-justify text-sm sm:text-md leading-relaxed">
          {t("aboutDescription")}
        </p>
      </div>
    </section>
  );
};

export default About;
