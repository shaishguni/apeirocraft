import React from 'react'
import Image from 'next/image';
import img from "@/public/img.jpg"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// Copy


const products = [
  {
    id: 1,
    name: "Web Development",
    image: img,
    description: "Tailored web solutions for niche industries, with scalability in mind."
  },
  {
    id: 2,
    name: "SMMA & Content Agency",
    image: img,
    description: "Integrated social media management and content creation for recurring growth."
  },
  {
    id: 3,
    name: "SaaS Solutions",
    image: img,
    description: "AI-powered SaaS solutions for various industries, driving efficiency and automation."
  },
];



const Products = () => {

  return (
    <div  id="products" className=' flex flex-col  items-center justify-between w-full h-full'>
<section   className=" container w-1/2 h-1/2 mx-auto px-4 sm:px-6 lg:px-8   py-24 sm:py-32">
    <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Our Products
    </h2>
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
    Tailored Solutions for Every Niche
    </h2>
    <h3 className="md:w-fit mx-auto  text-xl text-justify text-muted-foreground pb-14">
    From niche web development to AI-powered SaaS, our products are built to elevate your business. Streamline operations, grow your brand, and experience seamless success with our tailored solutions. Let{"'s"} get started today!
    </h3>
    </section>
    <div className="container mx-auto -my-24 px-4 sm:px-6 lg:px-8 py-24">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            
              <AlertDialog>
              <AlertDialogTrigger className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">Learn More </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter> 
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogCancel><Link href="#pricing">Continue To Pricing</Link> </AlertDialogCancel>
                 
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>
        ))}
      </div>
    </div>
    </div>



    
  )
}

export default Products