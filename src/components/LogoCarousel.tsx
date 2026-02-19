export default function LogoCarousel() {
  const logos = [
    { name: 'Orient Cleaning Services', src: '/logos/orient-cleaning.png' },
    { name: 'Voltmatic Energy Solutions', src: '/logos/voltmatic.png' },
    { name: 'Achego Electricals', src: '/logos/achego.png' },
    { name: 'Curatelove', src: '/logos/curatelove.png' },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 font-semibold text-sm tracking-wider uppercase mb-12">
          TRUSTED BY GROWING BUSINESSES AND AMBITIOUS FOUNDERS
        </h2>

        <div className="relative">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-rtl hover:pause">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
