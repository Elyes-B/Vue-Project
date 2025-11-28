<script>
import CourseCard from "../components/CourseCard.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    CourseCard,
    Navbar,
    Footer
  },
  data() {
    return {
      popularCourses: []
    };
  }
};
</script>
