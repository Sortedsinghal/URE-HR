import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, FileText, Clock, Users, BarChart3, MoreHorizontal } from "lucide-react";

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const assessments = [
    {
      id: 1,
      name: "React Developer Assessment",
      type: "technical",
      duration: "60 minutes",
      questions: 25,
      candidates: 42,
      avgScore: 78,
      status: "active",
      createdDate: "2024-01-10"
    },
    {
      id: 2,
      name: "Product Manager Aptitude Test",
      type: "aptitude",
      duration: "45 minutes",
      questions: 30,
      candidates: 18,
      avgScore: 82,
      status: "active",
      createdDate: "2024-01-08"
    },
    {
      id: 3,
      name: "UX Design Portfolio Review",
      type: "portfolio",
      duration: "30 minutes",
      questions: 10,
      candidates: 12,
      avgScore: 85,
      status: "draft",
      createdDate: "2024-01-15"
    }
  ];

  const recentResults = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      assessmentName: "React Developer Assessment",
      score: 92,
      completedDate: "2024-01-18",
      status: "completed"
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      assessmentName: "Product Manager Aptitude Test",
      score: 88,
      completedDate: "2024-01-17",
      status: "completed"
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      assessmentName: "React Developer Assessment",
      score: null,
      completedDate: null,
      status: "in-progress"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "technical": return "default";
      case "aptitude": return "secondary";
      case "portfolio": return "outline";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "draft": return "secondary";
      case "archived": return "outline";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Assessments</h1>
            <p className="text-muted-foreground">
              Create and manage candidate assessments and view results
            </p>
          </div>
          <Button asChild>
            <Link to="/assessments/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Assessment
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Assessments
                </CardTitle>
                <FileText className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">+2 this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Candidates
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Assessed this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg. Completion Rate
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">87%</div>
              <div className="text-sm text-success">+5% from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg. Score
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">78</div>
              <div className="text-sm text-muted-foreground">Across all assessments</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assessments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="aptitude">Aptitude</SelectItem>
                  <SelectItem value="portfolio">Portfolio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assessments List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">All Assessments</h2>
            
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {assessment.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant={getTypeColor(assessment.type)}>
                          {assessment.type.charAt(0).toUpperCase() + assessment.type.slice(1)}
                        </Badge>
                        <Badge variant={getStatusColor(assessment.status)}>
                          {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Duration</span>
                      <p className="font-medium">{assessment.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Questions</span>
                      <p className="font-medium">{assessment.questions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Candidates</span>
                      <p className="font-medium">{assessment.candidates}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avg. Score</span>
                      <p className={`font-medium ${getScoreColor(assessment.avgScore)}`}>
                        {assessment.avgScore}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild size="sm">
                      <Link to={`/assessments/${assessment.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Send to Candidate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Results */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Results</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Latest Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentResults.map((result) => (
                  <div key={result.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{result.candidateName}</h4>
                      {result.status === "completed" ? (
                        <Badge variant="default" className="bg-success">
                          {result.score}%
                        </Badge>
                      ) : (
                        <Badge variant="secondary">In Progress</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{result.assessmentName}</p>
                    {result.completedDate && (
                      <p className="text-xs text-muted-foreground">
                        Completed on {result.completedDate}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Assessments;