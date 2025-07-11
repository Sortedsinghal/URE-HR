import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, FileText, User, Star, MoreHorizontal, Mail, Phone } from "lucide-react";

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      position: "Senior Frontend Developer",
      status: "screening",
      aiScore: 95,
      experience: "5+ years",
      skills: ["React", "TypeScript", "Node.js"],
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "+1 (555) 987-6543",
      position: "Product Manager",
      status: "interview",
      aiScore: 88,
      experience: "7+ years",
      skills: ["Product Strategy", "Agile", "Analytics"],
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 456-7890",
      position: "UX Designer",
      status: "applied",
      aiScore: 92,
      experience: "4+ years",
      skills: ["Figma", "User Research", "Prototyping"],
      avatar: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied": return "secondary";
      case "screening": return "default";
      case "interview": return "outline";
      case "hired": return "default";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Candidates</h1>
            <p className="text-muted-foreground">
              Manage and track candidate applications across all positions
            </p>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="screening">Screening</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Candidates List */}
        <div className="grid gap-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={candidate.avatar} alt={candidate.name} />
                      <AvatarFallback>
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {candidate.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Applied for {candidate.position}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-right">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-warning" />
                              <span className={`text-sm font-medium ${getScoreColor(candidate.aiScore)}`}>
                                {candidate.aiScore}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">AI Score</p>
                          </div>
                          <Badge variant={getStatusColor(candidate.status)}>
                            {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{candidate.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{candidate.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{candidate.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button asChild size="sm">
                          <Link to={`/candidates/${candidate.id}`}>
                            <FileText className="h-4 w-4 mr-1" />
                            View Profile
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          Move to Next Stage
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Candidates;