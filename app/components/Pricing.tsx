"use client"

import React, { useState } from 'react'
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
import { Badge } from "@/components/ui/badge";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  duration: string;
  description: string;
  // note: string;
  buttonText: string;
  benefitList: string[];
  category: string;
}
const plans: PlanProps[] = [
  // Web Development Packages
  {
    title: "Starter Web Development Package",
    popular: PopularPlan.NO,
    price: '2500',
    duration: "One-Time",
    description: "Launch your website with essential features. Ideal for small businesses establishing an online presence.",
    // note: "",
    buttonText: "Get Started",
    benefitList: [
      "Custom design tailored to your niche",
      "Responsive & mobile-friendly",
      "Basic SEO optimized for increased visibility",
      "1-month post-launch support",
    ],
    category: "Web"
  },
  {
    title: "Professional Web Development Package",
    popular: PopularPlan.YES,
    price: '5500',
    duration: "One-Time",
    description: "A more robust website with added functionalities. Perfect for growing businesses needing more customization.",
    // note: "",
    buttonText: "Upgrade Now",
    benefitList: [
      "Includes all features from Starter",
      "Custom blog, e-commerce, and booking systems",
      "Full SEO audit + Local SEO optimization",
      "60-day support with updates",
    ],
    category: "Web"
  },
  {
    title: "Enterprise Web Development Package",
    popular: PopularPlan.NO,
    price: '12000',
    duration: "One-Time",
    description: "Tailored for large enterprises, this package includes extensive customization and advanced features like API integrations.",
    // note: "",
    buttonText: "Contact Us",
    benefitList: [
      "Includes all features from Professional",
      "Unlimited pages + CRM/ERP integrations",
      "Global SEO strategy and continuous optimization",
      "1-year full support and unlimited updates",
    ],
    category: "Web"
  },

  // Content Creation Packages
  {
    title: "Essentials Content Creation Package",
    popular: PopularPlan.NO,
    price: '1500',
    duration: "mo",
    description: "Perfect for small businesses looking for essential content to establish their brand. Includes visuals and videos.",
    // note: "",
    buttonText: "Get Started",
    benefitList: [
      "8 static graphics + 2 animations",
      "2 basic promotional videos",
      "Basic branding with logo and fonts",
      "1 strategy call per month",
    ],
    category: "Content"
  },
  {
    title: "Advanced Content Creation Package",
    popular: PopularPlan.YES,
    price: '3500',
    duration: "mo",
    description: "For growing businesses seeking more engaging, branded content. This package adds more visuals and advanced video production.",
    // note: "",
    buttonText: "Upgrade Now",
    benefitList: [
      "Includes all features from Essentials",
      "12 graphics + 4 animations",
      "4 high-quality branded videos",
      "Full branding strategy + visual direction",
      "Bi-weekly strategy calls",
    ],
    category: "Content"
  },
  {
    title: "Premium Content Creation Package",
    popular: PopularPlan.NO,
    price: '7500',
    duration: "mo",
    description: "For large enterprises needing high-impact, cinematic-level content. Full branding strategy and custom video productions.",
    // note: "",
    buttonText: "Contact Us",
    benefitList: [
      "Includes all features from Advanced",
      "16 branded graphics + 6 advanced animations",
      "6 cinematic, high-quality videos",
      "Full branding implementation across all content",
      "Weekly executive-level strategy calls",
    ],
    category: "Content"
  },

  // SMMA Packages
  {
    title: "Starter SMMA Package",
    popular: PopularPlan.NO,
    price: '2000',
    duration: "mo",
    description: "Essential social media management services for small businesses to get started with social media marketing.",
    // note: "",
    buttonText: "Get Started",
    benefitList: [
      "Platform management for Facebook, Instagram, and LinkedIn",
      "Basic social media content calendar",
      "Monthly engagement reports",
      "1 strategy call per month",
    ],
    category: "SMMA"
  },
  {
    title: "Advanced SMMA Package",
    popular: PopularPlan.YES,
    price: '4000',
    duration: "mo",
    description: "A more comprehensive package for businesses aiming to scale with tailored social media strategies and increased engagement.",
    // note: "",
    buttonText: "Upgrade Now",
    benefitList: [
      "Includes all features from Starter",
      "Custom ad campaigns for lead generation",
      "In-depth audience insights and analytics",
      "Bi-weekly performance reports",
    ],
    category: "SMMA"
  },
  {
    title: "Premium SMMA Package",
    popular: PopularPlan.NO,
    price: '6000',
    duration: "mo",
    description: "A full-service solution for enterprises looking for high-level, multi-platform social media strategies with advanced analytics and reporting.",
    // note: "",
    buttonText: "Contact Us",
    benefitList: [
      "Includes all features from Advanced",
      "Multi-platform strategy including Twitter, YouTube, and TikTok",
      "Advanced reporting + competitor analysis",
      "Weekly performance optimization and strategy calls",
    ],
    category: "SMMA"
  },

  // Combo Plans
  {
    title: "Combo Web + Content Creation Starter",
    popular: PopularPlan.NO,
    price: '4000',
    duration: "mo",
    description: "Bundle essential web development with basic content creation (graphics and videos). Ideal for small businesses needing both services.",
    // note: "",
    buttonText: "Get Started",
    benefitList: [
      "All features from Starter Web + 8 static graphics",
      "2 basic promotional videos",
      "1-month post-launch support",
      "1 strategy call for content and website optimization",
    ],
    category: "Combo"
  },
  {
    title: "Combo Content Creation + SMMA",
    popular: PopularPlan.YES,
    price: '5000',
    duration: "mo",
    description: "A powerful combination of content creation and social media marketing to scale your business's online presence.",
    // note: "",
    buttonText: "Get Started",
    benefitList: [
      "All features from Essentials + Social media strategy",
      "12 graphics + 4 animations",
      "4 high-quality branded videos",
      "Bi-weekly social media performance reports",
      "Monthly content and campaign strategy meetings",
    ],
    category: "Combo"
  },
  {
    title: "Ultimate Combo Growth Package",
    popular: PopularPlan.NO,
    price: '8500',
    duration: "mo",
    description: "A comprehensive, all-inclusive package combining web development, content creation, and SMMA services with 24/7 support for businesses aiming for rapid growth.",
    // note: "",
    buttonText: "Contact Us",
    benefitList: [
      "All features from previous packages",
      "Comprehensive web development, content creation, and SMMA services",
      "Advanced business solutions tailored for your growth strategy",
      "24/7 support and consultation",
    ],
    category: "Combo"
  },
];


