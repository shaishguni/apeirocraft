import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Dev = () => {
  return (
    <section id="features" className="container  py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Ready To Join   
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Join our vibrant Instagram community! Connect, share, and grow with <span className='text-transparent pl-2 bg-linear-to-r from-purple-500 to-purple-900 tanslate-x-2 duration-200  bg-clip-text '>ApeiroCraft</span>. Click to dive in! 🚀
      </h3>
      <div className=" w-full h-full
      78  justify-center space-x-6   p-4  flex " >
          <Button className="h-full w-fit font-bold p-4 md:p-4 text-primary-foreground bg-primary">
      
            <Link href="https://www.instagram.com/apeirocraft/" target="_blank">Join Our Instagram!</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Button>
 
        </div>
    </section>
  )
}

export default Dev