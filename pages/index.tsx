// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import AboutCompany from "@/components/AboutCompany";
import Hero from "@/components/Hero";
import ImageSection from "@/components/ImageSection";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageSection />
      <AboutCompany />
    </>
  );
}
