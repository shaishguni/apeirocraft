"use server";

import { HeroSection } from "./components/HeroSection";
import Benefits from "./components/Benefits";
import { Features } from "./components/Features";
import { Services } from "./components/Services";

import Pricing from "./components/Pricing";
import { Contact } from "./components/Contact";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";

import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';



export default async function  Home() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated =  await isAuthenticated();
        
  if (authenticated) {
    redirect('/dashboard');
  } 
  return (

    <div className="flex-row w-full overflow-none  space-y-12 h-full items-center justify-between md:p-12 mx-0 my-0 ">
      <Navbar/>
     <HeroSection/> 
     <Benefits/>
     <Features/>
     <Services/>
     
     {/* <Products/> */}
     <Pricing/>

     <FAQ/>
     <Contact/>

    </div>
        
    
  );
}
