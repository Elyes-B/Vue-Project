<template>
  <div class="course-details-page">
    <section class="container py-5">
      <div class="mb-4">
        <router-link to="/courses" class="btn btn-outline-purple">
          <i class="fas fa-arrow-left"></i> Back to Courses
        </router-link>
      </div>
      
      <div v-if="loading" class="text-center my-5">
        <div class="spinner-border text-purple" role="status">
        </div><br>
        <span class="text-purple">Loading...</span>
      </div>

      
      <div v-else-if="course" class="row">
        <div class="col-lg-6 mb-4">
          <img :src="course.imagePath" :alt="course.title" class="img-fluid rounded-4" style="width: 100%; max-height: 500px; object-fit: cover;" />
        </div>
        <div class="col-lg-6">
          <h1 class="fw-bold display-4 text-purple-dark mb-3">{{ course.title }}</h1>
          
          <div class="mb-4">
            <p class="text-secondary fs-5">{{ course.description }}</p>
          </div>

          <div class="card bg-light border-0 p-4 mb-4">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-book text-purple fs-4 me-3"></i>
                  <div>
                    <p class="text-secondary mb-1 small">Available Classes</p>
                    <h5 class="fw-bold text-dark">Classes: {{ classes.join(', ') }}</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-id-badge text-purple fs-4 me-3"></i>
                  <div>
                    <p class="text-secondary mb-1 small">Course ID</p>
                    <h5 class="fw-bold text-dark">{{ course.id }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="selectedClass" class="alert alert-success mb-4">
            <h5 class="alert-heading"><i class="fas fa-check-circle"></i> Access Granted!</h5>
            <p class="mb-1"><strong>Class:</strong> {{ selectedClass.name }}</p>
            <small>Password verified successfully</small>
          </div>

          <button class="btn btn-outline-purple btn-lg w-100 mt-3" @click="openForum">
            <i class="fas fa-comments"></i> {{ selectedClass ? 'Change Class' : 'Access Class' }}
          </button>
        </div>
      </div>


      <div v-else class="alert alert-warning" role="alert">
        <h4 class="alert-heading">Course Not Found</h4>
        <p>The course you're looking for doesn't exist.</p>
      </div>

    </section>
  </div>
</template>

<script>
import service from '@/service/service';

export default {
  name: 'CourseDetails',
  data() {
    return {
      course: null,
      loading: true,
      selectedClass: null,
      password: ''
    };
  },
  props:['id'],
  created() {
    service.getCourseById(this.id).then((response) => {
      this.course = response.data;
      this.loading = false;
    })
    .catch((error) => {
      console.error("Error fetching course details:", error);
    });
  },
  methods: {
    openForum() {
      const enteredPassword = prompt('Enter class password:');
      if (enteredPassword !== null) {
        const matchedClass = this.course.classes.find(cls => cls.password === enteredPassword);
        if (matchedClass) {
          this.selectedClass = matchedClass;
          this.password = enteredPassword;
          alert('Access granted! Welcome to ' + matchedClass.name);
        } else {
          alert('Invalid password. Please try again.');
          this.selectedClass = null;
          this.password = '';
        }
      }
    }
  },
  computed: {
    classes() {
    let cls = [];
        for (let j = 0; j < this.course.classes.length; j++) {
          cls.push(this.course.classes[j].name);
        }
      return cls;
    }
}
}
</script>

<style scoped>
.text-purple { color: #8a6aff !important; }
.text-purple-dark { color: #6a49c4 !important; }
.btn-outline-purple {
  color: #8a6aff;
  border-color: #8a6aff;
  font-weight: 600;
  transition: all 0.3s;
}
.btn-outline-purple:hover {
  background-color: #8a6aff;
  color: white;
  border-color: #8a6aff;
}

.btn-custom-primary {
  background-color: #ce73ff;
  color: white;
  font-weight: 700;
  box-shadow: 0 6px 12px -4px #ce73ff;
  border: none;
  transition: all 0.3s;
}
.btn-custom-primary:hover {
  background-color: #b53bde;
  color: white;
  transform: translateY(-2px);
}

.card {
  border-radius: 15px;
}
</style>
