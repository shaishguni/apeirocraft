import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className=' h-[800px]  flex-col-reverse justify-between items-center p-[120px] bg-white'>
      <div className='items-center  w-full flex space-y-6  flex-col justify-between'>
      <span className="w-auto px-6 py-3 top-6  flex rounded-full border border-primary/25 shadow-inner border-spacing-1 ">
            <span className="text-sm font-extrabold   "><span className="text-sm  rounded-full p-2 font-extrabold text-white bg-primary ">Enhance</span>  Your Digital Presence!</span>
      </span>

      <h1 className="text-6xl  font-bold ">Experience The AperioCraft{"'s"}
      
      </h1>
      <p className="inline-block text-wrap w-[750px] justify-between text-xl text-muted-foreground antialiased font-inherit">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aut debitis, quos accusantium architecto consequuntur commodi tenetur maiores natus sapiente minima at odio modi laboriosam! Exercitationem quia in perspiciatis nostrum.</p>
     <div>

     <div className=" flex justify-center space-x-4 items-end  p-2 h-[50px]  w-[500px] ">
     <Button className="  h-full w-fit font-bold p-6   text-primary-foreground bg-primary justify-between items-center  text-xl">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-2 w-fit ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
 </Button>
     <Button className="h-full w-fit font-bold p-6 bg-secondary text-secondary-foreground justify-between items-center text-xl">Book A Meeting</Button>
     </div> 
     </div>
     
      </div>
     
    </div>
  )
}

export default HeroSection

