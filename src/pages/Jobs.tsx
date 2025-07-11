import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Filter } from "lucide-react";

// Mock data for jobs
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Active" as const,
    applicants: 24,
    dateCreated: "2025-01-10",
    channels: ["LinkedIn", "Indeed"],
  },
  {
    id: "2",
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    status: "Draft" as const,
    applicants: 0,
    dateCreated: "2025-01-11",
    channels: [],
  },
  {
    id: "3",
    title: "UX Designer",
    location: "New York, NY",
    type: "Contract",
    status: "Active" as const,
    applicants: 18,
    dateCreated: "2025-01-08",
    channels: ["LinkedIn", "AngelList"],
  },
  {
    id: "4",
    title: "Backend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    status: "Closed" as const,
    applicants: 45,
    dateCreated: "2025-01-05",
    channels: ["Indeed", "Stack Overflow"],
  },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Job Postings</h1>
            <p className="text-muted-foreground mt-1">
              Manage and track all your job postings in one place
            </p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary-dark">
            <Link to="/jobs/create">
              <Plus className="h-4 w-4 mr-2" />
              Create New Job Post
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between bg-card border rounded-lg p-4">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search job titles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-background">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary-light text-primary">
              {filteredJobs.length} jobs
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-foreground">
              {mockJobs.filter(j => j.status === "Active").length}
            </div>
            <div className="text-sm text-muted-foreground">Active Jobs</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-foreground">
              {mockJobs.filter(j => j.status === "Draft").length}
            </div>
            <div className="text-sm text-muted-foreground">Draft Jobs</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-foreground">
              {mockJobs.reduce((sum, job) => sum + job.applicants, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Applicants</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-foreground">
              {mockJobs.filter(j => j.status === "Closed").length}
            </div>
            <div className="text-sm text-muted-foreground">Closed Jobs</div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">No jobs found</div>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}