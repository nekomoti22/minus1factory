import { createClient } from '@supabase/supabase-js';

// Supabase の URL と anon key を指定
const supabaseUrl = 'https://cdvdeesoyjnugbafkrul.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;