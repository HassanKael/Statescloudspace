import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '254745296323';

export default function Chatbot() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I need help with your digital marketing services.');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
}
