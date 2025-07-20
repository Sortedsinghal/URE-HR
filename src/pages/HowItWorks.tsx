import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Plus, Users, Search, CheckCircle, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion to understand your organization's specific leadership needs, company culture, and strategic objectives. Our experts analyze your requirements and create a tailored search strategy.",
      icon: <Users className="h-12 w-12" />,
      benefits: [
        "Detailed requirement analysis",
        "Cultural fit assessment",
        "Timeline and budget planning"
      ]
    },
    {
      number: "02", 
      title: "Executive Search & Sourcing",
      description: "Our experienced team leverages extensive networks and advanced search methodologies to identify and approach top-tier candidates. We conduct thorough screening and initial assessments to present only the most qualified professionals.",
      icon: <Search className="h-12 w-12" />,
      benefits: [
        "Access to passive candidates",
        "Comprehensive background checks", 
        "Multi-level screening process"
      ]
    },
    {
      number: "03",
      title: "Assessment & Evaluation", 
      description: "Candidates undergo rigorous evaluation including competency assessments, psychometric testing, and detailed interviews. We ensure alignment with both technical requirements and organizational culture.",
      icon: <CheckCircle className="h-12 w-12" />,
      benefits: [
        "Psychometric evaluations",
        "Technical skill assessments",
        "Leadership competency testing"
      ]
    },
    {
      number: "04",
      title: "Placement & Integration",
      description: "We facilitate the final selection process, negotiate terms, and support smooth onboarding. Our commitment continues post-placement to ensure successful integration and long-term success.",
      icon: <Handshake className="h-12 w-12" />,
      benefits: [
        "Offer negotiation support",
        "Onboarding assistance", 
        "90-day follow-up guarantee"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">OUR PROVEN PROCESS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with our executive search process in 4 simple steps. 
            From initial consultation to successful placement, we guide you through every stage.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Icon Side */}
                <div className="flex-1 flex justify-center">
                  <Card className="w-full max-w-md bg-primary/5 border-primary/20">
                    <CardContent className="p-12 text-center">
                      <div className="flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6 mx-auto">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div className="text-6xl font-bold text-primary/20 mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-primary">
                        {step.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Executive Search?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's begin with a consultation to understand your specific requirements 
            and create a customized search strategy for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/contact">Start Your Search</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/features">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;