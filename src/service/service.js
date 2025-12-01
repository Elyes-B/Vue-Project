import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Elyes-B/Vue-Project',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default {
  getCourses() {
    return apiClient.get('/courses');
  },
  getCourseById(id) {
      return apiClient.get(`/courses/${id}`);
    }
};

