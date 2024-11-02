import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  duration:string;
  description: string;
  note:string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic Web Development Package",
    popular: 0,
    price: '4000', // One-time fee
    duration:"One-Time",
    description: "Launch your niche-focused website with essential features. Ideal for startups looking to establish an online presence.",
    note:"To ensure the best fit for your project, we separate the web development fee.",
    buttonText: "Get Started",
    benefitList: [
      "Custom design tailored to your niche",
      "Responsive & mobile-friendly",
      "SEO-optimized for increased visibility",
      "1-month post-launch support",
    ],
  },
  {
    title: "Enhanced Digital Presence Package",
    popular: 1,
    price: '2500', // Recurring fee
    duration:"mo",
    description: "Combine web development with strategic social media management and content creation to maximize engagement.",
    note:"To ensure the best fit for your project, we separate the web development fee.",
    buttonText: "Upgrade Now",
    benefitList: [
      "Includes all basic features",
      "Tailored content creation",
      "Strategic social media planning",
      "Monthly performance reports",
    ],
  },
  {
    title: "Ultimate Growth Package",
    popular: 0,
    price: '3000',
     // Recurring fee
     duration:"mo",
    description: "All-inclusive package for businesses aiming for rapid growth with comprehensive web maintenance and dedicated support.",
    note:"To ensure the best fit for your project, we separate the web development fee.",
    buttonText: "Contact Us",
    benefitList: [
      "All features from previous packages",

      'Comprehensive web maintenance, content creation, and SMMA services',
      "Advanced business solutions tailored for your growth strategy",
      "24/7 support and consultation",
    ],
  },
];



const Pricing = () => {
  return (
    <section  id="pricing" className="container  py-24 sm:py-32">
    <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>

    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
    Unlimited Access Awaits
    </h2>

    <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
    Gain unlimited access to all our services and elevate your business. Experience seamless solutions tailored to your needs—start your journey with us today!
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      {plans.map(
        ({ title, popular, price,duration, description, note,buttonText, benefitList }) => (
          <Card
            key={title}
            className={
              popular === PopularPlan?.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>

              <CardDescription className="pb-2 ">
                {description}
                <br />
                <br />
                <span className='font-normal  text-black dark:text-white'>{note}</span>
              </CardDescription>

              <div>
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-muted-foreground"> /{duration}</span>
              </div>
            </CardHeader>

            <CardContent className="flex">
              <div className="space-y-4">
                {benefitList.map((benefit) => (
                  <span key={benefit} className="flex">
                    <Check className="text-primary mr-2" />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={
                  popular === PopularPlan?.YES ? "default" : "secondary"
                }
                className="w-full"
              >
                <Link target='_blank' href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft">{buttonText}</Link>
                
              </Button>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  </section>
  )
}

export default Pricing