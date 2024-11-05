"use client";
import {
  IconBrandReactNative,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const links = [
  {
    title: "React",
    icon: (
      <FaReact className="h-full w-full  text-cyan-500" />
    ),
    href: "#",
  },

  {
    title: "React Native",
    icon: (
      <IconBrandReactNative className="h-full w-full  text-cyan-500"/>
    ),
    href: "#",
  },
  {
    title: "typescriptt",
    icon: (
      <SiTypescript className="h-full w-full  text-sky-400" />
    ),
    href: "#",
  },
  {
    title: "javascript",
    icon: (
      <IoLogoJavascript className="h-full w-full bg-yellow-300 text-stone-950" />
    ),
    href: "#",
  },

  {
    title: "Angular",
    icon: (
      <FaAngular className="h-full w-full text-red-700" />
    ),
    href: "#",
  },
  {
    title: "NodeJs",
    icon: (
      <FaNodeJs className="h-full w-full text-lime-500" />
    ),
    href: "#",
  },
  {
    title: "Java",
    icon: (
      <FaJava className="h-full w-full text-blue-400 " />
    ),
    href: "#",
  },
];

const TechnologiesSection = () => {
  return (
    <section className="bg-transparent mb-28 text-[var(--foreground)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Les technologies que j&apos;utilise
        </h2>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 justify-items-center">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center">
              {link.icon}
              <span className="mt-2 text-center text-lg font-medium">{link.title}</span>
            </div>
          ))}
        </div>

   
        <div className="hidden lg:flex justify-center bg-transparent">
          <FloatingDock desktopClassName="bg-transparent mt-16" items={links} />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
