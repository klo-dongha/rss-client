<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="row w-100 m-0">
        <div
          class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg"
        >
          <div class="card col-lg-4 mx-auto">
            <div class="card-body px-5 py-5">
              <h3 class="card-title text-left mb-3">Login</h3>
              <div class="form-group">
                <!-- ID -->
                <label>Username or email *</label>
                <input
                  v-model="userId"
                  type="text"
                  class="form-control p_input"
                />
              </div>
              <div class="form-group">
                <!-- Password -->
                <label>Password *</label>
                <input
                  v-model="userPassword"
                  type="password"
                  class="form-control p_input"
                />
              </div>
              <div
                class="form-group d-flex align-items-center justify-content-between"
              >
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" />
                    Remember me
                  </label>
                </div>
                <a href="#" class="forgot-pass">Forgot password</a>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-block enter-btn"
                  @click="loginSubmit"
                >
                  Login
                </button>
              </div>
              <div class="d-flex">
                <button class="btn btn-facebook mr-2 col">
                  <i class="mdi mdi-facebook"></i> Facebook
                </button>
                <button class="btn btn-google col">
                  <i class="mdi mdi-google-plus"></i> Google plus
                </button>
              </div>
              <p class="sign-up">
                Don't have an Account?<a href="#"> Sign Up</a>
              </p>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- row ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      userId: null,
      userPassword: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    async loginSubmit() {
      await this.$axios.post('/account/login', {
        userId: this.userId,
        userPassword: this.userPassword,
      })
    },
  },
}
</script>

<style></style>
