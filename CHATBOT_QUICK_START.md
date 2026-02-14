# Chatbot Quick Start - 3 Minutes to Live

## The Fastest Way to Get Started

### Step 1: Get Your API Key (60 seconds)
1. Go to: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

### Step 2: Add to Your Project (30 seconds)
Open `.env` file and paste your key:
```
VITE_GEMINI_API_KEY=paste_your_key_here
```

### Step 3: Test It! (30 seconds)
1. Refresh your website
2. Wait 3 seconds for auto-open
3. Type: "Need SEO"
4. Watch the magic happen!

## Already Live on Your Site!

The chatbot is already integrated and appears on ALL pages:
- ✅ Auto-opens after 3 seconds
- ✅ Orange floating button (bottom-right)
- ✅ WhatsApp integration ready
- ✅ Mobile responsive
- ✅ Chat history saves automatically

## Test These Commands

Try typing these to see different responses:

| Type This | What Happens |
|-----------|--------------|
| "Need SEO" | Shows SEO service pitch |
| "Logo design" | Shows graphic design pitch |
| "Facebook ads" | Shows paid ads pitch |
| "Let's start" | Triggers WhatsApp button |
| "How much?" | Triggers WhatsApp button |

## WhatsApp Pre-Fill Feature

When users click the WhatsApp button, it opens with:
```
"Hi from the website! I need help with [detected service]"
```

Your number: **+254 745 296 323**

## No API Key? No Problem!

Without an API key, the chatbot uses smart fallback responses based on keywords. It still works great!

## Want to Customize?

Edit these files:
- React Component: `src/components/Chatbot.tsx`
- Standalone: `public/chatbot-embed.html`
- Full Guide: `CHATBOT_SETUP_GUIDE.md`

## Embed on Other Sites

Copy the code from `public/chatbot-embed.html` and paste it into any website's footer. Works on WordPress, Wix, Shopify, or any HTML site!

## Common Questions

**Q: Will it slow down my site?**
A: No! It loads after 3 seconds, so your page loads fast first.

**Q: How much does Gemini cost?**
A: Free tier: 60 requests/minute. Plenty for most sites!

**Q: Can I change the colors?**
A: Yes! Edit the CSS in the component files.

**Q: Can I change the phone number?**
A: Yes! Change `WHATSAPP_NUMBER` in the code.

**Q: Will it work on mobile?**
A: Perfectly! It's fully responsive.

## Live Demo

Visit: `/chatbot-demo` on your site to see features and setup guide.

## Support

Having issues? Contact us:
- Email: info@statescloudspace.com
- WhatsApp: +254 745 296 323

---

**Pro Tip:** The chatbot is production-ready right now! Even without the API key, it uses smart fallback responses. Add the API key later when you're ready for AI-powered responses.

**Conversion Tip:** The chatbot automatically shows a WhatsApp button after 5 messages OR when users type words like "start", "quote", "interested". This turns browsers into leads!
