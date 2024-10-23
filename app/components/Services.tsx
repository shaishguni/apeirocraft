import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}
const ServiceList: ServiceProps[] = [
  {
    icon: "Code",
    title: "Web Development",
    description:
    "We specialize in web development tailored for niches like real estate, e-commerce, and healthcare. Our custom websites drive conversions and are designed for scalability, ensuring your business grows in a competitive digital landscape."
  
  },
  {
    icon: "Cloud",
    title: "SaaS Solutions",
    description:
    "Our SaaS solutions cater to multiple niches, providing customizable tools for businesses in real estate, healthcare, education, and more. Integrated with AI and machine learning, our platforms enhance efficiency, automate processes, and deliver data-driven insights to help you scale effortlessly."
  
  },
  {
    icon: "Pen",
    title: "Content Agency",
    description:
    "Our Content Agency specializes in editing, graphic design, and content creation, providing the visual and written assets needed to support your SMMA efforts and engage your audience effectively.",
  },
  {
    icon: "Megaphone",
    title: "Social Media Marketing Agency (SMMA)",
    description:
      "Our SMMA services help you build a strong online presence through targeted social media strategies, enhancing brand awareness and driving customer engagement.",
  },
]


export const Services = () => {
  return (
    <section id="products"  className="container  py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      Accelerate Your Growth
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      From niche web development to AI-powered SaaS, our products are built to elevate your business. Streamline operations, grow your brand, and experience seamless success with our tailored solutions. Let{"'s"} get started today!
      </h3>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {ServiceList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background  border rounder-xl shadow-none">
              <CardHeader className="flex justify-between items-center">
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

              <CardContent className="text-muted-foreground w-fit justify-center text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};