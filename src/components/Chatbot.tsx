import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const WHATSAPP_NUMBER = '254745296323';

const SYSTEM_PROMPT = `You are a helpful sales bot for States Cloudspace, a digital marketing agency in Nairobi, Kenya. Respond conversationally and promote these services:

1. Graphic Design - Custom branding, logos, social media graphics
2. SEO - 200% traffic boost, local SEO for Nairobi businesses, #1 rankings
3. Paid Ads - Facebook & Google Ads with proven ROI
4. Social Media Management - Engagement growth, content calendars
5. AI Automation - Custom prompts, workflows, chatbots
6. Content Marketing - Viral posts, blog writing, copywriting
7. Website Design - Modern UI/UX, responsive designs

For queries matching a service, explain benefits briefly, share success stats, and offer a free consultation. After 3-5 replies or keywords like 'start', 'quote', 'now', 'interested', say: "Awesome! Chat live on WhatsApp for your custom plan 👇"

Keep replies under 100 words, use emojis tastefully, and end with a call-to-action. Be energetic and professional.`;

const FALLBACK_RESPONSES: Record<string, string> = {
  seo: "Our SEO service ranks you #1 locally in Nairobi! We've helped clients achieve 200% traffic growth. Want a free SEO audit? 📈",
  'graphic design': "We create stunning custom branding, logos, and social media graphics that make your brand stand out! 🎨 Check out our portfolio!",
  'paid ads': "Our Facebook & Google Ads deliver proven ROI! We manage your ad spend and optimize for conversions. Ready to scale? 💰",
  'social media': "We'll grow your social presence with engaging content and strategic management. Let's boost your engagement! 📱",
  'ai automation': "We build custom AI solutions - chatbots, workflows, and prompts that save you hours daily! Let's automate your business! 🤖",
  'content marketing': "We create viral content that drives real engagement. Blog posts, social copy, and more! Let's tell your story! ✍️",
  'website design': "We design beautiful, responsive websites with amazing UI/UX. Your online presence starts here! 💻",
  default: "Hey! We specialize in digital marketing: Graphic design, SEO, paid ads, social media, AI automation, content, and website design. What interests you? 🚀"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasAutoOpened = useRef(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatbot_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const timer = setTimeout(() => {
      if (!hasAutoOpened.current) {
        setIsOpen(true);
        hasAutoOpened.current = true;
        addBotMessage("Hey! How can I help with your marketing? 🚀 Graphic design, SEO, ads, social, AI automation, content, or website design?");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot_messages', JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const shouldShowWhatsApp = (userMessage: string, count: number) => {
    const keywords = ['start', 'quote', 'now', 'interested', 'price', 'cost', 'how much', 'lets go', "let's go"];
    const hasKeyword = keywords.some(keyword => userMessage.toLowerCase().includes(keyword));
    return hasKeyword || count >= 5;
  };

  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(FALLBACK_RESPONSES)) {
      if (message.includes(key)) {
        return response;
      }
    }

    return FALLBACK_RESPONSES.default;
  };

  const getServiceFromMessage = (message: string): string => {
    const msg = message.toLowerCase();
    if (msg.includes('seo')) return 'SEO';
    if (msg.includes('graphic') || msg.includes('design') || msg.includes('logo')) return 'Graphic Design';
    if (msg.includes('ad') || msg.includes('facebook') || msg.includes('google')) return 'Paid Ads';
    if (msg.includes('social')) return 'Social Media Management';
    if (msg.includes('ai') || msg.includes('automation')) return 'AI Automation';
    if (msg.includes('content') || msg.includes('blog')) return 'Content Marketing';
    if (msg.includes('website') || msg.includes('web')) return 'Website Design';
    return 'Marketing Services';
  };

  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      return getFallbackResponse(userMessage);
    }

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\n\nAssistant:`
            }]
          }],
          generationConfig: {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 200,
          },
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || getFallbackResponse(userMessage);
      return botResponse;
    } catch (error) {
      console.error('Gemini API error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const newCount = messageCount + 1;
    setMessageCount(newCount);

    setTimeout(async () => {
      const botResponse = await callGeminiAPI(inputValue);
      setIsTyping(false);
      addBotMessage(botResponse);

      if (shouldShowWhatsApp(inputValue, newCount)) {
        setTimeout(() => {
          setShowWhatsApp(true);
          const service = getServiceFromMessage(inputValue);
          addBotMessage(`Awesome! Chat live on WhatsApp for your custom plan 👇`);
        }, 1000);
      }
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const lastUserMessage = messages.filter(m => m.sender === 'user').pop()?.text || 'I need help with marketing';
    const service = getServiceFromMessage(lastUserMessage);
    const message = encodeURIComponent(`Hi from the website! I need help with ${service}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent hover:bg-accent-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-slideInUp overflow-hidden border border-gray-200 sm:w-[400px]"
          style={{ maxHeight: 'calc(100vh - 48px)' }}
        >
          <div className="bg-accent text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">States Cloudspace</h3>
                <p className="text-xs text-white/90">Digital Marketing</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slideInUp`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-accent text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-slideInUp">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {showWhatsApp && (
              <div className="flex justify-center animate-slideInUp">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-accent hover:bg-accent-dark disabled:bg-gray-300 text-white rounded-full p-2 transition-colors duration-300 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
