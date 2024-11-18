"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { useLanguage } from "@/context/LanguageContext";

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("playFinderTitle"),
      image: "/PlayFinder.png",
      description: t("playFinderDescription"),
      link: "https://github.com/Nicolas-B06/Play-Finder",
    },
    {
      title: t("bodyFitTitle"),
      image: "/bodyfit.png",
      description: t("bodyFitDescription"),
      link: "https://github.com/BodyFit-App/frontend-bodyfit-app",
    },
    {
      title: t("weatherAppTitle"),
      image: "/météo.png",
      description: t("weatherAppDescription"),
      link: "https://github.com/Nicolas-B06/test-angular-meteo",
    },
    {
      title: t("pokedexTitle"),
      image: "/pokedex.png",
      description: t("pokedexDescription"),
      link: "https://github.com/Nicolas-B06/Pokedex",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px] mb-4">
        {t("projectTitle")}
      </h2>
      <p className="tracking-[0.5em] text-center text-[var(--accent)] font-light pb-5 bg-clip-text text-1xl">
        {t("projectSubtitle")}
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} className="" />
      </div>
    </section>
  );
};

export default Projects;
