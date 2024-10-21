import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShowcaseGrid = () => {
  const projects = [
    {
      title: "Real Estate Solutions",
      description: "Custom websites for real estate agents to showcase properties.",
      category: "Web Development",
    },
    {
      title: "Gym & Fitness Apps",
      description: "SaaS for fitness centers to manage classes and memberships.",
      category: "SaaS",
    },
    // Add more projects/services
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <Button className="mt-4" >Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseGrid;
