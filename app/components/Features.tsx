import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Smartphone",
    title: "Seamless Mobile Experience",
    description:
      "Stay connected with your customers wherever they are. Our mobile-first designs ensure a flawless experience across all devices.",
  },
  {
    icon: "Users",
    title: "Elevate User Engagement",
    description:
      "We build interactive platforms that captivate your audience, encouraging deeper interaction and brand loyalty.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Growth Solutions",
    description:
      "Your business is ready to grow, and so are we. Our solutions scale with you to meet increasing demands without a hitch.",
  },
  {
    icon: "Brush",
    title: "Custom Visual Aesthetics",
    description:
      "Our designs are uniquely tailored to reflect your brand identity, ensuring you stand out in a crowded market.",
  },
  {
    icon: "Megaphone",
    title: "Clear Brand Voice",
    description:
      "We help you communicate your message effectively through strong, consistent branding and clear call-to-actions.",
  },
  
  {
    icon: "Shield",
    title: "Reliable Security",
    description:
      "Your data's security is non-negotiable. We implement industry-leading security measures to safeguard your business.",
  },
  {
    icon: "TrendingUp",
    title: "Results-Driven Strategies",
    description:
      "Our methods are built on data and designed to deliver measurable results, keeping your business at the forefront.",
  },
  {
    icon: "Zap",
    title: "Lightning-Fast Launch",
    description:
      "We get you online fast without sacrificing quality, ensuring your project is ready to go in record time.",
  },
  {
    icon: "Headphones",
    title: "Dedicated Support",
    description:
      "Our team is here for you every step of the way, offering support and guidance long after your project launches.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container  py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-justify text-muted-foreground mb-8">
      At ApeiroCraft, we understand that every business is unique. That{"'s"} why we take the time to craft digital solutions that fit your exact needs. From smooth integrations to future-ready tech, we’re here to simplify your journey and help you grow—because when you succeed, we succeed too.


      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};