import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-electric-blue/20 rounded-full blur-lg animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-electric-blue/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 bg-[#000a0a]">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-electric-blue/20">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-foreground">Award-Winning Design Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Crafting Beautiful,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Functional
            </span>{" "}
            Digital Experiences
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto leading-relaxed">
            We help small businesses, startups, and e-commerce brands create stunning websites 
            that convert visitors into customers through user-first design and cutting-edge development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-electric-blue">150+</div>
              <div className="text-sm text-medium-gray">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-electric-blue">98%</div>
              <div className="text-sm text-medium-gray">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-electric-blue">5+</div>
              <div className="text-sm text-medium-gray">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;