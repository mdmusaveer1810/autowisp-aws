import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Design", "E-commerce", "Branding", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "EcoStore E-commerce Platform",
      category: "E-commerce",
      description: "A sustainable shopping platform with seamless checkout experience and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "Shopify", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "TechStartup SaaS Landing",
      category: "Web Design",
      description: "Modern SaaS landing page with interactive animations and conversion-optimized design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "Framer Motion", "TypeScript", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Bella Vista Restaurant Brand",
      category: "Branding",
      description: "Complete rebrand for fine dining restaurant chain including logo, website, and marketing materials.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      tech: ["Brand Strategy", "Logo Design", "WordPress", "Print Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "FinanceApp Mobile Interface",
      category: "UI/UX",
      description: "User-friendly mobile app interface for personal finance management with intuitive design.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["Figma", "React Native", "User Research", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "HealthCare Provider Website",
      category: "Web Design",
      description: "Professional healthcare website with patient portal and appointment booking system.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      tech: ["WordPress", "PHP", "MySQL", "HIPAA Compliance"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "FashionForward E-commerce",
      category: "E-commerce",
      description: "Trendy fashion e-commerce site with virtual try-on features and social shopping integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      tech: ["Shopify Plus", "Vue.js", "AR Integration", "Social Media APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "TechCorp Brand Identity",
      category: "Branding",
      description: "Modern tech company rebrand with comprehensive brand guidelines and digital assets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      tech: ["Brand Strategy", "Logo Design", "Design Systems", "Marketing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "FitLife Coaching Platform",
      category: "Web Design",
      description: "Comprehensive fitness coaching platform with workout tracking and nutrition planning.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "TaskMaster App Interface",
      category: "UI/UX",
      description: "Productivity app interface design with intuitive task management and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Figma", "User Testing", "Design Systems", "Accessibility"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Explore our recent work and see how we've helped businesses transform their digital presence 
            with creative design and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="w-5 h-5 text-medium-gray" />
              <span className="text-sm font-medium text-medium-gray">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-primary" 
                  : "border-electric-blue/20 text-electric-blue hover:bg-electric-blue hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Like What You See?
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto mb-8">
            Let's work together to create something amazing for your business. Get in touch to discuss your project.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;