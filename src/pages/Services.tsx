import { Code, Palette, Search, Smartphone, Globe, Zap, Shield, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [{
    icon: Code,
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Web Design", "Custom WordPress Development", "E-commerce Solutions", "Progressive Web Apps"],
    price: "Starting at $3,000"
  }, {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Interface Design", "Design Systems"],
    price: "Starting at $2,500"
  }, {
    icon: Smartphone,
    title: "Branding & Identity",
    description: "Complete brand identity solutions that make your business stand out from the competition.",
    features: ["Logo Design & Brand Identity", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
    price: "Starting at $2,000"
  }, {
    icon: Search,
    title: "SEO & Performance Optimization",
    description: "Optimize your website for search engines and ensure lightning-fast performance.",
    features: ["Technical SEO Audit", "Speed Optimization", "Content Strategy", "Analytics Setup"],
    price: "Starting at $1,500"
  }, {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies to help your business grow online.",
    features: ["Digital Marketing Strategy", "Conversion Optimization", "User Journey Mapping", "Competitive Analysis"],
    price: "Starting at $2,000"
  }, {
    icon: Zap,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
    features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Management"],
    price: "Starting at $200/month"
  }, {
    icon: Shield,
    title: "Website Security",
    description: "Protect your website from threats with comprehensive security solutions.",
    features: ["Security Audits", "SSL Certificates", "Malware Protection", "Backup Solutions"],
    price: "Starting at $500"
  }, {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Track your website's performance with detailed analytics and reporting.",
    features: ["Google Analytics Setup", "Conversion Tracking", "Monthly Reports", "Performance Insights"],
    price: "Starting at $300/month"
  }];
  const process = [{
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience."
  }, {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive strategy tailored to your specific needs."
  }, {
    step: "03",
    title: "Design",
    description: "Our team creates beautiful, functional designs that align with your brand."
  }, {
    step: "04",
    title: "Development",
    description: "We build your project using the latest technologies and best practices."
  }, {
    step: "05",
    title: "Testing",
    description: "Rigorous testing ensures everything works perfectly across all devices."
  }, {
    step: "06",
    title: "Launch",
    description: "We launch your project and provide ongoing support and maintenance."
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero bg-[#001000]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business grow and succeed online. 
            From design to development, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#060606]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={service.title} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-medium-gray text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map(feature => <li key={feature} className="text-sm text-medium-gray flex items-center">
                        <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2"></div>
                        {feature}
                      </li>)}
                  </ul>
                  
                  <div className="border-t border-muted pt-4">
                    <p className="text-lg font-semibold text-electric-blue">{service.price}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              We follow a proven process to ensure every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => <div key={item.step} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-medium-gray text-sm">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Services;