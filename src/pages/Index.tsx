import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, Clock, Plus, ArrowRight } from "lucide-react";
import heroImage from "@/assets/dashboard-hero.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent to-primary-light">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="Dashboard hero" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative px-8 py-12 md:py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Welcome to Young Thames - Leading Public Relations Agency for Change
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Elevate your brand with our sophisticated recruitment and public relations solutions. 
                We connect exceptional talent with visionary organizations through our comprehensive, 
                AI-enhanced platform designed for seamless candidate management and strategic communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                  <Link to="/jobs/create">
                    <Plus className="h-5 w-5 mr-2" />
                    Create New Job Post
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/jobs">
                    View All Jobs
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Jobs
                </CardTitle>
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-3 w-3 text-success mr-1" />
                <span className="text-success">+2 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Candidates
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">247</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-3 w-3 text-success mr-1" />
                <span className="text-success">+18 today</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Interviews
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">
                Scheduled this week
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Offers
                </CardTitle>
                <Clock className="h-4 w-4 text-warning" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-warning">
                1 expiring soon
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Time to Hire
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">14 days</div>
              <div className="flex items-center text-sm">
                <span className="text-success">-2 days vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Job Postings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Senior Frontend Developer", status: "Active", applicants: 24, date: "2 days ago" },
                { title: "Product Manager", status: "Draft", applicants: 0, date: "1 day ago" },
                { title: "UX Designer", status: "Active", applicants: 18, date: "3 days ago" },
              ].map((job, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div>
                    <h4 className="font-medium text-foreground">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">{job.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                      {job.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {job.applicants} applicants
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/jobs/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Job Post
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/candidates">
                  <Users className="h-4 w-4 mr-2" />
                  Review Candidates
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/interviews">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Interview
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/analytics">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
