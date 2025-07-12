import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import Candidates from "./pages/Candidates";
import CandidateProfile from "./pages/CandidateProfile";
import Assessments from "./pages/Assessments";
import Interviews from "./pages/Interviews";
import Offers from "./pages/Offers";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/create" element={<CreateJob />} />
          <Route path="/jobs/:id/edit" element={<CreateJob />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/create" element={<CreateJob />} />
          <Route path="/offers/:id" element={<CandidateProfile />} />
          <Route path="/onboarding/templates" element={<Assessments />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
