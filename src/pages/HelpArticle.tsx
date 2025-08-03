import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const HelpArticle = () => {
  const { slug } = useParams();

  const articleData: Record<string, { title: string; content: string; category: string }> = {
    "how-to-submit-a-job-requirement": {
      title: "How to submit a job requirement",
      category: "Getting Started",
      content: `
        <h2>Submitting a Job Requirement</h2>
        <p>To submit a new executive search requirement, follow these simple steps:</p>
        
        <h3>Step 1: Access the Portal</h3>
        <p>Log into your client portal and navigate to the "Create New Search" section.</p>
        
        <h3>Step 2: Provide Job Details</h3>
        <ul>
          <li>Job title and reporting structure</li>
          <li>Key responsibilities and requirements</li>
          <li>Experience and qualifications needed</li>
          <li>Compensation range and benefits</li>
          <li>Location and travel requirements</li>
        </ul>
        
        <h3>Step 3: Company Information</h3>
        <p>Include details about your organization, culture, and the specific challenges this role will address.</p>
        
        <h3>Step 4: Timeline and Priorities</h3>
        <p>Specify your preferred timeline and any critical deadlines for the search process.</p>
        
        <h3>Step 5: Submit and Review</h3>
        <p>Once submitted, our team will review your requirement and contact you within 24 hours to discuss the search strategy.</p>
      `
    },
    "understanding-our-executive-search-timeline": {
      title: "Understanding our executive search timeline",
      category: "Executive Search",
      content: `
        <h2>Executive Search Timeline</h2>
        <p>Our executive search process typically follows this timeline:</p>
        
        <h3>Week 1-2: Strategy and Research</h3>
        <ul>
          <li>Search strategy development</li>
          <li>Market research and mapping</li>
          <li>Candidate sourcing begins</li>
        </ul>
        
        <h3>Week 3-6: Candidate Identification</h3>
        <ul>
          <li>Comprehensive candidate search</li>
          <li>Initial screening and assessment</li>
          <li>Reference checks</li>
        </ul>
        
        <h3>Week 7-10: Client Presentations</h3>
        <ul>
          <li>Candidate presentations to client</li>
          <li>First round interviews</li>
          <li>Feedback and refinement</li>
        </ul>
        
        <h3>Week 11-14: Final Rounds</h3>
        <ul>
          <li>Final interviews</li>
          <li>Reference verification</li>
          <li>Offer negotiation</li>
        </ul>
        
        <h3>Week 15-16: Closure</h3>
        <ul>
          <li>Offer acceptance</li>
          <li>Onboarding support</li>
          <li>Search completion</li>
        </ul>
      `
    }
  };

  const article = articleData[slug || ""];

  if (!article) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The help article you're looking for doesn't exist.</p>
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
          <span className="hover:text-accent">{article.category}</span>
          <span className="mx-2">/</span>
          <span>{article.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
        <p className="text-sm text-muted-foreground">Category: {article.category}</p>
      </div>

      {/* Article Content */}
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-primary">Need More Help?</h3>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link to="/help">Browse All Categories</Link>
          </Button>
          <Button asChild>
            <Link to="/about">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default HelpArticle;