const categories = [
  "Web",
  "SMMA",
  "Content",
  "Combo",
];

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web");

  const filteredPlans = selectedCategory
    ? plans.filter(plan => plan.category === selectedCategory)
    : plans;

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Unlimited Access Awaits
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Gain unlimited access to all our services and elevate your business. Experience seamless solutions tailored to your needs—start your journey with us today!
      </h3>

      <div className="flex justify-center mb-6 space-x-4">
      <Badge variant="outline" className="text-sm py-2">
        {categories.map(category => (
    
            <Button

            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 m-2 py-2 ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-200 text-black"}`}
          >
            {category}
          </Button>

          
        ))}
        {/* <Button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 ${!selectedCategory ? "bg-primary text-white" : "bg-gray-200 text-black"}`}
        >
          All
        </Button> */}
        </Badge>
      </div>

      <div className="grid mt-12  md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {filteredPlans.map(({ title, popular, price, duration, description,  buttonText, benefitList }) => (
          <Card
            key={title}
            className={
              popular === PopularPlan.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>

              <CardDescription className="pb-2 ">
                {description}
                {/* <br />
                <br />
                <span className='font-normal text-black dark:text-white'>{note}</span> */}
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
                variant={popular === PopularPlan.YES ? "default" : "secondary"}
                className="w-full"
              >
                <Link target='_blank' href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft">
                  {buttonText}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
