'use client'

import React from 'react'
import logo from "../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ui/ThemeToggle'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className=' rounded-full border-2 m-2 space-x-96 items-center ml-48 justify-between flex w-[1000px]'>
        <nav  className='p-2 m-2 space-x-6 space-y-2  w-[300px] pl-12 flex '>
            <section className='flex space-x-2 mr-32 space-y-2'>
            <Image src={logo} width={50} height={50} alt="gg"/>
            <Link href='/' className='font-extrabold'>Apeirocraft</Link>
            </section>
        <div className='flex  space-x-6   '>
        <Link href="/">Product</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
        
        </div>
        
    </nav>
    <div className='flex-1 p-4 space-x-2 space-y-2 m-2 items-end pl-2 ' >
      <ModeToggle/>
      <Button>Make It {"Your's"}</Button>
    </div>
    </div>

    
  )
}

export default Navbar