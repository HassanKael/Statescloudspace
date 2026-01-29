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
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { supabase, BlogPost } from '../lib/supabase';

export default function Home() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] mb-8 text-white">
              Turn Clicks Into Customers With Data-Driven Marketing
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 text-white/95 max-w-3xl">
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
              <Button href="/contact" variant="outline" size="lg" className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black">
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

      <Section background="white" padding="lg">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600 uppercase tracking-wider mb-8">
            Trusted by Growing Businesses and Ambitious Founders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['Company', 'Brand', 'Business', 'Enterprise'].map((name) => (
              <div key={name} className="flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-400">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

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
              <h3 className="text-xl font-bold text-black mb-3 not-italic">{service.title}</h3>
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
            <Card padding="lg" className="bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                <Users className="h-24 w-24 text-gray-200" />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-600">
            Real results from real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                'Statescloudspace helped us turn social media from a cost into a profit channel.',
              author: 'Sarah M.',
              business: 'E-commerce Business',
            },
            {
              quote:
                'Their automation saved us 15+ hours a week and doubled our lead conversion rate.',
              author: 'James K.',
              business: 'B2B SaaS Startup',
            },
            {
              quote:
                'Finally, a marketing partner that focuses on sales, not just vanity metrics.',
              author: 'Linda W.',
              business: 'Local Service Business',
            },
          ].map((testimonial, index) => (
            <Card key={index} padding="lg" className="bg-white border-l-4 border-primary">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="mb-6 text-gray-700 leading-relaxed text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

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
            <h2 className="text-white mb-6 text-3xl md:text-4xl lg:text-5xl">
              Ready to Turn Your Marketing Into a Sales Engine?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-10 py-5"
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
