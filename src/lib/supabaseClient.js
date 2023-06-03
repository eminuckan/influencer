import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://juggrlxjfvnbfqrdjmpm.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Z2dybHhqZnZuYmZxcmRqbXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NDQzNDcsImV4cCI6MjAwMDQyMDM0N30.qmNJVKKr7w6HvrllkMS7N44BSCQGbxPeDpOLZUo1elk',
{
    auth:{
        persistSession: false
    }
}
);

