
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Users, Target, Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  const sectors = [
    "Corporate Sector",
    "Advisory", 
    "Auditing",
    "Finance (BFSI)",
    "Manufacturing"
  ];

  const services = [
    {
      title: "CEO Recruitment",
      description: "Sourcing CEOs and techno-commercial profiles tailored to organizational needs"
    },
    {
      title: "CFO Recruitment", 
      description: "Expertise in sourcing CFOs and financial controllers"
    },
    {
      title: "Leadership Roles",
      description: "Providing profiles for corporate success, including technical experts"
    },
    {
      title: "Talent Acquisition",
      description: "Strategic talent sourcing and acquisition solutions"
    },
    {
      title: "Restructuring",
      description: "Assisting organizations with structural changes"
    },
    {
      title: "DEI+ Services",
      description: "Diversity, Equity, and Inclusion workplace solutions"
    }
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About URE HR
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert consulting for leadership roles across India and South Asia
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Transforming Leadership Landscapes
            </Badge>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert consulting for leadership roles across India and South Asia, 
                providing tailored profiles to meet corporate needs and ensure 
                effective leadership solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a premier HR partner dedicated to transforming leadership landscapes 
                by aligning top-tier talent with organizations to ensure effective 
                leadership solutions across all sectors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Market */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Sectors We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Primary Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">• Corporate organizations</p>
                <p className="text-muted-foreground">• Promoter-led organizations</p>
                <p className="text-muted-foreground">• Manufacturing units</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Industry Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector, index) => (
                    <Badge key={index} variant="secondary">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-primary" />
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">+91-99999 44807</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-primary" />
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">bd@urehr.com</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-primary" />
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">C-84, Sector 2, Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Request Business Proposal (RFP)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
