import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, Clock, DollarSign, Target, Download, Filter } from "lucide-react";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("last-30-days");
  const [department, setDepartment] = useState("all");

  const kpiData = [
    {
      title: "Time to Hire",
      value: "14 days",
      change: "-2 days",
      trend: "down",
      icon: Clock,
      description: "Average time from application to offer"
    },
    {
      title: "Cost per Hire",
      value: "$3,250",
      change: "-$450",
      trend: "down",
      icon: DollarSign,
      description: "Total recruitment cost per successful hire"
    },
    {
      title: "Quality of Hire",
      value: "4.2/5",
      change: "+0.3",
      trend: "up",
      icon: Target,
      description: "Based on 90-day performance reviews"
    },
    {
      title: "Candidate Experience",
      value: "4.5/5",
      change: "+0.2",
      trend: "up",
      icon: Users,
      description: "Average satisfaction score from candidates"
    }
  ];

  const sourceData = [
    { source: "LinkedIn", applications: 145, hires: 12, cost: "$2,100" },
    { source: "Indeed", applications: 89, hires: 8, cost: "$1,200" },
    { source: "Company Website", applications: 67, hires: 15, cost: "$800" },
    { source: "Employee Referrals", applications: 34, hires: 18, cost: "$500" },
    { source: "University Partnerships", applications: 28, hires: 6, cost: "$1,500" }
  ];

  const funnelData = [
    { stage: "Applications", count: 520, percentage: 100 },
    { stage: "Screening", count: 312, percentage: 60 },
    { stage: "Interviews", count: 156, percentage: 30 },
    { stage: "Offers", count: 78, percentage: 15 },
    { stage: "Hires", count: 52, percentage: 10 }
  ];

  const diversityData = [
    { metric: "Gender Diversity", current: "48% Female", target: "50%", status: "on-track" },
    { metric: "Ethnic Diversity", current: "35% Minorities", target: "40%", status: "behind" },
    { metric: "Age Diversity", current: "22% 35+ years", target: "25%", status: "on-track" },
    { metric: "Education Diversity", current: "15% Non-traditional", target: "20%", status: "behind" }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? "↗️" : "↘️";
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-success" : "text-primary";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track": return "text-success";
      case "behind": return "text-warning";
      case "exceeded": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Reporting</h1>
            <p className="text-muted-foreground">
              Track recruitment performance and generate insights
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Custom Report
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="last-year">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="funnel">Recruitment Funnel</TabsTrigger>
            <TabsTrigger value="sources">Source Analysis</TabsTrigger>
            <TabsTrigger value="diversity">Diversity & Inclusion</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiData.map((kpi, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {kpi.title}
                      </CardTitle>
                      <kpi.icon className="h-4 w-4 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground mb-1">{kpi.value}</div>
                    <div className={`flex items-center text-sm ${getTrendColor(kpi.trend)}`}>
                      <span className="mr-1">{getTrendIcon(kpi.trend)}</span>
                      <span>{kpi.change} vs last period</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{kpi.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Applications Over Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-accent/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Hiring Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-accent/20 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Trend analysis would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="funnel" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Funnel Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {funnelData.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{stage.stage}</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-foreground">{stage.count}</span>
                          <span className="text-sm text-muted-foreground ml-2">({stage.percentage}%)</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className="bg-primary h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Source Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium text-foreground">Source</th>
                        <th className="text-right p-2 font-medium text-foreground">Applications</th>
                        <th className="text-right p-2 font-medium text-foreground">Hires</th>
                        <th className="text-right p-2 font-medium text-foreground">Conversion Rate</th>
                        <th className="text-right p-2 font-medium text-foreground">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sourceData.map((source, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium text-foreground">{source.source}</td>
                          <td className="text-right p-2 text-muted-foreground">{source.applications}</td>
                          <td className="text-right p-2 text-muted-foreground">{source.hires}</td>
                          <td className="text-right p-2 text-success">
                            {((source.hires / source.applications) * 100).toFixed(1)}%
                          </td>
                          <td className="text-right p-2 text-muted-foreground">{source.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diversity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Diversity & Inclusion Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {diversityData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">{item.metric}</h4>
                        <div className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                          {item.status === "on-track" ? "On Track" : item.status === "behind" ? "Behind Target" : "Exceeded"}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Current: {item.current}</span>
                        <span className="text-muted-foreground">Target: {item.target}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            item.status === "on-track" ? "bg-success" :
                            item.status === "behind" ? "bg-warning" : "bg-primary"
                          }`}
                          style={{ 
                            width: `${(parseFloat(item.current) / parseFloat(item.target)) * 100}%` 
                          }}
                        />
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

export default Analytics;