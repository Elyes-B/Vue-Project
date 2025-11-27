<template>
<nav class="navbar navbar-expand-lg container py-3">
  <div class="container-fluid px-0">
    <a class="navbar-brand fw-bold fs-4 text-dark" href="#">Etech.</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto fw-semibold gap-3">
        <li class="nav-item"><a class="nav-link text-purple-dark" href="#">Courses ▾</a></li>
        <li class="nav-item"><a class="nav-link text-purple-dark" href="#">Teachers ▾</a></li>
        <li class="nav-item"><a class="nav-link text-purple-dark" href="#">Offers ▾</a></li>
        <li class="nav-item"><a class="nav-link text-purple-dark" href="#">Contact</a></li>
      </ul>
      <div class="d-flex align-items-center gap-3 mt-3 mt-lg-0">
        <router-link to="/signin" class="btn fw-semibold text-purple-dark">Sign In</router-link>
        <router-link to="/signup" class="btn btn-custom-primary px-4 py-2 rounded-3">Sign Up</router-link>
      </div>
    </div>
  </div>
</nav>
</template>