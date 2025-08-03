import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HelpCategory = () => {
  const { slug } = useParams();

  const categoryData: Record<string, { title: string; description: string; articles: string[] }> = {
    "getting-started": {
      title: "Getting Started",
      description: "Learn the basics of working with URE HR and our executive search process.",
      articles: [
        "How to submit a job requirement",
        "Understanding our executive search timeline",
        "What information do I need to provide for a search?",
        "Setting up your client account",
        "Introduction to our services",
        "First-time client guide",
        "How to access your dashboard",
        "Understanding our communication process"
      ]
    },
    "executive-search": {
      title: "Executive Search",
      description: "Everything you need to know about our C-suite and leadership recruitment services.",
      articles: [
        "Executive search process overview",
        "CEO recruitment best practices",
        "CFO search methodology",
        "Leadership assessment criteria",
        "Industry expertise and specializations",
        "Search timeline expectations",
        "Candidate evaluation process",
        "Executive onboarding support",
        "Search guarantee policy",
        "Replacement guarantee terms",
        "Success metrics and KPIs",
        "Post-placement support"
      ]
    },
    "client-portal": {
      title: "Client Portal",
      description: "Guide to using our client portal for tracking search progress and candidate reviews.",
      articles: [
        "How to access and review candidate profiles",
        "Tracking search progress",
        "Providing feedback on candidates",
        "Using the candidate comparison tool",
        "Downloading reports and summaries",
        "Communication center usage"
      ]
    },
    "interview-process": {
      title: "Interview Process",
      description: "Information about our interview scheduling, assessment, and feedback processes.",
      articles: [
        "Setting up interview schedules",
        "Interview coordination process",
        "Assessment methodology",
        "Reference checking procedures",
        "Background verification process explained",
        "Final round interview best practices",
        "Feedback collection and analysis",
        "Decision-making support",
        "Offer negotiation assistance"
      ]
    },
    "account-management": {
      title: "Account Management",
      description: "Manage your account settings, preferences, and communication options.",
      articles: [
        "Updating company information",
        "Managing user permissions",
        "Setting communication preferences",
        "Account security settings",
        "Billing and payment information"
      ]
    },
    "contact-support": {
      title: "Contact & Support",
      description: "Get in touch with our team and access additional support resources.",
      articles: [
        "How to contact our support team",
        "Emergency contact procedures",
        "Escalation process",
        "Service level agreements"
      ]
    }
  };

  const category = categoryData[slug || ""];

  if (!category) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-primary mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The help category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/help">Back to Help Center</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/help" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Help Center
          </Link>
        </Button>
        <nav className="text-sm text-muted-foreground">
          <Link to="/help" className="hover:text-accent">Help Center</Link>
          <span className="mx-2">/</span>
          <span>{category.title}</span>
        </nav>
      </div>

      {/* Category Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{category.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
      </div>

      {/* Articles List */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-primary">Articles in this Category</h2>
        <div className="space-y-4">
          {category.articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Link 
                  to={`/help/article/${article.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="flex items-center justify-between group-hover:text-accent transition-colors"
                >
                  <span className="font-medium">{article}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HelpCategory;