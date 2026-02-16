import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Target, DollarSign, Zap, TrendingUp, Play, Search, Users, BarChart3, Megaphone } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function PaidAds() {
  const benefits = [
    'Maximize ROI with precision targeting and bid optimization',
    'Scale successful campaigns quickly and profitably',
    'Track every dollar spent with detailed conversion analytics',
    'Reach decision-makers at the exact moment they\'re ready to buy',
    'Test and iterate rapidly to find winning combinations',
  ];

  const googleSteps = [
    {
      title: 'Keyword Strategy',
      description: 'Deep-dive research to find high-intent "buying" keywords while excluding negative keywords to prevent wasted spend.',
    },
    {
      title: 'Campaign Architecture',
      description: 'Tightly themed ad groups—Search for text, Shopping for e-commerce, or Display for visual retargeting.',
    },
    {
      title: 'Compelling Ad Copy',
      description: 'Multiple headlines and descriptions to improve Quality Score, lowering your cost-per-click (CPC).',
    },
    {
      title: 'Landing Page Alignment',
      description: 'Ensure ads lead to high-converting pages that match the user\'s search query.',
    },
    {
      title: 'Smart Bidding & Tracking',
      description: 'Conversion tracking feeds Google\'s AI, automating bidding for the highest possible ROI.',
    },
  ];

  const googleBenefits = [
    {
      title: 'Instant Visibility',
      description: 'Unlike SEO, your brand appears at the top of Google results immediately.',
    },
    {
      title: 'High Intent',
      description: 'Reach people who are already looking to buy, not just browsing.',
    },
    {
      title: 'Pay-for-Performance',
      description: 'Only pay when someone actually clicks on your ad.',
    },
  ];

  const metaSteps = [
    {
      title: 'Audience Profiling',
      description: 'Build Custom and Lookalike audiences based on your best customers\' interests, behaviors, and locations.',
    },
    {
      title: 'Creative Production',
      description: 'Mobile-first visuals (Reels, Carousels, Single Images) that stop the thumb and spark curiosity.',
    },
    {
      title: 'Funnel Strategy',
      description: 'Top of Funnel (Awareness) and Bottom of Funnel (Retargeting for cart abandoners).',
    },
    {
      title: 'Pixel & CAPI Setup',
      description: 'Install Meta Pixel and Conversions API to track user actions across devices accurately.',
    },
    {
      title: 'A/B Testing',
      description: 'Constantly test different headlines and videos to double down on what generates the most leads.',
    },
  ];

  const metaBenefits = [
    {
      title: 'Laser Targeting',
      description: 'Reach users based on hobbies, job titles, or life events like "Recently Moved" or "Interested in Luxury Travel".',
    },
    {
      title: 'Visual Storytelling',
      description: 'Use Instagram Reels and Stories to build an emotional connection with your brand.',
    },
    {
      title: 'Cost-Effective Reach',
      description: 'Lower cost-per-impression compared to other major networks.',
    },
  ];

  const optimizationFeatures = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Real-time analytics to cut underperforming ads and scale the winners.',
    },
    {
      icon: DollarSign,
      title: 'Budget Efficiency',
      description: 'Decrease your Cost Per Acquisition (CPA) month over month.',
    },
    {
      icon: Target,
      title: 'Transparent Reporting',
      description: 'Clear dashboards showing exactly how many leads or sales your investment generated.',
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'Search, Display, and Shopping campaigns optimized for conversions and profitability.',
    },
    {
      icon: Zap,
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Highly targeted social campaigns that capture attention and drive action.',
    },
    {
      icon: Play,
      title: 'TikTok Lead Generation',
      description: 'Viral-ready campaigns leveraging trending audio and native content for explosive engagement.',
    },
    {
      icon: DollarSign,
      title: 'ROI-Focused Optimization',
      description: 'Continuous testing and refinement to maximize return on ad spend.',
    },
  ];

  const tiktokTactics = [
    {
      title: 'Trend-Jacking Blueprints',
      description: 'Reverse-engineer top-performing UGC, remix into shoppable ads with TikTok Shop tags for direct conversions.',
    },
    {
      title: 'Lead Form Automation',
      description: 'Instant opt-ins via TikTok Lead Generation ads, auto-synced to your CRM with zero manual entry.',
    },
    {
      title: 'Hyper-Targeted Scaling',
      description: 'Custom audiences from video completers + interest layering, retargeting warm viewers at 50% lower CPC.',
    },
    {
      title: 'Performance Dashboard',
      description: 'Real-time metrics on leads generated, cost-per-lead, and viral coefficient—optimized daily by our ad ops team.',
    },
  ];

  const caseStudy = {
    client: 'ProServe B2B Solutions',
    challenge: 'High ad costs with poor conversion rates and unclear attribution',
    solution: 'Complete campaign restructure with audience refinement and conversion tracking setup',
    results: [
      '340% increase in qualified leads',
      '62% reduction in cost per acquisition',
      '5.8x return on ad spend (ROAS)',
    ],
  };

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A3263] to-[#0f1f40] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Paid Ads Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3263]/95 to-[#0f1f40]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Performance Marketing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Paid Ads
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10">
              Launch high-performing campaigns on Google, Meta, and TikTok that deliver measurable ROI. We optimize every dollar spent with precision targeting and continuous performance monitoring.
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
            <p className="text-xl text-gray-600">Full-service paid advertising management for maximum ROI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
              <Search className="h-5 w-5 text-[#1A3263]" />
              <span className="text-[#1A3263] font-semibold text-sm tracking-wider uppercase">Google Ads</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Google Ads Management</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Search, Display, & Shopping Campaigns
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Google Ads focuses on intent. We place your business in front of customers at the exact moment they are searching for what you offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <div className="bg-[#1A3263]/10 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-[#1A3263]" />
                </div>
                Our Process
              </h3>
              <div className="space-y-4">
                {googleSteps.map((step, index) => (
                  <div key={index} className="border-l-4 border-[#1A3263] pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A3263] to-[#0f1f40] rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Core Benefits
              </h3>
              <div className="space-y-6">
                {googleBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#1A3263]/5 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-[#1A3263]" />
              <span className="text-[#1A3263] font-semibold text-sm tracking-wider uppercase">Meta Advertising</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Meta Ads</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Facebook & Instagram Highly Targeted Social Campaigns
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Meta Ads focus on demographics and behavior. We interrupt the "scroll" with eye-catching content tailored to specific lifestyles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1A3263] to-[#0f1f40] rounded-2xl p-8 shadow-lg text-white order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Core Benefits
              </h3>
              <div className="space-y-6">
                {metaBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg order-1 md:order-2">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <div className="bg-[#1A3263]/10 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-[#1A3263]" />
                </div>
                Our Process
              </h3>
              <div className="space-y-4">
                {metaSteps.map((step, index) => (
                  <div key={index} className="border-l-4 border-[#1A3263] pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
              <TrendingUp className="h-5 w-5 text-[#1A3263]" />
              <span className="text-[#1A3263] font-semibold text-sm tracking-wider uppercase">Our Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">ROI-Focused Optimization</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don't just "set and forget." Our management style is rooted in Continuous Testing and Refinement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {optimizationFeatures.map((feature, index) => (
              <Card key={index} padding="lg" hover>
                <div className="bg-[#1A3263]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-[#1A3263]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1A3263] to-black rounded-2xl p-10 md:p-16 text-center shadow-2xl">
            <Megaphone className="h-16 w-16 text-white mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Stop Guessing Where Your Next Customer Is Coming From
            </h3>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              While others focus on 'likes,' we focus on your bottom line. Whether it's capturing high-intent searches on Google or stopping the scroll on Instagram, our ads are engineered to convert. We don't just run campaigns; we build scalable revenue engines.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <p className="text-white font-bold text-lg">Ready to see your ROI climb?</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 bg-[#1A3263]/5 px-4 py-2 rounded-full">
                <Play className="h-5 w-5 text-[#1A3263]" />
                <span className="text-[#1A3263] font-semibold text-sm tracking-wider uppercase">TikTok Advertising</span>
              </div>
              <h3 className="text-[2rem] font-bold text-black mb-6">
                From viral hooks to closed deals: TikTok lead engine
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                We dive deep into your brand's DNA to produce native Spark Ads and Branded Effects that feel authentically TikTok—leveraging trending audio, duets, and AR challenges to achieve 90%+ view-through rates and 3x engagement over static feeds. Our proprietary creative process A/B tests 15+ variations weekly, using pixel data and lookalike audiences to target dream buyers (e.g., 18-34yo impulse purchasers), while dynamic event optimizations trigger instant lead forms for email/SMS capture.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <p className="text-base text-gray-800 leading-relaxed font-medium">
                  <strong className="text-[#1A3263]">Results?</strong> Businesses see <strong className="text-[#1A3263]">4-7x ROAS</strong>, with top funnels feeding 24/7 AI chatbots for qualification—turning passive scrollers into booked calls overnight. Seamless integrations with your existing Meta/Google campaigns ensure cross-platform synergy.
                </p>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="text-base px-8 py-4">
                Generate TikTok Leads Now
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1A3263] to-[#0f1f40] rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Key Tactics We Deploy</h4>
                </div>
                <div className="space-y-6">
                  {tiktokTactics.map((tactic, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <h5 className="text-base font-bold text-white mb-2">{tactic.title}</h5>
                      <p className="text-sm text-white/90 leading-relaxed">{tactic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#1A3263] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-pulse">
                90%+ View Rate
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Success Story</h2>
            <p className="text-xl text-gray-600">Real results from our paid ads services</p>
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
            Ready to Scale Your Advertising?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's create high-performing campaigns that drive qualified leads and maximize your return on investment.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Launch Your Campaign
          </Button>
        </div>
      </Section>
    </>
  );
}
