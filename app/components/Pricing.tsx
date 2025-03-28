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
  duration: string;
  description: string;
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
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background elements */}
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
            Invest in Your Business Growth
          </h2>

          <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
            Select a package that aligns with your business goals. Our solutions are designed to deliver maximum ROI and measurable results.
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
          {filteredPlans.map(({ title, popular, price, duration, description, buttonText, benefitList }, index) => (
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

                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${price}</span>
                    <span className="ml-2 text-muted-foreground font-medium">/{duration}</span>
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
            Not finding what you need? <Link href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft" className="text-primary font-medium underline-offset-4 hover:underline">Schedule a call</Link> for a custom solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
