import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, MessageSquare, Phone, Plus, Edit, Trash2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunicationTemplates = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Interview Invitation",
      channel: "email",
      subject: "Interview Invitation - {{job.title}} Position",
      content: "Dear {{candidate.name}},\n\nWe are pleased to invite you for an interview for the {{job.title}} position at {{company.name}}.\n\nPlease reply with your availability for the following dates:\n- {{interview.date1}}\n- {{interview.date2}}\n\nBest regards,\n{{recruiter.name}}",
      category: "interview",
      usage: 45
    },
    {
      id: 2,
      name: "Application Acknowledgment",
      channel: "email",
      subject: "Thank you for your application - {{job.title}}",
      content: "Hi {{candidate.name}},\n\nThank you for applying to the {{job.title}} position. We have received your application and will review it carefully.\n\nWe will contact you within {{review.timeframe}} with next steps.\n\nBest regards,\n{{company.name}} Hiring Team",
      category: "acknowledgment",
      usage: 128
    },
    {
      id: 3,
      name: "Interview Reminder",
      channel: "sms",
      subject: "",
      content: "Hi {{candidate.name}}, this is a reminder of your interview tomorrow at {{interview.time}} for the {{job.title}} position. Meeting link: {{interview.link}}",
      category: "reminder",
      usage: 67
    }
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    channel: "email",
    subject: "",
    content: "",
    category: "general"
  });

  const channels = [
    { value: "email", label: "Email", icon: Mail },
    { value: "sms", label: "SMS", icon: MessageSquare },
    { value: "whatsapp", label: "WhatsApp", icon: Phone }
  ];

  const categories = [
    { value: "general", label: "General" },
    { value: "acknowledgment", label: "Application Acknowledgment" },
    { value: "interview", label: "Interview" },
    { value: "reminder", label: "Reminder" },
    { value: "rejection", label: "Rejection" },
    { value: "offer", label: "Offer" }
  ];

  const placeholders = [
    "{{candidate.name}}",
    "{{candidate.email}}",
    "{{job.title}}",
    "{{company.name}}",
    "{{recruiter.name}}",
    "{{interview.date}}",
    "{{interview.time}}",
    "{{interview.link}}",
    "{{review.timeframe}}"
  ];

  const handleSaveTemplate = () => {
    if (editingTemplate) {
      setTemplates(templates.map(t => 
        t.id === editingTemplate.id 
          ? { ...editingTemplate, ...formData }
          : t
      ));
      toast({ title: "Template updated successfully" });
    } else {
      const newTemplate = {
        id: Date.now(),
        ...formData,
        usage: 0
      };
      setTemplates([...templates, newTemplate]);
      toast({ title: "Template created successfully" });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      channel: "email",
      subject: "",
      content: "",
      category: "general"
    });
    setEditingTemplate(null);
    setIsCreateOpen(false);
  };

  const handleEdit = (template) => {
    setEditingTemplate(template);
    setFormData({
      name: template.name,
      channel: template.channel,
      subject: template.subject,
      content: template.content,
      category: template.category
    });
    setIsCreateOpen(true);
  };

  const handleDelete = (id) => {
    setTemplates(templates.filter(t => t.id !== id));
    toast({ title: "Template deleted successfully" });
  };

  const handleDuplicate = (template) => {
    const newTemplate = {
      ...template,
      id: Date.now(),
      name: `${template.name} (Copy)`,
      usage: 0
    };
    setTemplates([...templates, newTemplate]);
    toast({ title: "Template duplicated successfully" });
  };

  const getChannelIcon = (channel) => {
    const channelData = channels.find(c => c.value === channel);
    const Icon = channelData?.icon || Mail;
    return <Icon className="h-4 w-4" />;
  };

  const getChannelColor = (channel) => {
    switch (channel) {
      case "email": return "default";
      case "sms": return "secondary";
      case "whatsapp": return "outline";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Communication Templates</h1>
            <p className="text-muted-foreground">Manage email, SMS, and WhatsApp templates</p>
          </div>
          
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingTemplate(null)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Template
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingTemplate ? "Edit Template" : "Create New Template"}
                </DialogTitle>
                <DialogDescription>
                  Create personalized templates with dynamic placeholders
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Template Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Interview Invitation"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="channel">Channel</Label>
                    <Select value={formData.channel} onValueChange={(value) => setFormData({ ...formData, channel: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {channels.map((channel) => (
                          <SelectItem key={channel.value} value={channel.value}>
                            <div className="flex items-center">
                              <channel.icon className="mr-2 h-4 w-4" />
                              {channel.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.channel === "email" && (
                    <div>
                      <Label htmlFor="subject">Subject Line</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g., Interview Invitation - {{job.title}}"
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="content">Message Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Enter your message content here..."
                    rows={8}
                  />
                </div>
                
                <div>
                  <Label>Available Placeholders</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {placeholders.map((placeholder) => (
                      <Badge
                        key={placeholder}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => {
                          const textarea = document.getElementById("content") as HTMLTextAreaElement;
                          const start = textarea.selectionStart;
                          const end = textarea.selectionEnd;
                          const text = formData.content;
                          const newText = text.substring(0, start) + placeholder + text.substring(end);
                          setFormData({ ...formData, content: newText });
                        }}
                      >
                        {placeholder}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={resetForm}>Cancel</Button>
                <Button onClick={handleSaveTemplate}>
                  {editingTemplate ? "Update Template" : "Create Template"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-4">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {getChannelIcon(template.channel)}
                      {template.name}
                      <Badge variant={getChannelColor(template.channel)}>
                        {template.channel.toUpperCase()}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      {template.category} • Used {template.usage} times
                    </CardDescription>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDuplicate(template)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(template)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {template.channel === "email" && template.subject && (
                  <div className="mb-2">
                    <Label className="text-xs font-medium">Subject:</Label>
                    <p className="text-sm text-muted-foreground">{template.subject}</p>
                  </div>
                )}
                
                <div>
                  <Label className="text-xs font-medium">Content:</Label>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap line-clamp-3">
                    {template.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CommunicationTemplates;