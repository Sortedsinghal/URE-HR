import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Briefcase, Calendar, FileText, Shield, Plus, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Executive Search",
      description: "Comprehensive C-suite recruitment services including CEO, CFO, and leadership positions with proven track record.",
      slug: "executive-search"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Talent Analytics",
      description: "Data-driven insights for workforce planning, performance analysis, and strategic talent decisions.",
      slug: "talent-analytics"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "HR Consulting",
      description: "Strategic HR advisory services covering organizational development, policy creation, and compliance.",
      slug: "hr-consulting"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Interview Management",
      description: "Streamlined interview scheduling, candidate assessment, and feedback collection systems.",
      slug: "interview-management"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Candidate Assessment",
      description: "Comprehensive evaluation tools including psychometric testing, skill assessments, and cultural fit analysis.",
      slug: "candidate-assessment"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Background Verification",
      description: "Thorough verification services including employment history, education, and reference checks.",
      slug: "background-verification"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">COMPREHENSIVE SOLUTIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Core Features of Our Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive suite of HR consulting and executive search capabilities 
            that make URE HR the trusted partner for India's leading organizations.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-section-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    asChild 
                    className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group/btn"
                  >
                    <Link to={`/features/${feature.slug}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Leadership Team?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our comprehensive HR solutions can help you build 
            the leadership your organization needs to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/contact">Request Business Proposal</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;