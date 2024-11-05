"use client";
import Image from "next/image";
import React from "react";
import { IconBrandReactNative } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const links = [
  {
    title: "React",
    icon: <FaReact className="text-cyan-500" size={25} />,
    href: "#",
  },
  {
    title: "React Native",
    icon: <IconBrandReactNative className="text-cyan-500" size={25} />,
    href: "#",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-sky-400" size={25} />,
    href: "#",
  },
  {
    title: "JavaScript",
    icon: (
      <IoLogoJavascript className="bg-yellow-300 text-stone-950" size={25} />
    ),
    href: "#",
  },
  {
    title: "Angular",
    icon: <FaAngular className="text-red-700" size={25} />,
    href: "#",
  },
  {
    title: "NodeJs",
    icon: <FaNodeJs className="text-lime-500" size={25} />,
    href: "#",
  },
  {
    title: "Java",
    icon: <FaJava className="text-blue-400" size={25} />,
    href: "#",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-white font-semibold text-center text-4xl sm:text-6xl pt-10 sm:pt-[35px] mb-4">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center font-light pb-5 text-[var(--accent)] text-lg sm:text-1xl">
        ET TECHNOLOGIES CONNUES
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4 sm:gap-6 justify-items-center mb-8">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col items-center">
            {link.icon}
            <span className="mt-2 text-center text-sm sm:text-lg font-medium">
              {link.title}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex justify-center bg-transparent mb-8">
        <FloatingDock desktopClassName="bg-transparent mt-10" items={links} />
      </div>
      <div className="container mx-auto mb-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center pt-5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/logo-blanc-grand-probtp.png"
              height={100}
              width={100}
              alt="experience"
              className="rounded-full"
            />
            <p className="text-gray-300 text-center md:text-left">
              Assistant en <span className="font-semibold">stratégie IT</span>
            </p>
          </div>
          <p className="text-gray-300 text-center md:text-left md:pt-0 pt-3">
            Mai 2023 - Septembre 2024
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-justify text-sm sm:text-md leading-relaxed">
          En tant qu&apos;assistant en stratégie IT chez Pro BTP, j&apos;ai
          contribué à plusieurs initiatives stratégiques, notamment en réalisant
          la cartographie des compétences et en analysant des sujets tels que
          l&apos;intelligence artificielle et les architectures event-driven.
          J&apos;ai également conduit une analyse de l&apos;obsolescence des
          technologies et animé des ateliers de design thinking, favorisant la
          collaboration et l&apos;innovation au sein des équipes.
        </p>
      </div>
      <div className="container mx-auto mb-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center pt-5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/NS.jpg"
              height={50}
              width={50}
              alt="experience"
              className="rounded-full"
            />
            <p className="text-gray-300 text-center md:text-left">
              Développeur web
              <span className="font-semibold"> Full Stack</span>
            </p>
          </div>
          <p className="text-gray-300 text-center md:text-left md:pt-0 pt-3">
            Mai 2023 - Septembre 2024
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-justify text-sm sm:text-md leading-relaxed">
          En tant que développeur web Full Stack chez NextSourcia, j&apos;ai
          travaillé sur la réalisation de thèmes pour le CMS e-commerce de
          l&apos;entreprise (Aquila CMS) ainsi que sur l&apos;entretien et la
          mise à jour des thèmes existants. J&apos;ai également participé à la
          création de preuves de concept (POC) et réalisé un projet interne
          Front/Back en utilisant une stack technique moderne : React, Node.js,
          TypeScript et Mongoose. Ce rôle m&apos;a permis de renforcer mes
          compétences en développement web et de suivre les dernières
          innovations technologiques.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-5">
          {["React", "TypeScript", "JavaScript", "NodeJs"].map((tech, idx) => (
            <div key={idx} className="flex items-center">
              {links.find((link) => link.title === tech)?.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
