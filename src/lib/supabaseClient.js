import { createClient } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
  {
    auth: {
      persistSession: false,
    },
  }
);
