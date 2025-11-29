<template>
  <div>
    <!-- Hero Section -->
    <section class="container py-5 mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="display-4 fw-bold text-primary mb-4">
            Develop your <br>skills in a new <br>and unique way
          </h1>
          <p class="lead text-secondary mb-4">
            Explore a transformative approach to skill development on our online learning platform.
          </p>
          <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <router-link to="/courses" class="btn btn-primary btn-lg">Enroll Now</router-link>
            <a href="#" class="text-decoration-none fw-bold text-primary align-items-center d-flex gap-2">
              What's Etech?
              <i class="bi bi-play-fill"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=420&q=80" class="img-fluid rounded shadow" alt="Student">
        </div>
      </div>
    </section>

    <!-- Logos Section -->
    <section class="bg-light py-4">
      <div class="container d-flex justify-content-center flex-wrap gap-4 align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Duolingo_logo.svg" class="img-fluid" style="height:40px;">
        <img src="https://seeklogo.com/images/M/magic-leap-logo-2BBC9E3E6F-seeklogo.com.png" class="img-fluid" style="height:40px;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" class="img-fluid" style="height:40px;">
        <img src="https://codecov.io/images/codecov_symbol_black.svg" class="img-fluid" style="height:40px;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/User_icon_2.svg" class="img-fluid" style="height:40px;">
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-5 text-center mb-4 mb-lg-0">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=280&q=80" class="img-fluid rounded shadow" alt="Benefits">
        </div>
        <div class="col-lg-7">
          <h2 class="fw-bold text-primary mb-4">Benefits From Our Online Learning</h2>
          <ul class="list-unstyled">
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
              <div>
                <h5 class="mb-1">Online Degrees</h5>
                <p class="mb-0 text-secondary">Earn accredited degrees from home.</p>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
              <div>
                <h5 class="mb-1">Short Courses</h5>
                <p class="mb-0 text-secondary">Enhance your skills quickly.</p>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
              <div>
                <h5 class="mb-1">Training From Experts</h5>
                <p class="mb-0 text-secondary">Learn from professionals.</p>
              </div>
            </li>
            <li class="mb-3 d-flex align-items-start">
              <i class="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
              <div>
                <h5 class="mb-1">1.5k+ Video Courses</h5>
                <p class="mb-0 text-secondary">Huge course library.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="bg-primary text-white py-5">
      <div class="container text-center mb-5">
        <h2 class="fw-bold display-5 mb-3">Our Popular Courses</h2>
        <p class="opacity-75 mx-auto" style="max-width: 600px;">Discover highly demanded courses.</p>
      </div>
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(course,i) in popularCourses" :key="i">
            <div class="card h-100 shadow-sm">
              <img :src="course.image" class="card-img-top" :alt="course.title">
              <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <p class="card-text">{{ course.category }} | {{ course.classes }} Classes | {{ course.students }} Students</p>
                <p class="mb-1"><strong>{{ course.teacher }}</strong></p>
                <p class="text-primary fw-bold">${{ course.price }}</p>
                <router-link to="/courses" class="btn btn-outline-primary w-100">Enroll</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-primary">Student’s Testimonials</h2>
        <p class="text-secondary mx-auto" style="max-width: 600px;">Here’s what our students have to say about their transformative learning experience.</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-md-4" v-for="(testi,i) in testimonials" :key="i">
          <div class="card p-4 shadow-sm">
            <h6 class="fw-bold text-primary">{{ testi.name }}</h6>
            <p class="text-secondary mb-0">{{ testi.comment }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      popularCourses: [
        { title: "Web Design & Development", category: "Web Design", price: 560, classes: 23, students: 185, teacher: "J. Morgan", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
        { title: "Wireframing & Prototyping", category: "UI/UX Design", price: 160, classes: 8, students: 400, teacher: "Jordan Re", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80" },
        { title: "Python For Data Science", category: "Data Science", price: 432, classes: 10, students: 300, teacher: "Alex Taylor", image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80" }
      ],
      testimonials: [
        { name: "Alice Rodriguez", comment: "Enrolling in courses at this e-learning platform was a game-changer for me." },
        { name: "Emily Chen", comment: "Exceptional courses! The practical insights have been instrumental in my professional growth." },
        { name: "James Johnson", comment: "Highly recommend! The personalized feedback and real-world application are amazing." }
      ]
    }
  }
}
</script>

<style scoped>
/* Juste du CSS basique Bootstrap */
.bg-primary { background-color: #6a49c4 !important; }
.text-primary { color: #6a49c4 !important; }
.btn-primary { background-color: #6a49c4; border-color: #6a49c4; }
.btn-primary:hover { background-color: #8a6aff; border-color: #8a6aff; }
</style>
