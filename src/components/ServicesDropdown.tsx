import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ChevronDown, Sparkles, TrendingUp, Target, Users, Zap, FileText, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  name: string;
  path: string;
  icon: any;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export default function ServicesDropdown() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'creative-design',
      title: 'Creative & Design',
      services: [
        {
          name: 'Graphic Design',
          path: '/services/graphic-design',
          icon: Sparkles,
          description: 'Stunning visuals that capture attention and drive engagement',
        },
        {
          name: 'Web Design',
          path: '/services/web-design',
          icon: Monitor,
          description: 'High-converting websites that work as your 24/7 salesperson',
        },
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      services: [
        {
          name: 'SEO',
          path: '/services/seo',
          icon: TrendingUp,
          description: 'Dominate search rankings and attract high-intent buyers',
        },
        {
          name: 'Paid Ads',
          path: '/services/paid-ads',
          icon: Target,
          description: 'High-performing campaigns that deliver measurable ROI',
        },
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media',
      services: [
        {
          name: 'Social Media Management',
          path: '/services/social-media-management',
          icon: Users,
          description: 'Build your brand presence across all major platforms',
        },
      ],
    },
    {
      id: 'content',
      title: 'Content Marketing',
      services: [
        {
          name: 'Content Marketing',
          path: '/services/content-marketing',
          icon: FileText,
          description: 'Strategic content that educates and converts prospects',
        },
      ],
    },
    {
      id: 'automation',
      title: 'AI & Automation',
      services: [
        {
          name: 'AI Automation',
          path: '/services/ai-automation',
          icon: Zap,
          description: 'Streamline operations with cutting-edge AI solutions',
        },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>, categoryId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCategory(categoryId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );
      if (clickedOutside) {
        setOpenCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions designed to grow your business and maximize your ROI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (dropdownRefs.current[category.id] = el)}
            className="relative"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              onKeyDown={(e) => handleKeyPress(e, category.id)}
              className={`w-full flex items-center justify-between px-6 py-5 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl min-h-[60px] md:min-h-[72px] ${
                openCategory === category.id
                  ? 'bg-[#1A3263] text-white border-l-4 border-[#1A3263]'
                  : 'text-black hover:bg-[#1A3263] hover:text-white'
              } focus:outline-none focus:ring-2 focus:ring-[#1A3263] focus:ring-offset-2`}
              aria-expanded={openCategory === category.id}
              aria-controls={`dropdown-${category.id}`}
            >
              <span className="text-lg md:text-xl font-semibold text-left">
                {category.title}
              </span>
              <ChevronDown
                className={`h-6 w-6 flex-shrink-0 ml-3 transition-transform duration-300 ${
                  openCategory === category.id ? 'rotate-180' : 'rotate-0'
                }`}
                style={{ color: openCategory === category.id ? 'white' : '#1A3263' }}
              />
            </button>

            <div
              id={`dropdown-${category.id}`}
              className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openCategory === category.id
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4">
                {category.services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1A3263]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1A3263] transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-[#1A3263] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-black group-hover:text-[#1A3263] transition-colors duration-200 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
