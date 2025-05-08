
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSlidesClick = () => {
    navigate("/slides");
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                RagiZen.ai
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground">
                  Home
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Docs
                </a>
                {isAuthenticated && (
                  <button 
                    onClick={handleSlidesClick}
                    className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Slides
                  </button>
                )}
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-2" 
                onClick={toggleTheme}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              
              {!isAuthenticated ? (
                <>
                  <Button variant="outline" className="mr-2" onClick={handleLoginClick}>
                    Log in
                  </Button>
                  <Button>
                    Sign up
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={handleSlidesClick}>
                  My Slides
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden flex">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-accent hover:text-accent-foreground">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            Docs
          </a>
          {isAuthenticated && (
            <button 
              onClick={handleSlidesClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Slides
            </button>
          )}
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            Pricing
          </a>
          <div className="mt-4 flex flex-col space-y-2 px-3">
            {!isAuthenticated ? (
              <>
                <Button variant="outline" className="w-full justify-center" onClick={handleLoginClick}>
                  Log in
                </Button>
                <Button className="w-full justify-center">
                  Sign up
                </Button>
              </>
            ) : (
              <Button variant="outline" className="w-full justify-center" onClick={handleSlidesClick}>
                My Slides
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
