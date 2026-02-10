import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Target, Users, Zap, FileText, Monitor } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Services() {
  const [socialMediaSlide, setSocialMediaSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const socialMediaImages = [
    {
      title: 'Facebook Ads Manager',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'LinkedIn Campaign Manager',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Instagram Insights',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Twitter Analytics',
      image: 'https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSocialMediaSlide((prev) => (prev + 1) % socialMediaImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = cardsRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      icon: Sparkles,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Transform your brand identity with stunning visuals that capture attention and drive engagement. We create compelling designs from logos to full brand kits that resonate with your B2B audience and establish credibility in your market.',
      stat: '300%',
      statLabel: 'Engagement Boost',
      path: '/services/graphic-design',
    },
    {
      id: 'seo',
      name: 'SEO',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Dominate search rankings and attract high-intent buyers to your website. Our data-driven SEO strategies focus on keywords that convert, technical optimization, and content that positions you as an industry leader.',
      stat: '98%',
      statLabel: 'Keyword Ranking Increase',
      path: '/services/seo',
    },
    {
      id: 'paid-ads',
      name: 'Paid Ads',
      icon: Target,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Launch high-performing campaigns on Google and Meta that deliver measurable ROI. We optimize every dollar spent with precision targeting, compelling ad creatives, and continuous performance monitoring to maximize conversions.',
      stat: '400%',
      statLabel: 'ROAS Achieved',
      path: '/services/paid-ads',
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      icon: Users,
      images: socialMediaImages,
      summary: 'Build and nurture your brand presence across all major social platforms. From content strategy to community management, we create engaging campaigns that keep your audience connected and drive consistent business results.',
      stat: '250K+',
      statLabel: 'Followers Gained',
      path: '/services/social-media-management',
      carousel: true,
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      icon: Zap,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Streamline your marketing operations with cutting-edge AI solutions. Automate lead nurturing, customer support, and campaign optimization to save time, reduce costs, and scale your marketing efforts efficiently.',
      stat: '80%',
      statLabel: 'Time Saved',
      path: '/services/ai-automation',
    },
    {
      id: 'content-marketing',
      name: 'Content Marketing',
      icon: FileText,
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Establish thought leadership with strategic content that educates and converts. From blog posts to video series, we develop comprehensive content strategies that attract, engage, and nurture prospects through your sales funnel.',
      stat: '500%',
      statLabel: 'Traffic Growth',
      path: '/services/content-marketing',
    },
    {
      id: 'web-design',
      name: 'Web Design',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Transform clicks into customers with modern, high-performing websites that work as your 24/7 salesperson. From intuitive UI/UX to conversion-driven design, we build responsive, secure, and SEO-ready websites that drive real business results.',
      stat: '350%',
      statLabel: 'Conversion Rate Increase',
      path: '/services/web-design',
    },
  ];

  const AnimatedCounter = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
    const [count, setCount] = useState('0');
    const [started, setStarted] = useState(false);

    useEffect(() => {
      if (!started) return;

      const isPercentage = end.includes('%');
      const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
      const increment = numericEnd / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericEnd) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current) + (isPercentage ? '%' : end.replace(/[0-9]/g, '')));
        }
      }, 50);

      return () => clearInterval(timer);
    }, [started, end, duration]);

    useEffect(() => {
      const timeout = setTimeout(() => setStarted(true), 300);
      return () => clearTimeout(timeout);
    }, []);

    return <span>{count}</span>;
  };

  return (
    <>
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#1A3263] via-black to-black overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 border-2 border-white rounded-full animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white rotate-45 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 border-2 border-white rounded-full animate-spin-slower"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 border-2 border-white animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[1.1] animate-fade-in">
            Services That Drive Sales
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Each service is built around business growth, not vanity metrics. We focus on
            what actually moves the needle: leads, conversions, and revenue.
          </p>
        </div>
      </section>

      <Section background="white" padding="xl">
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                padding="none"
                hover
                className="overflow-hidden group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[300px] overflow-hidden">
                  {service.carousel && service.images ? (
                    <>
                      {service.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            idx === socialMediaSlide ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img
                            src={img.image}
                            alt={img.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {service.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === socialMediaSlide
                                ? 'w-8 bg-white'
                                : 'w-1.5 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  {/* Stats Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#1A3263] via-[#1A3263]/90 to-transparent flex items-end justify-center pb-8 transition-opacity duration-500 ${
                    hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center">
                      <div className="text-5xl font-black text-white mb-2">
                        {hoveredCard === service.id && <AnimatedCounter end={service.stat} />}
                      </div>
                      <div className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                        {service.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-[#1A3263]" />
                  </div>
                </div>

                <div className="p-6">
                  <Link
                    to={service.path}
                    className="block mb-4 group/link"
                  >
                    <h2 className="text-2xl font-bold text-black group-hover/link:text-[#1A3263] transition-all duration-300 group-hover/link:drop-shadow-[0_0_8px_rgba(26,50,99,0.5)]">
                      {service.name}
                    </h2>
                  </Link>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <Link
                    to={service.path}
                    className="relative inline-flex items-center justify-center w-full px-6 py-3 bg-[#1A3263] text-white font-semibold rounded-lg hover:bg-white hover:text-[#1A3263] border-2 border-transparent hover:border-[#1A3263] transition-all duration-300 group/btn overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Tell us what you want to achieve and we'll map out the best strategy for your business.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5 animate-pulse-slow-subtle">
            Let's Talk About Your Goals
          </Button>
        </div>
      </Section>
    </>
  );
}
