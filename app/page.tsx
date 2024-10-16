import HeroSection from "./components/HeroSection";
import { Benefits } from "./components/Benefits";
export default function Home() {
  return (
    <div className="flex-row w-full h-full  mx-0 my-0 px-0 py-0">
     <HeroSection/> 
     <Benefits/>
    </div>
        
    
  );
}
