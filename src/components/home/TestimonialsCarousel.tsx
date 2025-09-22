import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [{
    id: 1,
    name: "Sarah Johnson",
    company: "EcoStore",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b639?auto=format&fit=crop&w=150&q=80",
    content: "PixelCraft Studios transformed our online presence completely. Our e-commerce sales increased by 300% within the first quarter after launch.",
    rating: 5
  }, {
    id: 2,
    name: "Michael Chen",
    company: "TechStartup",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    content: "The team's attention to detail and user experience expertise helped us create a landing page that converts 40% better than our previous design.",
    rating: 5
  }, {
    id: 3,
    name: "Emma Davis",
    company: "Bella Vista Restaurant",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    content: "From branding to website development, PixelCraft delivered beyond our expectations. Our brand now truly reflects our restaurant's elegant atmosphere.",
    rating: 5
  }, {
    id: 4,
    name: "David Rodriguez",
    company: "FitLife Coaching",
    role: "Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Professional, creative, and results-driven. The new website has helped us attract 5x more clients through improved SEO and design.",
    rating: 5
  }];
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 bg-gray-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-zinc-950 font-bold">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8 md:p-12 bg-gray-600">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-20 h-20 rounded-full object-cover shadow-card" />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-electric-blue mb-4 mx-auto md:mx-0" />
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>

                  {/* Client Info */}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-medium-gray text-sm">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="border-electric-blue/20 hover:bg-electric-blue hover:text-white">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="border-electric-blue/20 hover:bg-electric-blue hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-electric-blue' : 'bg-medium-gray'}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsCarousel;