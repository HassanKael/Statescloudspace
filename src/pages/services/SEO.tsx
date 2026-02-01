import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, ChevronDown, Search, TrendingUp, BarChart3,
  Target, Globe, Star, Award, FileText, Link2, Users, Zap
} from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

interface FAQ {
  question: string;
  answer: string;
}

export default function SEO() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  useEffect(() => {
    const statTimer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(statTimer);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Keyword Research & Strategy',
      description: 'In-depth analysis to identify high-converting keywords that drive qualified traffic to your business.',
      features: ['Competitor keyword analysis', 'Long-tail keyword opportunities', 'Search intent mapping', 'Keyword difficulty scoring']
    },
    {
      icon: FileText,
      title: 'On-Page SEO Optimization',
      description: 'Complete optimization of your website content, structure, and technical elements for maximum search visibility.',
      features: ['Title tag & meta optimization', 'Header structure refinement', 'Content optimization', 'Internal linking strategy']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from properly crawling and indexing your website.',
      features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup implementation', 'XML sitemap optimization']
    },
    {
      icon: Link2,
      title: 'Link Building',
      description: 'Earn high-quality backlinks from authoritative websites to boost your domain authority and rankings.',
      features: ['White-hat link acquisition', 'Guest posting outreach', 'Broken link building', 'Digital PR campaigns']
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Strategic content creation that attracts, engages, and converts your target audience.',
      features: ['SEO-optimized blog posts', 'Landing page copywriting', 'Content calendar planning', 'Topic cluster strategy']
    },
    {
      icon: Target,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers actively looking for your services.',
      features: ['Google Business Profile optimization', 'Local citation building', 'Review management', 'Local keyword targeting']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current SEO performance, identify opportunities, and audit your website for technical issues.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Custom SEO roadmap tailored to your business goals, target audience, and competitive landscape.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute on-page optimizations, technical fixes, and content creation according to the strategic plan.'
    },
    {
      number: '04',
      title: 'Link Building & Outreach',
      description: 'Acquire high-quality backlinks through ethical outreach, content promotion, and relationship building.'
    },
    {
      number: '05',
      title: 'Monitoring & Reporting',
      description: 'Track rankings, traffic, and conversions with detailed monthly reports and continuous optimization.'
    }
  ];

  const stats = [
    { value: '247%', label: 'Average Traffic Increase', color: 'text-[#1A3263]' },
    { value: '90 Days', label: 'To See Results', color: 'text-[#1A3263]' },
    { value: '150+', label: 'Keywords Ranked Top 3', color: 'text-[#1A3263]' },
    { value: '98%', label: 'Client Satisfaction', color: 'text-[#1A3263]' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Mitchell & Co.',
      role: 'CEO',
      content: 'Our organic traffic tripled in just four months. The team\'s expertise in both technical SEO and content strategy has been invaluable.',
      results: { traffic: '+340%', leads: '+180%', revenue: '$240K' }
    },
    {
      name: 'James Rodriguez',
      company: 'TechStart Solutions',
      role: 'Marketing Director',
      content: 'Finally, an SEO agency that delivers what they promise. Rankings improved, qualified leads increased, and our ROI has been exceptional.',
      results: { traffic: '+280%', leads: '+220%', revenue: '$310K' }
    },
    {
      name: 'Emily Chen',
      company: 'Urban Design Studio',
      role: 'Founder',
      content: 'The difference was night and day. Within 90 days we were ranking for competitive keywords we never thought possible.',
      results: { traffic: '+195%', leads: '+160%', revenue: '$180K' }
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'Most clients start seeing meaningful improvements within 60-90 days. However, SEO is a long-term strategy. Significant results typically manifest within 4-6 months, with continued growth over time. The timeline depends on factors like competition, current website status, and industry.'
    },
    {
      question: 'What makes your SEO approach different?',
      answer: 'We focus on sustainable, white-hat strategies that deliver long-term results. Our approach combines technical expertise, content excellence, and strategic link building. We don\'t use shortcuts or black-hat tactics that could harm your website. Every strategy is customized to your business goals and target audience.'
    },
    {
      question: 'Do you guarantee first-page rankings?',
      answer: 'While we can\'t ethically guarantee specific rankings (no one can truly guarantee this), we do guarantee measurable improvements in your organic visibility, traffic, and qualified leads. Our track record shows that 95% of our clients achieve first-page rankings for their target keywords within 6 months.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We track multiple KPIs including keyword rankings, organic traffic growth, conversion rates, backlink quality, and most importantly - revenue impact. You\'ll receive detailed monthly reports showing exactly how SEO is contributing to your business growth.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with businesses across various industries including B2B services, e-commerce, healthcare, legal, real estate, and technology. Our strategies are customized based on your specific industry dynamics, competition, and target audience behavior.'
    },
    {
      question: 'Will I need to make changes to my website?',
      answer: 'Yes, SEO requires website modifications including content updates, technical optimizations, and sometimes structural changes. We handle all the heavy lifting - from strategy to implementation. You\'ll have full visibility and approval over any changes before they go live.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our SEO services are customized based on your specific needs, competition level, and business goals. Pricing typically ranges from $2,000 to $10,000+ per month depending on scope. We offer month-to-month contracts with no long-term commitments required.'
    },
    {
      question: 'Do you offer local SEO services?',
      answer: 'Absolutely! Local SEO is one of our specialties. We optimize your Google Business Profile, build local citations, manage reviews, and implement location-specific strategies to help you dominate local search results and attract nearby customers.'
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1A3263] via-[#0f1f40] to-black py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Professional SEO Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Drive More Traffic, Leads, and Revenue with SEO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Strategic search engine optimization that improves your rankings, increases organic traffic, and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
                Get Your Free SEO Audit
              </Button>
              <Button href="#services" variant="outline" size="lg" className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1A3263]">
                View Our Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center transition-all duration-500 ${
                  currentStat === index ? 'scale-110 bg-white/20 shadow-2xl' : 'scale-100'
                }`}
              >
                <div className="text-white text-3xl md:text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section background="white" padding="xl" id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Comprehensive SEO Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to dominate search results and outrank your competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} hover padding="lg" className="group">
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" variant="primary" size="lg">
            Get Started with SEO
          </Button>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach that delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-black text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 h-6 w-6 text-primary z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses grow their organic presence.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1A3263] to-[#0f1f40] rounded-2xl p-8 md:p-12 text-white overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8 md:p-12'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-white fill-white" />
                        ))}
                      </div>
                      <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div>
                        <p className="text-white font-bold text-lg">{testimonial.name}</p>
                        <p className="text-white/80">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white/90 font-medium">Traffic Growth</span>
                          <span className="text-white text-3xl font-black">{testimonial.results.traffic}</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white/90 font-medium">Lead Increase</span>
                          <span className="text-white text-3xl font-black">{testimonial.results.leads}</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white/90 font-medium">Revenue Added</span>
                          <span className="text-white text-3xl font-black">{testimonial.results.revenue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-12 bg-[#1A3263]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our SEO services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-bold text-black pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A3263] to-[#0f1f40] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get a free SEO audit and discover exactly how we can grow your organic traffic and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-10 py-5"
              >
                Get Your Free SEO Audit
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-10 py-5"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
