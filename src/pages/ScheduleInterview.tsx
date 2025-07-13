import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Clock, Users, Video, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const interviewers = [
  { id: "1", name: "Sarah Johnson", title: "Senior Engineer", avatar: "/placeholder.svg" },
  { id: "2", name: "Mike Chen", title: "Engineering Manager", avatar: "/placeholder.svg" },
  { id: "3", name: "Lisa Rodriguez", title: "Lead Designer", avatar: "/placeholder.svg" },
  { id: "4", name: "David Kim", title: "Principal Engineer", avatar: "/placeholder.svg" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const interviewTypes = [
  { value: "video", label: "Video Call", icon: Video },
  { value: "phone", label: "Phone Call", icon: Phone },
  { value: "in-person", label: "In-Person", icon: MapPin },
];

export default function ScheduleInterview() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedInterviewers, setSelectedInterviewers] = useState<string[]>([]);
  const [interviewType, setInterviewType] = useState<string>("");
  const [duration, setDuration] = useState<string>("60");
  const [notes, setNotes] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInterviewerToggle = (interviewerId: string) => {
    setSelectedInterviewers(prev => 
      prev.includes(interviewerId) 
        ? prev.filter(id => id !== interviewerId)
        : [...prev, interviewerId]
    );
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || !interviewType || selectedInterviewers.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to schedule the interview.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Interview scheduled",
      description: "The interview has been scheduled and invitations will be sent.",
    });
    
    navigate("/interviews");
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Schedule Interview</h1>
            <p className="text-muted-foreground">
              Set up a new interview with candidate
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate("/interviews")}>
            Cancel
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar & Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Date & Time
              </CardTitle>
              <CardDescription>
                Select the interview date and time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
              
              {selectedDate && (
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time Slots
                  </Label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Interview Details */}
          <Card>
            <CardHeader>
              <CardTitle>Interview Details</CardTitle>
              <CardDescription>
                Configure interview settings and participants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Interview Type */}
              <div className="space-y-2">
                <Label>Interview Type</Label>
                <div className="grid grid-cols-1 gap-2">
                  {interviewTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <Button
                        key={type.value}
                        variant={interviewType === type.value ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setInterviewType(type.value)}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {type.label}
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                    <SelectItem value="90">90 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Interviewers */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Interviewers
                </Label>
                <div className="space-y-2">
                  {interviewers.map((interviewer) => (
                    <div
                      key={interviewer.id}
                      className={`flex items-center gap-3 p-2 rounded-lg border cursor-pointer transition-colors ${
                        selectedInterviewers.includes(interviewer.id)
                          ? "bg-primary/10 border-primary"
                          : "hover:bg-muted"
                      }`}
                      onClick={() => handleInterviewerToggle(interviewer.id)}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={interviewer.avatar} />
                        <AvatarFallback>
                          {interviewer.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{interviewer.name}</p>
                        <p className="text-sm text-muted-foreground">{interviewer.title}</p>
                      </div>
                      {selectedInterviewers.includes(interviewer.id) && (
                        <Badge variant="default">Selected</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Interview Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any specific topics or requirements for this interview..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary & Actions */}
        {selectedDate && selectedTime && interviewType && selectedInterviewers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Interview Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Date</Label>
                  <p className="font-medium">{selectedDate.toDateString()}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Time</Label>
                  <p className="font-medium">{selectedTime}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Duration</Label>
                  <p className="font-medium">{duration} minutes</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Type</Label>
                  <p className="font-medium">
                    {interviewTypes.find(type => type.value === interviewType)?.label}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm text-muted-foreground">Interviewers</Label>
                  <div className="flex gap-2 mt-1">
                    {selectedInterviewers.map(id => {
                      const interviewer = interviewers.find(i => i.id === id);
                      return (
                        <Badge key={id} variant="secondary">
                          {interviewer?.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                
                <Button onClick={handleSchedule} size="lg">
                  Schedule Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}