// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://akelbarivopaibatcyqf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZWxiYXJpdm9wYWliYXRjeXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNzEzMTAsImV4cCI6MjA2NjY0NzMxMH0.jFLDq69bCHLx0gauhsUYZBTD_K5NPqJfnXnUMhLZinU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);