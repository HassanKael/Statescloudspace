import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Monitor, Smartphone, Zap, Shield, Search, TrendingUp } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function WebDesign() {
  const services = [
    {
      title: 'Business & Corporate Websites',
      description: 'Clean, professional, and credibility-driven designs that establish your authority in the market.',
    },
    {
      title: 'Landing Pages',
      description: 'Built to convert traffic into leads and sales with strategic layouts and compelling CTAs.',
    },
    {
      title: 'E-commerce Websites',
      description: 'Smooth shopping experiences that sell effortlessly with optimized checkout flows.',
    },
    {
      title: 'Portfolio & Personal Brands',
      description: 'Bold, memorable, and uniquely you - designs that showcase your work and personality.',
    },
    {
      title: 'Website Redesigns',
      description: 'Turning outdated sites into powerful digital assets that drive real business results.',
    },
  ];

  const features = [
    {
      icon: Monitor,
      title: 'User-Focused UI/UX',
      description: 'Intuitive layouts that guide visitors naturally through your content and conversion funnel.',
    },
    {
      icon: Zap,
      title: 'Speed & Performance Optimized',
      description: 'Fast-loading, mobile-first builds that keep visitors engaged and search engines happy.',
    },
    {
      icon: Search,
      title: 'SEO-Ready Structure',
      description: 'Designed for visibility from day one with clean code and optimal technical foundations.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Driven Design',
      description: 'Every section has a purpose - guiding visitors toward taking meaningful action.',
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Built to grow with your business using modern, maintainable technology stacks.',
    },
    {
      icon: Smartphone,
      title: 'Fully Responsive',
      description: 'Flawless experience on desktop, tablet, and mobile - no compromises.',
    },
  ];

  const process = [
    {
      number: '1',
      title: 'Strategy & Discovery',
      description: 'Understanding your brand, goals, and target audience to create the perfect foundation.',
    },
    {
      number: '2',
      title: 'Wireframing & Design',
      description: 'Mapping the perfect user journey with strategic layouts and visual hierarchy.',
    },
    {
      number: '3',
      title: 'Development & Optimization',
      description: 'Clean code, speed optimization, and performance tuning for maximum impact.',
    },
    {
      number: '4',
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing assistance to ensure your success.',
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A3263] to-[#0f1f40] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Web Design Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/95 to-[#0f1f40]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Professional Web Design
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Web Design That Turns Clicks Into Customers
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10">
              Your website isn't just a digital address — it's your 24/7 salesperson. We design modern, high-performing websites that don't just look good, but work hard for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
                Start Your Project
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What We Design</h2>
            <p className="text-xl text-gray-600">From the first scroll to the final click, every element is crafted to attract, engage, and convert</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <Card key={service.title} padding="lg" hover>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Makes Our Web Design Different</h2>
            <p className="text-xl text-gray-600">We build websites that tell your story, build trust, and drive results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to creating your perfect website</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <Card padding="lg" hover className="h-full">
                  <div className="bg-[#1A3263] w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-700 text-center leading-relaxed">{step.description}</p>
                </Card>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-6 w-6 text-[#1A3263] z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Whether you're launching a new brand or upgrading your existing website, let's turn your website into a growth machine.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Start Your Web Design Project
          </Button>
        </div>
      </Section>
    </>
  );
}
