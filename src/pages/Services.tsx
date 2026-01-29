import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Services() {
  const [socialMediaSlide, setSocialMediaSlide] = useState(0);

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

  const services = [
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary:
        'Transform your brand identity with stunning visuals that capture attention and drive engagement. We create compelling designs from logos to full brand kits that resonate with your B2B audience and establish credibility in your market.',
      path: '/services/graphic-design',
    },
    {
      id: 'seo',
      name: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary:
        'Dominate search rankings and attract high-intent buyers to your website. Our data-driven SEO strategies focus on keywords that convert, technical optimization, and content that positions you as an industry leader.',
      path: '/services/seo',
    },
    {
      id: 'paid-ads',
      name: 'Paid Ads',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary:
        'Launch high-performing campaigns on Google and Meta that deliver measurable ROI. We optimize every dollar spent with precision targeting, compelling ad creatives, and continuous performance monitoring to maximize conversions.',
      path: '/services/paid-ads',
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      images: socialMediaImages,
      summary:
        'Build and nurture your brand presence across all major social platforms. From content strategy to community management, we create engaging campaigns that keep your audience connected and drive consistent business results.',
      path: '/services/social-media-management',
      carousel: true,
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary:
        'Streamline your marketing operations with cutting-edge AI solutions. Automate lead nurturing, customer support, and campaign optimization to save time, reduce costs, and scale your marketing efforts efficiently.',
      path: '/services/ai-automation',
    },
    {
      id: 'content-marketing',
      name: 'Content Marketing',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      summary:
        'Establish thought leadership with strategic content that educates and converts. From blog posts to video series, we develop comprehensive content strategies that attract, engage, and nurture prospects through your sales funnel.',
      path: '/services/content-marketing',
    },
  ];

  return (
    <>
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#1A3263] to-[#0f1f40] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1]">
            Services That Drive Sales
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Each service is built around business growth, not vanity metrics. We focus on
            what actually moves the needle: leads, conversions, and revenue.
          </p>
        </div>
      </section>

      <Section background="white" padding="xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} padding="none" hover className="overflow-hidden group">
              <div className="relative h-[300px] overflow-hidden">
                {service.carousel && service.images ? (
                  <>
                    {service.images.map((img, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === socialMediaSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img
                          src={img.image}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                      {service.images.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === socialMediaSlide
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-6">
                <a
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 group/link"
                >
                  <h2 className="text-2xl font-bold text-black group-hover/link:text-[#1A3263] group-hover/link:underline transition-all duration-300">
                    {service.name}
                  </h2>
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.summary}
                </p>

                <a
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1A3263] text-white font-semibold rounded-lg hover:bg-white hover:text-black border-2 border-transparent hover:border-[#1A3263] transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Tell us what you want to achieve and we'll map out the best strategy for your business.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="text-lg px-10 py-5">
            Let's Talk About Your Goals
          </Button>
        </div>
      </Section>
    </>
  );
}
