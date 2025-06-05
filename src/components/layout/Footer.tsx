
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              WEDNES AI
            </h1>
            <p className="text-muted-foreground mb-4">
              Build and deploy AI agents through an intuitive, step-by-step interface.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="rounded-full">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="/pipeline-builder" className="text-muted-foreground hover:text-foreground transition-colors">Pipeline Builder</a></li>
              <li><a href="/agents" className="text-muted-foreground hover:text-foreground transition-colors">Agent Gallery</a></li>
              <li><a href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="/tutorials" className="text-muted-foreground hover:text-foreground transition-colors">Tutorials</a></li>
              <li><a href="/api" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="/community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-muted-foreground">
            &copy; {new Date().getFullYear()} WEDNES AI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
