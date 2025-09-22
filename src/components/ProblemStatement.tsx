import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Lightbulb, Zap } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-primary text-ai-primary">
            Problem & Solution
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Innovative AI Agent Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Addressing complex automation challenges with autonomous AI reasoning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Target className="h-6 w-6" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Current Automation Limitations</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Static Workflows:</strong> Traditional automation systems require pre-defined workflows and cannot adapt to unexpected scenarios or changing requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Limited Reasoning:</strong> Existing solutions lack the ability to reason through complex problems, make autonomous decisions, or learn from previous interactions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Human Dependency:</strong> Most automation systems require constant human supervision and intervention, limiting their effectiveness and scalability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Integration Complexity:</strong> Connecting multiple systems, APIs, and data sources remains technically challenging and error-prone.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ai-accent/20 bg-ai-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ai-accent">
                <Lightbulb className="h-6 w-6" />
                Innovative Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Autonomous AI Agent System</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-ai-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Dynamic Reasoning:</strong> Leverages advanced LLMs with chain-of-thought reasoning to analyze complex scenarios and adapt strategies in real-time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-ai-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Autonomous Decision Making:</strong> Makes intelligent decisions without human intervention using multi-step reasoning and context awareness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-ai-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Self-Learning System:</strong> Continuously learns from interactions and outcomes to improve future performance and decision quality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-ai-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Seamless Integration:</strong> Native AWS integration with Bedrock, Nova, and agent primitives for robust, scalable deployment.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-ai/10 border-ai-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <Zap className="h-6 w-6 text-ai-primary" />
              Key Innovations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multi-Modal Reasoning</h3>
                <p className="text-sm text-muted-foreground">
                  Combines text, code, and data analysis with visual understanding through Nova integration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Agent Memory System</h3>
                <p className="text-sm text-muted-foreground">
                  Persistent memory with context retention for long-term learning and task continuity
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tool Orchestration</h3>
                <p className="text-sm text-muted-foreground">
                  Intelligent selection and chaining of tools, APIs, and services based on task requirements
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Import missing components
import { Brain, Cpu } from "lucide-react";