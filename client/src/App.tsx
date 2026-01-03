import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ElectionGuide from "@/pages/ElectionGuide";
import { useEffect } from "react";

function RootRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/thai-support-election69", { replace: true });
  }, [setLocation]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/thai-support-election69" component={ElectionGuide} />
      <Route path="/" component={RootRedirect} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
