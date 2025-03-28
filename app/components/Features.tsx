"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Smartphone",
    title: "Seamless Mobile Experience",
    description:
      "Stay connected with your customers wherever they are. Our mobile-first designs ensure a flawless experience across all devices.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: "Users",
    title: "Elevate User Engagement",
    description:
      "We build interactive platforms that captivate your audience, encouraging deeper interaction and brand loyalty.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Growth Solutions",
    description:
      "Your business is ready to grow, and so are we. Our solutions scale with you to meet increasing demands without a hitch.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: "Brush",
    title: "Custom Visual Aesthetics",
    description:
      "Our designs are uniquely tailored to reflect your brand identity, ensuring you stand out in a crowded market.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: "Megaphone",
    title: "Clear Brand Voice",
    description:
      "We help you communicate your message effectively through strong, consistent branding and clear call-to-actions.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: "Shield",
    title: "Reliable Security",
    description:
      "Your data's security is non-negotiable. We implement industry-leading security measures to safeguard your business.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: "TrendingUp",
    title: "Results-Driven Strategies",
    description:
      "Our methods are built on data and designed to deliver measurable results, keeping your business at the forefront.",
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    icon: "Zap",
    title: "Lightning-Fast Launch",
    description:
      "We get you online fast without sacrificing quality, ensuring your project is ready to go in record time.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: "Headphones",
    title: "Dedicated Support",
    description:
      "Our team is here for you every step of the way, offering support and guidance long after your project launches.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-16"
      >
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm">
          <span className="text-primary font-medium tracking-wider">Features</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          What Sets Us <span className="text-primary">Apart</span>
        </h2>

        <p className="md:w-2/3 lg:w-1/2 mx-auto text-lg text-muted-foreground">
          At ApeiroCraft, we understand that every business is unique. That{"'s"} why we take the time to craft digital solutions that fit your exact needs. From smooth integrations to future-ready tech, we{"'"}re here to simplify your journey and help you grow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featureList.map(({ icon, title, description, color }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={cn("p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4", color || "bg-primary/20")}>
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color=""
                    className={color ? "" : "text-primary"}
                  />
                </div>

                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
          Get Started Today
        </a>
      </motion.div>
    </section>
  );
};