
'use client'

import React, { useState } from 'react';
import logo from "../../public/logo.png";
import Image from 'next/image';       
import Link from 'next/link';
import { ModeToggle } from './ui/ThemeToggle';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button';
  


interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}
const featureList : FeatureProps[] = [ 

  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

const routeList: RouteProps[] = [

  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-black shadow-inner  text-lg  dark:text-white bg-white dark:bg-black  text-black  top-5  sticky border border-secondary z-40 rounded-2xl  flex-1  mt-2 p-4 m-4 space-y-2 bg-transparent w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-lg mx-4 lg:mx-0 flex justify-between items-center    lg:ml-48 transition-all duration-300'>
      <nav className='flex justify-between items-center w-full'>
        {/* Logo Section (Left) */}
        <section className='flex items-center space-x-3'>
          <Image src={logo} width={50} height={50} alt="gg" className='transition-transform duration-300 transform hover:scale-110' />
          <Link href='/' className='font-extrabold text-2xl tracking-wide  hover:text-primary transition-colors'>
            ApeiroCraft
          </Link>
        </section>

        {/* Mobile Hamburger Menu Icon */}
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 transition-colors">
            {isOpen ? <XIcon className="w-4 h-4 ml-6 " /> : <MenuIcon className="w-8   h-8" />}
          </button>
        </div>

        {/* Links Section (Center) */}
        <div className={`hidden lg:flex lg:space-x-8 lg:items-center mx-auto`}>
          
        <NavigationMenu className="hidden  lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-lg">
              <Link href="#products" className='text-lg'>Products</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
              <Image
                  src={logo}
                  alt="gg"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className=" px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
        </div>
        

        {/* Mode Toggle and Button Section (Right) */}
        <div className='hidden lg:flex items-center space-x-4'>
          <ModeToggle />
          <Button className=' bg-foreground dark:bg-teal-500   px-6 py-2  rounded-full hover:bg-primary-dark shadow-lg transition-transform duration-200 transform hover:scale-105'>
           <Link href="https://www.instagram.com/apeirocraft/" target="_blank"><InstagramLogoIcon /></Link> 
          </Button>
        </div>
      </nav>

      {/* Mobile Links Section (Centered) */}
      {isOpen && (
        <div className='lg:hidden mt-4 flex-1 space-x-6 flex-row   items-center space-y-2'>
          {/* <Link href="/" className='text-lg text-gray-600 hover:text-primary transition-colors duration-200'>Products</Link> */}
          {routeList.map(({ href, label }) => (
                  <Link
                    key={href}
                    // onClick={() => setIsOpen(false)}
                    className=" text-lg text-gray-600 hover:text-primary transition-colors duration-200"
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
          <div className='flex items-center space-x-4 mt-4'>
            <ModeToggle />
            <Button className=' bg-foreground dark:bg-teal-500 px-6 py-2 dark:text-white rounded-full hover:bg-primary-dark shadow-lg transition-transform duration-200 transform hover:scale-105'>
              <Link href="https://www.instagram.com/apeirocraft/" target="_blank" ><InstagramLogoIcon /></Link>
            </Button>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
