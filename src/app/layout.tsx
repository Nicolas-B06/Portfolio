
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://nicolasbernard.com/"),
  title: "Nicolas BERNARD - Developer Portfolio",
  description:
    "Developer Portfolio of Fullstack & Mobile App Develope",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Ibrahim Memon",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Nicolas BERNARD",
    description:
      "Frontend & Mobile App Developer JavaScript technologies.",
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
