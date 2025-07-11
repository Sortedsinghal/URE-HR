import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Mail, Phone, MapPin, Star, FileText, Clock, CheckCircle } from "lucide-react";

const CandidateProfile = () => {
  const { id } = useParams();

  // Mock candidate data
  const candidate = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    position: "Senior Frontend Developer",
    status: "screening",
    aiScore: 95,
    experience: "5+ years",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "CSS", "JavaScript"],
    avatar: "/placeholder.svg",
    appliedDate: "2024-01-15",
    resumeUrl: "/resume.pdf",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    githubUrl: "https://github.com/sarahjohnson"
  };

  const parsedData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        duration: "2022 - Present",
        description: "Led frontend development for e-commerce platform serving 1M+ users"
      },
      {
        title: "Frontend Developer",
        company: "StartupXYZ",
        duration: "2020 - 2022",
        description: "Built responsive web applications using React and TypeScript"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        year: "2020"
      }
    ],
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "CSS", "JavaScript", "Python"]
  };

  const eligibilityRules = [
    { rule: "Minimum 3 years React experience", status: "pass", match: "5+ years experience with React" },
    { rule: "TypeScript proficiency", status: "pass", match: "Listed in skills and work experience" },
    { rule: "Located in CA or Remote", status: "pass", match: "San Francisco, CA" },
    { rule: "Bachelor's degree", status: "pass", match: "BS Computer Science, UC Berkeley" }
  ];

  const assessments = [
    {
      name: "React Coding Challenge",
      status: "completed",
      score: 92,
      completedDate: "2024-01-18",
      timeSpent: "45 minutes"
    },
    {
      name: "System Design Assessment",
      status: "pending",
      score: null,
      completedDate: null,
      timeSpent: null
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline" size="icon">
              <Link to="/candidates">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Candidate Profile</h1>
              <p className="text-muted-foreground">
                Detailed view and assessment results
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button>
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>

        {/* Candidate Overview */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={candidate.avatar} alt={candidate.name} />
                <AvatarFallback className="text-lg">
                  {candidate.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{candidate.name}</h2>
                    <p className="text-lg text-muted-foreground">{candidate.position}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-5 w-5 text-warning" />
                      <span className="text-2xl font-bold text-success">{candidate.aiScore}</span>
                      <span className="text-sm text-muted-foreground">AI Score</span>
                    </div>
                    <Badge variant="default" className="mb-2">
                      {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{candidate.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{candidate.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {candidate.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="parsed-data" className="space-y-4">
          <TabsList>
            <TabsTrigger value="parsed-data">Parsed Resume Data</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility Check</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="parsed-data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Extracted Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Work Experience</h4>
                  <div className="space-y-4">
                    {parsedData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h5 className="font-medium text-foreground">{exp.title}</h5>
                        <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                        <p className="text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Education</h4>
                  {parsedData.education.map((edu, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-foreground">{edu.degree}</h5>
                      <p className="text-sm text-muted-foreground">{edu.school} • {edu.year}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eligibility" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibilityRules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/50">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{rule.rule}</h5>
                        <p className="text-sm text-muted-foreground mt-1">{rule.match}</p>
                      </div>
                      <Badge variant="default" className="bg-success">
                        Pass
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Assessment Results</h3>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Send New Assessment
              </Button>
            </div>
            
            <div className="space-y-4">
              {assessments.map((assessment, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{assessment.name}</h4>
                        {assessment.status === "completed" && (
                          <div className="text-sm text-muted-foreground mt-1">
                            <span>Completed on {assessment.completedDate}</span>
                            <span className="mx-2">•</span>
                            <span>Time: {assessment.timeSpent}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {assessment.status === "completed" ? (
                          <>
                            <div className="text-2xl font-bold text-success">{assessment.score}</div>
                            <Badge variant="default">Completed</Badge>
                          </>
                        ) : (
                          <Badge variant="secondary">Pending</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2024-01-15", action: "Application submitted", status: "completed" },
                    { date: "2024-01-16", action: "Resume parsed and reviewed", status: "completed" },
                    { date: "2024-01-17", action: "Eligibility check passed", status: "completed" },
                    { date: "2024-01-18", action: "Assessment completed", status: "completed" },
                    { date: "2024-01-19", action: "Screening in progress", status: "current" },
                    { date: "Pending", action: "Interview scheduling", status: "pending" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`h-3 w-3 rounded-full ${
                        item.status === "completed" ? "bg-success" :
                        item.status === "current" ? "bg-primary" : "bg-muted"
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.action}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CandidateProfile;