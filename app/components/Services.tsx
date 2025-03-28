"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  popular?: boolean;
  stats?: string;
}

const ServiceList: ServiceProps[] = [
  {
    icon: "Code",
    title: "Web Development",
    description:
      "We specialize in web development tailored for niches like real estate, e-commerce, and healthcare. Our custom websites drive conversions and are designed for scalability, ensuring your business grows in a competitive digital landscape.",
    benefits: ["3x Conversion Rate", "SEO Optimized", "Mobile-First Design"],
    ctaText: "Get a Free Consultation",
    stats: "Clients see an average 184% ROI",
  },
  {
    icon: "Cloud",
    title: "Website Maintenance",
    description:
      "Our Web Maintenance Service ensures your website stays updated, secure, and optimized. We handle everything from regular updates, performance enhancements, and security monitoring to backups and bug fixes. This service guarantees your site runs smoothly, with improved speed, uptime, and protection against vulnerabilities.",
    benefits: ["99.9% Uptime", "24/7 Support", "Weekly Backups"],
    ctaText: "View Maintenance Plans",
    popular: true,
    stats: "Reduces downtime by 97%",
  },
  {
    icon: "Pen",
    title: "Content Agency",
    description:
      "Our Content Agency specializes in editing, graphic design, and content creation, providing the visual and written assets needed to support your SMMA efforts and engage your audience effectively.",
    benefits: ["SEO-Driven Content", "Custom Graphics", "Brand Voice Development"],
    ctaText: "See Our Portfolio",
    stats: "2.5x engagement increase",
  },
  {
    icon: "Megaphone",
    title: "Social Media Marketing Agency (SMMA)",
    description:
      "Our SMMA services help you build a strong online presence through targeted social media strategies, enhancing brand awareness and driving customer engagement.",
    benefits: ["Targeted Campaigns", "Analytics Dashboard", "Growth Strategy"],
    ctaText: "Book Strategy Call",
    stats: "Average 210% follower growth",
  },
];

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="products" className="container py-24 sm:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-semibold">
          PROVEN SOLUTIONS
        </h2>

        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4">
          Accelerate Your Business Growth
        </h2>

        <h3 className="md:w-3/4 lg:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-12">
          Join <span className="font-semibold text-foreground">hundreds of successful businesses</span> that have transformed their digital presence with our services. Stop losing customers to your competitors today!
        </h3>
        
        {/* Client logos would go here */}
        <div className="flex justify-center items-center gap-8 mb-16 opacity-70">
          <div className="text-sm text-muted-foreground">Trusted by industry leaders</div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {ServiceList.map(({ icon, title, description, benefits, ctaText, popular, stats }, index) => (
          <motion.div 
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            {popular && (
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-10">
                Most Popular
              </div>
            )}
            <Card className={`h-full border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${hoveredIndex === index ? 'border-primary scale-[1.02]' : 'bg-background'}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className={`${hoveredIndex === index ? 'bg-primary text-primary-foreground' : 'bg-primary/20'} p-3 rounded-full ring-8 ring-primary/10 transition-colors duration-300`}>
                    <Icon
                      name={icon as keyof typeof icons}
                      size={24}
                      className={hoveredIndex === index ? 'text-primary-foreground' : 'text-primary'}
                      color=""
                    />
                  </div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-6">{description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {benefits.map(benefit => (
                      <span key={benefit} className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  {stats && (
                    <p className="text-sm font-medium text-primary">{stats}</p>
                  )}
                </div>
                
                <Button className="w-full group bg-primary hover:bg-primary/90">
                  {ctaText}
                  <Icon  name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform " color="" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-primary/5 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-primary/20"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to outperform your competition?</h3>
        <p className="text-muted-foreground mb-6">Book a free 30-minute strategy call. No obligation, just actionable insights.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
        <Link href="https://calendly.com/gunishaish/free-website-consultation-with-apeirocraft">Schedule Your Free Call Now</Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">Limited availability - we only accept 10 new clients per month</p>
      </motion.div>
    </section>
  );
};