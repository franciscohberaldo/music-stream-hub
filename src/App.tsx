import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomTabBar from "@/components/BottomTabBar";
import Index from "./pages/Index.tsx";
import Shows from "./pages/Shows.tsx";
import Mapa from "./pages/Mapa.tsx";
import BandProfile from "./pages/BandProfile.tsx";
import Espacos from "./pages/Espacos.tsx";
import PublicarEvento from "./pages/PublicarEvento.tsx";
import ShowDetail from "./pages/ShowDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/bandas/:id" element={<BandProfile />} />
          <Route path="/espacos" element={<Espacos />} />
          <Route path="/publicar" element={<PublicarEvento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomTabBar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
