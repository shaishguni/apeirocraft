"use client"

import React from 'react'
import ShowcaseGrid from './ShowcaseGrid';
import Filters from "./Filters";
import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("All");
  return (
    <div><section  id="products" className=" container mx-auto px-4 sm:px-6 lg:px-8  py-24 sm:py-32">
    <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Our Products
    </h2>

    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
    Tailored Solutions for Every Niche
    </h2>

    <h3 className="md:w-1/2 mx-auto  text-xl text-justify text-muted-foreground pb-14">
    From niche web development to AI-powered SaaS, our products are built to elevate your business. Streamline operations, grow your brand, and experience seamless success with our tailored solutions. Let{"'s"} get started today!
    </h3>


    </section>
    <div className='grid grid-row-1 sm:grid-row-2 md:grid-row-3 gap-6'>
      <h1 className="text-center text-4xl font-bold mb-8">Our Projects</h1>
      <Filters setCategory={setCategory} />
      <ShowcaseGrid category={category}/>
    </div>
    </div>
    
  )
}

export default Products