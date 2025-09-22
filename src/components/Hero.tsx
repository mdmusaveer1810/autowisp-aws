import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Zap, Bot } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-6">
      <div className="absolute inset-0 bg-background/50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-ai-primary/10 text-ai-primary border-ai-primary/20">
            AWS Hackathon Project
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            Autonomous AI Agent
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A fully autonomous AI agent built on AWS infrastructure with advanced reasoning capabilities and seamless integration
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Brain className="h-5 w-5 text-ai-primary" />
              <span className="text-sm font-medium">Advanced Reasoning</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Cpu className="h-5 w-5 text-aws-orange" />
              <span className="text-sm font-medium">AWS Bedrock</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Zap className="h-5 w-5 text-ai-accent" />
              <span className="text-sm font-medium">Autonomous Execution</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Bot className="h-5 w-5 text-ai-secondary" />
              <span className="text-sm font-medium">Multi-Agent System</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-primary/20 hover:shadow-ai transition-all duration-300 animate-float">
            <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Reasoning</h3>
            <p className="text-muted-foreground">
              Advanced LLM reasoning with autonomous decision-making capabilities and context-aware responses
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-aws-orange/20 hover:shadow-ai transition-all duration-300 animate-float [animation-delay:0.5s]">
            <div className="w-12 h-12 bg-gradient-aws rounded-lg flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AWS Infrastructure</h3>
            <p className="text-muted-foreground">
              Built on AWS Bedrock, SageMaker, and Lambda for scalable, reliable AI agent deployment
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-secondary/20 hover:shadow-glow transition-all duration-300 animate-float [animation-delay:1s]">
            <div className="w-12 h-12 bg-ai-secondary rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-muted-foreground">
              API integrations, database connections, and external tool access for comprehensive automation
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};