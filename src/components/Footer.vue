<template>
  <footer class="bg-purple-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row">

        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Etech Learning</h5>
          <p class="small">
            Empowering students with modern skills through online courses and expert instructors.
          </p>
        </div>

        <div class="col-md-4 mb-4">
          <h6 class="fw-bold">Quick Links</h6>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-white text-decoration-none">Home</router-link></li>
            <li><router-link to="/courses" class="text-white text-decoration-none">Courses</router-link></li>
            <li><router-link to="/signup" class="text-white text-decoration-none">Sign Up</router-link></li>
            <li><router-link to="/signin" class="text-white text-decoration-none">Login</router-link></li>
          </ul>
        </div>

        <div class="col-md-4 mb-4">
          <h6 class="fw-bold">Contact Us</h6>
          <ul class="list-unstyled small">
            <li>Email: info@etech.com</li>
            <li>Phone: +216 00 000 000</li>
            <li>Address: 123 Etech Street, Tunis</li>
          </ul>
        </div>

      </div>

      <div class="text-center mt-3 small">
        &copy; {{ new Date().getFullYear() }} Etech Learning. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.bg-purple-dark {
  background-color: #6a49c4;
}

footer a:hover {
  text-decoration: underline;
}
</style>
