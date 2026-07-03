import { useState } from 'react';
import { Target, Users, TrendingUp, Shield, Check } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const testimonials = [
  {
    name: 'George Oketch',
    role: 'Entrepreneur',
    company: 'GoGrow Solutions',
    service: 'Business Growth Strategy',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'Your solutions doubled our revenue in just 3 months—seamless growth we never imagined!',
    tagline: 'Transformed business growth with strategic marketing',
    logoBg: 'bg-emerald-600',
    logoInitials: 'GG',
    platform: 'google' as const,
    attributes: ['amazing-results', 'ads', 'best-agency'],
  },
  {
    name: 'Sarah Jenkins',
    role: 'Co-Founder',
    company: 'Jedi Pets',
    service: 'Product Design & Branding',
    image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'Your product design for our premium pet food line boosted sales and pet owner loyalty overnight.',
    tagline: 'Revolutionized product innovation and market fit',
    logoBg: 'bg-purple-600',
    logoInitials: 'JP',
    platform: 'yelp' as const,
    attributes: ['amazing-results', 'best-agency', 'responsive'],
  },
  {
    name: 'Antony Achego',
    role: 'Managing Director',
    company: 'Achego Electricals',
    service: 'Website & Social Media',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'Your digital strategy lit up our online presence—leads surged after the website revamp!',
    tagline: 'Boosted online presence and customer engagement',
    logoBg: 'bg-blue-600',
    logoInitials: 'AE',
    platform: 'google' as const,
    attributes: ['amazing-results', 'seo', 'website-design'],
  },
  {
    name: 'David Kiprop',
    role: 'Operations Head',
    company: 'Voltmatic Energy Solutions',
    service: 'Graphic Design & Branding',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'Stunning visuals transformed our brand; leads poured in from every campaign we launched.',
    tagline: 'Elevated brand visuals and marketing impact',
    logoBg: 'bg-amber-600',
    logoInitials: 'VE',
    platform: 'google' as const,
    attributes: ['amazing-results', 'ads', 'best-agency'],
  },
  {
    name: 'Mary Wambui',
    role: 'Founder',
    company: 'Orient Cleaning Services',
    service: 'Website Design & SEO',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'Our new website brought us from invisible to unstoppable—clients find us online every single day!',
    tagline: 'Established strong online presence and visibility',
    logoBg: 'bg-teal-600',
    logoInitials: 'OC',
    platform: 'google' as const,
    attributes: ['great-value', 'seo', 'website-design'],
  },
  {
    name: 'Brian Warucha',
    role: 'Lead Architect',
    company: 'Wetstone Builders',
    service: 'Website Design',
    image: 'https://images.pexels.com/photos/1218562/pexels-photo-1218562.jpeg?auto=compress&cs=tinysrgb&w=800',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    feedback: 'They helped us create a website to establish our online presence and showcase our work effectively.',
    tagline: 'Established online presence and showcased work',
    logoBg: 'bg-slate-600',
    logoInitials: 'WB',
    platform: 'yelp' as const,
    attributes: ['great-value', 'website-design', 'responsive'],
  },
];

const filterCategories = [
  { id: 'all', label: 'All Reviews' },
  { id: 'amazing-results', label: 'Amazing Results' },
  { id: 'great-value', label: 'Great Value' },
  { id: 'ads', label: 'Paid Ads' },
  { id: 'seo', label: 'SEO & Social' },
  { id: 'website-design', label: 'Website Design' },
  { id: 'responsive', label: 'Very Responsive' },
];

const GoogleBadge = () => (
  <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  </div>
);

const YelpBadge = () => (
  <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
    <svg className="w-4.5 h-4.5 text-[#d32323]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.16 11.59l2.75-2.73c.48-.48.47-1.27-.02-1.74-.49-.47-1.28-.44-1.74.05L10.4 9.9l-.02-3.86c0-.68-.54-1.23-1.22-1.24-.68 0-1.24.55-1.25 1.23l.02 3.86-2.75-2.73c-.48-.48-1.27-.47-1.74.02-.47.49-.44 1.28.05 1.74l2.74 2.73-3.86.02c-.68 0-1.23.54-1.24 1.22 0 .68.55 1.24 1.23 1.25l3.86-.02-2.73 2.75c-.48.48-.47 1.27.02 1.74.24.23.55.35.86.35.32 0 .63-.12.87-.36l2.73-2.74.02 3.86c0 .68.54 1.23 1.22 1.24h.02c.68 0 1.23-.55 1.24-1.23l-.02-3.86 2.73 2.74c.24.24.56.36.88.36.31 0 .62-.12.86-.35.49-.47.5-1.26.02-1.74l-2.73-2.75 3.86-.02c.68 0 1.23-.54 1.24-1.22.01-.68-.54-1.24-1.22-1.25l-3.86.02z" />
    </svg>
  </div>
);

