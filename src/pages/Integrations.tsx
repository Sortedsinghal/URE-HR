import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Settings, Zap, Globe, Users, FileText, Calendar, DollarSign, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Integrations = () => {
  const { toast } = useToast();
  const [connectedIntegrations, setConnectedIntegrations] = useState(new Set([1, 3]));
  const [integrationSettings, setIntegrationSettings] = useState({
    1: { autoSync: true, syncNewHires: true, syncEmployeeData: false },
    3: { autoCalendarSync: true, reminderEmails: true, videoMeetings: true }
  });

  const integrationCategories = [
    {
      id: "hris",
      name: "HRIS & Payroll",
      icon: Users,
      integrations: [
        {
          id: 1,
          name: "Workday",
          description: "Sync employee data and automate onboarding workflows",
          logo: "🏢",
          category: "hris",
          features: ["Employee sync", "Onboarding automation", "Data management"],
          status: "connected"
        },
        {
          id: 2,
          name: "BambooHR",
          description: "Streamline HR processes and employee management",
          logo: "🎋",
          category: "hris",
          features: ["Employee records", "Time tracking", "Performance management"],
          status: "available"
        }
      ]
    },
    {
      id: "calendar",
      name: "Calendar & Scheduling",
      icon: Calendar,
      integrations: [
        {
          id: 3,
          name: "Google Calendar",
          description: "Sync interview schedules and automate meeting creation",
          logo: "📅",
          category: "calendar",
          features: ["Calendar sync", "Meeting automation", "Availability checking"],
          status: "connected"
        },
        {
          id: 4,
          name: "Outlook Calendar",
          description: "Integrate with Microsoft Outlook for seamless scheduling",
          logo: "📆",
          category: "calendar",
          features: ["Outlook sync", "Teams integration", "Enterprise security"],
          status: "available"
        }
      ]
    },
    {
      id: "communication",
      name: "Communication",
      icon: Globe,
      integrations: [
        {
          id: 5,
          name: "Slack",
          description: "Send notifications and updates to your team channels",
          logo: "💬",
          category: "communication",
          features: ["Team notifications", "Candidate updates", "Custom alerts"],
          status: "available"
        },
        {
          id: 6,
          name: "Microsoft Teams",
          description: "Collaborate and communicate within your organization",
          logo: "👥",
          category: "communication",
          features: ["Team collaboration", "Video interviews", "File sharing"],
          status: "available"
        }
      ]
    },
    {
      id: "background",
      name: "Background Checks",
      icon: Shield,
      integrations: [
        {
          id: 7,
          name: "Checkr",
          description: "Automated background checks and verification",
          logo: "🛡️",
          category: "background",
          features: ["Criminal background", "Employment verification", "Education checks"],
          status: "available"
        },
        {
          id: 8,
          name: "Sterling",
          description: "Comprehensive background screening solutions",
          logo: "🔍",
          category: "background",
          features: ["Global screening", "Compliance management", "Real-time updates"],
          status: "available"
        }
      ]
    }
  ];

  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [connectionModal, setConnectionModal] = useState(false);

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
    setConnectionModal(true);
  };

  const handleConfirmConnection = () => {
    setConnectedIntegrations(new Set([...connectedIntegrations, selectedIntegration.id]));
    setIntegrationSettings({
      ...integrationSettings,
      [selectedIntegration.id]: getDefaultSettings(selectedIntegration.category)
    });
    toast({
      title: "Integration connected successfully",
      description: `${selectedIntegration.name} has been connected to your ATS.`
    });
    setConnectionModal(false);
    setSelectedIntegration(null);
  };

  const handleDisconnect = (integrationId) => {
    const newConnected = new Set(connectedIntegrations);
    newConnected.delete(integrationId);
    setConnectedIntegrations(newConnected);
    
    const newSettings = { ...integrationSettings };
    delete newSettings[integrationId];
    setIntegrationSettings(newSettings);
    
    toast({
      title: "Integration disconnected",
      description: "The integration has been removed from your system."
    });
  };

  const getDefaultSettings = (category) => {
    switch (category) {
      case "hris":
        return { autoSync: true, syncNewHires: true, syncEmployeeData: false };
      case "calendar":
        return { autoCalendarSync: true, reminderEmails: true, videoMeetings: true };
      default:
        return {};
    }
  };

  const updateIntegrationSetting = (integrationId, setting, value) => {
    setIntegrationSettings({
      ...integrationSettings,
      [integrationId]: {
        ...integrationSettings[integrationId],
        [setting]: value
      }
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Settings className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (integrationId) => {
    if (connectedIntegrations.has(integrationId)) {
      return <Badge variant="default">Connected</Badge>;
    }
    return <Badge variant="secondary">Available</Badge>;
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Integrations</h1>
          <p className="text-muted-foreground">Connect your ATS with external tools and services</p>
        </div>

        <Tabs defaultValue="marketplace" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="marketplace">Integration Marketplace</TabsTrigger>
            <TabsTrigger value="connected">Connected Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="marketplace" className="space-y-6">
            {integrationCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center space-x-2 mb-4">
                  <category.icon className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.integrations.map((integration) => (
                    <Card key={integration.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{integration.logo}</div>
                            <div>
                              <CardTitle className="text-lg">{integration.name}</CardTitle>
                              <CardDescription>{integration.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusIcon(integration.status)}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-1">
                            {integration.features.map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            {getStatusBadge(integration.id)}
                            
                            {connectedIntegrations.has(integration.id) ? (
                              <div className="flex space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setSelectedIntegration(integration)}
                                >
                                  <Settings className="mr-2 h-4 w-4" />
                                  Manage
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => handleDisconnect(integration.id)}
                                >
                                  Disconnect
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                size="sm"
                                onClick={() => handleConnect(integration)}
                              >
                                <Zap className="mr-2 h-4 w-4" />
                                Connect
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="connected">
            <div className="space-y-4">
              {Array.from(connectedIntegrations).map((integrationId) => {
                const integration = integrationCategories
                  .flatMap(cat => cat.integrations)
                  .find(int => int.id === integrationId);
                
                const settings = integrationSettings[integrationId] || {};
                
                return (
                  <Card key={integrationId}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{integration.logo}</div>
                          <div>
                            <CardTitle>{integration.name}</CardTitle>
                            <CardDescription>{integration.description}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Configuration</h4>
                        
                        {integration.category === "hris" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`auto-sync-${integrationId}`}>Automatic Data Sync</Label>
                              <Switch
                                id={`auto-sync-${integrationId}`}
                                checked={settings.autoSync || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "autoSync", checked)
                                }
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`sync-hires-${integrationId}`}>Sync New Hires</Label>
                              <Switch
                                id={`sync-hires-${integrationId}`}
                                checked={settings.syncNewHires || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "syncNewHires", checked)
                                }
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`sync-employee-${integrationId}`}>Sync Employee Data</Label>
                              <Switch
                                id={`sync-employee-${integrationId}`}
                                checked={settings.syncEmployeeData || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "syncEmployeeData", checked)
                                }
                              />
                            </div>
                          </div>
                        )}
                        
                        {integration.category === "calendar" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`auto-calendar-${integrationId}`}>Auto Calendar Sync</Label>
                              <Switch
                                id={`auto-calendar-${integrationId}`}
                                checked={settings.autoCalendarSync || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "autoCalendarSync", checked)
                                }
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`reminder-emails-${integrationId}`}>Send Reminder Emails</Label>
                              <Switch
                                id={`reminder-emails-${integrationId}`}
                                checked={settings.reminderEmails || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "reminderEmails", checked)
                                }
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`video-meetings-${integrationId}`}>Create Video Meetings</Label>
                              <Switch
                                id={`video-meetings-${integrationId}`}
                                checked={settings.videoMeetings || false}
                                onCheckedChange={(checked) => 
                                  updateIntegrationSetting(integrationId, "videoMeetings", checked)
                                }
                              />
                            </div>
                          </div>
                        )}
                        
                        <div className="pt-3 border-t">
                          <p className="text-sm text-muted-foreground">
                            Last sync: Today at 2:30 PM • Next sync: In 4 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              
              {connectedIntegrations.size === 0 && (
                <Card>
                  <CardContent className="flex items-center justify-center h-32">
                    <div className="text-center text-muted-foreground">
                      <Zap className="h-8 w-8 mx-auto mb-2" />
                      <p>No integrations connected yet</p>
                      <p className="text-sm">Visit the marketplace to connect your first integration</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Connection Modal */}
        <Dialog open={connectionModal} onOpenChange={setConnectionModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect {selectedIntegration?.name}</DialogTitle>
              <DialogDescription>
                Authorize the connection to integrate {selectedIntegration?.name} with your ATS
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="text-2xl">{selectedIntegration?.logo}</div>
                <div>
                  <h4 className="font-semibold">{selectedIntegration?.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedIntegration?.description}</p>
                </div>
              </div>
              
              <div>
                <Label htmlFor="api-key">API Key (if required)</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter your API key..."
                />
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>By connecting this integration, you agree to:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Share necessary data for synchronization</li>
                  <li>Allow automated actions as configured</li>
                  <li>Comply with the integration provider's terms</li>
                </ul>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setConnectionModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleConfirmConnection}>
                Connect Integration
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Integrations;