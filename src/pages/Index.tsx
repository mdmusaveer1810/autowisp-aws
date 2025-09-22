import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Architecture } from "@/components/Architecture";
import { Features } from "@/components/Features";
import { Implementation } from "@/components/Implementation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemStatement />
      <Features />
      <Architecture />
      <Implementation />
    </div>
  );
};

export default Index;
