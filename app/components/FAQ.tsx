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
      question: "What is included in the Ultimate Growth Package?",
      answer: "The Ultimate Growth Package includes all features from our previous packages, 24/7 support, consultation, comprehensive web maintenance, content creation, and social media management. Advanced SaaS tools are also available to help your business grow.",
      value: "item-6",
    },
    {
      question: "Is web development included in the package?",
      answer: "No, web development fees are not included in the Ultimate Growth Package. These are handled separately to ensure the best fit based on your project’s requirements.",
      value: "item-7",
    },
    {
      question: "Can I customize the package to fit my business needs?",
      answer: "Absolutely! We can tailor the package based on your business goals, offering flexibility with the services and tools included.",
      value: "item-8",
    },
    {
      question: "What type of support do I receive with this package?",
      answer: "You get 24/7 dedicated support, including consultations and technical assistance, ensuring your website and digital assets run smoothly.",
      value: "item-9",
    },
    {
      question: "How are the SaaS tools integrated into the package?",
      answer: "While the SaaS component is temporarily paused, once available again, we provide advanced tools that enhance automation, optimize performance, and scale your business efficiently.",
      value: "item-10",
    },
    {
      question: "What is the minimum commitment period for the Ultimate Growth Package?",
      answer: "The minimum commitment period for the Ultimate Growth Package is 3 months. This allows enough time to implement growth strategies and see measurable results.",
      value: "item-11",
    },
    {
      question: "How does the content creation process work?",
      answer: "Our team will collaborate with you to understand your brand, target audience, and goals. We’ll then create tailored content, including social media posts, blogs, and visuals, to elevate your online presence.",
      value: "item-12",
    },
    {
      question: "Can I upgrade or downgrade my package at any time?",
      answer: "Yes, you can adjust your package based on your evolving business needs. Contact us to discuss any changes, and we’ll ensure a smooth transition.",
      value: "item-13",
    },
    {
      question: "What happens if I need web development later?",
      answer: "You can add web development services at any time, and we’ll provide a separate quote based on the complexity and scope of your project.",
      value: "item-14",
    },
    {
      question: "Is there any cancellation fee?",
      answer: "No, there is no cancellation fee. However, we require a 30-day notice for cancellation to wrap up services and deliver any pending work.",
      value: "item-15",
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
          <AccordionTrigger className="text-left  text-lg ">
            {question}
          </AccordionTrigger>

          <AccordionContent className=' text-lg text-muted-foreground '>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>

  )
}

export default FAQ