/*
  # Create Blog and Contact Tables for Statescloudspace

  ## Overview
  This migration creates the database structure for the Statescloudspace digital marketing agency website.

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key): Unique identifier for each blog post
  - `title` (text): Blog post title
  - `slug` (text, unique): URL-friendly version of the title
  - `excerpt` (text): Short preview of the post content
  - `content` (text): Full blog post content
  - `category` (text): Category/tag for the post (e.g., "Social Media", "Funnels", "Automation", "Ads")
  - `author` (text): Author name
  - `featured_image` (text, optional): URL to featured image
  - `published` (boolean): Whether the post is published or draft
  - `created_at` (timestamptz): When the post was created
  - `updated_at` (timestamptz): When the post was last updated
  
  ### `contact_submissions`
  - `id` (uuid, primary key): Unique identifier for each submission
  - `name` (text): Contact's full name
  - `business_name` (text, optional): Business name if provided
  - `email` (text): Contact email address
  - `phone` (text, optional): Phone/WhatsApp number
  - `website` (text, optional): Website URL
  - `service_interest` (text): Which service they're interested in
  - `monthly_budget` (text, optional): Budget range
  - `message` (text): Their message/project details
  - `created_at` (timestamptz): When the form was submitted

  ## Security
  
  ### Row Level Security
  - Both tables have RLS enabled
  - Blog posts are publicly readable by anyone
  - Contact submissions are only readable by authenticated users (admin access)
  - Only authenticated users can create/update/delete blog posts
  - Anyone can submit contact forms

  ## Notes
  - All timestamps use `timestamptz` for proper timezone handling
  - Blog posts use a slug field for SEO-friendly URLs
  - Contact submissions store all form data for lead management
  - Default values ensure data integrity
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  author text NOT NULL DEFAULT 'Statescloudspace Team',
  featured_image text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business_name text,
  email text NOT NULL,
  phone text,
  website text,
  service_interest text NOT NULL,
  monthly_budget text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Blog posts policies: anyone can read published posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can create blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Contact submissions policies: anyone can submit, only authenticated can read
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(published);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);

-- Insert some sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, published) VALUES
('5 Ways to Turn Your Social Media Into a Lead Generation Machine', '5-ways-social-media-lead-generation', 'Most businesses treat social media as a megaphone. But the real winners use it as a lead magnet. Here''s how to make the shift.', 'Most businesses treat social media as a megaphone – they post, hope for likes, and wonder why nothing converts. But the real winners use it as a lead magnet. Here''s how to make the shift:

1. **Stop selling, start solving** - Share valuable tips that address your audience''s pain points. When you help first, sales follow naturally.

2. **Use clear CTAs** - Every post should guide viewers to the next step: a landing page, a DM, or a link in bio.

3. **Retarget your engaged audience** - Run ads to people who''ve already interacted with your content. They''re warmer and cheaper to convert.

4. **Leverage automation** - Set up chatbots to instantly respond to inquiries and capture leads 24/7.

5. **Track what works** - Use UTM links and analytics to see which posts actually drive leads, not just likes.

Social media isn''t just for visibility – it''s a direct line to customers when done right.', 'Social Media', true),

('Why Your Landing Page Isn''t Converting (And How to Fix It)', 'why-landing-page-not-converting', 'You''re driving traffic but not getting leads? Your landing page might be the problem. Here are the most common conversion killers.', 'You''re driving traffic but not getting leads? Your landing page is likely the problem. Here are the most common conversion killers and how to fix them:

**Too Many Options**
When visitors see multiple CTAs, navigation menus, or links, they freeze. Solution: One page, one goal, one clear button.

**Weak Headline**
If your headline doesn''t instantly explain the benefit, visitors bounce. Make it clear: "Get 50 Qualified Leads in 30 Days" beats "Welcome to Our Service."

**No Social Proof**
People trust people. Add testimonials, logos of clients you''ve worked with, or specific results you''ve delivered.

**Long Forms**
The more fields you ask for, the fewer people complete them. Start with just name and email – you can ask for more later.

**Slow Load Time**
If your page takes more than 3 seconds to load, you''ve already lost 40% of visitors. Compress images and simplify your code.

Fix these five things, and you''ll see your conversion rate climb.', 'Funnels', true),

('How AI Automation Can Save You 10+ Hours a Week', 'ai-automation-save-time', 'Stop doing repetitive tasks manually. AI automation can handle follow-ups, FAQs, and lead nurturing while you focus on closing deals.', 'Stop doing repetitive tasks manually. AI automation can handle follow-ups, FAQs, and lead nurturing while you focus on closing deals.

**Automated Follow-Up Emails**
Set up sequences that automatically send personalized emails based on user behavior. Someone downloads your guide? They get a welcome email, then tips, then an offer – all without you lifting a finger.

**Chatbots for Instant Response**
Most leads reach out outside business hours. A chatbot can answer common questions, book meetings, and qualify leads 24/7.

**SMS Reminders**
Reduce no-shows by 50% with automated SMS reminders for appointments, webinars, or calls.

**Lead Scoring and Routing**
Automatically tag and route hot leads to your sales team based on their actions and engagement level.

**CRM Updates**
No more manual data entry. Automation syncs form submissions, email opens, and website visits directly into your CRM.

The result? You reclaim 10+ hours a week and never miss a lead again. That''s the power of AI automation.', 'Automation', true);
