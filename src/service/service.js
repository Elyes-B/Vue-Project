import axios from 'axios';

// You need this public key from your Supabase project settings
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1bnZyamlsb2Nmc2hmcmlzYW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NzQyNzYsImV4cCI6MjA4MDE1MDI3Nn0.MDiw8FIggICHTnWG3NkQzDR83mVX_ec_8IGf1Q635Gs'; 
const SUPABASE_URL = 'https://funvrjilocfshfrisaoi.supabase.co'; 

const apiClient = axios.create({
  // 1. Use the BASE URL for the POSTGRESQL REST API
  baseURL: `${SUPABASE_URL}/rest/v1`, 
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    
    // 2. ADD THE NECESSARY AUTHENTICATION HEADERS
    'apikey': SUPABASE_ANON_KEY
  },
});

export default {
  // Return all courses including their classes (if relationally configured in Supabase)
  getCourses() {
    return apiClient.get('/courses');
  },
  // Return single course (object) with embedded classes
  getCourseById(id) {
    return apiClient.get(`/courses?id=eq.${id}`).then(res => res.data[0]);
  },
  // Fetch classes for a given course id from the separate `classes` table
  getClassesByCourseId(courseId) {
    return apiClient.get(`/classes?course_id=eq.${courseId}`).then(res => res.data);
  }
};