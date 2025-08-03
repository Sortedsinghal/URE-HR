import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, TrendingUp, Briefcase, Calendar, FileText, Shield, 
  Plus, ArrowRight, CheckCircle, Star, Clock, Target 
} from "lucide-react";

const FeatureDetail = () => {
  const { slug } = useParams();

  const featureData = {
    "executive-search": {
      icon: <Users className="h-12 w-12" />,
      title: "Executive Search",
      subtitle: "Comprehensive C-suite recruitment services for leadership positions",
      description: "Our executive search practice specializes in identifying and placing top-tier leadership talent across CEO, CFO, CTO, and other C-suite positions. With our proven methodology and extensive network, we deliver exceptional candidates who drive organizational success.",
      benefits: [
        {
          icon: <Target className="h-6 w-6" />,
          title: "Targeted Search Strategy",
          description: "Custom search methodology tailored to your specific leadership requirements and organizational culture."
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Executive Network Access",
          description: "Access to our extensive network of senior executives and industry leaders across sectors."
        },
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "Rigorous Assessment",
          description: "Comprehensive evaluation including leadership competencies, cultural fit, and strategic thinking capabilities."
        }
      ],
      features: [
        "CEO & C-suite recruitment",
        "Board member identification",
        "Succession planning support",
        "Leadership assessment & profiling",
        "Market intelligence & benchmarking",
        "Post-placement integration support"
      ],
      industries: ["Manufacturing", "BFSI", "Technology", "Healthcare", "Automotive", "Energy"]
    },
    "talent-analytics": {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Talent Analytics",
      subtitle: "Data-driven insights for workforce planning and strategic talent decisions",
      description: "Transform your talent strategy with our advanced analytics platform. Get actionable insights on talent acquisition, retention, and performance to make informed decisions that drive business growth.",
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "Performance Insights",
          description: "Comprehensive analysis of talent performance metrics and predictive indicators for success."
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Market Intelligence",
          description: "Real-time market data on talent availability, compensation trends, and competitive landscape."
        },
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "ROI Measurement",
          description: "Track and measure the return on investment for your talent acquisition and retention initiatives."
        }
      ],
      features: [
        "Talent pipeline analytics",
        "Compensation benchmarking",
        "Retention risk assessment",
        "Diversity & inclusion metrics",
        "Time-to-hire optimization",
        "Quality of hire measurement"
      ],
      industries: ["All Industries", "Technology", "Finance", "Healthcare", "Manufacturing", "Consulting"]
    },
    "hr-consulting": {
      icon: <Briefcase className="h-12 w-12" />,
      title: "HR Consulting",
      subtitle: "Strategic HR advisory services for organizational development and compliance",
      description: "Our HR consulting services help organizations build robust human resource frameworks, optimize processes, and ensure compliance. From policy development to organizational restructuring, we provide strategic guidance for all your HR needs.",
      benefits: [
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Strategic HR Planning",
          description: "Develop comprehensive HR strategies aligned with your business objectives and growth plans."
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Compliance Assurance",
          description: "Ensure full compliance with labor laws, regulations, and industry standards across all operations."
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Organizational Development",
          description: "Design and implement organizational structures that enhance efficiency and employee engagement."
        }
      ],
      features: [
        "HR policy development",
        "Organizational restructuring",
        "Compensation & benefits design",
        "Performance management systems",
        "Employee engagement programs",
        "Compliance audits & training"
      ],
      industries: ["Manufacturing", "IT Services", "Healthcare", "Retail", "Financial Services", "Startups"]
    },
    "interview-management": {
      icon: <Calendar className="h-12 w-12" />,
      title: "Interview Management",
      subtitle: "Streamlined interview scheduling and candidate assessment systems",
      description: "Optimize your interview process with our comprehensive management system. From scheduling to feedback collection, we ensure a smooth and professional candidate experience while maximizing assessment effectiveness.",
      benefits: [
        {
          icon: <Calendar className="h-6 w-6" />,
          title: "Efficient Scheduling",
          description: "Automated scheduling system that coordinates across multiple stakeholders and time zones."
        },
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "Structured Assessment",
          description: "Standardized evaluation frameworks that ensure consistent and fair candidate assessment."
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Faster Decision Making",
          description: "Streamlined feedback collection and decision-making processes to reduce time-to-hire."
        }
      ],
      features: [
        "Interview scheduling automation",
        "Video interview platform",
        "Assessment scorecards",
        "Feedback aggregation",
        "Candidate experience tracking",
        "Interview analytics & reporting"
      ],
      industries: ["Technology", "Finance", "Healthcare", "Consulting", "Manufacturing", "Retail"]
    },
    "candidate-assessment": {
      icon: <FileText className="h-12 w-12" />,
      title: "Candidate Assessment",
      subtitle: "Comprehensive evaluation tools including psychometric testing and skill assessments",
      description: "Make confident hiring decisions with our comprehensive assessment suite. Our scientifically-backed evaluation tools provide deep insights into candidate capabilities, potential, and cultural fit.",
      benefits: [
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Comprehensive Evaluation",
          description: "Multi-dimensional assessment covering technical skills, behavioral traits, and cognitive abilities."
        },
        {
          icon: <Star className="h-6 w-6" />,
          title: "Predictive Insights",
          description: "Advanced analytics that predict candidate success and long-term performance potential."
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Cultural Fit Analysis",
          description: "Assess alignment with your organizational values, culture, and team dynamics."
        }
      ],
      features: [
        "Psychometric testing",
        "Technical skill assessments",
        "Leadership competency evaluation",
        "Cultural fit analysis",
        "Cognitive ability testing",
        "360-degree feedback collection"
      ],
      industries: ["Technology", "Finance", "Healthcare", "Manufacturing", "Consulting", "Pharmaceuticals"]
    },
    "background-verification": {
      icon: <Shield className="h-12 w-12" />,
      title: "Background Verification",
      subtitle: "Thorough verification services including employment history and reference checks",
      description: "Protect your organization with our comprehensive background verification services. We conduct thorough checks to ensure candidate authenticity and minimize hiring risks.",
      benefits: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Risk Mitigation",
          description: "Comprehensive verification process that identifies potential red flags and mitigates hiring risks."
        },
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "Compliance Assurance",
          description: "Ensure all verification processes meet legal requirements and industry standards."
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Fast Turnaround",
          description: "Efficient verification process with quick turnaround times to avoid delays in hiring."
        }
      ],
      features: [
        "Employment history verification",
        "Education credential checks",
        "Professional reference validation",
        "Criminal background screening",
        "Identity verification",
        "Social media screening"
      ],
      industries: ["BFSI", "Healthcare", "Government", "Technology", "Manufacturing", "Education"]
    }
  };

  const feature = featureData[slug as keyof typeof featureData];

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-8 px-6 border-b">
        <div className="container mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/features" className="hover:text-accent">Features</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-foreground">{feature.title}</span>
          </nav>
        </div>
      </section>

      {/* Feature Header */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-lg mr-6">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {feature.title}
                  </h1>
                  <p className="text-xl text-accent font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {feature.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4 font-semibold" asChild>
                  <Link to="/create-job">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div>
              <Card className="bg-primary/5 border-primary/20 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-primary mb-6">Key Industries</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.industries.map((industry, index) => (
                      <Badge key={index} variant="outline" className="justify-center py-2 text-sm">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-section-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-accent mr-2" />
              <span className="text-accent font-semibold">KEY BENEFITS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Why Choose Our {feature.title}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {feature.benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {feature.features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started with {feature.title}?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our {feature.title.toLowerCase()} services can help transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/create-job">Request Proposal</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeatureDetail;