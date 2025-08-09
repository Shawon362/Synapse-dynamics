import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import AiAutomationPage from './pages/AiAutomation';
import N8nWorkflowPage from './pages/n8nWorkflow';
import AiAgentDevelopmentPage from './pages/AiAgentDevelopment';
import VoiceAiDevelopmentPage from './pages/VoiceAiDevelopment';
import ShopifyAiAutomationPage from './pages/ShopifyAiAutomation';
import ChatBotDevelopmentPage from './pages/ChatBotDevelopment';
import GenerativeAiPage from './pages/GenerativeAi';
import Contact from './pages/Contact';
import NotFoundPage from './components/ui/NotFound';
import About from './pages/About';
import Templates from './pages/Templates';

// Create a Layout component to hold the Header and Footer
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      {/* All pages will now use the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* The default page shown at the "/" path */}
        <Route index element={<Home />} /> 
        
        {/* Your other pages */}
        <Route path="services/ai-automation" element={<AiAutomationPage />} />
        <Route path="services/n8n-workflow" element={<N8nWorkflowPage />} />
        <Route path="services/ai-agent-development" element={<AiAgentDevelopmentPage />} />
        <Route path="services/voice-ai-development" element={<VoiceAiDevelopmentPage />} />
        <Route path="services/shopify-ai-automation" element={<ShopifyAiAutomationPage />} />
        <Route path="services/chatbot-development" element={<ChatBotDevelopmentPage />} />
        <Route path="services/generative-ai" element={<GenerativeAiPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="templates" element={<Templates />} />

        {/* Optional: Add a 404 Not Found page */}
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}
