<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      background-color="#000"
      color="#202c54"
    ></loading>
    <!-- <Header /> -->

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-xl-6 offset-xl-3">
          <div class="margin-top-100"></div>
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text notfoundpage">
              <!-- <h1>HI</h1>
              <h3>Hello</h3> -->
            </div>
          </div>
          <div class="margin-top-50"></div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "LinkedinCallback",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      incode: "",
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.incode = this.$route.query.code;
    this.isLoading = true;
    this.sendlinkedin_details(this.incode);
  },
  methods: {
    async sendlinkedin_details(incode) {
      const details = await this.callApi("post", window.api_path + "linkedinlogin", {
        code: incode,
      });

      if (details.status == 200) {
        this.isLoading = false;
        if (details.data.code == 1) {
          if (localStorage.getItem("sgemail") != null) {
            localStorage.removeItem("sgemail");
          }
          localStorage.setItem("sgemail", details.data.email);

          if (localStorage.getItem("sgtoken") != null) {
            localStorage.removeItem("sgtoken");
          }
          localStorage.setItem("sgtoken", details.data.token);

          if (localStorage.getItem("sgname") != null) {
            localStorage.removeItem("sgname");
          }
          localStorage.setItem("sgname", details.data.name);

          if (localStorage.getItem("sgphoto") != null) {
            localStorage.removeItem("sgphoto");
          }
          localStorage.setItem("sgphoto", details.data.photo);

          if (localStorage.getItem("sgtype") != null) {
            localStorage.removeItem("sgtype");
          }
          localStorage.setItem("sgtype", 3);

          window.sgtype = 3;
          window.isAuthenticated = true;
          window.opener.location = "/dashboard";
          window.close();
          // this.$router.push({ name: "dashboard" });
        } else {
          this.$toaster.error("Login not done, please try again");
        }
      } else {
        this.isLoading = false;
        this.$toaster.error("Login not done, please try again");
      }
    },
  },
};
</script>
