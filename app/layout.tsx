import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarBackground";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Suresh's Portfolio",
  description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
  openGraph: {
    title: "Saurabh Suresh's Portfolio",
    description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
    url: "https://www.saurabhsuresh.com",
    siteName: "Saurabh Suresh's Portfolio",
    images: ['https://i.ibb.co/9T5gCx4/saurabh-website.png']
  },
  keywords: ['Saurabh Suresh', 'Full stack developer', 'Newcastle University student', 'Newcastle software developer'],
  twitter:{
    card: "summary_large_image",
    title: "Saurabh Suresh's Portfolio",
    description: "Saurabh is a Full Stack Software Engineer with experience in Web, Mobile, and Software development based out of Newcastle upon Tyne, United Kingdom.",
    creator: "@hxckgxd",
    images: ['https://i.ibb.co/9T5gCx4/saurabh-website.png']
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
          <Analytics/>
          <SpeedInsights/>
      </body>
    </html>
  );
}
