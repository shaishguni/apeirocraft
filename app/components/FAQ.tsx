import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "What unique services do you provide?",
      answer: "We specialize in web development, SaaS solutions, a content agency, and social media management, designed to elevate your brand.",
      value: "item-1",
    },
    {
      question: "What is the cost of web development?",
      answer: "Our tailored web development starts at $3,500 as a one-time investment to create a powerful online presence.",
      value: "item-2",
    },
    {
      question: "Is there a monthly maintenance fee?",
      answer: "Yes, our maintenance service is available at $800 per month, ensuring your site remains optimized and up-to-date.",
      value: "item-3",
    },
    {
      question: "What does your content agency offer?",
      answer: "Our content agency excels in creating compelling content, editing, and graphic design to boost your engagement and visibility.",
      value: "item-4",
    },
    {
      question: "How can your SaaS service benefit me?",
      answer: "Our AI-integrated SaaS solutions provide versatility across multiple niches, streamlining your operations and enhancing efficiency.",
      value: "item-5",
    },
  ];
  

const FAQ = () => {
  return (
    <section id="faq" className="container md:w-full  py-24 sm:py-32">
    <div className="text-center mb-8">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        FAQS
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion type="single" collapsible className="AccordionRoot">
      {FAQList.map(({ question, answer, value }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger className="text-left text-thin text-2xl">
            {question}
          </AccordionTrigger>

          <AccordionContent className='text-xl'>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>

  )
}

export default FAQ