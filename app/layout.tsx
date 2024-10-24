import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", 
});

export const metadata: Metadata = {
  title: "ApeiroCraft",
  description: "Embark on a Digital Odyssey with  ApeiroCraft",
};

export default function oRotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased  w-full h-full    dark:text-white  dark:bg-background px-4 py-6 sm:px-6 lg:px-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics/>
          <SpeedInsights />

        </ThemeProvider>
      </body>
    </html>
  );
}
