export default function LogoCarousel() {
  const companies = [
    { name: 'Orient Cleaning Services', industry: 'Cleaning' },
    { name: 'Voltmatic Energy', industry: 'Energy Solutions' },
    { name: 'Achego Electricals', industry: 'Electrical Services' },
    { name: 'Jedi Pets', industry: 'Pet Foods' },
    { name: 'Curatelove', industry: 'E-commerce' },
    { name: 'VES Group', industry: 'Construction' },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 font-semibold text-sm tracking-wider uppercase mb-12">
          TRUSTED BY GROWING BUSINESSES AND AMBITIOUS FOUNDERS
        </h2>

        <div className="relative">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-rtl hover:pause">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="font-bold text-gray-900 text-base mb-1 group-hover:text-primary transition-colors duration-300">
                    {company.name}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {company.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
