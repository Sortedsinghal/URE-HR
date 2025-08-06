import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, Clock, Plus, ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/dashboard-hero.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="hero-section relative py-24 px-6 overflow-hidden -mx-6"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="plus-accent">Expert HR Consulting</span> & 
              <span className="block text-accent"> Executive Search</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-medium">
              Transforming Leadership Landscapes across India and South Asia
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Specializing in CEO & CFO recruitment, talent acquisition, and strategic HR solutions for corporate organizations, manufacturing units, and BFSI sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-lg text-lg px-8 py-4 font-semibold transition-all duration-300"
                asChild
              >
                <Link to="/features">Explore Our Services</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/90 hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold transition-all duration-300"
                asChild
              >
                <Link to="/jobs">View Executive Search</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/90 hover:bg-accent hover:text-white text-lg px-8 py-4 font-semibold transition-all duration-300"
                asChild
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/90 hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4 font-semibold transition-all duration-300"
                asChild
              >
                <Link to="/features">View All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Quick Stats */}
        <section className="py-16 section-alternate -mx-6 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground plus-accent">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center p-6 card-hover border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">24</div>
                  <div className="text-sm text-subtle">Active Jobs</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-hover border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">156</div>
                  <div className="text-sm text-subtle">Total Candidates</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-hover border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-subtle">Interviews Scheduled</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-hover border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-subtle">Pending Offers</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 card-hover border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-subtle">Days Avg. Time to Hire</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Recent Job Postings */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground plus-accent">Recent Executive Searches</h2>
                <div className="space-y-4">
                  <Card className="p-6 card-hover border-border">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg font-semibold">Chief Executive Officer - Manufacturing</CardTitle>
                      <p className="text-sm text-subtle">Posted 2 days ago • Noida, UP</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm text-subtle mb-3 leading-relaxed">Leading manufacturing unit seeking visionary CEO with 15+ years experience in automotive sector.</p>
                      <Badge className="bg-accent text-accent-foreground">Active</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 card-hover border-border">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg font-semibold">Chief Financial Officer - BFSI</CardTitle>
                      <p className="text-sm text-subtle">Posted 5 days ago • Mumbai, MH</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm text-subtle mb-3 leading-relaxed">Premier financial services company requires CFO with strong background in digital transformation.</p>
                      <Badge variant="outline" className="border-accent text-accent">In Review</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 card-hover border-border">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg font-semibold">VP Technology - Corporate Advisory</CardTitle>
                      <p className="text-sm text-subtle">Posted 1 week ago • Bangalore, KA</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm text-subtle mb-3 leading-relaxed">Corporate advisory firm seeking technology leader with expertise in AI and digital solutions.</p>
                      <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Shortlisting</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground plus-accent">Quick Actions</h2>
                <div className="space-y-4">
                  <Link to="/create-job">
                    <Card className="p-6 card-hover border-border cursor-pointer">
                      <CardContent className="p-0 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary plus-accent">Post Leadership Role</h3>
                          <p className="text-sm text-subtle leading-relaxed">Create new executive search requirement</p>
                        </div>
                        <Briefcase className="h-6 w-6 text-accent" />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/candidates">
                    <Card className="p-6 card-hover border-border cursor-pointer">
                      <CardContent className="p-0 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary plus-accent">Review Candidates</h3>
                          <p className="text-sm text-subtle leading-relaxed">Browse executive talent pool</p>
                        </div>
                        <Users className="h-6 w-6 text-accent" />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/schedule-interview">
                    <Card className="p-6 card-hover border-border cursor-pointer">
                      <CardContent className="p-0 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary plus-accent">Schedule Interview</h3>
                          <p className="text-sm text-subtle leading-relaxed">Coordinate leadership assessments</p>
                        </div>
                        <Calendar className="h-6 w-6 text-accent" />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/analytics">
                    <Card className="p-6 card-hover border-border cursor-pointer">
                      <CardContent className="p-0 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary plus-accent">View Analytics</h3>
                          <p className="text-sm text-subtle leading-relaxed">Track recruitment metrics</p>
                        </div>
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
