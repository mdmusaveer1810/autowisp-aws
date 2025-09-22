import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "EcoStore E-commerce",
      category: "E-commerce",
      description: "Sustainable shopping platform with seamless checkout experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Shopify", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "TechStartup Landing",
      category: "Web Design",
      description: "Modern SaaS landing page with interactive animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "Framer Motion", "TypeScript"]
    },
    {
      id: 3,
      title: "Restaurant Brand Identity",
      category: "Branding",
      description: "Complete rebrand for fine dining restaurant chain",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      tech: ["Brand Strategy", "Logo Design", "Marketing"]
    }
  ];

  return (
    <section className="py-20 bg-light-gray/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-hover transition-all duration-300 bg-background border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-electric-blue bg-electric-blue/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-medium-gray text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-medium-gray bg-light-gray px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
            <Link to="/portfolio" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;