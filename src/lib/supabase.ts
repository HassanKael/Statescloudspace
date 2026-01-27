import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured_image?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type ContactSubmission = {
  name: string;
  business_name?: string;
  email: string;
  phone?: string;
  website?: string;
  service_interest: string;
  monthly_budget?: string;
  message: string;
};
