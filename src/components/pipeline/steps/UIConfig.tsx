
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UIConfig() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Preview UI Configuration</CardTitle>
        <CardDescription>
          Choose and configure the user interface for your AI agent
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border hover:border-primary rounded-lg p-4 cursor-pointer relative">
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary"></div>
              <div className="h-32 bg-slate-100 rounded flex items-center justify-center mb-4">
                <span className="text-xl font-semibold text-slate-400">Gradio</span>
              </div>
              <h3 className="font-medium">Gradio UI</h3>
              <p className="text-sm text-muted-foreground">
                Simple, responsive chat interface with file upload support
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-4 cursor-pointer relative opacity-70">
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full border border-muted-foreground"></div>
              <div className="h-32 bg-slate-100 rounded flex items-center justify-center mb-4">
                <span className="text-xl font-semibold text-slate-400">Streamlit</span>
              </div>
              <h3 className="font-medium">Streamlit UI</h3>
              <p className="text-sm text-muted-foreground">
                Full-featured interface with visualization tools and dashboard
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="chatTitle">Chat Title</Label>
            <Input id="chatTitle" placeholder="RagiZen.ai Assistant" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="welcomeMessage">Welcome Message</Label>
            <Input id="welcomeMessage" placeholder="Hello! How can I help you today?" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <div className="flex gap-2">
              <Input id="primaryColor" type="color" defaultValue="#6366F1" className="w-12 h-10 p-0" />
              <Input value="#6366F1" className="flex-1" readOnly />
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-4">Preview</h3>
          <div className="bg-white border rounded-md shadow-sm p-4">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h4 className="font-medium">RagiZen.ai Assistant</h4>
              <button className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Clear Chat</button>
            </div>
            
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] ml-auto">
                <p className="text-sm">Tell me about RagiZen.ai</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">RagiZen.ai is a no-code platform that helps you build and deploy AI chatbots and analytical agents through an intuitive interface. You can create chatbots that answer questions from your documents or analyze your data without writing code.</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Input className="flex-1" placeholder="Type your message..." />
              <Button>Send</Button>
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          Build &amp; Deploy
        </Button>
      </CardContent>
    </Card>
  );
}
