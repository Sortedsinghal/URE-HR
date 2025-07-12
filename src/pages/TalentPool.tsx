import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Download, Mail, Star, MapPin, Clock, Tag } from "lucide-react";

const TalentPool = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    experience: "",
    skills: "",
    tags: "",
    availability: ""
  });

  // Mock candidate data
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "",
      initials: "SJ",
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      tags: ["top-performer-2024", "react-expert"],
      lastActive: "2024-07-10",
      aiScore: 92,
      status: "Available",
      previousApplications: ["Frontend Developer at TechCorp", "React Developer at StartupX"]
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      avatar: "",
      initials: "MC",
      title: "DevOps Engineer",
      location: "Remote",
      experience: "7+ years",
      skills: ["Kubernetes", "Docker", "AWS", "Python"],
      tags: ["kubernetes-expert", "remote-ready"],
      lastActive: "2024-07-08",
      aiScore: 88,
      status: "Passive",
      previousApplications: ["DevOps Engineer at CloudCorp"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      avatar: "",
      initials: "ER",
      title: "UX Designer",
      location: "New York, NY",
      experience: "4+ years",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      tags: ["design-system-expert", "user-research"],
      lastActive: "2024-07-12",
      aiScore: 85,
      status: "Available",
      previousApplications: ["UX Designer at DesignStudio", "Product Designer at FinTech"]
    },
    {
      id: 4,
      name: "David Wilson",
      email: "d.wilson@email.com",
      avatar: "",
      initials: "DW",
      title: "Data Scientist",
      location: "Austin, TX",
      experience: "6+ years",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      tags: ["ml-expert", "python-specialist"],
      lastActive: "2024-07-05",
      aiScore: 90,
      status: "Passive",
      previousApplications: ["Data Scientist at DataCorp", "ML Engineer at AIStart"]
    }
  ];

  const skillOptions = ["React", "TypeScript", "Python", "AWS", "Kubernetes", "Figma", "Machine Learning"];
  const locationOptions = ["San Francisco, CA", "New York, NY", "Austin, TX", "Remote", "Los Angeles, CA"];
  const experienceOptions = ["1-2 years", "3-4 years", "5+ years", "7+ years", "10+ years"];

  const handleCandidateSelect = (candidateId, checked) => {
    if (checked) {
      setSelectedCandidates([...selectedCandidates, candidateId]);
    } else {
      setSelectedCandidates(selectedCandidates.filter(id => id !== candidateId));
    }
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = searchQuery === "" || 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = filters.location === "" || candidate.location.includes(filters.location);
    const matchesExperience = filters.experience === "" || candidate.experience === filters.experience;
    
    return matchesSearch && matchesLocation && matchesExperience;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "default";
      case "Passive": return "secondary";
      case "Not Available": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Talent Pool</h1>
            <p className="text-muted-foreground">Search and manage your candidate database</p>
          </div>
          
          {selectedCandidates.length > 0 && (
            <div className="flex space-x-2">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Selected ({selectedCandidates.length})
              </Button>
              <Button variant="outline">
                <Tag className="mr-2 h-4 w-4" />
                Add Tags
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Search & Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search Input */}
                <div>
                  <Label htmlFor="search">Search Candidates</Label>
                  <Input
                    id="search"
                    placeholder="Name, title, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Separator />

                {/* Location Filter */}
                <div>
                  <Label>Location</Label>
                  <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any location</SelectItem>
                      {locationOptions.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Filter */}
                <div>
                  <Label>Experience Level</Label>
                  <Select value={filters.experience} onValueChange={(value) => setFilters({...filters, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any experience</SelectItem>
                      {experienceOptions.map(exp => (
                        <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills Filter */}
                <div>
                  <Label>Skills</Label>
                  <div className="space-y-2">
                    {skillOptions.map(skill => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={skill} />
                        <label htmlFor={skill} className="text-sm">{skill}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => {
                  setFilters({ location: "", experience: "", skills: "", tags: "", availability: "" });
                  setSearchQuery("");
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Results */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Search Results</CardTitle>
                    <CardDescription>
                      {filteredCandidates.length} candidates found
                    </CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredCandidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <Checkbox
                          checked={selectedCandidates.includes(candidate.id)}
                          onCheckedChange={(checked) => handleCandidateSelect(candidate.id, checked)}
                        />
                        
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={candidate.avatar} />
                          <AvatarFallback>{candidate.initials}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{candidate.name}</h3>
                              <p className="text-muted-foreground">{candidate.title}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <MapPin className="mr-1 h-3 w-3" />
                                  {candidate.location}
                                </span>
                                <span>{candidate.experience}</span>
                                <span className="flex items-center">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Last active: {candidate.lastActive}
                                </span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge variant={getStatusColor(candidate.status)}>
                                  {candidate.status}
                                </Badge>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="font-semibold">{candidate.aiScore}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Skills */}
                          <div className="mt-3">
                            <div className="flex flex-wrap gap-1">
                              {candidate.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Tags */}
                          {candidate.tags.length > 0 && (
                            <div className="mt-2">
                              <div className="flex flex-wrap gap-1">
                                {candidate.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    <Tag className="mr-1 h-3 w-3" />
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Previous Applications */}
                          <div className="mt-3 text-sm text-muted-foreground">
                            <strong>Previous applications:</strong> {candidate.previousApplications.join(", ")}
                          </div>
                          
                          <div className="mt-3 flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Mail className="mr-2 h-4 w-4" />
                              Contact
                            </Button>
                            <Button size="sm" variant="outline">
                              View Profile
                            </Button>
                            <Button size="sm" variant="outline">
                              Add to Job
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TalentPool;