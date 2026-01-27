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

  useEffect(() => {
    fetchLatestPosts();
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

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm md:text-base">
                  Digital Marketing That Delivers
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-white">
                Turn Clicks Into
                <br />
                <span className="text-secondary">Customers</span> With
                <br />
                Data-Driven Marketing
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-neutral-100 leading-relaxed max-w-xl">
                Design, automate, and scale campaigns that bring in real sales, not just traffic.
              </p>

              <ul className="space-y-4">
                {['More qualified leads', 'Done-for-you funnels & automation', 'Transparent reporting & ROI focus'].map(
                  (item) => (
                    <li key={item} className="flex items-center text-base md:text-lg text-white">
                      <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/contact" variant="accent" size="lg" className="shadow-2xl shadow-accent/30">
                  Book a Free Strategy Call
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get a Custom Quote
                </Button>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>

              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/30 rounded-2xl rotate-12 blur-sm"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/30 rounded-2xl -rotate-12 blur-sm"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-5 w-24 h-48 bg-secondary/20 rounded-full blur-lg"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-24 h-48 bg-accent/20 rounded-full blur-lg"></div>

                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                    <img
                      src="/untitled_design_(5).png"
                      alt="Statescloudspace"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <Section background="gray" padding="md">
        <div className="text-center">
          <p className="text-lg text-neutral-700 font-medium">
            Trusted by growing businesses and ambitious founders
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            From first click to loyal customer, we cover the full journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} hover padding="lg">
              <service.icon className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-700 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="primary" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built To Increase Your Sales</h2>
          <p className="text-lg text-neutral-100 max-w-2xl mx-auto">
            Every strategy we implement is designed with one goal: growing your revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <benefit.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
              <p className="text-white font-medium">{benefit.title}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work With You</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A proven process that takes you from strategy to results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-center">
                <div className="inline-block bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-secondary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-neutral-700">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-neutral-100 -z-10" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-accent/10 rounded-lg px-4 py-2 mb-4">
              <span className="text-accent font-semibold">Featured Service</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build a Lead Machine
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Turn your website into a 24/7 lead generation engine. We create high-converting
              landing pages, automated funnels, and AI-powered follow-up systems that never
              sleep. Your prospects get instant responses, and you get more qualified leads
              ready to buy.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Custom landing pages designed to convert',
                'Automated email and SMS sequences',
                'AI chatbots for instant lead qualification',
                'CRM integration and pipeline setup',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="accent" size="lg">
              Build My Funnel
            </Button>
          </div>
          <div className="relative">
            <Card padding="lg" className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                <Users className="h-24 w-24 text-neutral-100" />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Real results from real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
            <Card key={index} padding="lg">
              <div className="mb-4">
                <span className="text-4xl text-secondary">"</span>
              </div>
              <p className="text-neutral-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-neutral-700">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {latestPosts.length > 0 && (
        <Section background="gray" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Growth Insights</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Simple, practical tips on how to get more leads and sales online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Card key={post.id} hover padding="lg">
                <div className="mb-4">
                  <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-neutral-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center group"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      <Section background="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Your Marketing Into a Sales Engine?
          </h2>
          <p className="text-lg text-neutral-100 mb-8">
            Let's build a growth strategy that actually delivers results. Book your free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Book Your Free Strategy Call
            </Button>
            <Button
              href="https://wa.me/your-number"
              external
              variant="secondary"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
