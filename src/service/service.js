import axios from 'axios';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1bnZyamlsb2Nmc2hmcmlzYW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NzQyNzYsImV4cCI6MjA4MDE1MDI3Nn0.MDiw8FIggICHTnWG3NkQzDR83mVX_ec_8IGf1Q635Gs'; 
const SUPABASE_URL = 'https://funvrjilocfshfrisaoi.supabase.co'; 

const apiClient = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1`, 
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    
    'apikey': SUPABASE_ANON_KEY
  },
});

export default {
  getCourses() {
    return apiClient.get('/courses');
  },
  getStudentByEmail(email) {
    return apiClient.get(`/student?email=eq.${email}`).then(res => res.data[0]);
  },
  getCourseById(id) {
    return apiClient.get(`/courses?id=eq.${id}`).then(res => res.data[0]);
  },

  getClassesByCourseId(courseId) {
    return apiClient.get(`/classes?course_id=eq.${courseId}`).then(res => res.data);
  }
,
  postStudent(student) {
    return apiClient.post('/student', student);
  }
  ,postEnrollment(enrollment) {
    return apiClient.post('/student_course_enrollment', enrollment);
  }
};