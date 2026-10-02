import type { Metadata } from "next";
import { Inter, Syne, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap", weight: ["400", "700", "900"] });
const dmMono = DM_Mono({ variable: "--font-dm-mono", subsets: ["latin"], display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "SaumyLabs — Elite Digital Agency",
  description: "Premium engineering, design, and growth for founders who refuse to be average.",
  keywords: ["digital agency", "web development", "UI/UX design", "Next.js", "React", "SaumyLabs"],
  openGraph: {
    title: "SaumyLabs — Elite Digital Agency",
    description: "We build the internet. You take the credit.",
    type: "website",
    url: "https://saumylabs.xyz",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable} ${dmMono.variable}`}>
      <body className="bg-dot-grid min-h-screen flex flex-col cursor-none">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
