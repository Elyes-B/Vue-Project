<template>
  <div class="min-vh-100 d-flex align-items-center" style="background: linear-gradient(135deg, #9578ff 0%, #ce73ff 100%);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <router-link to="/" class="d-inline-block text-decoration-none">
                  <span class="fw-bold text-purple-dark fs-1">Etech</span>
                </router-link>
                <h4 class="fw-bold text-dark mt-3">Welcome Back</h4>
                <p class="text-muted">Sign in to your account</p>
              </div>
              <form @submit.prevent="handleSignIn">
                <div class="mb-3">
                  <label for="email" class="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    class="form-control form-control-lg" 
                    id="email"
                    v-model="form.email"
                    placeholder="Enter your email"
                    required
                  >
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label fw-semibold">Password</label>
                  <input 
                    type="password" 
                    class="form-control form-control-lg" 
                    id="password"
                    v-model="form.password"
                    placeholder="Enter your password"
                    required
                  >
                </div>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="rememberMe">
                    <label class="form-check-label small" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#" class="small text-purple text-decoration-none">Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-custom-primary w-100 py-3 fw-bold">
                  Sign In
                </button>
              </form>

              <div class="text-center my-4">
                <span class="text-muted small bg-white px-3">Or continue with</span>
              </div>

              <div class="row g-3 mb-4">
                <div class="col-6">
                  <button type="button" class="btn btn-outline-secondary w-100 py-2">
                    <i class="fab fa-google me-2"></i> Google
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-outline-secondary w-100 py-2">
                    <i class="fab fa-facebook me-2"></i> Facebook
                  </button>
                </div>
              </div>

              <div class="text-center">
                <span class="text-muted">Don't have an account? </span>
                <router-link to="/signup" class="text-purple fw-bold text-decoration-none">
                  Sign Up
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInView',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSignIn() {
      console.log('Sign in attempt:', this.form)
      // Redirection temporaire vers la home page
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.card {
  border: none;
}

.text-purple { 
  color: #8a6aff !important; 
}

.text-purple-dark { 
  color: #6a49c4 !important; 
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

.form-control {
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s;
}

.form-control:focus {
  border-color: #8a6aff;
  box-shadow: 0 0 0 0.2rem rgba(138, 106, 255, 0.25);
}
</style>
