import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, X, Search, TrendingUp, BarChart3,
  Target, Zap, Shield, Globe, Sparkles, Star, Award, MapPin
} from 'lucide-react';
import Section from '../../components/Section';
import Button from '../../components/Button';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function SEO() {
  const [trafficGoal, setTrafficGoal] = useState(10000);
  const [selectedProcess, setSelectedProcess] = useState<ProcessStep | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'AI Site Audit',
      description: 'We scan 100+ issues robots miss. Our AI crawlers detect broken links, slow pages, missing schema, duplicate content, and Core Web Vitals problems your competitors ignore.',
      icon: '🔍',
    },
    {
      id: 2,
      title: 'Competitor Annihilation',
      description: 'Steal their rankings legally. We reverse-engineer top competitors\' backlink profiles, content gaps, and keyword strategies to outrank them in 90 days.',
      icon: '⚔️',
    },
    {
      id: 3,
      title: 'Content Fortress',
      description: 'AI + human content that Google loves. SEO-optimized articles, landing pages, and blog posts written by Kenyan experts who understand your local market.',
      icon: '✍️',
    },
    {
      id: 4,
      title: 'Link Velocity',
      description: 'Safe, high-authority backlinks. We build relationships with Kenyan and international publications to earn links that boost your domain authority naturally.',
      icon: '🔗',
    },
    {
      id: 5,
      title: '24/7 Rank Tracking',
      description: 'Daily reports, zero guesswork. Real-time dashboard shows keyword positions, traffic trends, and ROI metrics. Get alerts when rankings change.',
      icon: '📊',
    },
  ];

  const whyChooseUs = [
    {
      title: 'AI Keyword Domination',
      subtitle: 'Hyper-local Kenyan targeting',
      demo: 'kenyan-keywords',
      metrics: 'Rank #1 in 90 days',
    },
    {
      title: 'Content That Converts',
      subtitle: 'AI + human expertise',
      demo: 'content-generation',
      metrics: '+300% organic traffic',
    },
    {
      title: 'Technical SEO on Autopilot',
      subtitle: 'Zero manual fixes needed',
      demo: 'technical-scan',
      metrics: '100/100 Core Web Vitals',
    },
    {
      title: 'Local SEO Mastery',
      subtitle: 'Dominate Nairobi & beyond',
      demo: 'local-map',
      metrics: '5★ reviews multiplying',
    },
  ];

  const projectedRevenue = (trafficGoal * 0.02 * 500).toLocaleString();
  const projectedLeads = Math.round(trafficGoal * 0.02);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % whyChooseUs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#1e1b4b] via-[#7c3aed]/20 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#facc15]/30 to-transparent animate-pulse-slow"></div>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#facc15] rounded-full animate-pulse"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 100 + 20 + 'px',
                  left: Math.random() * 100 + '%',
                  bottom: 0,
                  animationDelay: Math.random() * 2 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's',
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#facc15] rounded-full animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 20 + 15 + 's',
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 animate-fadeIn">
                <span className="text-[#facc15] font-bold tracking-wider uppercase text-sm px-4 py-2 bg-[#facc15]/10 backdrop-blur-sm rounded-full border border-[#facc15]/30">
                  Nairobi's #1 AI SEO Agency
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] animate-slideUp">
                AI-Powered SEO That Delivers Real ROI
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Dominate Google rankings with AI automation + Kenyan market expertise. Watch your business explode with qualified leads while competitors wonder what hit them.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#7c3aed]/30">
                  <span className="text-[#facc15] font-black text-2xl">247%</span>
                  <span className="text-white ml-2">Avg Traffic Growth</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#7c3aed]/30">
                  <span className="text-[#facc15] font-black text-2xl">90</span>
                  <span className="text-white ml-2">Day Results</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#roi-calculator" variant="primary" size="lg" className="text-lg px-10 py-5 bg-[#facc15] text-black hover:bg-white hover:text-black border-2 border-[#facc15]">
                  Piga Simu Sasa!
                </Button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300"
                >
                  Free Site Audit
                </Link>
              </div>
            </div>

            <div id="roi-calculator" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-[#facc15]" />
                Live ROI Calculator
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-3 font-semibold">
                    Monthly Traffic Goal: <span className="text-[#facc15] text-xl">{trafficGoal.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={trafficGoal}
                    onChange={(e) => setTrafficGoal(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#facc15]"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#7c3aed]/20 to-[#facc15]/10 border border-[#7c3aed]/30 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projected Leads/Month:</span>
                    <span className="text-[#facc15] text-2xl font-black">{projectedLeads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projected Revenue:</span>
                    <span className="text-[#facc15] text-2xl font-black">KSh {projectedRevenue}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      Based on 2% conversion rate at KSh 500 avg. customer value
                    </p>
                  </div>
                </div>
                <Button href="/contact" variant="primary" className="w-full bg-[#facc15] text-black hover:bg-white font-bold">
                  Get This Growth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              Why Kenyan Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">AI-powered solutions that understand your local market</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((card, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 cursor-pointer transition-all duration-500 ${
                  activeCard === index
                    ? 'border-[#7c3aed] shadow-2xl shadow-[#7c3aed]/20 scale-105'
                    : 'border-gray-200 hover:border-[#facc15] hover:shadow-xl'
                }`}
                onClick={() => setActiveCard(index)}
              >
                <div className="absolute -top-3 -right-3 bg-[#facc15] text-black font-black px-3 py-1 rounded-full text-sm">
                  {card.metrics}
                </div>

                <div className="mb-4">
                  {card.demo === 'kenyan-keywords' && <KeywordDemo active={activeCard === index} />}
                  {card.demo === 'content-generation' && <ContentDemo active={activeCard === index} />}
                  {card.demo === 'technical-scan' && <TechnicalDemo active={activeCard === index} />}
                  {card.demo === 'local-map' && <LocalMapDemo active={activeCard === index} />}
                </div>

                <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="relative py-20 bg-gradient-to-br from-[#1e1b4b] via-black to-[#1e1b4b] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#facc15] rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-300">Click any step to see details</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setSelectedProcess(step)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-[#7c3aed]/20 hover:border-[#7c3aed] transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{step.title}</h3>
                <div className="absolute top-2 right-2 text-[#facc15] text-xs font-bold bg-[#facc15]/20 px-2 py-1 rounded">
                  0{step.id}
                </div>
              </button>
            ))}
          </div>

          {selectedProcess && (
            <div className="bg-white/10 backdrop-blur-md border border-[#7c3aed] rounded-2xl p-8 animate-slideUp">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedProcess.icon}</div>
                  <div>
                    <h3 className="text-3xl font-black text-white">{selectedProcess.title}</h3>
                    <p className="text-[#facc15]">Step {selectedProcess.id} of 5</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProcess(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{selectedProcess.description}</p>
            </div>
          )}
        </div>
      </section>

      <Section background="gray" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Real Results
            </h2>
            <p className="text-xl text-gray-600">Data doesn't lie - see how we compare</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#7c3aed]/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e1b4b] to-[#7c3aed]">
                    <th className="text-left p-6 text-white font-bold text-lg">Metric</th>
                    <th className="text-center p-6 text-white/70 font-semibold">Industry Average</th>
                    <th className="text-center p-6 text-[#facc15] font-black text-xl">Our Clients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-800">Organic Traffic Growth</td>
                    <td className="text-center p-6 text-gray-600">+15%</td>
                    <td className="text-center p-6 font-black text-3xl text-[#7c3aed]">+247%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-800">Keyword Rankings (Top 3)</td>
                    <td className="text-center p-6 text-gray-600">20/month</td>
                    <td className="text-center p-6 font-black text-3xl text-[#7c3aed]">150+/month</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-800">ROI Timeline</td>
                    <td className="text-center p-6 text-gray-600">12+ months</td>
                    <td className="text-center p-6 font-black text-3xl text-[#7c3aed]">90 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-800">Client Satisfaction</td>
                    <td className="text-center p-6 text-gray-600">78%</td>
                    <td className="text-center p-6 font-black text-3xl text-[#7c3aed]">98%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#1e1b4b] to-[#7c3aed] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-[#facc15] fill-[#facc15]" />
                  <Star className="h-6 w-6 text-[#facc15] fill-[#facc15]" />
                  <Star className="h-6 w-6 text-[#facc15] fill-[#facc15]" />
                  <Star className="h-6 w-6 text-[#facc15] fill-[#facc15]" />
                  <Star className="h-6 w-6 text-[#facc15] fill-[#facc15]" />
                </div>
                <blockquote className="text-2xl font-bold mb-4">
                  "SEO tripled my leads in 90 days. Now I'm turning away clients!"
                </blockquote>
                <p className="text-white/80 mb-2">George Oketch</p>
                <p className="text-[#facc15] font-semibold">Founder, OkeTech Solutions (Nairobi)</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Traffic Growth</span>
                    <span className="text-[#facc15] text-2xl font-black">+340%</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">New Keywords Ranking</span>
                    <span className="text-[#facc15] text-2xl font-black">187</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Revenue Increase</span>
                    <span className="text-[#facc15] text-2xl font-black">KSh 2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="relative py-20 bg-gradient-to-br from-black via-[#1e1b4b] to-black overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#facc15] rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md border-2 border-[#facc15] rounded-2xl px-8 py-4">
              <div className="text-[#facc15] text-4xl font-black mb-2">247%</div>
              <div className="text-white text-sm">Avg Traffic Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border-2 border-[#7c3aed] rounded-2xl px-8 py-4">
              <div className="text-[#7c3aed] text-4xl font-black mb-2">90-Day</div>
              <div className="text-white text-sm">Results Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border-2 border-white rounded-2xl px-8 py-4">
              <div className="text-white text-4xl font-black mb-2">#1</div>
              <div className="text-white text-sm">In Nairobi</div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Dominate Google?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 200+ Kenyan businesses crushing their SEO goals. Get your free audit and see exactly how we'll grow your rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="text-lg px-12 py-6 bg-[#facc15] text-black hover:bg-white hover:scale-105 font-black"
            >
              Tuanzie Sasa! (Start Now!)
            </Button>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-12 py-6 text-lg bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function KeywordDemo({ active }: { active: boolean }) {
  const [keyword, setKeyword] = useState('');
  const suggestions = ['Nairobi pet food delivery', 'Best coffee shop Westlands', 'Affordable web design Kenya'];

  useEffect(() => {
    if (active) {
      let index = 0;
      const interval = setInterval(() => {
        setKeyword(suggestions[index]);
        index = (index + 1) % suggestions.length;
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-2 bg-white rounded px-3 py-2 border border-gray-300 mb-2">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={keyword}
          readOnly
          className="flex-1 text-sm outline-none bg-transparent"
          placeholder="Search keywords..."
        />
      </div>
      {active && keyword && (
        <div className="bg-white rounded border border-gray-200 p-2 animate-slideInUp">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-700">{keyword}</span>
            <span className="bg-green-500 text-white px-2 py-0.5 rounded font-bold">#1</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ContentDemo({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
        <span className="text-xs font-semibold text-gray-700">AI Writing...</span>
      </div>
      <div className="space-y-1">
        <div className="h-2 bg-gray-200 rounded" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        <div className="h-2 bg-gray-200 rounded" style={{ width: `${Math.max(0, Math.min(progress - 20, 100))}%` }}></div>
        <div className="h-2 bg-gray-200 rounded" style={{ width: `${Math.max(0, Math.min(progress - 40, 100))}%` }}></div>
      </div>
      {progress >= 100 && (
        <div className="mt-3 bg-green-50 border border-green-200 rounded px-2 py-1">
          <p className="text-xs text-green-800 font-semibold">✓ +300% traffic boost!</p>
        </div>
      )}
    </div>
  );
}

function TechnicalDemo({ active }: { active: boolean }) {
  const [scanning, setScanning] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (active && !scanning) {
      setScanning(true);
      setFixed(false);
      setTimeout(() => setFixed(true), 1500);
      setTimeout(() => {
        setScanning(false);
        setFixed(false);
      }, 3000);
    }
  }, [active]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-gray-700">Core Web Vitals</span>
        {scanning && <Zap className="h-4 w-4 text-yellow-500 animate-pulse" />}
      </div>
      <div className="space-y-2">
        <div className={`flex items-center justify-between text-xs p-2 rounded ${fixed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <span>Speed</span>
          <span className={`font-bold ${fixed ? 'text-green-600' : 'text-red-600'}`}>
            {fixed ? '100' : '45'}
          </span>
        </div>
        <div className={`flex items-center justify-between text-xs p-2 rounded ${fixed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <span>SEO</span>
          <span className={`font-bold ${fixed ? 'text-green-600' : 'text-red-600'}`}>
            {fixed ? '100' : '62'}
          </span>
        </div>
      </div>
    </div>
  );
}

function LocalMapDemo({ active }: { active: boolean }) {
  const [stars, setStars] = useState(3);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setStars((prev) => (prev >= 5 ? 3 : prev + 1));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="h-4 w-4 text-red-500" />
        <span className="text-xs font-semibold text-gray-700">Nairobi CBD</span>
      </div>
      <div className="bg-white rounded p-2 border border-gray-200">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-600">{stars} star reviews</p>
      </div>
    </div>
  );
}
