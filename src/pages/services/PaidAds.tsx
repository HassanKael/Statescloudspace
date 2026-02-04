import { CheckCircle } from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';

export default function PaidAds() {
  const platforms = [
    {
      name: 'TikTok',
      headline: 'TikTok Domination',
      logo: '🎵',
      gradient: 'from-[#00f2ea] to-[#ff0050]',
      benefits: [
        'Viral campaigns targeting Gen Z and millennials',
        'Low-cost customer acquisition',
        'Performance-driven creative production',
        'Influencer partnership strategies',
      ],
      cta: 'Start TikTok Ads',
    },
    {
      name: 'Meta (Facebook)',
      headline: 'Facebook Precision',
      logo: '📘',
      gradient: 'from-[#1877f2] to-[#0c63d4]',
      benefits: [
        'Advanced audience segmentation',
        'Retargeting and lookalike audiences',
        'Lead generation campaigns',
        'Conversion-optimized ad creative',
      ],
      cta: 'Launch Facebook Ads',
    },
    {
      name: 'Instagram',
      headline: 'Instagram Engagement',
      logo: '📸',
      gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
      benefits: [
        'Story and Reel ad placements',
        'E-commerce shopping integrations',
        'Brand awareness campaigns',
        'Influencer collaborations',
      ],
      cta: 'Start Instagram Ads',
    },
    {
      name: 'Google Ads',
      headline: 'Google Search Power',
      logo: '🔍',
      gradient: 'from-[#4285f4] via-[#ea4335] to-[#fbbc05]',
      benefits: [
        'High-intent search campaigns',
        'Display and YouTube advertising',
        'Shopping ads for e-commerce',
        'Local service ads for Nairobi businesses',
      ],
      cta: 'Launch Google Ads',
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5046e5] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5046e5] rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Paid Ads
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-12 max-w-5xl mx-auto font-medium">
            Master TikTok, Meta (Facebook & Instagram), and Google Ads for explosive growth and qualified leads
          </p>
        </div>
      </section>

      <Section background="gray" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-[#5046e5]/10 to-transparent"></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${platform.gradient} flex items-center justify-center text-4xl shadow-lg`}>
                    {platform.logo}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-6 text-center">
                    {platform.headline}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {platform.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#5046e5] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant="primary"
                    className="w-full bg-[#5046e5] hover:bg-[#4039c9] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#5046e5]/50"
                  >
                    {platform.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5046e5] rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5046e5] rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a free paid ads audit and discover exactly how we can drive qualified leads and explosive growth for your Nairobi business.
              </p>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="bg-[#5046e5] text-white border-[#5046e5] hover:bg-white hover:text-[#5046e5] hover:border-white text-lg px-12 py-5 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Audit
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
