
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LLMConfig() {
  const [llmProvider, setLlmProvider] = useState("openai");
  const [model, setModel] = useState("gpt-3.5-turbo");
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>LLM Configuration</CardTitle>
        <CardDescription>
          Select and configure the large language model for your AI agent
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="llmProvider">LLM Provider</Label>
            <select 
              id="llmProvider" 
              className="w-full p-2 border rounded-md"
              value={llmProvider}
              onChange={(e) => setLlmProvider(e.target.value)}
            >
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic</option>
              <option value="groq">Groq</option>
              <option value="ollama">Ollama (Local)</option>
              <option value="custom">Custom Endpoint</option>
            </select>
          </div>
          
          {llmProvider === "openai" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openaiKey">OpenAI API Key</Label>
                <Input id="openaiKey" type="password" placeholder="sk-..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="openaiModel">Model</Label>
                <select 
                  id="openaiModel" 
                  className="w-full p-2 border rounded-md"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                >
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="gpt-4-turbo">GPT-4 Turbo</option>
                  <option value="gpt-4o">GPT-4o</option>
                </select>
              </div>
            </div>
          )}
          
          {llmProvider === "anthropic" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="anthropicKey">Anthropic API Key</Label>
                <Input id="anthropicKey" type="password" placeholder="sk-ant-..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="anthropicModel">Model</Label>
                <select id="anthropicModel" className="w-full p-2 border rounded-md">
                  <option value="claude-instant-1">Claude Instant</option>
                  <option value="claude-2">Claude 2</option>
                  <option value="claude-3-opus">Claude 3 Opus</option>
                  <option value="claude-3-sonnet">Claude 3 Sonnet</option>
                  <option value="claude-3-haiku">Claude 3 Haiku</option>
                </select>
              </div>
            </div>
          )}
          
          {llmProvider === "groq" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="groqKey">Groq API Key</Label>
                <Input id="groqKey" type="password" placeholder="gsk_..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groqModel">Model</Label>
                <select id="groqModel" className="w-full p-2 border rounded-md">
                  <option value="llama2-70b-4096">LLaMA 2 70B</option>
                  <option value="mixtral-8x7b-32768">Mixtral 8x7B</option>
                </select>
              </div>
            </div>
          )}
          
          {llmProvider === "ollama" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ollamaHost">Ollama Host</Label>
                <Input id="ollamaHost" placeholder="http://localhost:11434" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ollamaModel">Model</Label>
                <select id="ollamaModel" className="w-full p-2 border rounded-md">
                  <option value="llama2">Llama 2</option>
                  <option value="mistral">Mistral</option>
                  <option value="gemma">Gemma</option>
                </select>
              </div>
            </div>
          )}
          
          {llmProvider === "custom" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customEndpoint">API Endpoint</Label>
                <Input id="customEndpoint" placeholder="https://api.example.com/v1/chat/completions" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customApiKey">API Key</Label>
                <Input id="customApiKey" type="password" placeholder="Your API key" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customModel">Model Name</Label>
                <Input id="customModel" placeholder="model-name" />
              </div>
            </div>
          )}
        </div>
        
        <div className="border rounded-md p-4 space-y-4">
          <h3 className="font-medium">Model Parameters</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="temperature">Temperature</Label>
              <Input id="temperature" type="number" min="0" max="2" step="0.1" defaultValue="0.7" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxTokens">Max Response Tokens</Label>
              <Input id="maxTokens" type="number" min="50" max="4096" step="1" defaultValue="1000" />
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">System Prompt</h3>
          <textarea 
            className="w-full p-2 border rounded-md h-32 font-mono text-sm"
            defaultValue="You are an AI assistant that answers questions based on the provided context. If you don't know the answer based on the context, say so clearly rather than making up information."
          />
        </div>
      </CardContent>
    </Card>
  );
}
