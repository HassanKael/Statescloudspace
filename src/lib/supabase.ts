import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
