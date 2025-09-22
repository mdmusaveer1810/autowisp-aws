import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: "10+ years in digital design with a passion for creating user-centered experiences."
    },
    {
      name: "Sarah Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b639?auto=format&fit=crop&w=300&q=80",
      bio: "Full-stack developer specializing in modern web technologies and performance optimization."
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Expert in user research and interface design, creating intuitive digital experiences."
    },
    {
      name: "Emma Thompson",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      bio: "Strategic thinker who helps brands tell their story through compelling visual identity."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "User-First Approach",
      description: "Every design decision we make is centered around creating the best possible experience for your users."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business growth and success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, from initial concept to final delivery."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in the quality and creativity of our work."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">PixelCraft Studios</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of designers, developers, and strategists dedicated to crafting 
            beautiful, functional, and user-first digital experiences that help businesses thrive online.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-medium-gray space-y-6">
              <p>
                Founded in 2019, PixelCraft Studios began as a small design studio with a big vision: 
                to help businesses create meaningful digital experiences that connect with their audiences 
                and drive real results.
              </p>
              <p>
                What started as a passion project between college friends has grown into a full-service 
                digital agency that has helped over 150 businesses transform their online presence. 
                From startups to established enterprises, we've worked with companies across various 
                industries to create websites, brands, and digital strategies that make an impact.
              </p>
              <p>
                Our approach is simple: we believe that great design is not just about how something looks, 
                but how it works. Every project we take on is an opportunity to solve problems, create 
                connections, and deliver results that matter to our clients and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-gray/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-medium-gray leading-relaxed">
                To empower businesses with exceptional digital experiences that drive growth, 
                enhance user engagement, and create lasting value in an increasingly digital world.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-medium-gray leading-relaxed">
                To be the go-to creative partner for businesses seeking innovative digital solutions 
                that combine beautiful design with strategic thinking and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center bg-gradient-card border-0 hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-medium-gray text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-light-gray/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Our diverse team brings together expertise in design, development, strategy, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="group overflow-hidden bg-background border-0 hover:shadow-hover transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-electric-blue font-medium mb-3">{member.role}</p>
                  <p className="text-medium-gray text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">PixelCraft Studios</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-electric-blue">150+</div>
                <h3 className="text-lg font-semibold text-foreground">Projects Completed</h3>
                <p className="text-medium-gray text-sm">Successfully delivered projects across various industries</p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-electric-blue">98%</div>
                <h3 className="text-lg font-semibold text-foreground">Client Satisfaction</h3>
                <p className="text-medium-gray text-sm">Consistently exceeding client expectations and goals</p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-electric-blue">24/7</div>
                <h3 className="text-lg font-semibold text-foreground">Support</h3>
                <p className="text-medium-gray text-sm">Ongoing support and maintenance for all our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;