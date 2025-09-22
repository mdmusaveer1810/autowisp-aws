import { Code, Palette, Search, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const ServicesOverview = () => {
  const services = [{
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  }, {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping"]
  }, {
    icon: Smartphone,
    title: "Branding & Identity",
    description: "Complete brand identity solutions that make your business stand out from the competition.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
  }, {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimize your website for search engines and ensure lightning-fast performance.",
    features: ["Technical SEO", "Speed Optimization", "Analytics Setup"]
  }];
  return <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 bg-[#a1d3f3]">
          <h2 className="text-3xl mb-4 font-bold md:text-5xl text-[#100007]">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto text-[#001000]">
            We offer comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => <Card key={service.title} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-medium-gray text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map(feature => <li key={feature} className="text-xs text-medium-gray">• {feature}</li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default ServicesOverview;