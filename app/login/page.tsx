"use client"

// import React from 'react'
import { Button } from '@/components/ui/button';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import login from "@/public/login.jpg"
import Image from 'next/image'


const page = () => {
 
  return (
  <div className="flex flex-row items-center justify-between h-screen w-full ">
    <div className='w-1/2 h-full'>  
      <Image src={login} alt='login img ' width={1000} height={1000}/>
      </div>
    <div></div>
  </div>
  )
}

export default page

 {/* <Button><LoginLink w={true} >Sign in</LoginLink></Button>
      <Button><RegisterLink>Sign up</RegisterLink></Button> */}

      // <Image src={login} alt="login"/>