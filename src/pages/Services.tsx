import {
  Palette,
  Users,
  Zap,
  MessageSquare,
  Target,
  CheckCircle,
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Services() {
  const services = [
    {
      id: 'design',
      icon: Palette,
      title: 'Graphic Design',
      description:
        'We create visuals that stop the scroll and move people to act. Every design is matched to your brand and your goals.',
      deliverables: [
        'Social media posts and carousels',
        'Ad creatives (static and simple motion)',
        'Web and campaign banners',
        'Logos and brand identity',
        'Brand kits (colors, fonts, templates)',
      ],
      outcomes: [
        'Consistent brand look across all platforms',
        'Higher engagement and click-through on posts and ads',
      ],
    },
    {
      id: 'leads',
      icon: Users,
      title: 'Lead Generation & Funnels',
      description:
        'We set up the pages and campaigns that turn strangers into interested leads.',
      deliverables: [
        'Landing pages (for offers, webinars, lead magnets)',
        'Lead capture forms and email capture',
        'Sales funnels (ad → landing page → email follow-up)',
        'CRM integration and basic pipeline setup',
      ],
      outcomes: [
        'More qualified leads for your sales team',
        'Predictable flow of new inquiries each month',
      ],
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'AI Automation & Chatbots',
      description:
        "Automate follow-up, FAQs, and first contact so you never lose leads when you're offline.",
      deliverables: [
        'Website and WhatsApp chatbots',
        'Automated email sequences (welcome, nurture, abandoned cart, reactivation)',
        'Automated SMS flows (reminders, confirmations, promotions)',
        'AI workflows for lead routing and support',
      ],
      outcomes: [
        'Faster response times and higher conversion from lead to customer',
        'Less manual work for your team',
      ],
    },
    {
      id: 'social',
      icon: MessageSquare,
      title: 'Social Media Management',
      description:
        'We manage your social presence so you stay top of mind with your audience.',
      deliverables: [
        'Content strategy and monthly content calendar',
        'Post creation (graphics + captions)',
        'Scheduling and posting',
        'Community management (replying to comments/messages as agreed)',
        'Monthly performance reports',
      ],
      outcomes: [
        'Consistent, professional presence across platforms',
        'Growth in followers, engagement, and brand awareness',
      ],
    },
    {
      id: 'ads',
      icon: Target,
      title: 'Paid Ads Management (Meta & Google)',
      description:
        'We run performance-focused ads on Facebook, Instagram, and Google to drive leads and sales.',
      deliverables: [
        'Campaign and audience strategy',
        'Ad setup on Facebook, Instagram, and/or Google',
        'Ongoing optimization (creatives, targeting, budgets)',
        'Conversion tracking setup',
        'Weekly/Monthly reports with insights',
      ],
      outcomes: [
        'Higher ROI on ad spend',
        'Clarity on what campaigns bring real revenue',
      ],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for businesses just starting their digital marketing journey',
      features: [
        '1-2 services included',
        'Basic automation setup',
        'Monthly reporting',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      description: 'Ideal for businesses ready to scale their online presence',
      features: [
        '3-4 services included',
        'Advanced automation and funnels',
        'Weekly performance reports',
        'Priority support',
        'Quarterly strategy sessions',
      ],
      popular: true,
    },
    {
      name: 'Scale',
      description: 'For established businesses seeking maximum growth',
      features: [
        'All services included',
        'Full automation suite',
        'Real-time reporting dashboard',
        'Dedicated account manager',
        'Monthly strategy sessions',
        'Custom integrations',
      ],
    },
  ];

  return (
    <>
      <Section background="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services That Drive Sales</h1>
          <p className="text-lg text-neutral-100">
            Each service is built around business growth, not vanity metrics. We focus on
            what actually moves the needle: leads, conversions, and revenue.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-block bg-secondary/10 rounded-full p-4 mb-6">
                  <service.icon className="h-12 w-12 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-neutral-700 mb-6">{service.description}</p>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <Card padding="lg">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Deliverables</h3>
                  <ul className="space-y-3 mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 text-primary">Outcomes</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Packages</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Every business is different. We create custom packages based on your goals and
            budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              padding="lg"
              className={`relative ${
                pkg.popular ? 'ring-2 ring-secondary shadow-xl' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 text-primary">{pkg.name}</h3>
              <p className="text-neutral-700 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.popular ? 'accent' : 'outline'}
                size="lg"
                fullWidth
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Not sure which package fits? We'll help you choose the right mix of services.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Request a Custom Proposal
          </Button>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Tell us what you want to achieve and we'll map out the best package for you.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Let's Talk About Your Goals
          </Button>
        </div>
      </Section>
    </>
  );
}
