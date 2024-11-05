"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-10 sm:pt-[35px] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col justify-around items-center max-w-lg sm:max-w-2xl">
        <h1 className="text-white font-semibold text-4xl sm:text-6xl text-center mb-4">
          À PROPOS DE MOI
        </h1>
        <p className="tracking-[0.5em] font-light text-[var(--accent)] text-md sm:text-xl text-center mb-10">
          DECOUVREZ MON PARCOURS
        </p>
        <p className="text-gray-300 text-justify text-sm sm:text-md leading-relaxed">
          Après une reconversion vers le monde du web, j&apos;ai décidé de
          transformer ma passion en carrière. J&apos;ai suivi une formation
          intensive de 6 mois avec O&apos;clock, où j&apos;ai obtenu mon titre
          professionnel de développeur web et web mobile, spécialisé en backend
          Node.js. Pour approfondir mes compétences, j&apos;ai choisi de
          poursuivre mes études avec un cursus en alternance de 3 ans, dans le
          but d&apos;obtenir un master en expertise informatique et systèmes
          d&apos;information. Curieux et toujours à l&apos;affût des nouvelles
          technologies, j&apos;aime explorer les innovations du secteur.
          <br />
          <br />
          En dehors du code, je suis passionné de moto, adepte de sport, surtout
          de fitness, et j&apos;apprécie les randonnées en montagne qui
          m&apos;offrent un moment de ressourcement et d&apos;aventure.
        </p>
      </div>
    </section>
  );
};

export default About;