const renderStars = (platform: 'google' | 'yelp') => {
  if (platform === 'yelp') {
    return (
      <div className="flex gap-0.5 items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 bg-[#d32323] flex items-center justify-center rounded-[2px] text-white text-[9px] font-bold"
          >
            ★
          </span>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex gap-0.5 items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-[#f4b400] text-lg leading-none"
          >
            ★
          </span>
        ))}
      </div>
    );
  }
};

export default function About() {
  const [activeFilter, setActiveFilter] = useState('all');
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
                States Cloud Space was born from a simple observation: too many businesses were investing in digital marketing but seeing little return. They had attractive branding, active social media accounts, and website traffic, yet the sales weren't following.
              </p>
              <p>
                We realized the problem wasn't digital marketing itself. The problem was strategy. Too often, businesses focused on vanity metrics instead of building systems that drive measurable growth.
              </p>
              <p>
                That's why we took a different approach.
              </p>
              <p>
                At States Cloud Space, we believe every website, campaign, automation, and piece of content should serve one purpose: helping businesses attract the right customers and generate sustainable revenue.
              </p>
              <p>
                Today, we partner with ambitious businesses to build complete digital growth systems — combining web development, branding, SEO, AI automation, lead generation, and digital marketing into strategies that deliver real business results.
              </p>
              <p>
                We're not just another digital agency. We're a growth partner committed to helping businesses scale smarter, work more efficiently, and turn opportunities into lasting success.
              </p>
            </div>
          </div>
          <div>
            <Card padding="lg" className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Statescloudspace Team"
                className="w-full h-auto rounded-lg object-cover"
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

      <Section
        background="dark"
        className="bg-gradient-to-br from-[#1A3263] via-[#0f1f40] to-black text-white relative overflow-hidden"
        padding="xl"
      >
        {/* Floating background particles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(15)].map((_, i) => (
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

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/10">
              <span className="text-white/90 font-semibold tracking-wider uppercase text-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-3.5rem font-black text-white mb-6">
              See why customers <span className="text-[#FF7A33]">❤️</span> Statescloudspace
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Filter by service or attribute to see what's important to you:
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-white/85 border border-white/10 hover:border-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials
              .filter(
                (t) =>
                  activeFilter === 'all' || t.attributes.includes(activeFilter)
              )
              .map((testimonial, idx) => (
                <div
                  key={testimonial.name}
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full animate-fade-in text-black"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Banner Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 tracking-wider uppercase">
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Overlapping Avatar & Platform Badge */}
                  <div className="absolute top-[110px] left-6 z-10 flex items-end">
                    <div className="relative w-20 h-20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full border-4 border-white object-cover shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 z-20">
                        {testimonial.platform === 'google' ? (
                          <GoogleBadge />
                        ) : (
                          <YelpBadge />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-12 px-6 pb-6 flex-grow flex flex-col">
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                          {testimonial.role}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className={`w-6 h-6 rounded-full ${testimonial.logoBg} flex items-center justify-center text-white text-[10px] font-black shadow-inner`}>
                            {testimonial.logoInitials}
                          </div>
                          <span className="text-neutral-900 font-bold text-base tracking-tight">
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        {renderStars(testimonial.platform)}
                      </div>
                    </div>

                    {/* Tagline Banner (Sleek full-width look) */}
                    <div className="mx-[-24px] bg-gradient-to-r from-accent to-[#ff7a33] text-white py-3 px-6 font-bold text-center text-[13px] md:text-sm uppercase tracking-wider shadow-sm mb-5">
                      {testimonial.tagline}
                    </div>

                    {/* Review Body */}
                    <div className="relative flex-grow">
                      <span className="absolute -top-4 -left-2 text-6xl text-secondary/15 font-serif select-none pointer-events-none">
                        “
                      </span>
                      <p className="text-neutral-700 text-sm leading-relaxed italic relative z-10 pl-2">
                        {testimonial.feedback}
                      </p>
                    </div>

                    {/* Verified tag at bottom */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-neutral-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                        Verified Client Review
                      </span>
                      <span className="capitalize">{testimonial.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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
