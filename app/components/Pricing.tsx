"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  ongoingPrice?: string;
  duration: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  category: string;
  isBundle?: boolean;
}

const plans: PlanProps[] = [
  // Web Development (One-Time)
  {
    title: "Basic Web Development",
    popular: PopularPlan.NO,
    price: '3000',
    duration: "One-Time",
    description: "Launch a professional website with essential features. Perfect for solopreneurs and small businesses.",
    buttonText: "Get Started",
    benefitList: [
      "5-page custom website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "1-month post-launch support"
    ],
    category: "Web"
  },
  {
    title: "Standard Web Development",
    popular: PopularPlan.YES,
    price: '7000',
    duration: "One-Time",
    description: "A robust website with advanced functionality for growing businesses.",
    buttonText: "Upgrade Now",
    benefitList: [
      "10-page custom website",
      "E-commerce or booking system",
      "Full SEO audit + local SEO",
      "3-month support with updates"
    ],
    category: "Web"
  },
  {
    title: "Advanced Web Development",
    popular: PopularPlan.NO,
    price: '15000',
    duration: "One-Time",
    description: "Custom enterprise solutions with extensive integrations for large businesses.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited pages + CRM/ERP integrations",
      "Global SEO strategy",
      "Custom API development",
      "1-year full support"
    ],
    category: "Web"
  },

  // Content Creation (Monthly)
  {
    title: "Basic Content Creation",
    popular: PopularPlan.NO,
    price: '1500',
    duration: "mo",
    description: "Essential content to establish your brand’s presence online.",
    buttonText: "Get Started",
    benefitList: [
      "4 blog posts/month",
      "Basic graphics for social media",
      "1 strategy call/month",
      "SEO-optimized content"
    ],
    category: "Content"
  },
  {
    title: "Standard Content Creation",
    popular: PopularPlan.YES,
    price: '4000',
    duration: "mo",
    description: "Engaging content to scale your brand and captivate audiences.",
    buttonText: "Upgrade Now",
    benefitList: [
      "8 blog posts/month",
      "2 promotional videos/month",
      "Advanced graphics package",
      "Bi-weekly strategy calls"
    ],
    category: "Content"
  },
  {
    title: "Advanced Content Creation",
    popular: PopularPlan.NO,
    price: '8000',
    duration: "mo",
    description: "High-impact content for enterprises needing a dominant digital presence.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited blog posts",
      "Full multimedia production",
      "Weekly strategy calls",
      "Comprehensive branding"
    ],
    category: "Content"
  },

  // SMMA (Monthly)
  {
    title: "Basic SMMA",
    popular: PopularPlan.NO,
    price: '1000',
    duration: "mo",
    description: "Kickstart your social media presence with targeted management.",
    buttonText: "Get Started",
    benefitList: [
      "Management of 2 platforms",
      "10 posts/month",
      "Monthly engagement reports",
      "1 strategy call/month"
    ],
    category: "SMMA"
  },
  {
    title: "Standard SMMA",
    popular: PopularPlan.YES,
    price: '2000',
    duration: "mo",
    description: "Scale your social media with tailored strategies and ads.",
    buttonText: "Upgrade Now",
    benefitList: [
      "Management of 3 platforms",
      "20 posts/month + ad campaigns",
      "Bi-weekly performance reports",
      "In-depth audience analytics"
    ],
    category: "SMMA"
  },
  {
    title: "Advanced SMMA",
    popular: PopularPlan.NO,
    price: '4000',
    duration: "mo",
    description: "Full-service social media strategies for maximum impact.",
    buttonText: "Contact Us",
    benefitList: [
      "Multi-platform management",
      "30 posts/month + advanced ads",
      "Weekly optimization reports",
      "Competitor analysis"
    ],
    category: "SMMA"
  },

  // // SaaS Tools (Monthly Add-On)
  // {
  //   title: "Basic SaaS Tools",
  //   popular: PopularPlan.NO,
  //   price: '500',
  //   duration: "mo",
  //   description: "Core SaaS features to streamline your operations.",
  //   buttonText: "Get Started",
  //   benefitList: [
  //     "1 user license",
  //     "Core analytics features",
  //     "Basic support",
  //     "Standard integrations"
  //   ],
  //   category: "SaaS"
  // },
  // {
  //   title: "Standard SaaS Tools",
  //   popular: PopularPlan.YES,
  //   price: '1200',
  //   duration: "mo",
  //   description: "Advanced SaaS tools for growing businesses.",
  //   buttonText: "Upgrade Now",
  //   benefitList: [
  //     "5 user licenses",
  //     "Advanced analytics + reporting",
  //     "Priority support",
  //     "Custom branding"
  //   ],
  //   category: "SaaS"
  // },
  // {
  //   title: "Advanced SaaS Tools",
  //   popular: PopularPlan.NO,
  //   price: '2500',
  //   duration: "mo",
  //   description: "Enterprise-grade SaaS solutions with full customization.",
  //   buttonText: "Contact Us",
  //   benefitList: [
  //     "10 user licenses",
  //     "Custom integrations",
  //     "Dedicated support",
  //     "Full feature access"
  //   ],
  //   category: "SaaS"
  // },

  // Bundled Packages
  {
    title: "Starter Bundle",
    popular: PopularPlan.NO,
    price: '4500',
    ongoingPrice: '2000',
    duration: "mo",
    description: "Launch your digital presence with essential services at a discount.",
    buttonText: "Get Started",
    benefitList: [
      "Basic Web Development + Basic Content + Basic SMMA",
      "10% savings vs. individual services",
      "1-month post-launch support",
      "Monthly strategy call",
      "Services worth $5,500 first month"
    ],
    category: "Bundles",
    isBundle: true
  },
  {
    title: "Growth Bundle",
    popular: PopularPlan.YES,
    price: '10000',
    ongoingPrice: '5000',
    duration: "mo",
    description: "Scale rapidly with a powerful combination of services and SaaS tools.",
    buttonText: "Upgrade Now",
    benefitList: [
      "Standard Web + Standard Content + Standard SMMA + Basic SaaS",
      "15% savings vs. individual services",
      "3-month support package",
      "Bi-weekly strategy calls",
      "Services worth $13,000 first month"
    ],
    category: "Bundles",
    isBundle: true
  },
  {
    title: "Enterprise Bundle",
    popular: PopularPlan.NO,
    price: '20000',
    ongoingPrice: '10000',
    duration: "mo",
    description: "Dominate your market with premium services and dedicated support.",
    buttonText: "Contact Us",
    benefitList: [
      "Advanced Web + Advanced Content + Advanced SMMA + Advanced SaaS",
      "20% savings vs. individual services",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Services worth $27,000 first month"
    ],
    category: "Bundles",
    isBundle: true
  }
];


