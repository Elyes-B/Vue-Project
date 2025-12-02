<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold text-purple-dark">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8HDyb/E3wAAAAAABiAgYjZ2tz/AHMACyQAACPLzM98foUPFiyChIvz8/QAAB3/zd//+/7/0+L/2ucUGy8AABKbnKL/AGYACCUAACD4+fkeJDgFESx2eH8AAA8AABnBwsX/yd3/8/fm5ujCOq17AAABYklEQVR4nO3b21LCMBRA0SIgVVBBRSwqF/3/f/S103bCdSZJWesDMmc/9CFn0qIAAAAAAAAAAAAAAAAAAIDzjKeHxJ7wUp/LUdByFHvCS72Xg6DyIfaEl1KoMH0KFaZPocL0KVSYPoUK0zeryqCqij3h8dbPHYqvwSzsO/bcx/sZdlnHHuuKxqOOz2z4HHusK1KYP4X5U5g/hflTmD+F+VOYvxstLKuXkOFH7KlP0Vk4CG9pNj0oDFsqTIpChelTqDB9ChWmT6HC9Cnsa+E2+FK/B3f87fQpZLqLPfUpujdRXirkRGH+FOZPYf4U5k9h/hTm71YLe3972uweD6mfsZ837X9j9bR1bzE2nS/462pHLFaTptU8WlDLOZuoxj8zi8ld0+Q1WlCLQoWFwugUKiwURqdQYaEwOoUKC4XRdf+Pf1jtiMTv+H/356mf8daW0J4GAAAAAAAAAAAAAAAAACB1/0uVMTwLHp/FAAAAAElFTkSuQmCC" alt="" style="height:50px;width: 50px;">
        Etech
      </router-link>

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
          <li class="nav-item" v-if="student">
            <span class="nav-link student-name">
              Welcome, {{ student.first_name }} {{ student.last_name }}
            </span>
          </li>
          <li class="nav-item" v-if="!student">
            <router-link to="/signup" class="nav-link" active-class="active">
              Sign Up
            </router-link>
          </li>
          <li class="nav-item" v-if="!student">
            <router-link to="/signin" class="nav-link" active-class="active">
              Login
            </router-link>
          </li>
          <li class="nav-item" v-if="student">
            <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    student: {
      type: Object,
      default: null
    }
  },
  methods: {
    logout() {
      this.$emit('logout-emitted');
      this.$router.push('/');
    }
  }
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

.student-name {
  color: #6a49c4 !important;
  font-weight: 600;
  cursor: default;
}

.student-name:hover {
  color: #8a6aff !important;
}

.navbar {
  background-color: #ffffff;
}
</style>
