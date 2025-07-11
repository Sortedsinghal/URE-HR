import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreHorizontal, Users, Calendar, MapPin, Edit, Eye, Archive } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    location: string;
    type: string;
    status: "Draft" | "Active" | "Closed" | "Archived";
    applicants: number;
    dateCreated: string;
    channels: string[];
  };
}

const statusColors = {
  Draft: "bg-muted text-muted-foreground",
  Active: "bg-success-light text-success",
  Closed: "bg-destructive/10 text-destructive",
  Archived: "bg-muted text-muted-foreground",
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{job.dateCreated}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className={statusColors[job.status]}>
              {job.status}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover border border-border">
                <DropdownMenuItem className="hover:bg-accent">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent">
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-foreground">{job.applicants}</span>
              <span className="text-muted-foreground">applicants</span>
            </div>
            <Badge variant="outline">{job.type}</Badge>
          </div>
          
          <div className="flex items-center space-x-1">
            {job.channels.map((channel) => (
              <Badge key={channel} variant="secondary" className="text-xs">
                {channel}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}