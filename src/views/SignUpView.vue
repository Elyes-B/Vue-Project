<template>
  <div class="min-vh-100 d-flex align-items-center" style="background: linear-gradient(135deg, #9578ff 0%, #ce73ff 100%);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <router-link to="/" class="d-inline-block text-decoration-none">
                  <span class="fw-bold text-purple-dark fs-1">Etech</span>
                </router-link>
                <h4 class="fw-bold text-dark mt-3">Create Account</h4>
                <p class="text-muted">Join our learning community</p>
              </div>

              <form @submit.prevent="handleSignUp">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label fw-semibold">First Name</label>
                    <input 
                      type="text" 
                      class="form-control form-control-lg" 
                      id="firstName"
                      v-model="form.firstName"
                      placeholder="First name"
                      required
                    >
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label fw-semibold">Last Name</label>
                    <input 
                      type="text" 
                      class="form-control form-control-lg" 
                      id="lastName"
                      v-model="form.lastName"
                      placeholder="Last name"
                      required
                    >
                  </div>
                </div>

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
                    placeholder="Create a password"
                    required
                  >
                  <div class="form-text">
                    Must be at least 8 characters with numbers and symbols
                  </div>
                </div>

                <div class="mb-3">
                  <label for="confirmPassword" class="form-label fw-semibold">Confirm Password</label>
                  <input 
                    type="password" 
                    class="form-control form-control-lg" 
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    placeholder="Confirm your password"
                    required
                  >
                </div>

                <button type="submit" class="btn btn-custom-primary w-100 py-3 fw-bold">
                  Create Account
                </button>
              </form>
              <div class="text-center mt-4">
                <span class="text-muted">Already have an account? </span>
                <router-link to="/signin" class="text-purple fw-bold text-decoration-none">
                  Sign In
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
  name: 'SignUpView',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleSignUp() {
      console.log('Sign up attempt:', this.form)
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
