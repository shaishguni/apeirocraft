"use client";

import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Zap, HeadphonesIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefitList: BenefitProps[] = [
  {
    title: "Unmatched Custom Solutions",
    description:
      "Gain access to exclusive, tailor-made digital solutions that give your business a competitive advantage. Stand out and succeed where others can't.",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Instant Results, Zero Hassle",
    description:
      "Watch your business transform with seamless, effortless integration. No downtime, no disruptions—just fast results that push you ahead of the competition.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Exponential Business Growth",
    description:
      "Unlock the potential for rapid growth with tools designed to multiply your customer base and increase revenue faster than ever before.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Premium 24/7 VIP Support",
    description:
      "Enjoy priority, around-the-clock support from our expert team. We ensure your business keeps running smoothly so you can focus on scaling without limits.",
    icon: <HeadphonesIcon className="h-6 w-6" />
  },
];

const Benefits = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="benefits" className="container py-24 sm:py-32 overflow-hidden">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
          }}
          className="space-y-6"
        >
          <div className="bg-primary/10 text-primary font-medium rounded-full py-1 px-4 w-fit mb-4">
            YOUR ADVANTAGE
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transform Your Business with Our Exclusive Benefits
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Our premium solutions give you the competitive edge you need to outperform in today's market. Partner with us and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-0 w-full"
        >
          {benefitList.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-2 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-24 text-center"
      >
        <Button size="lg" variant="default" className="animate-pulse">
          <Link href="/login">Start Your Transformation Today</Link>
          
        </Button>
      </motion.div>
    </section>
  );
};

export default Benefits;