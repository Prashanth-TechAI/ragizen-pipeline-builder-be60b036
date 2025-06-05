
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Key, Plus, Eye, EyeOff, Trash2 } from "lucide-react";

const ApiKeysSection = () => {
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [newKey, setNewKey] = useState({ name: "", key: "", provider: "" });
  const [isAdding, setIsAdding] = useState(false);
  
  const [apiKeys, setApiKeys] = useState([
    {
      id: "1",
      name: "OpenAI Production",
      provider: "OpenAI",
      key: "sk-1234567890abcdef...",
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      name: "Groq Development",
      provider: "Groq",
      key: "gsk-abcdef1234567890...",
      createdAt: "2024-01-10"
    }
  ]);

  const toggleKeyVisibility = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddKey = () => {
    if (newKey.name && newKey.key && newKey.provider) {
      setApiKeys(prev => [...prev, {
        id: Date.now().toString(),
        ...newKey,
        createdAt: new Date().toISOString().split('T')[0]
      }]);
      setNewKey({ name: "", key: "", provider: "" });
      setIsAdding(false);
    }
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== id));
  };

  const maskKey = (key: string) => {
    return key.substring(0, 8) + "..." + key.substring(key.length - 4);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">API Keys</h2>
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add API Key
        </Button>
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>Add New API Key</CardTitle>
            <CardDescription>
              Store your API keys securely for use in your agents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="keyName">Key Name</Label>
                <Input
                  id="keyName"
                  placeholder="e.g., OpenAI Production"
                  value={newKey.name}
                  onChange={(e) => setNewKey({...newKey, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="provider">Provider</Label>
                <Input
                  id="provider"
                  placeholder="e.g., OpenAI, Groq, Anthropic"
                  value={newKey.provider}
                  onChange={(e) => setNewKey({...newKey, provider: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your API key"
                value={newKey.key}
                onChange={(e) => setNewKey({...newKey, key: e.target.value})}
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleAddKey}>Add Key</Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {apiKeys.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-12">
            <Key className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <CardTitle>No API keys stored</CardTitle>
            <CardDescription>
              Add your API keys to use them in your agents
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-4">
          {apiKeys.map((key) => (
            <Card key={key.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{key.provider}</Badge>
                        <span className="text-sm text-muted-foreground">
                          Added {key.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-sm bg-muted px-3 py-1 rounded">
                      {showKeys[key.id] ? key.key : maskKey(key.key)}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleKeyVisibility(key.id)}
                    >
                      {showKeys[key.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteKey(key.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiKeysSection;
