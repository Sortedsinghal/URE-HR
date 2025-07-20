
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User, Bell, Settings } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex flex-col leading-none hover:opacity-90 transition-all duration-300">
                <span className="text-2xl font-bold text-primary plus-accent">URE HR</span>
                <span className="text-sm text-subtle font-medium">Expert consulting for leadership roles</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link 
                  to="/" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    isActive("/") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/about" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    isActive("/about") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  About
                </Link>
                <Link 
                  to="/features" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    isActive("/features") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Features
                </Link>
                <Link 
                  to="/how-it-works" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    isActive("/how-it-works") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  How It Works
                </Link>
                <Link 
                  to="/help" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    isActive("/help") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Help
                </Link>
                <Link 
                  to="/jobs" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/jobs") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Jobs
                </Link>
                <Link 
                  to="/candidates" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/candidates") || location.pathname.startsWith("/talent-pool")
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Candidates
                </Link>
                <Link 
                  to="/interviews" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/interviews") || location.pathname.startsWith("/video-interviews")
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Interviews
                </Link>
                <Link 
                  to="/offers" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/offers") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Offers
                </Link>
                <Link 
                  to="/integrations" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/integrations") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Settings
                </Link>
                <Link 
                  to="/analytics" 
                  className={cn(
                    "transition-all duration-300 font-medium relative hover:scale-105",
                    location.pathname.startsWith("/analytics") 
                      ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0" 
                      : "text-foreground hover:text-accent"
                  )}
                >
                  Analytics
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-all duration-300">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-all duration-300">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent transition-all duration-300">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn("container mx-auto px-6 py-8", className)}>
        {children}
      </main>
    </div>
  );
}
