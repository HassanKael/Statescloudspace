import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Users,
  Zap,
  MessageSquare,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import LogoCarousel from '../components/LogoCarousel';
import { supabase, BlogPost } from '../lib/supabase';

export default function Home() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [successStorySlide, setSuccessStorySlide] = useState(0);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSuccessStorySlide((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fetchLatestPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3);

    if (data) {
      setLatestPosts(data);
    }
  };

  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'High-impact social posts, ads, banners, logos, and brand kits that stand out and sell.',
      link: '/services#design',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description:
        'Landing pages, funnels, and campaigns that turn visitors into leads you can close.',
      link: '/services#leads',
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description:
        "Chatbots, automated email/SMS, and AI workflows that follow up 24/7 so you don't have to.",
      link: '/services#automation',
    },
    {
      icon: MessageSquare,
      title: 'Social Media Management',
      description:
        'Content planning, posting, and community management to keep your brand visible and active.',
      link: '/services#social',
    },
    {
      icon: Target,
      title: 'Paid Ads Management',
      description:
        'Facebook, Instagram, and Google Ads managed for performance, not just clicks.',
      link: '/services#ads',
    },
  ];

  const benefits = [
    {
      title: "Conversion-focused design, not just 'pretty graphics'",
      icon: CheckCircle,
    },
    {
      title: 'End-to-end funnels from ad click to checkout',
      icon: CheckCircle,
    },
    {
      title: 'Data and AI-powered optimization',
      icon: CheckCircle,
    },
    {
      title: 'Clear reporting so you see what works',
      icon: CheckCircle,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We understand your business, offers, and goals.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We design a clear plan for traffic, leads, and follow-up.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We launch and manage your campaigns and automation.',
    },
    {
      number: '04',
      title: 'Optimization',
      description: "We test, improve, and scale what's working.",
    },
  ];

  const heroSlides = [
    {
      title: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Designer creating modern B2B branding with laptop and mockups'
    },
    {
      title: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'SEO analytics dashboard showing search rankings and performance metrics'
    },
    {
      title: 'Paid Ads',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Digital advertising dashboard with high CTR metrics and performance data'
    },
    {
      title: 'AI Automation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Futuristic AI automation dashboard with data streams and neural networks'
    }
  ];

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
        ))}

        <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl h-screen flex items-center">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm md:text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Digital Marketing That Delivers
              </span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.15] md:leading-[1.1] mb-8 text-white">
              Turn clicks into customers with data-driven marketing
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 text-white/95 max-w-3xl">
              Design, automate, and scale campaigns that bring in real sales, not just traffic.
            </p>

            <ul className="space-y-4 mb-12">
              {['More qualified leads', 'Done-for-you funnels & automation', 'Transparent reporting & ROI focus'].map(
                (item) => (
                  <li key={item} className="flex items-center text-lg md:text-xl text-white">
                    <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-white mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
                Get Started
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:!text-black">
                Learn More
              </Button>
            </div>

            <div className="flex gap-3 mt-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-12 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 text-white/80 text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          {heroSlides[currentSlide].title}
        </div>
      </section>

      <LogoCarousel />

      <Section background="white" padding="xl" id="services">
        <div className="text-center mb-16">
          <h2 className="mb-4">What We Do</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-600">
            From first click to loyal customer, we cover the full journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Card key={service.title} hover padding="lg" className="group">
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary hover:text-black font-semibold inline-flex items-center group transition-all duration-300"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2>Built To Increase Your Sales</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4">
              Every strategy we implement is designed with one goal: growing your revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="font-medium">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2>How We Work With You</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            A proven process that takes you from strategy to results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-center">
                <div className="inline-block bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="subtopic mb-3">{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 rounded-lg px-4 py-2 mb-6">
              <span className="text-primary font-semibold">Featured Service</span>
            </div>
            <h2>
              Build a Lead Machine
            </h2>
            <p className="text-lg mb-6 leading-relaxed mt-4">
              Turn your website into a 24/7 lead generation engine. We create high-converting
              landing pages, automated funnels, and AI-powered follow-up systems that never
              sleep. Your prospects get instant responses, and you get more qualified leads
              ready to buy.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Custom landing pages designed to convert',
                'Automated email and SMS sequences',
                'AI chatbots for instant lead qualification',
                'CRM integration and pipeline setup',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" size="lg">
              Build My Funnel
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="AI-powered lead generation automation system"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#1A3263] via-[#0f1f40] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
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

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-[2rem] md:text-[2.75rem] font-black text-white mb-6">
              Our success stories
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore how we transformed businesses and digital experiences across Kenya
            </p>
          </div>

          {/* Success Stories Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${successStorySlide * 100}%)` }}
              >
                {[
                  {
                    name: 'George Oketch',
                    role: 'Entrepreneur',
                    service: 'Business Growth Strategy',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
                    feedback: 'Your solutions doubled our revenue in just 3 months—seamless growth we never imagined!',
                    tagline: 'Transformed business growth with strategic marketing',
                  },
                  {
                    name: 'Jedi Pets',
                    role: 'Pet Foods',
                    service: 'Product Design & Branding',
                    image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=800',
                    feedback: 'Your product design for our premium pet food line boosted sales and pet owner loyalty overnight.',
                    tagline: 'Revolutionized product innovation and market fit',
                  },
                  {
                    name: 'Achego Electricals',
                    role: 'Electrical Services',
                    service: 'Website & Social Media Management',
                    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
                    feedback: 'Your digital strategy lit up our online presence—leads surged after the website revamp!',
                    tagline: 'Boosted online presence and customer engagement',
                  },
                  {
                    name: 'Voltmatic Energy Solutions',
                    role: 'Energy Company',
                    service: 'Graphic Design & Branding',
                    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
                    feedback: 'Stunning visuals transformed our brand; leads poured in from every campaign we launched.',
                    tagline: 'Elevated brand visuals and marketing impact',
                  },
                  {
                    name: 'Orient Cleaning Services',
                    role: 'Cleaning Company',
                    service: 'Website Design & Online Presence',
                    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
                    feedback: 'Our new website brought us from invisible to unstoppable—clients find us online every single day!',
                    tagline: 'Established strong online presence and visibility',
                  },
                ].map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card
                      padding="none"
                      hover
                      className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-white/10 group"
                      onMouseEnter={() => setExpandedStory(index)}
                      onMouseLeave={() => setExpandedStory(null)}
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side - Image with Overlay */}
                        <div className="relative h-80 md:h-96 overflow-hidden">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                              {story.name}
                            </h3>
                            <p className="text-white/90 font-semibold mb-2 drop-shadow">
                              {story.role}
                            </p>
                            <p className="text-white/80 text-sm drop-shadow">
                              {story.service}
                            </p>
                          </div>

                          {/* Glow Effect on Hover */}
                          <div className="absolute inset-0 bg-[#1A3263]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Right Side - Case Study Panel */}
                        <div className="relative bg-white p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <div className="inline-block bg-[#1A3263] text-white px-4 py-2 rounded-lg mb-6 font-bold text-sm tracking-wide uppercase">
                              Case Study
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                              {story.tagline}
                            </p>

                            {/* Expandable Feedback */}
                            <div
                              className={`transition-all duration-500 overflow-hidden ${
                                expandedStory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#1A3263] animate-slide-up">
                                <p className="text-gray-800 font-semibold italic leading-relaxed">
                                  "{story.feedback}"
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Stats/Metrics */}
                          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                            {[
                              { label: 'Revenue Growth', value: index === 0 ? '200%' : index === 1 ? '350%' : index === 2 ? '500%' : index === 3 ? '420%' : '380%' },
                              { label: 'Time Saved', value: index === 0 ? '15hrs' : index === 1 ? '20hrs' : index === 2 ? '25hrs' : index === 3 ? '18hrs' : '22hrs' },
                              { label: 'ROI', value: index === 0 ? '5.2x' : index === 1 ? '6.8x' : index === 2 ? '7.5x' : index === 3 ? '6.1x' : '5.8x' },
                            ].map((stat) => (
                              <div key={stat.label} className="text-center">
                                <div className="text-2xl font-black text-[#1A3263] mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-600 font-semibold">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setSuccessStorySlide((prev) => (prev === 0 ? 4 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-6 w-6 text-[#1A3263]" />
            </button>
            <button
              onClick={() => setSuccessStorySlide((prev) => (prev === 4 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next story"
            >
              <ChevronRight className="h-6 w-6 text-[#1A3263]" />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setSuccessStorySlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === successStorySlide
                      ? 'w-12 bg-white shadow-lg shadow-white/50'
                      : 'w-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <Section background="white" padding="xl">
          <div className="text-center mb-16">
            <h2>Digital Growth Insights</h2>
            <p className="text-lg max-w-2xl mx-auto mt-4">
              Simple, practical tips on how to get more leads and sales online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Card key={post.id} hover padding="lg">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="subtopic mb-3 line-clamp-2">{post.title}</h3>
                <p className="mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group transition-all duration-300"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button href="/blog" variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </Section>
      )}

      <Section background="white" padding="xl">
        <div className="relative bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-white mb-6 text-[2rem] md:text-[2.75rem]">
              Ready to turn your marketing into a sales engine?
            </h2>
            <p className="text-base md:text-lg text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's build a growth strategy that actually delivers results. Book your free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white hover:border-white text-lg px-10 py-5">
                Book Your Free Strategy Call
              </Button>
              <Button
                href="https://wa.me/your-number"
                external
                variant="outline"
                size="lg"
                className="bg-white text-black border-white hover:bg-primary hover:text-white text-lg px-10 py-5"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
