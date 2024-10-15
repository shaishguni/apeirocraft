import { Button } from "@/components/ui/button"
import img from "../../public/img.jpg";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-col  h-auto md:h-[1600px] space-y-12 md:space-y-0 justify-between items-center p-6 md:p-[120px]'>
      <div className='items-center w-full flex flex-col justify-between space-y-6'>
        <span className="w-auto px-4 py-2 flex rounded-full border border-primary/25 shadow-inner">
          <span className="text-xs md:text-sm p-2 font-extrabold">
            <span className="text-white bg-primary rounded-full p-2">Enhance</span> Your Digital Presence!
          </span>
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Experience The AperioCraft{"'s"}
        </h1>
        <p className="text-center md:text-left w-full md:w-[750px] text-sm md:text-xl text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut debitis, quos accusantium architecto consequuntur commodi tenetur maiores natus sapiente minima at odio modi laboriosam! Exercitationem quia in perspiciatis nostrum.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <Button className="h-full w-fit font-bold p-4 md:p-4 text-primary-foreground bg-primary">
            Get Started 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Button>
          <Button className="h-full w-fit font-bold p-4 md:p-4 bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-white">
            Learn More
          </Button>
        </div>
      </div>

      <div className=" translate-x-2 -translate-y-2 w-1/1.5     md:w-1/1.5  pt-6  md:mt-0">
        <Image src={img} height={100} width={1200} className=" w-fit h-fit  rounded-lg border  border-t-3 border-t-purple-300  shadow-amber-100 " alt="gg" />
      </div>
    </div>
  );
};

export default HeroSection;
