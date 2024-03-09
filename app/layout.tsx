import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";
import NoMobileScreen from "@/components/sub/NoMobileScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Suresh's Portfolio",
  description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
  openGraph: {
    title: "Saurabh Suresh's Portfolio",
    description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
    url: "https://www.saurabhsuresh.com",
    siteName: "Saurabh Suresh's Portfolio",
    images: ['https://drive.usercontent.google.com/download?id=1GmmtkM4Q1LJqyqgjtkW7FUrZankr_rwa']
  },
  keywords: ['Saurabh Suresh', 'Full stack developer', 'Newcastle University student', 'Newcastle software developer'],
  twitter:{
    card: "summary_large_image",
    title: "Saurabh Suresh's Portfolio",
    description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
    creator: "@hxckgxd",
    images: ['https://drive.usercontent.google.com/download?id=1GmmtkM4Q1LJqyqgjtkW7FUrZankr_rwa']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory">
      <body
        className={`${inter.className} bg-neutral-950 overflow-y-scroll overflow-x-hidden`}
      >
       
          <StarsCanvas />
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
