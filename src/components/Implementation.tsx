import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Implementation = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Code snippet copied successfully",
    });
  };

  const lambdaCode = `import json
import boto3
from typing import Dict, Any

class AutonomousAIAgent:
    def __init__(self):
        self.bedrock = boto3.client('bedrock-runtime')
        self.dynamodb = boto3.resource('dynamodb')
        self.memory_table = self.dynamodb.Table('agent-memory')
        
    def process_request(self, event: Dict[str, Any]) -> Dict[str, Any]:
        """Main entry point for agent processing"""
        task = event.get('task', '')
        context = event.get('context', {})
        
        # Load agent memory
        memory = self.load_memory(context.get('session_id'))
        
        # Initialize reasoning loop
        result = self.autonomous_reasoning_loop(task, memory, context)
        
        # Save updated memory
        self.save_memory(context.get('session_id'), result['memory'])
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'response': result['response'],
                'actions_taken': result['actions'],
                'reasoning_steps': result['reasoning']
            })
        }
    
    def autonomous_reasoning_loop(self, task: str, memory: Dict, context: Dict) -> Dict:
        """Autonomous reasoning and execution loop"""
        reasoning_steps = []
        actions_taken = []
        
        # Step 1: Analyze the task
        analysis = self.analyze_task(task, memory)
        reasoning_steps.append(analysis)
        
        # Step 2: Plan execution strategy
        plan = self.create_execution_plan(analysis, context)
        reasoning_steps.append(plan)
        
        # Step 3: Execute actions autonomously
        for action in plan['actions']:
            result = self.execute_action(action, context)
            actions_taken.append(result)
            
            # Update memory with results
            memory['recent_actions'].append(result)
        
        # Step 4: Generate final response
        response = self.generate_response(task, actions_taken, memory)
        
        return {
            'response': response,
            'actions': actions_taken,
            'reasoning': reasoning_steps,
            'memory': memory
        }

def lambda_handler(event, context):
    agent = AutonomousAIAgent()
    return agent.process_request(event)`;

  const bedrockIntegration = `import boto3
from botocore.exceptions import ClientError

class BedrockLLMInterface:
    def __init__(self, model_id="anthropic.claude-3-sonnet-20240229-v1:0"):
        self.bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')
        self.model_id = model_id
        
    def invoke_llm(self, prompt: str, system_prompt: str = "") -> str:
        """Invoke Bedrock LLM with reasoning capabilities"""
        try:
            body = json.dumps({
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": 4000,
                "system": system_prompt or self.get_system_prompt(),
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0.1,
                "top_p": 0.9
            })
            
            response = self.bedrock.invoke_model(
                body=body,
                modelId=self.model_id,
                accept='application/json',
                contentType='application/json'
            )
            
            response_body = json.loads(response.get('body').read())
            return response_body['content'][0]['text']
            
        except ClientError as e:
            print(f"Error invoking Bedrock: {e}")
            return "Error processing request"
    
    def get_system_prompt(self) -> str:
        return """You are an autonomous AI agent with advanced reasoning capabilities.
        
        Your core functions:
        1. Analyze tasks using chain-of-thought reasoning
        2. Plan execution strategies autonomously
        3. Execute actions through available tools
        4. Learn from results and update your approach
        5. Provide clear, actionable responses
        
        Always think step-by-step and explain your reasoning process."""`;

  const agentCore = `class AgentReasoningEngine:
    def __init__(self, llm_interface: BedrockLLMInterface):
        self.llm = llm_interface
        self.tools = self.initialize_tools()
        
    def analyze_task(self, task: str, memory: Dict) -> Dict:
        """Analyze the given task using reasoning capabilities"""
        analysis_prompt = f"""
        Task to analyze: {task}
        
        Previous context: {memory.get('context', 'None')}
        Recent actions: {memory.get('recent_actions', [])}
        
        Please analyze this task using the following framework:
        1. What is the core objective?
        2. What information do I need to gather?
        3. What tools or APIs might be required?
        4. What are the potential challenges?
        5. What is the optimal approach?
        
        Provide a structured analysis with clear reasoning.
        """
        
        analysis = self.llm.invoke_llm(analysis_prompt)
        return {
            'task': task,
            'analysis': analysis,
            'timestamp': datetime.utcnow().isoformat()
        }
    
    def create_execution_plan(self, analysis: Dict, context: Dict) -> Dict:
        """Create autonomous execution plan"""
        planning_prompt = f"""
        Based on this analysis: {analysis['analysis']}
        Available tools: {list(self.tools.keys())}
        Context: {context}
        
        Create a step-by-step execution plan. For each step, specify:
        1. Action to take
        2. Tool to use
        3. Expected outcome
        4. Fallback options
        
        Format as JSON with this structure:
        {{
            "strategy": "brief description",
            "actions": [
                {{
                    "step": 1,
                    "action": "description",
                    "tool": "tool_name",
                    "parameters": {{}},
                    "expected_outcome": "description"
                }}
            ]
        }}
        """
        
        plan_text = self.llm.invoke_llm(planning_prompt)
        try:
            plan = json.loads(plan_text)
            return plan
        except json.JSONDecodeError:
            # Fallback plan if JSON parsing fails
            return {
                "strategy": "Basic execution",
                "actions": [{"step": 1, "action": "process_task", "tool": "basic_processor"}]
            }`;

  const deploymentInstructions = `# AWS Deployment Instructions

## Prerequisites
- AWS CLI configured with appropriate permissions
- Python 3.9+ installed
- boto3 library installed

## Step 1: Create IAM Role
aws iam create-role --role-name autonomous-ai-agent-role --assume-role-policy-document '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}'

## Step 2: Attach Policies
aws iam attach-role-policy --role-name autonomous-ai-agent-role --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
aws iam attach-role-policy --role-name autonomous-ai-agent-role --policy-arn arn:aws:iam::aws:policy/AmazonBedrockFullAccess
aws iam attach-role-policy --role-name autonomous-ai-agent-role --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess

## Step 3: Create DynamoDB Table
aws dynamodb create-table \\
    --table-name agent-memory \\
    --attribute-definitions AttributeName=session_id,AttributeType=S \\
    --key-schema AttributeName=session_id,KeyType=HASH \\
    --billing-mode PAY_PER_REQUEST

## Step 4: Deploy Lambda Function
zip -r autonomous-agent.zip *.py
aws lambda create-function \\
    --function-name autonomous-ai-agent \\
    --runtime python3.9 \\
    --role arn:aws:iam::ACCOUNT_ID:role/autonomous-ai-agent-role \\
    --handler lambda_function.lambda_handler \\
    --zip-file fileb://autonomous-agent.zip \\
    --timeout 900 \\
    --memory-size 1024

## Step 5: Create API Gateway
aws apigateway create-rest-api --name autonomous-agent-api

## Step 6: Enable Bedrock Models
aws bedrock put-model-invocation-logging-configuration \\
    --logging-config cloudWatchConfig='{logGroupName="/aws/bedrock/modelinvocations",roleArn="arn:aws:iam::ACCOUNT_ID:role/service-role/AmazonBedrockExecutionRoleForCWLogGroup"}'`;

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-accent text-ai-accent">
            Implementation Guide
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Step-by-Step Implementation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete code examples and deployment instructions for your autonomous AI agent
          </p>
        </div>

        <Tabs defaultValue="lambda" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="lambda">Lambda Core</TabsTrigger>
            <TabsTrigger value="bedrock">Bedrock Integration</TabsTrigger>
            <TabsTrigger value="reasoning">Reasoning Engine</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="lambda" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Main Lambda Function
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(lambdaCode)}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{lambdaCode}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bedrock" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Bedrock LLM Integration
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(bedrockIntegration)}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{bedrockIntegration}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reasoning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Autonomous Reasoning Engine
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(agentCore)}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{agentCore}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  AWS Deployment Commands
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(deploymentInstructions)}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{deploymentInstructions}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need backend infrastructure for your AI agent?</p>
          <Button variant="outline" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-primary-foreground">
            <ExternalLink className="h-4 w-4 mr-2" />
            Connect to Supabase for Backend Services
          </Button>
        </div>
      </div>
    </section>
  );
};