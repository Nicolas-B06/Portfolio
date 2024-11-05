"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";


const Projects: React.FC<object> = () => {
  const projects = [
    {
      title: "BodyFit-app",
      image: "/bodyfit.png",
      description:
        "BodyFit est une application mobile de suivi de condition physique développée avec React Native et Expo. Elle permet aux utilisateurs de suivre leur progression, d'accéder à des informations sur leurs activités, et d'utiliser des fonctionnalités interactives pour améliorer leur bien-être physique.",
      link: "https://github.com/BodyFit-App/frontend-bodyfit-app",
    },
    {
      title: "Météo",
      image: "/météo.png",
      description:
        "Ce projet est une application web de prévisions météorologiques développée avec Angular. Elle permet aux utilisateurs de consulter la météo actuelle ainsi que les prévisions sur plusieurs jours pour différentes villes. L'application utilise une API de données météorologiques pour fournir des informations en temps réel.",
      link: "https://github.com/Nicolas-B06/test-angular-meteo",
    },
    {
      title: "PokedexID",
      image: "/pokedex.png",
      description:
        "Ce projet est une application web de type Pokédex qui permet aux utilisateurs de consulter des informations détaillées sur différents Pokémon. Développée en utilisant React, cette application interagit avec une API de Pokémon pour récupérer les données nécessaires, telles que le nom, le type, les statistiques et les images des Pokémon.",
      link: "https://github.com/Nicolas-B06/Pokedex",
    },
  ];
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px] mb-4">
        PROJETS
      </h2>
      <p className=" tracking-[0.5em] text-center text-[var(--accent)] font-light pb-5  bg-clip-text text-1xl ">
        EN COURS OU TERMINES
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} className="" />
      </div>
    </section>
  );
};

export default Projects;
