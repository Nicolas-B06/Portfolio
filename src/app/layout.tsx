
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bernard-nicolas.vercel.app"),
  title: "Nicolas BERNARD - Developer Portfolio",
  description:
    "Developer Portfolio of Fullstack & Mobile App Developer Nicolas BERNARD.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Fullstack Developer",
    "Next.js",
    "React",
    "ReactNative",
    "NodeJS",
    "Express",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "TailwindCSS",
    "Nicolas BERNARD",
  ],
  openGraph: {
    title: "Nicolas BERNARD",
    description:
      "Fullstack & Mobile Developer JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://nicolasbernard.com/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
      <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
