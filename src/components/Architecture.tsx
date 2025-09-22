import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Architecture = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-primary text-ai-primary">
            System Architecture
          </Badge>
          <h2 className="text-4xl font-bold mb-4">AWS Infrastructure Design</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive architecture leveraging AWS services for autonomous AI agent deployment
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Architecture Overview</TabsTrigger>
            <TabsTrigger value="components">Core Components</TabsTrigger>
            <TabsTrigger value="flow">Data Flow</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">High-Level Architecture</h3>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-center text-muted-foreground mb-4">Architecture Diagram</p>
                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-ai-primary/10 p-4 rounded border border-ai-primary/20">
                        <h4 className="font-semibold text-ai-primary mb-2">Frontend Layer</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• React Dashboard</li>
                          <li>• API Gateway</li>
                        </ul>
                      </div>
                      <div className="bg-aws-orange/10 p-4 rounded border border-aws-orange/20">
                        <h4 className="font-semibold text-aws-orange mb-2">AWS Compute</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Lambda Functions</li>
                          <li>• AWS Bedrock</li>
                          <li>• SageMaker Endpoints</li>
                        </ul>
                      </div>
                      <div className="bg-ai-secondary/10 p-4 rounded border border-ai-secondary/20">
                        <h4 className="font-semibold text-ai-secondary mb-2">AI Agent Core</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Reasoning Engine</li>
                          <li>• Task Planning</li>
                          <li>• Action Execution</li>
                          <li>• Agent Memory</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-ai-primary rounded-full"></div>
                    Core AI Components
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">AWS Bedrock LLM</h4>
                    <p className="text-sm text-muted-foreground">Claude 3.5 Sonnet for advanced reasoning and planning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reasoning Engine</h4>
                    <p className="text-sm text-muted-foreground">Multi-step reasoning with chain-of-thought prompting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Agent Memory</h4>
                    <p className="text-sm text-muted-foreground">DynamoDB-backed persistent memory system</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-aws-orange rounded-full"></div>
                    AWS Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Bedrock Agents</h4>
                    <p className="text-sm text-muted-foreground">Pre-built agent primitives for common tasks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Nova Integration</h4>
                    <p className="text-sm text-muted-foreground">Advanced multimodal AI capabilities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lambda Runtime</h4>
                    <p className="text-sm text-muted-foreground">Serverless execution environment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="flow" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Agent Decision Flow</h3>
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-ai-primary">Request Processing</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                          <span>User submits task request</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                          <span>API Gateway forwards to Lambda</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                          <span>Initialize Bedrock LLM session</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                          <span>Load agent context and memory</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-ai-secondary">Autonomous Loop</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-secondary rounded-full"></div>
                          <span>Analyze task requirements</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-secondary rounded-full"></div>
                          <span>Plan execution strategy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-secondary rounded-full"></div>
                          <span>Execute tools and APIs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-ai-secondary rounded-full"></div>
                          <span>Update agent memory</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};