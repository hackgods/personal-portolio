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
  title: "Saurabh Suresh Portfolio",
  description: "Welcome to Saurabh's portfolio",
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
        <div className="hidden md:flex">
          <StarsCanvas />
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </div>

        <div className="block md:hidden">
        <StarsCanvas />
        <NoMobileScreen/>
        </div>
      </body>
    </html>
  );
}
