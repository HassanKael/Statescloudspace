import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Palette, Eye, Target, Sparkles, TrendingUp, Award } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function GraphicDesign() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentMockup, setCurrentMockup] = useState(0);

  const mockupImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockupImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    'Professional brand identity that builds instant credibility',
    'Consistent visual language across all marketing channels',
    'Higher engagement rates on social media and ads',
    'Stand out from competitors with unique designs',
    'Scalable design systems that grow with your business',
  ];

  const features = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Complete brand kits including logos, color palettes, typography, and brand guidelines.',
    },
    {
      icon: Eye,
      title: 'Marketing Collateral',
      description: 'Eye-catching designs for social media, ads, presentations, and digital campaigns.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      description: 'Landing pages and sales materials designed to drive action and maximize ROI.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Vision',
      description: 'We dive deep into your brand story, target audience, and business goals to create a strategic foundation.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our designers craft multiple concepts aligned with your vision, backed by market research and design trends.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We refine the chosen design and deliver production-ready files with comprehensive brand guidelines.',
      icon: Sparkles,
    },
  ];

  const stats = [
    { value: '300%', label: 'Engagement Boost', icon: TrendingUp },
    { value: '250+', label: 'Brands Designed', icon: Award },
    { value: '98%', label: 'Client Satisfaction', icon: Sparkles },
  ];

  const caseStudies = [
    {
      client: 'TechFlow Solutions',
      industry: 'B2B SaaS',
      challenge: 'Outdated brand identity limiting growth and market positioning',
      solution: 'Complete rebrand with modern design system and marketing materials',
      results: [
        '250% increase in website engagement',
        '180% boost in social media followers',
        '3x improvement in lead quality',
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      client: 'FinanceHub',
      industry: 'Financial Services',
      challenge: 'Generic branding failed to convey trust and expertise',
      solution: 'Premium brand identity with professional marketing suite',
      results: [
        '400% increase in brand recall',
        '90% improvement in conversion rates',
        '5x growth in partnership inquiries',
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-[#1A3263] via-[#0f1f40] to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {mockupImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentMockup ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Design mockup ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/95 to-black/90"></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Visual Identity & Brand Design
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] animate-slide-up">
              Graphic Design
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10 animate-fade-in-delay">
              Transform your brand identity with stunning visuals that capture attention and drive engagement. We create compelling designs that resonate with your B2B audience and establish market credibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-[#1A3263] font-bold rounded-lg hover:bg-[#1A3263] hover:text-white border-2 border-white transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                Book Free Audit
              </a>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                padding="lg"
                hover
                className="text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A3263]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <stat.icon className="h-12 w-12 text-[#1A3263] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-black text-[#1A3263] mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">What You Get</h2>
            <p className="text-xl text-gray-600">Comprehensive design solutions tailored to your business goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={feature.title} padding="lg" hover className="group">
                <div className="bg-[#1A3263]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A3263] transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-[#1A3263] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-black mb-6">Key Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-[#1A3263] mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our 3-Step Process</h2>
            <p className="text-xl text-gray-600">From concept to execution, we make it seamless</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={step.number} padding="lg" hover className="relative group">
                <div className="absolute -top-4 -right-4 text-8xl font-black text-[#1A3263]/5 group-hover:text-[#1A3263]/10 transition-colors duration-300">
                  {step.number}
                </div>
                <step.icon className="h-12 w-12 text-[#1A3263] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-black mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed relative z-10">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Real Client Results</h2>
            <p className="text-xl text-gray-600">Success stories from our design projects</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={study.client} padding="none" hover className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden group">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{study.client}</h3>
                      <p className="text-white/90 font-semibold">{study.industry}</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#1A3263] mb-2 text-lg">Challenge:</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A3263] mb-2 text-lg">Solution:</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A3263] mb-4 text-lg">Results:</h4>
                        <ul className="space-y-3">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start group">
                              <ArrowRight className="h-6 w-6 text-[#1A3263] mr-3 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                              <span className="text-lg font-semibold text-gray-800">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto" id="contact-form">
          <Card padding="lg" className="border-2 border-[#1A3263]">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Book Your Free Design Audit
              </h2>
              <p className="text-xl text-gray-700">
                Let's discuss how we can transform your brand identity
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1A3263] focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1A3263] focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1A3263] focus:outline-none transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#1A3263] text-white font-bold rounded-lg hover:bg-white hover:text-[#1A3263] border-2 border-[#1A3263] transition-all duration-300 text-lg"
              >
                Request Free Audit
              </button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
