import { Code, MessageCircle, Zap, Shield, Smartphone, Brain, TrendingUp } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

export default function ChatbotDemo() {
  return (
    <div className="min-h-screen">
      <Section className="bg-gradient-to-br from-accent to-accent-dark text-white py-20">
        <div className="text-center max-w-4xl mx-auto">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">AI Chatbot Widget</h1>
          <p className="text-xl mb-8 text-white/90">
            Production-ready AI chatbot that converts visitors into WhatsApp leads
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/chatbot-embed.html"
              target="_blank"
              className="bg-white text-accent px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all inline-flex items-center space-x-2"
            >
              <Code className="w-5 h-5" />
              <span>View Embed Code</span>
            </a>
            <a
              href="https://makersuite.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all inline-flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Get Free API Key</span>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with performance, conversions, and user experience in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
            <p className="text-gray-600">
              Google Gemini integration with smart fallback responses for 24/7 availability
            </p>
          </Card>

          <Card className="text-center">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">WhatsApp Integration</h3>
            <p className="text-gray-600">
              Auto-escalates to WhatsApp after 5 messages with pre-filled service details
            </p>
          </Card>

          <Card className="text-center">
            <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mobile Responsive</h3>
            <p className="text-gray-600">
              Beautiful on all devices with smooth animations and intuitive UX
            </p>
          </Card>

          <Card className="text-center">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Data Persistence</h3>
            <p className="text-gray-600">
              Saves chat history locally so users never lose their conversation
            </p>
          </Card>

          <Card className="text-center">
            <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Detection</h3>
            <p className="text-gray-600">
              Automatically detects which service users are interested in
            </p>
          </Card>

          <Card className="text-center">
            <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">High Conversion</h3>
            <p className="text-gray-600">
              Optimized prompts and CTAs to turn visitors into qualified leads
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Quick Setup</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Get Your Free API Key</h3>
                  <p className="text-gray-600 mb-4">
                    Visit Google AI Studio and get your free Gemini API key. The free tier includes 60 requests per minute.
                  </p>
                  <a
                    href="https://makersuite.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Get API Key</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Add to Environment Variables</h3>
                  <p className="text-gray-600 mb-4">
                    Add your API key to the .env file:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    VITE_GEMINI_API_KEY=your_api_key_here
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Test the Chatbot</h3>
                  <p className="text-gray-600 mb-4">
                    The chatbot is already integrated! Look for the orange button in the bottom-right corner.
                    It will auto-open after 3 seconds.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Pro tip:</strong> Try typing "Need SEO" or "Let's start" to see the smart service
                      detection and WhatsApp integration in action!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Embed Anywhere</h2>
          <p className="text-center text-gray-600 mb-8">
            Use the standalone HTML version to embed on any website
          </p>

          <Card className="bg-gray-900 text-white">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`<!-- Add to your website's HTML -->
<script>
  // Copy code from /public/chatbot-embed.html
  // Replace YOUR_GEMINI_API_KEY_HERE with your API key
</script>`}</code>
            </pre>
          </Card>

          <div className="mt-8 text-center">
            <a
              href="/chatbot-embed.html"
              target="_blank"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>View Full Embed Code</span>
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Start Converting Visitors Today</h2>
          <p className="text-xl mb-8 text-white/90">
            The chatbot is production-ready and optimized for conversions. Just add your API key and watch
            the leads roll in!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://makersuite.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Get Free API Key</span>
            </a>
            <a
              href="/contact"
              className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Need Help? Contact Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
