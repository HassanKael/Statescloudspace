import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Bot, Workflow } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function AIAutomation() {
  const benefits = [
    'Save 15+ hours per week on repetitive marketing tasks',
    'Never miss a lead with 24/7 automated responses',
    'Scale your marketing without scaling your team',
    'Personalize customer interactions at scale',
    'Make data-driven decisions with AI-powered insights',
  ];

  const features = [
    {
      icon: Bot,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent chatbots that qualify leads, answer FAQs, and book appointments automatically.',
    },
    {
      icon: Workflow,
      title: 'Marketing Workflow Automation',
      description: 'Streamlined processes for email nurturing, lead scoring, and customer segmentation.',
    },
    {
      icon: Zap,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to optimize campaigns and predict customer behavior.',
    },
  ];

  const caseStudy = {
    client: 'ScaleFast Solutions',
    challenge: 'Manual processes causing slow response times and lost opportunities',
    solution: 'Implemented AI chatbot, email automation workflows, and predictive lead scoring',
    results: [
      '87% faster response time to inquiries',
      '15 hours per week saved on manual tasks',
      '210% increase in lead-to-customer conversion',
    ],
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
              AI Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10">
              Streamline your marketing operations with cutting-edge AI solutions. Automate lead nurturing, customer support, and campaign optimization to save time and scale efficiently.
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

      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What You Get</h2>
            <p className="text-xl text-gray-600">Intelligent automation solutions that work around the clock</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} padding="lg" hover>
                <div className="bg-[#1A3263]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-[#1A3263]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Key Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#1A3263] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Success Story</h2>
            <p className="text-xl text-gray-600">Real results from our AI automation services</p>
          </div>

          <Card padding="lg" className="border-l-4 border-[#1A3263]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">{caseStudy.client}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#1A3263] mb-2">Challenge:</h4>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3263] mb-2">Solution:</h4>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#1A3263] mb-4">Results:</h4>
                <ul className="space-y-3">
                  {caseStudy.results.map((result) => (
                    <li key={result} className="flex items-start">
                      <ArrowRight className="h-6 w-6 text-[#1A3263] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-semibold text-gray-800">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's implement AI solutions that save time, reduce costs, and scale your marketing efforts effortlessly.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Automate Your Processes
          </Button>
        </div>
      </Section>
    </>
  );
}
