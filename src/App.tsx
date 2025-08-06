
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import BuyerLogin from "./pages/BuyerLogin";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerLogin from "./pages/SellerLogin";
import SellerSignup from "./pages/SellerSignup";
import SellerDashboard from "./pages/SellerDashboard";
import CorporateLogin from "./pages/CorporateLogin";
import CorporateDashboard from "./pages/CorporateDashboard";
import NotFound from "./pages/NotFound";
import SellerLanding from "./pages/SellerLanding";
import CorporateLanding from "./pages/CorporateLanding";
import NGOLanding from "./pages/NGOLanding";
import AboutUs from "./pages/AboutUs";
import UserDashboard from "./pages/UserDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><AboutUs /></Layout>} />
          <Route path="/user/dashboard" element={<Layout><UserDashboard /></Layout>} />
          <Route path="/buyer/login" element={<Layout><BuyerLogin /></Layout>} />
          <Route path="/buyer/dashboard" element={<Layout><BuyerDashboard /></Layout>} />
          <Route path="/seller" element={<Layout><SellerLanding /></Layout>} />
          <Route path="/ngo" element={<Layout><NGOLanding /></Layout>} />
          <Route path="/seller/login" element={<Layout><SellerLogin /></Layout>} />
          <Route path="/seller/signup" element={<Layout><SellerSignup /></Layout>} />
          <Route path="/seller/dashboard" element={<Layout><SellerDashboard /></Layout>} />
          <Route path="/corporate" element={<Layout><CorporateLanding /></Layout>} />
          <Route path="/corporate/login" element={<Layout><CorporateLogin /></Layout>} />
          <Route path="/corporate/dashboard" element={<Layout><CorporateDashboard /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
