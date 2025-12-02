<template>
  <div>
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
            <router-link to="/signup" class="btn btn-lg">Sign Up</router-link>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=420&q=80" class="img-fluid rounded shadow" alt="Student">
        </div>
      </div>
    </section>

    <section class="bg-light py-4">
      <div class="container d-flex justify-content-center flex-wrap gap-4 align-items-center">
        <img class="brand-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Institut_Sup%C3%A9rieur_d%27Informatique_%28logo%29.svg/langfr-250px-Institut_Sup%C3%A9rieur_d%27Informatique_%28logo%29.svg.png" alt="ISI">
        <img class="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Rc7iw8azdVmOa56E2DP6pnm9Pr9LPZXUZw&s" alt="INSAT">
        <img class="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BvUm_9LZu6yHieeoQFtEANcNFeXvUkymrdoGk1f11i5ueGcUJvK52wex5rAvGikDxa0&usqp=CAU" alt="FSB">
         <img class="brand-img" src="https://www.universite.tn/images/universites-tunisie/logos/Instituts-Superieurs-des-Etudes-Technologiques.jpeg" alt="" style="opacity: 1; filter: none;">
          <img class="brand-img" src="data:image/jpeg;base64,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" alt="User Testing">
      </div>
    </section>

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
  props: {
    student: {
      type: Object,
      default: null
    }
  },
  created() {
    if (this.student) {
      this.$router.push('/dashboard');
    }
  },
  watch: {
    student(newVal) {
      if (newVal) {
        this.$router.push('/dashboard');
      }
    }
  },
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
  },
}
</script>

<style scoped>
/* Juste du CSS basique Bootstrap */
.bg-primary { background-color: #6a49c4 !important; }
.text-primary { color: #6a49c4 !important; }
.btn-primary { background-color: #6a49c4; border-color: #6a49c4; }
.btn-primary:hover { background-color: #8a6aff; border-color: #8a6aff; }
.brand-img { 
  max-width: 100px;
  height: auto;
 }
</style>
