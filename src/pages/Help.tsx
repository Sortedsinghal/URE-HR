import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Users, Briefcase, FileText, Calendar, Settings, Phone, ArrowRight } from "lucide-react";

const Help = () => {
  const categories = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Getting Started",
      description: "Learn the basics of working with URE HR and our executive search process.",
      articleCount: "8 articles",
      slug: "getting-started"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Executive Search",
      description: "Everything you need to know about our C-suite and leadership recruitment services.",
      articleCount: "12 articles", 
      slug: "executive-search"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Client Portal",
      description: "Guide to using our client portal for tracking search progress and candidate reviews.",
      articleCount: "6 articles",
      slug: "client-portal"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Interview Process",
      description: "Information about our interview scheduling, assessment, and feedback processes.",
      articleCount: "9 articles",
      slug: "interview-process"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Account Management",
      description: "Manage your account settings, preferences, and communication options.",
      articleCount: "5 articles",
      slug: "account-management"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Contact & Support",
      description: "Get in touch with our team and access additional support resources.",
      articleCount: "4 articles",
      slug: "contact-support"
    }
  ];

  const popularArticles = [
    "How to submit a job requirement",
    "Understanding our executive search timeline",
    "What information do I need to provide for a search?",
    "How to access and review candidate profiles",
    "Setting up interview schedules",
    "Background verification process explained",
    "How to provide feedback on candidates",
    "Understanding our guarantee policy"
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            URE HR Help Center
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find answers to your questions about our executive search and HR consulting services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search for answers..." 
              className="pl-12 py-4 text-lg bg-white border-white/20 text-primary placeholder:text-muted-foreground"
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size="sm"
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Browse by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-accent">
                    {category.articleCount}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    asChild 
                    className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group/btn"
                  >
                    <Link to={`/help/${category.slug}`}>
                      Browse Articles
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-6 bg-section-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Popular Articles
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
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
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Still Need Help?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you with any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/about">Learn About URE HR</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;