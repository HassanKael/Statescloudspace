import ServicesDropdown from '../components/ServicesDropdown';
import Section from '../components/Section';

export default function ServicesDropdownDemo() {
  return (
    <>
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#1A3263] via-black to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
            Services Dropdown Demo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore our interactive services dropdown with smooth animations and full accessibility
          </p>
        </div>
      </section>

      <Section background="white" padding="xl">
        <ServicesDropdown />
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            Features Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                Responsive Design
              </h3>
              <p className="text-gray-700">
                Fully responsive across all devices - mobile, tablet, and desktop with touch-friendly targets (48px+)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                Smooth Animations
              </h3>
              <p className="text-gray-700">
                Arrow rotates 180° with smooth 0.3s transitions, dropdown slides with ease-in-out effect
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                One at a Time
              </h3>
              <p className="text-gray-700">
                Only one dropdown opens at a time - others automatically close for clean UX
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                Keyboard Accessible
              </h3>
              <p className="text-gray-700">
                Full keyboard support with Enter/Space to toggle, focus states, and ARIA labels
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                Brand Colors
              </h3>
              <p className="text-gray-700">
                Uses your main brand color #1A3263 for arrows, hover states, and active states
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                Clean Typography
              </h3>
              <p className="text-gray-700">
                Inter font with system fallbacks, proper hierarchy, and readable text sizes
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Use
          </h2>
          <p className="text-lg text-gray-700">
            This component is production-ready and can be integrated anywhere in your website
          </p>
        </div>
      </Section>
    </>
  );
}
