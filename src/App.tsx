import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServicesDropdownDemo from './pages/ServicesDropdownDemo';
import GraphicDesign from './pages/services/GraphicDesign';
import SEO from './pages/services/SEO';
import PaidAds from './pages/services/PaidAds';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import AIAutomation from './pages/services/AIAutomation';
import ContentMarketing from './pages/services/ContentMarketing';
import WebDesign from './pages/services/WebDesign';
import ChatbotDemo from './pages/ChatbotDemo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-dropdown" element={<ServicesDropdownDemo />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/paid-ads" element={<PaidAds />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/chatbot-demo" element={<ChatbotDemo />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
