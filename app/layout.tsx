import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahabuddin Ahmed Khan Portfolio",
  description: "Aim high they say, so space it is then",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo2.png" type="image/png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07010c] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas></StarsCanvas>
        <Navbar></Navbar>
        {children}
        
      </body>
    </html>
  );
}
