import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '254745296323';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I need help with your digital marketing services.');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[320px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="bg-[#E5DDD5] p-4 max-h-[400px] overflow-y-auto space-y-3">
            {/* Greeting Message */}
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
              <p className="text-gray-800 text-sm font-medium mb-1">
                Ready to Grow Your Business?
              </p>
            </div>

            {/* Welcome Message */}
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
              <p className="text-gray-800 text-sm">
                Hi 👋, welcome to <span className="font-semibold">ProServe B2B Solutions</span>
              </p>
            </div>

            {/* Services Message */}
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
              <p className="text-gray-800 text-sm leading-relaxed">
                Need help with SEO, Paid Ads, Social Media Management, AI Automation, Web Design, or Content Marketing? Chat with our team now for a customized growth plan.
              </p>
            </div>

            {/* Watermark */}
            <div className="text-center pt-2">
              <p className="text-gray-400 text-xs">Activate Windows</p>
              <p className="text-gray-400 text-xs">Go to Settings to activate</p>
            </div>
          </div>

          {/* Open Chat Button */}
          <div className="bg-white p-4">
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Open Chat
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {isOpen ? (
          <X className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <>
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </>
        )}
      </button>
    </>
  );
}
