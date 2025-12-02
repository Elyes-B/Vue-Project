<template>
  <div class="course-details-page">
    <section class="container py-5">
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
                    <h5 class="fw-bold text-dark">Classes: {{ classNames.join(', ') }}</h5>
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

          <button class="btn btn-outline-purple btn-lg w-100 mt-3" @click="openForum" :disabled="enroled || selectedClass">
            <i class="fas fa-comments"></i> Access class
          </button>

          <p v-show="enroled" class="text-success mt-2">You are already enrolled in this course.</p>
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
  props: {
    student: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      course: null,
      loading: true,
      selectedClass: null,
      password: '',
      classes: [],
      enroled: false
    };
  },
  created() {
    if (!this.student) {
      this.$router.push('/signin');
      return;
    }
    service.getCourseById(this.id).then((course) => {
      this.course = course || null;
      if (!this.course) {
        console.warn("Course not found for ID:", this.id);
      }
      else{
        this.loading = false;
      }
    }).catch((error) => {
      console.error("Error fetching course details:", error);
    });

    service.getClassesByCourseId(this.id).then((classes) => {
      this.classes = classes || [];
    }).catch((error) => {
      console.error("Error fetching classes:", error);
    });

    service.getEnrolmentByStudent(this.student.id)
      .then((enrolment) => {
        for (let i = 0; i < enrolment.length; i++) {
          if (enrolment[i].course_id === Number(this.id)) {
            this.enroled = true;
            break;
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching enrolment:", error);
      });
  },

  methods: {
    openForum() {
      const enteredPassword = prompt('Enter class password:');
      if (enteredPassword !== null) {
        if (!this.classes || !this.classes.length) {
          alert('No classes available for this course.');
          return;
        }

        const matchedClass = this.classes.find(classItem => classItem.password === enteredPassword);
        if (matchedClass) {
          this.selectedClass = matchedClass;
          this.password = enteredPassword;
          service.postEnrollment({
            student_id: this.student.id,
            course_id: this.course.id,
            class_id: this.selectedClass.class_id
          }).then(() => {
            console.log('Enrollment recorded successfully.');
          }).catch((error) => {
            console.error('Error recording enrollment:', error);
          });
        } else {
          alert('Invalid password. Please try again.');
          this.selectedClass = null;
          this.password = '';
        }
      }
    }
  },
  computed: {
    classNames() {
        let result = [];
      if (!this.classes || !this.classes.length) return [];
      else{
        for (let i = 0; i < this.classes.length; i++) {
          result.push(this.classes[i].name);
        }
        return result;
      }
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
