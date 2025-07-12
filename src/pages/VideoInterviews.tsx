import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Play, Clock, MessageSquare, TrendingUp, TrendingDown, Minus } from "lucide-react";

const VideoInterviews = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);

  // Mock data for video interviews
  const interviews = [
    {
      id: 1,
      candidate: { name: "Alex Johnson", avatar: "", initials: "AJ" },
      position: "Senior Developer",
      type: "Recorded",
      status: "Completed",
      date: "2024-07-10",
      duration: "15:32",
      aiScore: 85,
      sentiment: "positive"
    },
    {
      id: 2,
      candidate: { name: "Maria Garcia", avatar: "", initials: "MG" },
      position: "UX Designer",
      type: "Live",
      status: "Scheduled",
      date: "2024-07-15",
      duration: "30:00",
      aiScore: null,
      sentiment: null
    },
    {
      id: 3,
      candidate: { name: "David Chen", avatar: "", initials: "DC" },
      position: "Product Manager",
      type: "Recorded",
      status: "Completed",
      date: "2024-07-08",
      duration: "18:45",
      aiScore: 72,
      sentiment: "neutral"
    }
  ];

  const aiInsights = {
    sentimentTimeline: [
      { time: "0:00", sentiment: "neutral" },
      { time: "2:30", sentiment: "positive" },
      { time: "5:00", sentiment: "positive" },
      { time: "8:15", sentiment: "neutral" },
      { time: "12:00", sentiment: "positive" },
      { time: "15:32", sentiment: "positive" }
    ],
    behavioralMetrics: {
      confidence: 78,
      clarity: 85,
      enthusiasm: 82
    },
    keywords: ["React", "Node.js", "Team leadership", "Agile", "Problem solving"]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "Scheduled": return "secondary";
      case "In Progress": return "outline";
      default: return "secondary";
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "negative": return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "neutral": return <Minus className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Video Interviews</h1>
            <p className="text-muted-foreground">Manage live and recorded video interviews</p>
          </div>
          <Button>
            <Video className="mr-2 h-4 w-4" />
            Schedule Interview
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interview List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Interviews</CardTitle>
                <CardDescription>Click to view details and AI insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {interviews.map((interview) => (
                  <div
                    key={interview.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedInterview?.id === interview.id ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedInterview(interview)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={interview.candidate.avatar} />
                          <AvatarFallback>{interview.candidate.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{interview.candidate.name}</p>
                          <p className="text-xs text-muted-foreground">{interview.position}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(interview.status)}>
                        {interview.status}
                      </Badge>
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{interview.type} • {interview.date}</span>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{interview.duration}</span>
                        {interview.sentiment && getSentimentIcon(interview.sentiment)}
                      </div>
                    </div>
                    
                    {interview.aiScore && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>AI Score</span>
                          <span>{interview.aiScore}%</span>
                        </div>
                        <Progress value={interview.aiScore} className="h-1" />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Video Player & AI Insights */}
          <div className="lg:col-span-2">
            {selectedInterview ? (
              <Card>
                <CardHeader>
                  <CardTitle>Interview Analysis - {selectedInterview.candidate.name}</CardTitle>
                  <CardDescription>{selectedInterview.position} • {selectedInterview.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="video" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="video">Video & Playback</TabsTrigger>
                      <TabsTrigger value="insights">AI Insights</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="video" className="space-y-4">
                      {/* Video Player Placeholder */}
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Video Player</p>
                          <p className="text-xs text-muted-foreground">
                            {selectedInterview.status === "Completed" ? "Click to play recorded interview" : "Interview not yet available"}
                          </p>
                        </div>
                      </div>
                      
                      {selectedInterview.status === "Completed" && (
                        <div className="flex justify-center space-x-2">
                          <Button size="sm">
                            <Play className="mr-2 h-4 w-4" />
                            Play
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Add Notes
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="insights" className="space-y-6">
                      {selectedInterview.status === "Completed" ? (
                        <>
                          {/* Behavioral Metrics */}
                          <div>
                            <h4 className="font-semibold mb-3">Behavioral Analysis</h4>
                            <div className="grid grid-cols-3 gap-4">
                              {Object.entries(aiInsights.behavioralMetrics).map(([metric, value]) => (
                                <div key={metric} className="text-center">
                                  <div className="text-2xl font-bold">{value}%</div>
                                  <div className="text-sm text-muted-foreground capitalize">{metric}</div>
                                  <Progress value={value} className="mt-1 h-2" />
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Sentiment Timeline */}
                          <div>
                            <h4 className="font-semibold mb-3">Sentiment Timeline</h4>
                            <div className="space-y-2">
                              {aiInsights.sentimentTimeline.map((point, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                  <span>{point.time}</span>
                                  <div className="flex items-center space-x-2">
                                    <span className="capitalize">{point.sentiment}</span>
                                    {getSentimentIcon(point.sentiment)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Topics */}
                          <div>
                            <h4 className="font-semibold mb-3">Key Topics Discussed</h4>
                            <div className="flex flex-wrap gap-2">
                              {aiInsights.keywords.map((keyword, index) => (
                                <Badge key={index} variant="outline">{keyword}</Badge>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center text-muted-foreground">
                          <MessageSquare className="h-12 w-12 mx-auto mb-2" />
                          <p>AI insights will be available after the interview is completed</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center text-muted-foreground">
                    <Video className="h-12 w-12 mx-auto mb-2" />
                    <p>Select an interview to view details and AI insights</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoInterviews;