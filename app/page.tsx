import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
export default function Home() {
  return (
    <div className="flex-row w-full h-full bg-white px-auto py-auto">
     <HeroSection/> 
     <Benefits/>
    </div>
        
    
  );
}
