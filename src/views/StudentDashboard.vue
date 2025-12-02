<template>
  <div class="student-dashboard">
    <section class="container py-5">
      <div class="row mb-4 align-items-center">
        <div class="col">
          <h2 class="fw-bold text-purple-dark">My Dashboard</h2>
          <p class="text-secondary">Enrolled courses</p>
        </div>
      </div>

      <div v-if="loading" class="text-center my-5">
        <div class="spinner-border text-purple" role="status"></div>
        <div class="mt-2 text-purple">Loading your courses...</div>
      </div>

      <div v-else>
        <div v-if="courses.length" class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(course,i) in courses" :key="course.id || i">
            <div class="card h-100 shadow-sm">
              <img :src="course.imagePath" class="card-img-top" :alt="course.title">
              <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <p class="card-text text-secondary mb-2">{{ course.description}}</p>
                <p class="mb-1"><strong>Class:</strong> {{ classes[i]}}</p>
                <div class="d-grid gap-2 mt-3">
                  <router-link :to="{ name: 'coursesContent', params: { id: course.id } }" class="btn btn-outline-purple">Open Course</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="alert alert-info">
          You are not enrolled in any courses yet.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import service from '@/service/service';

export default {
  name: 'StudentDashboard',
  props: {
    student: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: true,
      courses: [],
      enrolments: [],
        classes: []
    };
  },
  created() {
    if (!this.student) {
      this.$router.push('/signin');
      return;
    }
    service.getEnrolmentByStudent(this.student.id)
      .then((enrolments) => {
        if (enrolments.length === 0) {
          this.loading = false;
          return;
        }
        console.log("Fetched enrolments:", enrolments);
        this.enrolments = enrolments;
        for (let i = 0; i < enrolments.length; i++) {
          const enrolment = enrolments[i];
        service.getCourseById(enrolment.course_id).then((course) => {
          this.courses.push(course);
          this.loading = false;
        });
      }
      })
      .catch((error) => {
        console.error("Error fetching enrolments:", error);
        this.loading = false;
      });

        for (let i = 0; i < this.enrolments.length; i++){
            service.getClassesByCourseId(this.enrolments[i].class_id).then((cls) => {
                this.classes.push(cls);
            });
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
}
.card { border-radius: 12px; }
</style>
