import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hxfszvkyndbyfbpvtlyt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZnN6dmt5bmRieWZicHZ0bHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MDE3MjQsImV4cCI6MjAzMDI3NzcyNH0.LgtinA3lAAXUHwsq9LXs4Q5pPp75bgVAh9ynyvHuILE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
