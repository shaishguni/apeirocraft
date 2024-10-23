"use client";

// import { Button } from "@/components/ui/button"
import img from "../../public/img.webp";
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <div className='flex flex-col md:flex-col   h-auto md:h-[1600px] space-y-12 md:space-y-0 justify-between items-center p-6 '>
//       <div className='items-center w-full flex flex-col justify-between space-y-6'>
//         <span className="w-auto px-4 py-2 flex rounded-full border border-primary/25 shadow-inner">
//           <span className="text-xs md:text-sm p-2 font-extrabold">
//             <span className="text-white bg-primary rounded-full p-2">Enhance</span> Your Digital Presence!
//           </span>
//         </span>

//         <h1 className="text-4xl md:text-6xl font-bold text-center md:text-between">
//         Experience <span className='text-transparent pl-2 bg-gradient-to-r from-purple-500 to-purple-900 tanslate-x-2 duration-200  bg-clip-text '>ApeiroCraft</span> Limitless Possibilities
//         </h1>
//         <p className="text-center md:text-between w-full md:w-[750px]   text-sm md:text-xl text-muted-foreground">
// Unlock your business{"'s"} full potential with ApeiroCraft. We create custom digital solutions designed to drive growth, efficiency, and success. Let’s build the future together!
//         </p>

//         <div className="flex justify-center md:justify-start space-x-4">
//           <Button className="h-full w-fit font-bold p-4 md:p-4 text-primary-foreground bg-primary">
//             Get Started 
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
//             </svg>
//           </Button>
//           <Button className="h-full w-fit font-bold p-4 md:p-4 bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-white">
//             Learn More
//           </Button>
//         </div>
//       </div>

//       <div className=" translate-x-2 -translate-y-2  items-start  pb-auto pl-auto    md:w-full   pt-6  md:mt-0">
//         <Image src={img}  className=" w-full h-full  rounded-lg border  border-t-12 border-t-primary  shadow-amber-900 " alt="gg" />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 rounded-full text-primary">
              <Badge>Enhance</Badge>
            </span>
            <span> Your Digital Presence! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
            Experience
            <span className='text-transparent pl-2 bg-gradient-to-r from-purple-500 to-purple-900 tanslate-x-2 duration-200  bg-clip-text '>ApeiroCraft</span> Limitless Possibilities

            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Unlock your business{"'s"} full potential with ApeiroCraft. We create custom digital solutions designed to drive growth, efficiency, and success. Let’s build the future together!
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#pricing">Get Started</Link>
              
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="#products"
                // target="_blank"
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary-foreground/25"
            src={
              theme === "light"
                ? img
                : img
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};