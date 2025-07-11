import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Save, Eye, Wand2 } from "lucide-react";

interface JobForm {
  title: string;
  location: string;
  jobType: string;
  department: string;
  experienceLevel: string;
  description: string;
  requirements: string;
  benefits: string;
}

export default function CreateJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<JobForm>({
    title: "",
    location: "",
    jobType: "",
    department: "",
    experienceLevel: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const updateField = (field: keyof JobForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    { number: 1, title: "Job Details", description: "Basic information about the position" },
    { number: 2, title: "Job Description", description: "Detailed role description and requirements" },
    { number: 3, title: "Distribution", description: "Choose where to publish this job" },
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-8 mb-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold ${
            currentStep >= step.number 
              ? "bg-primary border-primary text-primary-foreground" 
              : "border-border text-muted-foreground"
          }`}>
            {step.number}
          </div>
          <div className="ml-3 hidden sm:block">
            <div className={`text-sm font-medium ${
              currentStep >= step.number ? "text-primary" : "text-muted-foreground"
            }`}>
              {step.title}
            </div>
            <div className="text-xs text-muted-foreground">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Senior Frontend Developer"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="bg-background"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            placeholder="e.g., San Francisco, CA or Remote"
            value={formData.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="jobType">Job Type *</Label>
          <Select value={formData.jobType} onValueChange={(value) => updateField("jobType", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border">
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="temporary">Temporary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="department">Department *</Label>
          <Select value={formData.department} onValueChange={(value) => updateField("department", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border">
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="product">Product</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experienceLevel">Experience Level *</Label>
          <Select value={formData.experienceLevel} onValueChange={(value) => updateField("experienceLevel", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border">
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
              <SelectItem value="lead">Lead Level</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="description">Job Description *</Label>
          <Button variant="outline" size="sm" className="text-xs">
            <Wand2 className="h-3 w-3 mr-1" />
            AI Generate
          </Button>
        </div>
        <Textarea
          id="description"
          placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          className="min-h-32 bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="requirements">Requirements & Qualifications</Label>
        <Textarea
          id="requirements"
          placeholder="List the required skills, experience, and qualifications..."
          value={formData.requirements}
          onChange={(e) => updateField("requirements", e.target.value)}
          className="min-h-32 bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="benefits">Benefits & Perks</Label>
        <Textarea
          id="benefits"
          placeholder="Describe the benefits, perks, and what makes your company great..."
          value={formData.benefits}
          onChange={(e) => updateField("benefits", e.target.value)}
          className="min-h-24 bg-background"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Distribution Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "LinkedIn", description: "Professional network", recommended: true },
            { name: "Indeed", description: "Job search engine", recommended: true },
            { name: "AngelList", description: "Startup jobs", recommended: false },
            { name: "Stack Overflow", description: "Developer community", recommended: false },
          ].map((channel) => (
            <Card key={channel.name} className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{channel.name}</h4>
                      {channel.recommended && (
                        <Badge variant="secondary" className="text-xs bg-success-light text-success">
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" defaultChecked={channel.recommended} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button asChild variant="ghost" size="icon">
            <Link to="/jobs">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create New Job Post</h1>
            <p className="text-muted-foreground">Follow the steps to create and publish your job posting</p>
          </div>
        </div>

        {/* Progress Indicator */}
        {renderStepIndicator()}

        {/* Form Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Save as Draft
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>

          <div className="space-x-2">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            
            {currentStep < steps.length ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === 1 && (!formData.title || !formData.location)}
              >
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="bg-primary hover:bg-primary-dark">
                Publish Job Post
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}