
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/developers", label: "Developers" },
    { href: "#", label: "How it Works" },
    { href: "#", label: "Docs" },
    { href: "#", label: "GitHub" }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                WEDNES AI
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link 
                      key={link.href}
                      to={link.href} 
                      className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      key={link.href}
                      href={link.href} 
                      className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                {isAuthenticated && (
                  <button 
                    onClick={handleDashboardClick}
                    className="px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Dashboard
                  </button>
                )}
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
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    onClick={handleSignupClick}
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={handleDashboardClick}>
                  Dashboard
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
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
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-3 pt-2 bg-background/95 backdrop-blur-md border-b">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
          {isAuthenticated && (
            <button 
              onClick={handleDashboardClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-accent hover:text-accent-foreground"
            >
              Dashboard
            </button>
          )}
          <div className="mt-4 flex flex-col space-y-2 px-3">
            {!isAuthenticated ? (
              <>
                <Button variant="outline" className="w-full justify-center" onClick={handleLoginClick}>
                  Log in
                </Button>
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  onClick={handleSignupClick}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <Button variant="outline" className="w-full justify-center" onClick={handleDashboardClick}>
                Dashboard
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
