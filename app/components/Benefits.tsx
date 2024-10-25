import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitsProps {

  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    title: "Unmatched Custom Solutions",
    description:
      "Gain access to exclusive, tailor-made digital solutions that give your business a competitive advantage. Stand out and succeed where others can’t.",
  },
  {
    title: "Instant Results, Zero Hassle",
    description:
      "Watch your business transform with seamless, effortless integration. No downtime, no disruptions—just fast results that push you ahead of the competition.",
  },
  {
    title: "Exponential Business Growth",
    description:
      "Unlock the potential for rapid growth with tools designed to multiply your customer base and increase revenue faster than ever before.",
  },
  {
    title: "Premium 24/7 VIP Support",
    description:
      "Enjoy priority, around-the-clock support from our expert team. We ensure your business keeps running smoothly so you can focus on scaling without limits.",
  },
];

import React from 'react'

const Benefits = () => {
  return (
    <section id="benefits" className="container   py-24  sm:py-32">
    <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Unlock Your Business Potential
        </h2>
        <p className="text-xl text-justify   text-muted-foreground mb-8">
        ApeiroCraft provides cutting-edge digital solutions tailored to transform your business. Whether it{"'s"} dynamic websites or powerful SaaS tools, we empower you to scale faster and more efficiently. Leave the tech to us—so you can focus on taking your business to new heights.


        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 w-full">
        {benefitList.map(({ title, description }, index) => (
          <Card
            key={title}
            className="bg-white dark:bg-card hover:bg-background transition-all delay-75 group/number"
          >
            <CardHeader>
              <div className="flex justify-between">
              
                <span className="text-5xl text- font-medium transition-all delay-75 group-hover/number:text-primary">
                  0{index + 1}
                </span>
              </div>

              <CardTitle className="group-hover/number:text-primary">{title}</CardTitle>
            </CardHeader>

            <CardContent className="group-hover/number:text-primary">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Benefits