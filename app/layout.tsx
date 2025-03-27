import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
  description: "Boost your brand with expert web development, social media mastery, and AI-powered SaaS for unstoppable growth!",
  metadataBase: new URL("http://apeirocraft.tech/"),
  keywords : [
    "ApeiroCraft",
    "Tech-driven solutions",
    "Digital hub for businesses",
    "AI-powered SaaS",
    "Custom website development",
    "Professional web design",
    "E-commerce web development",
    "Real estate websites",
    "Website creation services",
    "Social media management agency",
    "Content creation services",
    "Graphic design for social media",
    "Social media marketing for brands",
    "Editing and content services",
    "Niche-specific SaaS",
    "AI solutions for small businesses",
    "SaaS for real estate and gyms",
    "Automated social media SaaS",
    "AI-driven project management tools",
],


};
export default function RootLayout({
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

          {children}
          <Analytics/>
          <SpeedInsights />

        </ThemeProvider>
      </body>
    </html>
  );
}
