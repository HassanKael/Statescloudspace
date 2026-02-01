import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X, Sparkles } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';

interface ServiceCard {
  id: string;
  title: string;
  whatYouGet: string[];
  problem: string;
  solution: string;
  expectedResult: string;
  animationType: 'chatbot' | 'content' | 'workflow';
}

export default function AIAutomation() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const services: ServiceCard[] = [
    {
      id: 'chatbot',
      title: 'AI Chatbot Assistant',
      whatYouGet: [
        '24/7 automated customer support',
        'Lead qualification & booking',
        'Multi-language support',
        'CRM integration',
      ],
      problem: 'Missing leads after hours, slow response times, and overwhelmed support teams losing potential customers.',
      solution: 'Deploy intelligent AI chatbot that instantly responds, qualifies leads, books appointments, and escalates complex queries to your team.',
      expectedResult: '87% faster response time, 60% reduction in support costs, and 3x more qualified leads captured outside business hours.',
      animationType: 'chatbot',
    },
    {
      id: 'content',
      title: 'Content Automation',
      whatYouGet: [
        'AI-powered content generation',
        'SEO-optimized articles',
        'Social media post creation',
        'Image & caption suggestions',
      ],
      problem: 'Content creation bottleneck draining hours weekly, inconsistent posting schedule, and struggling to maintain SEO rankings.',
      solution: 'Automated content pipeline that generates SEO-optimized blog posts, social media content, and visual assets based on your keywords and brand voice.',
      expectedResult: '15+ hours saved weekly, 300% increase in content output, and 45% improvement in organic search rankings within 90 days.',
      animationType: 'content',
    },
    {
      id: 'workflow',
      title: 'Workflow Automation',
      whatYouGet: [
        'Invoice & document processing',
        'Automated approval workflows',
        'Data extraction & entry',
        'Real-time dashboard updates',
      ],
      problem: 'Manual data entry errors, delayed approvals creating cash flow issues, and team buried in repetitive administrative tasks.',
      solution: 'Smart automation system that processes invoices, routes approvals, extracts data, and updates dashboards in real-time with zero human intervention.',
      expectedResult: '95% reduction in processing errors, 10x faster approval cycles, and $50K+ annual savings on administrative overhead.',
      animationType: 'workflow',
    },
  ];

  const renderAnimation = (type: 'chatbot' | 'content' | 'workflow') => {
    switch (type) {
      case 'chatbot':
        return <ChatbotAnimation />;
      case 'content':
        return <ContentAnimation />;
      case 'workflow':
        return <WorkflowAnimation />;
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A3263] to-[#0f1f40] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="AI Automation Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/95 to-[#0f1f40]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Intelligent Marketing Systems
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              AI Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10">
              Watch AI work in real-time. Click any service below to see live demos and discover how automation transforms your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
                Get Started
              </Button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section background="gray" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Interactive AI Services</h2>
            <p className="text-xl text-gray-600">Click any card to explore how we solve real business problems</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:ring-4 hover:ring-[#1A3263]/20"
              >
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A3263]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 w-full h-full">
                    {renderAnimation(service.animationType)}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#1A3263] transition-colors">
                    {service.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-[#1A3263] uppercase tracking-wide">What You Get:</p>
                    <ul className="space-y-2">
                      {service.whatYouGet.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 text-[#1A3263] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-[#1A3263] font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-br from-[#1A3263] to-[#0f1f40] text-white p-8 rounded-t-2xl">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
              <p className="text-white/90">Complete solution breakdown</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Problem
                </h3>
                <p className="text-gray-800 leading-relaxed">{selectedService.problem}</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Solution
                </h3>
                <p className="text-gray-800 leading-relaxed">{selectedService.solution}</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                  <Sparkles className="h-6 w-6" /> Expected Result
                </h3>
                <p className="text-gray-800 leading-relaxed font-semibold">{selectedService.expectedResult}</p>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full text-lg">
                  Get This Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's implement AI solutions that save time, reduce costs, and scale your operations effortlessly.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Start Your Automation Journey
          </Button>
        </div>
      </Section>
    </>
  );
}

function ChatbotAnimation() {
  return (
    <div className="w-full h-full flex items-end justify-end">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-popIn">
        <div className="bg-gradient-to-r from-[#1A3263] to-[#2a4a7f] text-white p-4 rounded-t-2xl">
          <h3 className="font-bold">AI Assistant</h3>
          <p className="text-xs text-white/80">Always here to help</p>
        </div>
        <div className="p-4 space-y-3 h-48 overflow-hidden">
          <div className="flex justify-end animate-slideInRight">
            <div className="bg-[#1A3263] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-sm">I need to book a consultation</p>
            </div>
          </div>
          <div className="flex justify-start animate-slideInLeft animation-delay-500">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
              <p className="text-sm">Great! I can help you book right now. What date works best?</p>
            </div>
          </div>
          <div className="flex justify-start animate-slideInLeft animation-delay-1000">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] border-2 border-[#1A3263]/20">
              <p className="text-sm font-semibold text-[#1A3263] mb-2">📅 Available Slots:</p>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-2 rounded">Today, 2:00 PM</div>
                <div className="bg-white p-2 rounded">Tomorrow, 10:00 AM</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-confetti animation-delay-1500">
            <div className="text-2xl">🎉</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentAnimation() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 p-4">
      <div className="bg-white rounded-xl shadow-lg p-4 animate-slideInLeft">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">Content Generator</span>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-100 rounded px-3 py-2 animate-slideInRight animation-delay-300">
            <p className="text-xs text-gray-500">Keywords:</p>
            <p className="text-sm font-semibold">AI Marketing, Automation</p>
          </div>
          <div className="bg-gradient-to-r from-[#1A3263]/10 to-transparent rounded p-3 animate-slideInRight animation-delay-600">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-[#1A3263] animate-spin-slow" />
              <span className="text-xs font-bold text-[#1A3263]">Generating...</span>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded w-full animate-typing"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6 animate-typing animation-delay-200"></div>
              <div className="h-2 bg-gray-200 rounded w-4/6 animate-typing animation-delay-400"></div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-3 animate-slideInUp animation-delay-1000">
            <p className="text-xs font-bold text-green-800 mb-1">✓ Article Ready!</p>
            <p className="text-xs text-gray-600">+ SEO optimized + Images</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowAnimation() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-3 p-4">
      <div className="bg-white rounded-xl shadow-lg p-4 animate-slideInDown">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-700">Invoice #1234</span>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full animate-pulse">Pending</span>
        </div>
        <div className="h-16 bg-gray-100 rounded mb-3 flex items-center justify-center">
          <p className="text-xs text-gray-500">📄 Document Processing...</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-8 w-0.5 bg-[#1A3263] animate-heightGrow"></div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 animate-slideInUp animation-delay-500">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center animate-checkmark animation-delay-700">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Auto-Approved</p>
            <p className="text-xs text-gray-500">Processed in 2.3s</p>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-2 animate-slideInRight animation-delay-1000">
          <p className="text-xs text-green-800">✓ Dashboard updated</p>
          <p className="text-xs text-green-800">✓ Notification sent</p>
        </div>
      </div>
    </div>
  );
}
