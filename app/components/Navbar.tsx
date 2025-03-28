'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];


function arr () {
  alert("The pitch deck is not available yet. Please check back later.")

}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'py-4 mt-2 ' : 'py-4'}  transition-all duration-300 backdrop-blur-lg bg-white/80 dark:bg-black/80 shadow-sm`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Logo"
            className="transition-transform duration-300 transform hover:rotate-3 hover:scale-110"
          />
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-transparent bg-gradient-to-l from-purple-600 via-indigo-500 to-primary bg-clip-text hover:bg-primary transition-all"
          >
            ApeiroCraft
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center justify-between">
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-medium relative px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          <Button variant="outline" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full px-6 transition-all">
          <Link href="/login">Sign In</Link>
          </Button>
          
          <Button className="bg-gradient-to-l from-purple-600 via-indigo-500 to-primary hover:bg-primary text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <Link href="#contact" onClick={arr}>For Investors</Link>
          </Button>
          
          <div className="flex items-center space-x-3 ml-2">
            <ModeToggle />
            <Button size="icon" variant="ghost" className="rounded-full p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30">
              <Link href="https://www.instagram.com/apeirocraft/" target="_blank">
                <InstagramLogoIcon className="w-5 h-5 text-purple-500" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center space-x-3">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-5 py-6">
              {routeList.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col w-full items-center space-y-3 px-10 pt-2">
                <Button variant="outline" className="w-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full">
                  <Link href="/login">Sign In</Link>
                
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full shadow-md">
                  
                  <Link href="#contact" onClick={arr}>For Investors</Link>
                  
                </Button>
                <Button size="icon" variant="ghost" className="mt-2 rounded-full p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <Link href="https://www.instagram.com/apeirocraft/" target="_blank">
                    <InstagramLogoIcon className="w-5 h-5 text-purple-500" />
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
