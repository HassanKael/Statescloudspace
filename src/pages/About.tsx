import { Target, Users, TrendingUp, Shield } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Sales-First Approach',
      description:
        "We focus on leads and revenue, not just likes. Every campaign is designed to deliver measurable business growth.",
    },
    {
      icon: TrendingUp,
      title: 'Creative + Technical',
      description:
        'We blend stunning design with powerful automation and data-driven optimization for maximum impact.',
    },
    {
      icon: Shield,
      title: 'Transparent Reporting',
      description:
        "You see exactly what you're paying for and what it returns. No fluff, just clear metrics and honest insights.",
    },
    {
      icon: Users,
      title: 'Flexible & Founder-Friendly',
      description:
        'We adapt to your stage and budget, scaling our services as you grow. Your success is our success.',
    },
  ];

  const team = [
    {
      role: 'Strategy & Leadership',
      description:
        'Guiding your marketing vision and ensuring every campaign aligns with your business goals.',
    },
    {
      role: 'Design Team',
      description:
        'Creating visually stunning and conversion-focused designs that make your brand stand out.',
    },
    {
      role: 'Ads Specialists',
      description:
        'Managing your ad campaigns with precision, constantly optimizing for better ROI.',
    },
    {
      role: 'Automation Experts',
      description:
        'Building intelligent systems that work around the clock to nurture and convert leads.',
    },
  ];

  return (
    <>
      <Section background="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6 text-white">About Statescloudspace</h1>
          <p className="text-base md:text-lg text-neutral-100">
            We're a digital marketing partner on a mission to help businesses turn online
            activity into real revenue.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                Statescloudspace was born from a simple observation: too many businesses
                were spending money on digital marketing but seeing little return. They had
                pretty graphics, active social accounts, and even some traffic — but the
                sales weren't following.
              </p>
              <p>
                We knew the problem wasn't with digital marketing itself. It was with how it
                was being approached. Businesses needed a partner who understood that every
                post, every ad, and every automation should connect directly to revenue.
              </p>
              <p>
                Today, we help ambitious businesses build marketing systems that actually
                work — systems that generate qualified leads, nurture them automatically,
                and turn them into paying customers. That's the Statescloudspace difference.
              </p>
            </div>
          </div>
          <div>
            <Card padding="lg" className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <img
                src="/professional_digital_marketing_team_(1).png"
                alt="Statescloudspace Team"
                className="w-full h-auto rounded-lg object-contain"
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-neutral-700">
                To help businesses turn digital marketing into a reliable engine for growth
                and sales by combining creative excellence with technical innovation.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-neutral-700">
                To become the go-to growth partner for ambitious businesses in Kenya, East
                Africa, and beyond who want to scale online and dominate their markets.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            We're not your typical digital agency. Here's why businesses choose to partner
            with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} hover padding="lg" className="text-center">
              <div className="inline-block bg-secondary/10 rounded-full p-4 mb-4">
                <value.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-neutral-700">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Cloudspace Crew</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A dedicated team of strategists, designers, and technologists working together
            to fuel your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.role} padding="lg">
              <h3 className="text-xl font-bold mb-3 text-primary">{member.role}</h3>
              <p className="text-neutral-700">{member.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Let's Talk About Your Next Stage of Growth
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Whether you're just starting out or ready to scale, we're here to help you build
            a marketing system that delivers real results.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Book a Free Strategy Call
          </Button>
        </div>
      </Section>
    </>
  );
}
