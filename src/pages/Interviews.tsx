import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Plus, Search, Users, Video, MapPin, Phone } from "lucide-react";

const Interviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const interviews = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      candidateAvatar: "/placeholder.svg",
      position: "Senior Frontend Developer",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "60 min",
      type: "video",
      status: "scheduled",
      interviewers: ["John Smith", "Jane Doe"],
      location: "Zoom Meeting"
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      candidateAvatar: "/placeholder.svg",
      position: "Product Manager",
      date: "2024-01-20",
      time: "2:00 PM",
      duration: "45 min",
      type: "phone",
      status: "scheduled",
      interviewers: ["Alice Brown"],
      location: "Phone Call"
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      candidateAvatar: "/placeholder.svg",
      position: "UX Designer",
      date: "2024-01-19",
      time: "11:00 AM",
      duration: "60 min",
      type: "in-person",
      status: "completed",
      interviewers: ["Bob Wilson", "Carol Davis"],
      location: "Conference Room A"
    }
  ];

  const upcomingInterviews = [
    {
      time: "10:00 AM",
      candidate: "Sarah Johnson",
      position: "Frontend Developer",
      type: "video"
    },
    {
      time: "2:00 PM",
      candidate: "Michael Chen",
      position: "Product Manager",
      type: "phone"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "default";
      case "completed": return "secondary";
      case "cancelled": return "destructive";
      case "rescheduled": return "outline";
      default: return "secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "phone": return <Phone className="h-4 w-4" />;
      case "in-person": return <MapPin className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "default";
      case "phone": return "secondary";
      case "in-person": return "outline";
      default: return "secondary";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Interviews</h1>
            <p className="text-muted-foreground">
              Schedule and manage candidate interviews
            </p>
          </div>
          <Button asChild>
            <Link to="/interviews/schedule">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Interview
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Today's Interviews
                </CardTitle>
                <Calendar className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">2 completed</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  This Week
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-success">+3 from last week</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Show Rate
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">96%</div>
              <div className="text-sm text-success">+2% this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg. Duration
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">52 min</div>
              <div className="text-sm text-muted-foreground">As planned</div>
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
                  placeholder="Search interviews..."
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
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="rescheduled">Rescheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interviews List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">All Interviews</h2>
            
            {interviews.map((interview) => (
              <Card key={interview.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidateAvatar} alt={interview.candidateName} />
                      <AvatarFallback>
                        {interview.candidateName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {interview.candidateName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {interview.position}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getStatusColor(interview.status)}>
                            {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                          </Badge>
                          <Badge variant={getTypeColor(interview.type)}>
                            <span className="flex items-center space-x-1">
                              {getTypeIcon(interview.type)}
                              <span className="ml-1">{interview.type}</span>
                            </span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{interview.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{interview.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{interview.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="truncate">{interview.location}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Interviewers:</p>
                        <div className="flex flex-wrap gap-1">
                          {interview.interviewers.map((interviewer, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {interviewer}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button asChild size="sm">
                          <Link to={`/interviews/${interview.id}`}>
                            View Details
                          </Link>
                        </Button>
                        {interview.status === "scheduled" && (
                          <>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Join Meeting
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Today's Schedule */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Today's Schedule</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingInterviews.map((interview, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50">
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground">{interview.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">
                        {interview.candidate}
                      </h4>
                      <p className="text-sm text-muted-foreground truncate">
                        {interview.position}
                      </p>
                    </div>
                    <Badge variant={getTypeColor(interview.type)} className="text-xs">
                      {getTypeIcon(interview.type)}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/interviews/schedule">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Interviewer Availability
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Interviews;