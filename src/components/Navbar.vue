<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand fw-bold text-purple-dark">
        Etech
      </router-link>

      <!-- Toggle button for mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/courses" class="nav-link" active-class="active">
              Courses
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link" active-class="active">
              Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" active-class="active">
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent"
};
</script>

<style scoped>
.navbar-brand {
  font-size: 1.6rem;
  color: #6a49c4 !important; /* text-purple-dark */
}

.nav-link {
  color: #8a6aff !important; /* text-purple */
  font-weight: 500;
  margin-left: 1rem;
}

.nav-link.active {
  font-weight: 700;
  color: #6a49c4 !important;
}

.navbar {
  background-color: #ffffff;
}
</style>
