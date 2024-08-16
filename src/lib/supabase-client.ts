import { createClient } from "@supabase/supabase-js";

console.log("---------REACT_APP_SUPABASE_URL-----------");
console.log(process.env.REACT_APP_SUPABASE_URL);

console.log("---------REACT_APP_SUPABASE_ANON_KEY-----------");
console.log(process.env.REACT_APP_SUPABASE_ANON_KEY);

const supabaseUrl = "https://cdvdeesoyjnugbafkrul.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
