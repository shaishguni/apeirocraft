import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import Dev from "./components/our-origin";
import Pricing from "./components/Pricing";
import { Contact } from "./components/Contact";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <div className="flex-row   space-y-12 h-fullitems-center justify-between md:p-12 mx-0 my-0 ">
     <HeroSection/> 
     <Benefits/>
     <Features/>
     <Services/>
     <Dev/>
     <Pricing/>
     <FAQ/>
     <Contact/>

    </div>
        
    
  );
}
