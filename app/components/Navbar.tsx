import React from 'react'
// import   logo from "../../public/logo.png"
import logo from "../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' rounded-full border-2 m-2   ml-64 flex w-[800px]'>
        <nav  className='p-2 m-2 space-x-6 space-y-2  w-[300px] pl-12 flex '>
            <section className='flex space-x-2 mr-32 space-y-2'>
            <Image src={logo} width={50} height={50} alt="gg"/>
            <h1 className='font-extrabold'>Apeirocraft</h1>
            </section>
        <div className='flex  space-x-6 '>
        <Link href="/">Product</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
        </div>
    </nav></div>

    
  )
}

export default Navbar