import { createClient } from '@supabase/supabase-js';

const NEXT_PUBLIC_SUPABASE_PROJECT_URL =
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;

const NEXT_PUBLIC_SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_PROJECT_URL,
  NEXT_PUBLIC_SUPABASE_API_KEY,
);
