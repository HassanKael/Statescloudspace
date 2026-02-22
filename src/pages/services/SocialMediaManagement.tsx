import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, MessageCircle, TrendingUp } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function SocialMediaManagement() {
  const benefits = [
    'Consistent brand presence that builds trust and authority',
    'Engage with prospects where they spend their time online',
    'Turn followers into qualified leads and customers',
    'Stay top-of-mind with strategic content distribution',
    'Build a community around your brand and offerings',
  ];

  const features = [
    {
      icon: Users,
      title: 'Multi-Platform Management',
      description: 'Cohesive strategy across LinkedIn, Facebook, Instagram, and Twitter.',
    },
    {
      icon: MessageCircle,
      title: 'Content Creation & Scheduling',
      description: 'Engaging posts, graphics, and campaigns planned and published consistently.',
    },
    {
      icon: TrendingUp,
      title: 'Community Engagement',
      description: 'Active monitoring and response to comments, messages, and mentions.',
    },
  ];

  const caseStudy = {
    client: 'InnovateTech Partners',
    challenge: 'Inconsistent posting schedule and low engagement rates across all platforms',
    solution: 'Comprehensive social media strategy with content calendar, engagement protocols, and paid amplification',
    results: [
      '85% increase in engagement rate',
      '2,400+ new qualified followers',
      '32 high-value leads generated directly from social',
    ],
  };

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A3263] to-[#0f1f40] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Social Media Management Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/95 to-[#0f1f40]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Social Presence & Engagement
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Social Media Management
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10">
              Build and nurture your brand presence across all major social platforms. From content strategy to community management, we create engaging campaigns that drive consistent business results.
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
            <p className="text-xl text-gray-600">Complete social media management for consistent brand growth</p>
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
            <p className="text-xl text-gray-600">Real results from our social media services</p>
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
            Ready to Build Your Social Presence?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's create a social media strategy that engages your audience and drives real business growth.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Get Your Social Strategy
          </Button>
        </div>
      </Section>
    </>
  );
}
