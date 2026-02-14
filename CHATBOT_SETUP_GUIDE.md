# States Cloudspace AI Chatbot - Setup Guide

## Overview
Production-ready AI chatbot widget that converts visitors into WhatsApp leads. Features Google Gemini AI integration, smart service detection, and auto-escalation to WhatsApp.

## Features
- Auto-opens after 3 seconds with welcoming message
- AI-powered responses via Google Gemini API
- Service-specific intelligent responses
- Typing indicators and smooth animations
- Chat history persistence (localStorage)
- Mobile-responsive design
- Auto-escalation to WhatsApp after 5 messages or trigger keywords
- Fallback responses if API is unavailable
- Orange branded theme matching States Cloudspace

## Quick Setup

### Option 1: React Component (Already Integrated)
The chatbot is already integrated into your React app at `src/components/Chatbot.tsx`.

**Setup Steps:**
1. Get your free Gemini API key at https://makersuite.google.com/app/apikey
2. Add to your `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. Restart your dev server
4. The chatbot will appear on all pages

### Option 2: Standalone Embed (Any Website)
Use the standalone HTML file to embed on any website, even non-React sites.

**Setup Steps:**
1. Open `public/chatbot-embed.html`
2. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key (line 266)
3. Upload to your website or copy the code to your site's footer

**Embed Code:**
```html
<!-- Add before closing </body> tag -->
<script src="https://yoursite.com/chatbot-embed.html"></script>
```

Or inline the entire script into your HTML.

## Configuration

### API Keys

**Google Gemini (Recommended - Free & Fast):**
- Get key: https://makersuite.google.com/app/apikey
- 60 requests/minute free tier
- Best for high-traffic sites

**OpenAI Alternative:**
If you prefer ChatGPT, modify the API call in the code:
```javascript
const OPENAI_API_KEY = 'your_openai_key';
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  },
  body: JSON.stringify({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userMessage }
    ],
    max_tokens: 150
  })
});
```

### WhatsApp Number
Already configured to: **+254 745 296 323**

To change:
- React: Edit `WHATSAPP_NUMBER` in `src/components/Chatbot.tsx` (line 17)
- Standalone: Edit line 267 in `chatbot-embed.html`

### Customize Colors
The chatbot uses your brand colors:
- Primary: `#F26419` (Orange)
- Background: `#F9FAFB` (Light Gray)

To change colors, update CSS variables or Tailwind classes.

## How It Works

### Smart Service Detection
The bot automatically detects what service the user is asking about:
- "Need SEO" → Provides SEO-specific response
- "Logo design" → Graphic design response
- "Facebook ads" → Paid ads response
- And more...

### Auto WhatsApp Escalation
Shows WhatsApp button when:
- User sends 5+ messages, OR
- User types keywords: "start", "quote", "now", "interested", "price", "cost"

WhatsApp pre-fills with: "Hi from the website! I need help with [detected service]"

### Message Persistence
Chat history saves to localStorage so users don't lose their conversation on page refresh.

## Testing

### Test Service Responses
Try these messages:
- "Need SEO" → Should mention 200% traffic boost, free audit
- "Logo design" → Graphic design response
- "Facebook ads" → Paid ads ROI response
- "Let's start" → Should trigger WhatsApp button

### Test WhatsApp Flow
1. Chat for 5 messages OR type "interested"
2. WhatsApp button should appear
3. Click → Opens WhatsApp with pre-filled message
4. Message includes detected service

### Test Fallback Mode
Without API key, bot uses smart fallback responses based on keywords.

## Customization

### Change Initial Message
Edit the welcome message (appears 3 seconds after page load):
```javascript
addBotMessage("Hey! How can I help with your marketing? 🚀 Graphic design, SEO, ads, social, AI automation, content, or website design?");
```

### Adjust Auto-Open Delay
Change `3000` (3 seconds) to your preferred delay:
```javascript
setTimeout(() => {
  setIsOpen(true);
  // ...
}, 3000); // Change this number (milliseconds)
```

### Modify System Prompt
Edit `SYSTEM_PROMPT` to change how the AI responds. Current prompt optimizes for:
- Conversational tone
- Service promotion
- Brief responses (<100 words)
- Clear CTAs

### Add More Services
Add to fallback responses object:
```javascript
FALLBACK_RESPONSES = {
  'new service': "Your custom response here! 🎉",
  // ... existing services
};
```

## Production Checklist

- [ ] Added Gemini API key to environment variables
- [ ] Tested all service responses
- [ ] Verified WhatsApp button appears correctly
- [ ] Confirmed WhatsApp pre-filled message works
- [ ] Tested on mobile devices
- [ ] Checked chat history persistence
- [ ] Verified fallback responses work without API
- [ ] Tested auto-open timing (3 seconds)
- [ ] Confirmed chatbot doesn't interfere with other site elements

## Performance

### Optimizations Included
- Lazy loads after 3 seconds (doesn't slow initial page load)
- Efficient localStorage usage
- Debounced API calls
- Mobile-optimized CSS
- Minimal dependencies (vanilla JS version has zero dependencies)

### Analytics Tracking
To track chatbot usage, add event tracking:
```javascript
// After user sends message
gtag('event', 'chatbot_message', {
  'event_category': 'engagement',
  'event_label': 'user_message'
});

// When WhatsApp button clicked
gtag('event', 'whatsapp_click', {
  'event_category': 'conversion',
  'event_label': service
});
```

## Troubleshooting

### Chatbot Doesn't Appear
- Check z-index conflicts with other elements
- Verify script is loaded after DOM content
- Check browser console for errors

### API Not Working
- Verify API key is correct
- Check API key hasn't exceeded rate limits
- Confirm API key has proper permissions
- Bot will use fallback responses if API fails

### WhatsApp Button Not Showing
- Check message count (needs 5+ messages)
- Verify trigger keywords are typed
- Look for `showWhatsApp` state in console

### Chat History Not Saving
- Check localStorage is enabled in browser
- Verify no privacy extensions blocking localStorage
- Check browser console for storage errors

## Support

For issues or customization requests:
- Email: info@statescloudspace.com
- WhatsApp: +254 745 296 323
- Website: https://bolt.new/~/sb1-pcl8zabp

## Cost Estimate

**Google Gemini API:**
- Free tier: 60 requests/minute
- For 1000 visitors/day with 3 messages each = 3000 API calls/day
- Well within free tier limits

**OpenAI Alternative:**
- GPT-4o-mini: $0.15 per 1M input tokens, $0.60 per 1M output tokens
- ~$0.01 per conversation = $10 for 1000 conversations

## Updates & Maintenance

The chatbot is production-ready but consider:
- Monitor API usage monthly
- Update system prompt based on common questions
- Add new services as business grows
- A/B test different welcome messages
- Track conversion rate (chat → WhatsApp)

---

Built with ❤️ for States Cloudspace Digital Marketing
