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
      <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-10">
              <div className="inline-block">
                <span className="subtopic text-base md:text-lg tracking-wide">
                  Digital Marketing That Delivers
                </span>
              </div>

              <h1 className="leading-[1.4]">
                Turn Clicks Into
                <br />
                Customers With
                <br />
                Data-Driven Marketing
              </h1>

              <p className="text-lg md:text-xl leading-relaxed max-w-xl">
                Design, automate, and scale campaigns that bring in real sales, not just traffic.
              </p>

              <ul className="space-y-5">
                {['More qualified leads', 'Done-for-you funnels & automation', 'Transparent reporting & ROI focus'].map(
                  (item) => (
                    <li key={item} className="flex items-center text-base md:text-lg">
                      <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button href="/contact" variant="primary" size="lg">
                  Book a Free Strategy Call
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get a Custom Quote
                </Button>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl blur-2xl"></div>

              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-2xl rotate-12"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-2xl -rotate-12"></div>

                  <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
                    <img
                      src="/untitled_design_(5).png"
                      alt="Statescloudspace"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section background="white" padding="md">
        <div className="text-center border-t border-b border-gray-200 py-6">
          <p className="text-lg font-medium">
            Trusted by growing businesses and ambitious founders
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl" id="services">
        <div className="text-center mb-16">
          <h2>What We Do</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            From first click to loyal customer, we cover the full journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} hover padding="lg">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="subtopic mb-3">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary hover:text-primary-dark font-medium inline-flex items-center group transition-all duration-300"
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

      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2>What Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
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
                <span className="text-4xl text-primary">"</span>
              </div>
              <p className="mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm">{testimonial.business}</p>
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
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-white mb-6">
            Ready to Turn Your Marketing Into a Sales Engine?
          </h2>
          <p className="text-lg text-white mb-8">
            Let's build a growth strategy that actually delivers results. Book your free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
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
