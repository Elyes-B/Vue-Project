<template>
  <div v-if="show" class="modal fade show d-block" style="background-color: rgba(0,0,0,0.5);">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Course Forum</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitPassword">
            <div class="mb-3">
              <label for="forumPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="forumPassword" v-model="forumPassword" required>
            </div>
            <button type="submit" class="btn btn-custom-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseForum',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      forumPassword: ''
    };
  },
  methods: {
    submitPassword() {
      this.$emit('submit', this.forumPassword);
      this.forumPassword = '';
    }
  }
};
</script>

<style scoped>
</style>
