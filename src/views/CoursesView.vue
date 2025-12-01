<template>
  <div class="courses-page">
    <section class="container py-5">
      <div class="text-center mb-5">
        <h1 class="fw-bold display-5 mb-3 text-purple-dark">Our Diverse Courses</h1>
        <p class="text-secondary mx-auto" style="max-width: 600px;">
          Explore a wide range of subjects designed to enhance your skills and career.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 col-lg-6">
          <div class="input-group">
            <input type="search" v-model="searchQuery" class="form-control form-control-lg search-input" placeholder="Search for courses..." />
            <button class="btn btn-custom-primary search-btn px-4">Search</button>
          </div>
        </div>
      </div>

      <!-- Course List -->
      <div class="row justify-content-center gy-4">
        <div class="col-md-6 col-lg-4" v-for="course in filteredCourses" :key="course.id">
          <div class="card h-100 course-card shadow-sm">
            <img :src="course.imagePath" class="card-img-top" :alt="course.title" style="height: 180px; object-fit: cover;" />
            <div class="card-body p-4 text-start">
              <h5 class="card-title fw-bold mb-3 text-dark">{{ course.title }}</h5>
              <p class="card-text text-secondary small mb-3">{{ course.description }}</p>
              <div class="d-flex justify-content-between align-items-center border-top pt-3">
                <span class="fw-bold text-purple">{{ course.numberOfClasses }} Classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'CoursesView',
  data() {
    return {
      searchQuery: '',
      courses:null
    };
  },
  computed: {
    filteredCourses() {
      if (!this.searchQuery) {
        return this.courses;
      }
      const query = this.searchQuery.toLowerCase();
      return this.courses.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>

.text-purple { color: #8a6aff !important; }
.text-purple-dark { color: #6a49c4 !important; }
.bg-purple-light { background-color: #f2e7ff !important; }


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


.search-input { border: 2px solid #8a6aff; border-radius: 10px 0 0 10px; padding: 12px; }
.search-btn { border-radius: 0 10px 10px 0; }


.course-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  border-radius: 18px;
  overflow: hidden;
}
.course-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
</style>
