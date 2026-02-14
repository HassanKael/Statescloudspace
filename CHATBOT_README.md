# States Cloudspace AI Chatbot Widget 🚀

**Production-ready floating chatbot that converts website visitors into qualified WhatsApp leads**

[![Status](https://img.shields.io/badge/status-production--ready-green)]()
[![AI](https://img.shields.io/badge/AI-Google%20Gemini-blue)]()
[![Framework](https://img.shields.io/badge/framework-React%20%2B%20Vanilla%20JS-orange)]()

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Features](#features)
3. [Setup Guide](#setup-guide)
4. [Documentation](#documentation)
5. [Demo](#demo)
6. [Customization](#customization)
7. [Support](#support)

---

## ⚡ Quick Start

### 3 Minutes to Live

```bash
# 1. Get your free API key
# Visit: https://makersuite.google.com/app/apikey

# 2. Add to .env file
VITE_GEMINI_API_KEY=your_api_key_here

# 3. Refresh your website
# The chatbot is already integrated!
# Look for the orange button (bottom-right)
```

**That's it!** The chatbot is live on all pages.

---

## ✨ Features

### 🤖 AI-Powered Conversations
- Google Gemini 1.5 Flash integration
- Smart fallback responses
- Service-specific recommendations
- Natural, conversational tone

### 💬 WhatsApp Integration
- Auto-escalates after 5 messages or trigger keywords
- Pre-fills message with detected service
- Direct line: **+254 745 296 323**

### 🎨 Beautiful UI/UX
- Brand-matched orange theme (#F26419)
- Smooth animations and transitions
- Mobile-responsive design
- Professional Inter font

### 🧠 Smart Detection
- Automatically identifies user's service interest
- Context-aware responses
- Keyword-based intelligence

### 💾 Data Persistence
- Saves chat history locally
- Survives page refreshes
- Privacy-focused (no server storage)

### 📱 Mobile Optimized
- Fully responsive
- Touch-friendly
- Adapts to all screen sizes

---

## 🛠 Setup Guide

### Option 1: React Component (Current Setup)

**Already integrated!** Located at `src/components/Chatbot.tsx`

#### Configuration

1. **Get API Key:**
   ```
   Visit: https://makersuite.google.com/app/apikey
   Click "Create API Key"
   Copy your key
   ```

2. **Add to Environment:**
   ```env
   # .env file
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. **Restart Dev Server:**
   ```bash
   npm run dev
   ```

### Option 2: Standalone Embed (Any Website)

Perfect for WordPress, Shopify, Wix, or any HTML site.

1. **Open:** `public/chatbot-embed.html`
2. **Replace:** `YOUR_GEMINI_API_KEY_HERE` with your actual key
3. **Copy:** The entire HTML file content
4. **Paste:** Into your website's footer, before `</body>`

```html
<!-- Add to your site -->
<script src="https://yoursite.com/chatbot-embed.html"></script>
```

---

## 📚 Documentation

### Complete Guides

| Document | Description |
|----------|-------------|
| `CHATBOT_QUICK_START.md` | 3-minute setup guide |
| `CHATBOT_SETUP_GUIDE.md` | Comprehensive setup & configuration |
| `CHATBOT_FEATURES.md` | Complete feature list & technical details |
| `CHATBOT_README.md` | This file - overview & getting started |

### Key Files

| File | Purpose |
|------|---------|
| `src/components/Chatbot.tsx` | React component (integrated) |
| `public/chatbot-embed.html` | Standalone vanilla JS version |
| `src/pages/ChatbotDemo.tsx` | Demo page at `/chatbot-demo` |

---

## 🎯 Demo & Testing

### Live Demo
Visit `/chatbot-demo` on your site to see:
- Full feature showcase
- Setup instructions
- Live chatbot preview

### Test Commands

Try these to see different features:

| Command | Result |
|---------|--------|
| "Need SEO" | Shows SEO service pitch with stats |
| "Logo design" | Graphic design response |
| "Facebook ads" | Paid ads pitch |
| "Let's start" | Triggers WhatsApp button |
| "How much?" | Shows WhatsApp escalation |

### Expected Behavior

```
1. Auto-opens after 3 seconds ✓
2. Shows welcome message ✓
3. Responds to user messages ✓
4. Detects service interest ✓
5. Shows WhatsApp button after triggers ✓
6. Pre-fills WhatsApp message ✓
7. Saves chat history ✓
```

---

## 🎨 Customization

### Easy Changes

#### Change Phone Number
```typescript
// src/components/Chatbot.tsx (line 17)
const WHATSAPP_NUMBER = '254745296323'; // Change this

// public/chatbot-embed.html (line 267)
const WHATSAPP_NUMBER = '254745296323'; // Change this
```

#### Change Colors
```typescript
// Edit in tailwind.config.js
accent: {
  DEFAULT: '#F26419', // Your brand color
}
```

#### Change Welcome Message
```typescript
// src/components/Chatbot.tsx
addBotMessage("Your custom welcome message here! 🚀");
```

#### Change Auto-Open Delay
```typescript
// src/components/Chatbot.tsx
setTimeout(() => {
  setIsOpen(true);
  // ...
}, 3000); // Change from 3000ms (3 seconds)
```

### Advanced Customization

See `CHATBOT_SETUP_GUIDE.md` for:
- System prompt engineering
- Custom service responses
- API provider switching (OpenAI)
- Analytics integration
- Multi-language support

---

## 🔧 Technical Details

### Stack
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini 1.5 Flash
- **Icons:** Lucide React
- **Storage:** localStorage

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS/Android)

### Performance
- Lazy loads (3-second delay)
- Minimal bundle impact
- Efficient re-renders
- Optimized API calls

### API Costs

**Google Gemini (Recommended):**
- Free tier: 60 requests/minute
- 1000 visitors × 3 messages = **FREE**
- Perfect for most websites

**OpenAI Alternative:**
- GPT-4o-mini: ~$0.01/conversation
- 1000 conversations = $10

---

## 📊 Success Metrics

### Track These KPIs

- **Engagement Rate:** % who open chat
- **Message Rate:** Avg messages per session
- **Escalation Rate:** % who see WhatsApp button
- **Conversion Rate:** % who click WhatsApp

### Expected Performance

- Engagement: 10-20%
- Messages: 3-5 per session
- Escalation: 40-60%
- Conversion: 5-10%

---

## 🐛 Troubleshooting

### Chatbot Not Appearing
```bash
# Check if component is imported
# Check z-index conflicts
# Verify script loaded
# Check browser console for errors
```

### API Not Working
```bash
# Verify API key is correct
# Check rate limits (60/minute for free tier)
# Confirm key has proper permissions
# Bot will use fallback responses if API fails
```

### WhatsApp Not Showing
```bash
# Need 5+ messages OR trigger keywords
# Check messageCount state
# Verify showWhatsApp logic
```

### Chat History Not Saving
```bash
# Check localStorage is enabled
# Verify no privacy extensions blocking
# Check browser console for storage errors
```

---

## 📞 Support

Need help? We're here!

- **Email:** info@statescloudspace.com
- **WhatsApp:** +254 745 296 323
- **Website:** https://bolt.new/~/sb1-pcl8zabp

---

## 🚀 Deployment

### Production Checklist

- [ ] API key added to environment
- [ ] Tested on desktop & mobile
- [ ] WhatsApp integration verified
- [ ] Chat persistence confirmed
- [ ] All service responses tested
- [ ] Analytics tracking setup
- [ ] SSL certificate active (HTTPS)
- [ ] Performance optimized

### Deploy Commands

```bash
# Build for production
npm run build

# Deploy to hosting
# (Your hosting provider's deploy command)
```

---

## 🎓 Learn More

### Service Details
Visit your website's service pages to see how the chatbot integrates with:
- Graphic Design (`/services/graphic-design`)
- SEO (`/services/seo`)
- Paid Ads (`/services/paid-ads`)
- Social Media (`/services/social-media-management`)
- AI Automation (`/services/ai-automation`)
- Content Marketing (`/services/content-marketing`)
- Website Design (`/services/web-design`)

---

## 🎉 What's Next?

The chatbot is production-ready, but here are some ideas for Phase 2:

### Future Enhancements
- Multi-language support (Swahili, English)
- Voice message input
- File/image uploads
- Calendar scheduling
- CRM integration (Zoho, HubSpot)
- Email capture
- Lead scoring
- Advanced analytics

---

## 📝 License

Built exclusively for **States Cloudspace** Digital Marketing Agency

---

## 🌟 Credits

**Developed for:** States Cloudspace
**Location:** Nairobi, Kenya
**Website:** https://bolt.new/~/sb1-pcl8zabp
**Phone:** +254 745 296 323
**Email:** info@statescloudspace.com

---

## 💡 Pro Tips

1. **No API Key?** The bot still works with smart fallback responses!
2. **High Traffic?** Gemini free tier handles 60 requests/minute
3. **Mobile First:** Test on mobile devices - most traffic comes from phones
4. **Track Everything:** Add analytics to measure conversion rates
5. **Test Triggers:** Try different keywords to optimize escalation
6. **Update Prompts:** Refine based on common user questions
7. **Monitor Performance:** Check API usage monthly

---

**Ready to convert visitors into leads? The chatbot is live and waiting! 🚀**

Just add your API key and watch the magic happen. Check the bottom-right corner of your screen - it should auto-open in 3 seconds!

---

*Last Updated: January 2024*
*Version: 1.0.0 - Production Ready*
