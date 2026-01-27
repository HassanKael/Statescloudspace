import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/your-number' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/untitled_design_(5).png"
                alt="Statescloudspace"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-heading font-bold text-xl">
                Statescloudspace
              </span>
            </div>
            <p className="text-neutral-100 mb-4 max-w-md">
              Statescloudspace is a digital marketing partner helping businesses design,
              automate, and scale their online growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-100 hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-100 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-100">
              <li>
                <a href="mailto:info@statescloudspace.com" className="hover:text-secondary transition-colors">
                  info@statescloudspace.com
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="hover:text-secondary transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li>Nairobi, Kenya</li>
              <li className="text-sm pt-2">Remote clients welcome</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-neutral-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Statescloudspace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
