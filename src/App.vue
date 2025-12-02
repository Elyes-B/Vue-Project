<template>
  <NavbarComponent :student="student" @logout-emitted="clearStudent"/>
  <router-view @signup-emitted="addUser" @signin-emitted="setStudent"  :student="student"/>
  <FooterComponent/>
</template>

<script>
import service from '@/service/service';
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
  ,data() {
    return {
      student: null
    };
  },
  methods: {
    addUser(student) {
      service.postStudent(student)
        .then(() => {
          console.log('Student added successfully');
        })
        .catch(error => {
          console.error('Error adding student:', error);
        });
        service.getStudentByEmail(student.email)
        .then(foundStudent => {
          this.student = foundStudent;
        })
        .catch(error => {
          console.error('Error fetching student:', error);
        });
    },
    setStudent(student) {
      service.getStudentByEmail(student.email)
        .then(foundStudent => {
          this.student = foundStudent;
        })
        .catch(error => {
          console.error('Error fetching student:', error);
        });
    },
    clearStudent() {
      this.student = null;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