const categories = ["Bundles","Web", "SMMA" ,"Content"];

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Bundles"); // Default to Bundles for max visibility

  const filteredPlans = selectedCategory
    ? plans.filter(plan => plan.category === selectedCategory)
    : plans;

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 mb-20"
        >
          <Badge className="px-3.5 py-1.5 text-sm font-medium">
            Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Power Your Business Growth
          </h2>
          <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
            Choose a plan tailored to your goals. From individual services to all-in-one bundles, we deliver unmatched value and results.
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex p-1.5 bg-muted/80 backdrop-blur-sm rounded-full shadow-lg"
          >
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "ghost"}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category ? "shadow-lg" : "hover:bg-background/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map(({ title, popular, price, ongoingPrice, duration, description, buttonText, benefitList, isBundle }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full transition-all duration-300 hover:border-primary/50 ${
                  popular === PopularPlan.YES
                    ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl relative"
                    : "border-muted hover:shadow-lg relative"
                }`}
              >
                {popular === PopularPlan.YES && (
                  <div className="absolute -top-4 -right-4 rotate-12">
                    <Badge className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold pb-3">{title}</CardTitle>
                  <CardDescription className="text-base pb-6">
                    {description}
                  </CardDescription>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">${price}</span>
                      <span className="ml-2 text-muted-foreground font-medium">/{duration}</span>
                    </div>
                    {isBundle && ongoingPrice && (
                      <p className="text-sm text-muted-foreground">
                        Then ${ongoingPrice}/mo ongoing
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-8">
                  <p className="font-medium text-sm text-muted-foreground mb-4">What's included:</p>
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <div key={benefit} className="flex items-start group">
                        <div className="bg-primary/10 p-1 rounded-full mr-3 group-hover:bg-primary/20 transition-colors">
                          <Check className="text-primary h-4 w-4 shrink-0" />
                        </div>
                        <p className="text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={popular === PopularPlan.YES ? "default" : "outline"}
                    className={`w-full py-6 text-base font-medium ${
                      popular === PopularPlan.YES 
                        ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                        : "hover:border-primary hover:text-primary"
                    }`}
                    size="lg"
                  >
                    <Link target='_blank' href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft" className="w-full">
                      {buttonText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Need a custom solution? <Link href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft" className="text-primary font-medium underline-offset-4 hover:underline">Schedule a call</Link> today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;