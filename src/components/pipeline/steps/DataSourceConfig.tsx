
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DataSourceConfigProps {
  type: "semantic" | "analytical";
}

export default function DataSourceConfig({ type }: DataSourceConfigProps) {
  const [selectedSource, setSelectedSource] = useState(type === "semantic" ? "file" : "database");
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>
          {type === "semantic" ? "Document Source" : "Data Source"}
        </CardTitle>
        <CardDescription>
          {type === "semantic" 
            ? "Upload documents or provide URLs that your chatbot will use to answer questions"
            : "Connect to your database or upload data files for analysis"
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={selectedSource} onValueChange={setSelectedSource} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full">
            {type === "semantic" && (
              <TabsTrigger value="file">Upload Files</TabsTrigger>
            )}
            {type === "semantic" && (
              <TabsTrigger value="web">Web Content</TabsTrigger>
            )}
            {type === "analytical" && (
              <TabsTrigger value="file">CSV/Excel Files</TabsTrigger>
            )}
            {type === "analytical" && (
              <TabsTrigger value="database">Database</TabsTrigger>
            )}
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="file" className="pt-4 space-y-4">
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {type === "semantic" 
                  ? "Drag & drop files here (.pdf, .docx, .txt, .md)" 
                  : "Drag & drop files here (.csv, .xlsx)"
                }
              </p>
              <Button variant="outline" size="sm">Browse Files</Button>
            </div>
            
            {type === "semantic" && (
              <div className="space-y-2">
                <Label>Parsing Options</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="extractMetadata" className="rounded border-gray-300" />
                    <label htmlFor="extractMetadata" className="text-sm">Extract metadata</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="parseImages" className="rounded border-gray-300" />
                    <label htmlFor="parseImages" className="text-sm">Parse images with OCR</label>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          
          {type === "semantic" && (
            <TabsContent value="web" className="pt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webUrl">Web URL</Label>
                <Input id="webUrl" placeholder="https://example.com/page-to-index" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crawlDepth">Crawl Depth</Label>
                <Input id="crawlDepth" type="number" min="0" max="3" defaultValue="1" />
                <p className="text-xs text-muted-foreground">How many links deep to follow from the source URL (0-3)</p>
              </div>
              <Button>Add URL</Button>
            </TabsContent>
          )}
          
          {type === "analytical" && (
            <TabsContent value="database" className="pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dbType">Database Type</Label>
                  <select id="dbType" className="w-full p-2 border rounded-md">
                    <option>PostgreSQL</option>
                    <option>MySQL</option>
                    <option>SQLite</option>
                    <option>SQL Server</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dbHost">Host</Label>
                  <Input id="dbHost" placeholder="localhost" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dbPort">Port</Label>
                  <Input id="dbPort" placeholder="5432" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dbName">Database Name</Label>
                  <Input id="dbName" placeholder="mydb" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dbUser">Username</Label>
                  <Input id="dbUser" placeholder="user" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dbPassword">Password</Label>
                  <Input id="dbPassword" type="password" placeholder="••••••••" />
                </div>
              </div>
              <Button>Test Connection</Button>
            </TabsContent>
          )}
          
          <TabsContent value="api" className="pt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiEndpoint">API Endpoint</Label>
              <Input id="apiEndpoint" placeholder="https://api.example.com/data" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiAuth">Authentication</Label>
              <select id="apiAuth" className="w-full p-2 border rounded-md">
                <option>None</option>
                <option>API Key</option>
                <option>OAuth 2.0</option>
                <option>Basic Auth</option>
              </select>
            </div>
            <Button>Test Endpoint</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
