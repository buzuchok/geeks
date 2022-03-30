<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      background-color="#000"
      color="#202c54"
    ></loading>
    <Header />

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-xl-6 offset-xl-3">
          <div class="margin-top-70"></div>
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3>Hi, {{ username }}</h3>
              <p>To Reset password enter New password details below:</p>
            </div>

            <!-- Form -->

            <div class="input-with-icon-left">
              <i class="icon-material-outline-lock"></i>
              <input
                type="password"
                class="input-text with-border"
                v-model="resetform.password"
                id="password-register"
                placeholder="New Password"
              />
            </div>

            <div class="input-with-icon-left">
              <i class="icon-material-outline-lock"></i>
              <input
                type="password"
                class="input-text with-border"
                v-model="resetform.cpassword"
                id="password-repeat-register"
                placeholder="Repeat New Password"
              />
            </div>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect"
              @click="doResetPassword"
              form="login-form"
            >
              Submit
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>

            <div class="welcome-text mt-4">
              <span
                >Already have an account?
                <router-link :to="{ name: 'login' }">Log In!</router-link></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->

    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Toaster from "v-toaster";
import Loading from "vue-loading-overlay";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
Vue.use(Toaster, { timeout: 4000 });
export default {
  name: "ResetPassword",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      publicPath: window.local_image_path,
      fpemail: "",
      isLoading: false,
      fullPage: true,
      isforgot: 0,
      passwordkey: "",
      username: "",
      resetform: {
        password: "",
        cpassword: "",
      },
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.passwordkey = this.$route.params.id;
    this.doResetPasswordCheckUser();
  },
  methods: {
    async doResetPasswordCheckUser() {
      this.isLoading = true;
      const cfp_details = await this.callApi(
        "post",
        window.api_path + "check_forgot_password",
        {
          id: this.passwordkey,
        }
      );

      if (cfp_details.status == 200) {
        if (cfp_details.data.code == 0) {
          this.$router.push({ name: "login" });
        }
        if (cfp_details.data.code == 1) {
          this.username = cfp_details.data.data;
          this.isLoading = false;
        }
      } else {
        this.$router.push({ name: "login" });
      }
    },
    async doResetPassword() {
      if (this.resetform.password == "") {
        this.$toaster.error("Please enter New Password");
      } else if (this.resetform.cpassword == "") {
        this.$toaster.error("Please enter Repeat New Password");
      } else if (this.resetform.password != this.resetform.cpassword) {
        this.$toaster.error("Both Password must be same");
      } else {
        // do forgotpassword
        this.isLoading = true;
        const fp_details = await this.callApi(
          "post",
          window.api_path + "update_forgot_password",
          {
            id: this.passwordkey,
            password: this.resetform.password,
          }
        );

        if (fp_details.status == 200) {
          if (fp_details.data.code == 1) {
            this.$toaster.success(fp_details.data.data);
            this.isforgot = 1;
            this.isLoading = false;
            this.resetform.password = "";
            this.resetform.cpassword = "";

            setTimeout(() => {
              this.$router.push({ name: "login" });
            }, 5000);
          } else {
            this.$toaster.error(fp_details.data.data);
            this.isLoading = false;
            this.isforgot = 2;
          }
        } else {
          this.$toaster.error("Details not sent, please try again");
          this.isLoading = false;
          this.isforgot = 2;
        }

        if (this.isforgot == 0) {
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    },
  },
};
</script>
