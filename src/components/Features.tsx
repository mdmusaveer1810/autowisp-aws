import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cpu, 
  Database, 
  Zap, 
  Globe, 
  Code, 
  Shield, 
  BarChart3,
  Clock,
  Users,
  Settings,
  CheckCircle
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Reasoning",
      description: "Multi-step chain-of-thought reasoning with context awareness and autonomous problem-solving capabilities",
      color: "ai-primary",
      details: ["Chain-of-thought prompting", "Context retention", "Multi-modal understanding", "Adaptive learning"]
    },
    {
      icon: Cpu,
      title: "AWS Bedrock Integration",
      description: "Native integration with AWS Bedrock models including Claude 3.5 Sonnet for enterprise-grade AI capabilities",
      color: "aws-orange",
      details: ["Claude 3.5 Sonnet", "Model switching", "Bedrock Agents", "SageMaker endpoints"]
    },
    {
      icon: Database,
      title: "Persistent Memory",
      description: "DynamoDB-backed memory system for long-term context retention and continuous learning from interactions",
      color: "ai-secondary",
      details: ["Session persistence", "Context tracking", "Learning history", "Memory optimization"]
    },
    {
      icon: Zap,
      title: "Tool Orchestration",
      description: "Intelligent selection and execution of external tools, APIs, and services based on task requirements",
      color: "ai-accent",
      details: ["API integration", "Tool selection", "Execution chaining", "Error handling"]
    },
    {
      icon: Globe,
      title: "Web & Search Integration",
      description: "Real-time web search capabilities and internet access for up-to-date information gathering",
      color: "ai-primary",
      details: ["Web scraping", "Search APIs", "Real-time data", "Content analysis"]
    },
    {
      icon: Code,
      title: "Code Execution",
      description: "Secure code generation and execution environment for automated programming and data analysis tasks",
      color: "aws-orange",
      details: ["Python execution", "Code generation", "Data analysis", "Secure sandbox"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with AWS IAM integration and comprehensive audit logging",
      color: "ai-secondary",
      details: ["IAM integration", "Audit logging", "Data encryption", "Access controls"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Built-in monitoring and analytics for agent performance, decision tracking, and optimization insights",
      color: "ai-accent",
      details: ["Performance metrics", "Decision tracking", "Cost optimization", "Usage analytics"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-secondary text-ai-secondary">
            Core Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Comprehensive AI Agent Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge AWS infrastructure with autonomous reasoning and seamless integrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-ai transition-all duration-300 border-${feature.color}/20 group cursor-pointer`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 bg-${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 text-${feature.color}`} />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-ai/10 border-ai-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-ai-primary" />
                24/7 Operation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Continuous autonomous operation with no downtime requirements and automatic error recovery
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-aws/10 border-aws-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-aws-orange" />
                Multi-Agent Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Coordinate multiple specialized agents for complex workflows and collaborative task execution
              </p>
            </CardContent>
          </Card>

          <Card className="bg-ai-secondary/10 border-ai-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-ai-secondary" />
                Configurable Behavior
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Customize agent behavior, reasoning patterns, and decision-making criteria for specific use cases
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};