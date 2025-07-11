import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, FileText, DollarSign, Calendar, CheckCircle, Clock, Users } from "lucide-react";

const Offers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const offers = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      candidateAvatar: "/placeholder.svg",
      position: "Senior Frontend Developer",
      salary: "$120,000",
      startDate: "2024-02-01",
      status: "pending",
      sentDate: "2024-01-18",
      expiryDate: "2024-01-25",
      department: "Engineering"
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      candidateAvatar: "/placeholder.svg",
      position: "Product Manager",
      salary: "$130,000",
      startDate: "2024-02-15",
      status: "accepted",
      sentDate: "2024-01-15",
      acceptedDate: "2024-01-17",
      department: "Product"
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      candidateAvatar: "/placeholder.svg",
      position: "UX Designer",
      salary: "$95,000",
      startDate: "2024-01-30",
      status: "negotiating",
      sentDate: "2024-01-16",
      department: "Design"
    }
  ];

  const onboardingTasks = [
    {
      id: 1,
      candidateName: "Michael Chen",
      position: "Product Manager",
      startDate: "2024-02-15",
      completedTasks: 3,
      totalTasks: 8,
      nextTask: "IT Equipment Setup"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "secondary";
      case "accepted": return "default";
      case "declined": return "destructive";
      case "expired": return "outline";
      case "negotiating": return "outline";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4" />;
      case "accepted": return <CheckCircle className="h-4 w-4" />;
      case "declined": return <FileText className="h-4 w-4" />;
      case "expired": return <Calendar className="h-4 w-4" />;
      case "negotiating": return <DollarSign className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const isExpiringSoon = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 2 && diffDays > 0;
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Offers & Onboarding</h1>
            <p className="text-muted-foreground">
              Manage offer letters and track onboarding progress
            </p>
          </div>
          <Button asChild>
            <Link to="/offers/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Offer
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Offers
                </CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-warning">1 expiring soon</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Accepted This Month
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-success">+2 from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Acceptance Rate
                </CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">89%</div>
              <div className="text-sm text-success">+5% this quarter</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Onboarding
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">In progress</div>
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
                  placeholder="Search offers..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                  <SelectItem value="negotiating">Negotiating</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Offers List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">All Offers</h2>
            
            {offers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={offer.candidateAvatar} alt={offer.candidateName} />
                      <AvatarFallback>
                        {offer.candidateName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {offer.candidateName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {offer.position} • {offer.department}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getStatusColor(offer.status)}>
                            <span className="flex items-center space-x-1">
                              {getStatusIcon(offer.status)}
                              <span className="ml-1">
                                {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                              </span>
                            </span>
                          </Badge>
                          {offer.expiryDate && isExpiringSoon(offer.expiryDate) && (
                            <Badge variant="destructive" className="text-xs">
                              Expires Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Salary</span>
                          <p className="font-medium text-success">{offer.salary}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Start Date</span>
                          <p className="font-medium">{offer.startDate}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sent Date</span>
                          <p className="font-medium">{offer.sentDate}</p>
                        </div>
                      </div>
                      
                      {offer.expiryDate && offer.status === "pending" && (
                        <div className="mb-3">
                          <span className="text-sm text-muted-foreground">
                            Expires on {offer.expiryDate}
                          </span>
                        </div>
                      )}
                      
                      {offer.acceptedDate && (
                        <div className="mb-3">
                          <span className="text-sm text-success">
                            Accepted on {offer.acceptedDate}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <Button asChild size="sm">
                          <Link to={`/offers/${offer.id}`}>
                            View Offer
                          </Link>
                        </Button>
                        {offer.status === "pending" && (
                          <Button variant="outline" size="sm">
                            Send Reminder
                          </Button>
                        )}
                        {offer.status === "accepted" && (
                          <Button asChild variant="outline" size="sm">
                            <Link to={`/onboarding/${offer.id}`}>
                              View Onboarding
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Onboarding Progress */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Onboarding Progress</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Hires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {onboardingTasks.map((task) => (
                  <div key={task.id} className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">{task.candidateName}</h4>
                      <p className="text-sm text-muted-foreground">{task.position}</p>
                      <p className="text-xs text-muted-foreground">Starts {task.startDate}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.completedTasks}/{task.totalTasks}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(task.completedTasks / task.totalTasks) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Next: {task.nextTask}
                      </p>
                    </div>
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
                  <Link to="/offers/create">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Offer
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Offer Templates
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/onboarding/templates">
                    <Users className="h-4 w-4 mr-2" />
                    Onboarding Templates
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offers;