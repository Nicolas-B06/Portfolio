"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconBrandReactNative } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const links = [
  {
    title: "React",
    icon: <FaReact className="text-cyan-500" size={25} />,
    href: "#experience",
  },
  {
    title: "React Native",
    icon: <IconBrandReactNative className="text-cyan-500" size={25} />,
    href: "#experience",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-sky-400" size={25} />,
    href: "#experience",
  },
  {
    title: "JavaScript",
    icon: (
      <IoLogoJavascript className="bg-yellow-300 text-stone-950" size={25} />
    ),
    href: "#experience",
  },
  {
    title: "Angular",
    icon: <FaAngular className="text-red-700" size={25} />,
    href: "#experience",
  },
  {
    title: "NodeJs",
    icon: <FaNodeJs className="text-lime-500" size={25} />,
    href: "#experience",
  },
  {
    title: "Java",
    icon: <FaJava className="text-blue-400" size={25} />,
    href: "#experience",
  },
];

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-white font-semibold text-center text-4xl sm:text-6xl pt-10 sm:pt-[35px] mb-4">
        {t("experienceTitle")}
      </h2>
      <p className="tracking-[0.5em] text-center font-light pb-5 text-[var(--accent)] text-lg sm:text-1xl">
        {t("experienceSubtitle")}
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
              alt="logo blanc pro btp"
            />
            <p className="text-gray-300 text-center md:text-left">
              {t("proBtpTitle")}
            </p>
          </div>
          <p className="text-gray-300 text-center md:text-left md:pt-0 pt-3">
            Mai 2023 - Septembre 2024
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-justify text-sm sm:text-md leading-relaxed">
          {t("proBtpDescription")}
        </p>
      </div>
      <div className="container mx-auto mb-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center pt-5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/NS.jpg"
              height={50}
              width={50}
              alt="logo blanc nextsourcia"
              className="rounded-full"
            />
            <p className="text-gray-300 text-center md:text-left">
              {t("nextSourciaTitle")}
            </p>
          </div>
          <p className="text-gray-300 text-center md:text-left md:pt-0 pt-3">
            Novembre 2021 - Mai 2023
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-justify text-sm sm:text-md leading-relaxed">
          {t("nextSourciaDescription")}
        </p>
      </div>
      <div className="container mx-auto mb-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center pt-5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/O'clock.jpg"
              height={50}
              width={50}
              alt="logo o'clock"
              className="rounded-full"
            />
            <p className="text-gray-300 text-center md:text-left">
              {t("oclockTitle")}
            </p>
          </div>
          <p className="text-gray-300 text-center md:text-left md:pt-0 pt-3">
            Décembre 2020 - Mai 2021
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-justify text-sm sm:text-md leading-relaxed">
          {t("oclockDescription")}
        </p>
      </div>
    </section>
  );
};

export default Experience;
