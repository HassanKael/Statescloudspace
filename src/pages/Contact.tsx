import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { supabase, ContactSubmission } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    website: '',
    service_interest: '',
    monthly_budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          business_name: formData.business_name || null,
          email: formData.email,
          phone: formData.phone || null,
          website: formData.website || null,
          service_interest: formData.service_interest,
          monthly_budget: formData.monthly_budget || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        business_name: '',
        email: '',
        phone: '',
        website: '',
        service_interest: '',
        monthly_budget: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again or contact us directly.');
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@statescloudspace.com',
      link: 'mailto:info@statescloudspace.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 745 296 323',
      link: 'tel:+254745296323',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/254745296323',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      subtitle: 'Remote clients welcome',
    },
  ];

  return (
    <>
      <Section background="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-base md:text-lg text-white">
            Tell us about your business and what you want to achieve. We'll get back to you
            within 24–48 hours.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card padding="lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-[#F26419]/10 border border-[#F26419] rounded-lg flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#F26419] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F26419]">Message sent successfully!</p>
                    <p className="text-sm text-neutral-700">
                      We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-600">Something went wrong</p>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="business_name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business_name"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service_interest"
                      name="service_interest"
                      required
                      value={formData.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="SEO">SEO</option>
                      <option value="Paid Ads">Paid Ads</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Not sure / need guidance">Not sure / need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="monthly_budget" className="block text-sm font-medium text-neutral-700 mb-2">
                      Monthly Marketing Budget
                    </label>
                    <select
                      id="monthly_budget"
                      name="monthly_budget"
                      value={formData.monthly_budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="Less than KSH 50,000">Less than KSH 50,000</option>
                      <option value="KSH 50,000 - KSH 100,000">KSH 50,000 - KSH 100,000</option>
                      <option value="KSH 100,000 - KSH 250,000">KSH 100,000 - KSH 250,000</option>
                      <option value="KSH 250,000 - KSH 500,000">KSH 250,000 - KSH 500,000</option>
                      <option value="KSH 500,000+">KSH 500,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are your goals? What challenges are you facing? How can we help?"
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status === 'loading'}
                  className="bg-[#F26419] hover:bg-[#D15614] text-white"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} padding="md">
                    <div className="flex items-start">
                      <div className="bg-[#F26419]/10 rounded-full p-3 mr-4">
                        <info.icon className="h-5 w-5 text-[#F26419]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A3263] mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-neutral-700 hover:text-[#F26419] transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-700">{info.value}</p>
                        )}
                        {info.subtitle && (
                          <p className="text-sm text-neutral-700 mt-1">{info.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card padding="lg" className="bg-gradient-to-br from-[#F26419]/10 to-[#1A3263]/10">
              <h3 className="font-bold text-lg mb-3">Prefer to chat?</h3>
              <p className="text-neutral-700 mb-4">
                Get instant responses to your questions on WhatsApp.
              </p>
              <Button
                href="https://wa.me/254745296323"
                external
                variant="primary"
                size="md"
                fullWidth
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start WhatsApp Chat
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
