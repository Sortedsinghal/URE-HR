import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, Clock, DollarSign, Target, Download, Filter } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  FunnelChart,
  Funnel
} from "recharts";

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

  const applicationsOverTime = [
    { month: "Jan", applications: 65, hires: 12 },
    { month: "Feb", applications: 78, hires: 15 },
    { month: "Mar", applications: 92, hires: 18 },
    { month: "Apr", applications: 103, hires: 22 },
    { month: "May", applications: 87, hires: 16 },
    { month: "Jun", applications: 95, hires: 19 },
    { month: "Jul", applications: 108, hires: 24 }
  ];

  const hiringTrends = [
    { week: "Week 1", engineering: 12, product: 5, design: 3, sales: 8 },
    { week: "Week 2", engineering: 15, product: 7, design: 4, sales: 6 },
    { week: "Week 3", engineering: 8, product: 9, design: 6, sales: 12 },
    { week: "Week 4", engineering: 18, product: 4, design: 2, sales: 9 }
  ];

  const sourceBreakdown = [
    { name: "LinkedIn", value: 35, color: "#0077B5" },
    { name: "Indeed", value: 25, color: "#2764C5" },
    { name: "Company Website", value: 20, color: "#16A34A" },
    { name: "Referrals", value: 15, color: "#CA8A04" },
    { name: "Others", value: 5, color: "#6B7280" }
  ];

  const COLORS = ['#0077B5', '#2764C5', '#16A34A', '#CA8A04', '#6B7280'];

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

            {/* Interactive Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Applications Over Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={applicationsOverTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="applications" 
                          stroke="hsl(var(--primary))" 
                          fill="hsl(var(--primary))" 
                          fillOpacity={0.3} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="hires" 
                          stroke="hsl(var(--success))" 
                          fill="hsl(var(--success))" 
                          fillOpacity={0.3} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Hiring by Department</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={hiringTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="engineering" fill="hsl(var(--primary))" />
                        <Bar dataKey="product" fill="hsl(var(--success))" />
                        <Bar dataKey="design" fill="hsl(var(--warning))" />
                        <Bar dataKey="sales" fill="hsl(var(--accent))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Source Breakdown Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Candidate Source Breakdown</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
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