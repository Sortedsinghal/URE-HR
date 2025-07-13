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
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                Young Thames \n
                (Public Relations)
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link 
                  to="/" 
                  className={cn(
                    "transition-colors",
                    isActive("/") 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/jobs" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/jobs") 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Jobs
                </Link>
                <Link 
                  to="/candidates" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/candidates") || location.pathname.startsWith("/talent-pool")
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Candidates
                </Link>
                <Link 
                  to="/interviews" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/interviews") || location.pathname.startsWith("/video-interviews")
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Interviews
                </Link>
                <Link 
                  to="/offers" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/offers") 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Offers
                </Link>
                <Link 
                  to="/integrations" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/integrations") 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Settings
                </Link>
                <Link 
                  to="/analytics" 
                  className={cn(
                    "transition-colors",
                    location.pathname.startsWith("/analytics") 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Analytics
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
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
