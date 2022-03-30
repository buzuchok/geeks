<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      background-color="#000"
      color="#202c54"
    ></loading>

    <!-- Register block -->
    <section class="section-modal section-modal-register">
      <div class="modal-container">
        <div class="modal-content modal-content-500">
          <div class="modal-close">
            <icon-base
              width="24"
              height="24"
              viewBox="0 0 24 23.99"
              icon-name="close-round"
              ><icon-close-round
            /></icon-base>
          </div>

          <div class="register-form">
            <h3 class="h4">Create an account</h3>

            <form action="">
              <div class="form-group">
                <label for="registerEmailAddress">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="registerform.email"
                  id="registerEmailAddress"
                  placeholder="Enter email address"
                />
              </div>
              <div class="form-group">
                <label for="registerUsername">Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="registerform.name"
                  id="registerUsername"
                  placeholder="Enter username"
                />
              </div>
              <div class="form-group">
                <label for="registerPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="registerform.password"
                  id="registerPassword"
                  placeholder="Create password"
                />
              </div>
              <div class="form-group">
                <label for="registerCPassword">Confirm password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="registerform.cpassword"
                  id="registerCPassword"
                  placeholder="Re-enter password"
                />
              </div>

              <div class="custom-checkbox-group">
                <label class="custom-checkbox custom-checkbox-sm">
                  <input
                    type="checkbox"
                    v-model="registerform.agree"
                    value="1"
                  />
                  <span
                    >I have read and agree to the
                    <router-link :to="{ name: 'home' }">terms</router-link>,
                    <router-link :to="{ name: 'home' }">privacy</router-link>
                    and
                    <router-link :to="{ name: 'home' }"
                      >other details</router-link
                    ></span
                  >
                </label>
              </div>

              <button
                class="btn btn-primary btn-lg btn-block"
                @click="doregister"
                form="register-form"
              >
                Sign Up
              </button>
            </form>

            <div class="register-signin">
              Already member?
              <router-link :to="{ name: 'login' }">Sign In</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-bg"></div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import Toaster from "v-toaster";
import Loading from "vue-loading-overlay";
import IconBase from "./common/IconBase.vue";
import IconCloseRound from "./common/icons/IconCloseRound.vue";

Vue.use(Toaster, { timeout: 4000 });

export default {
  name: "Register",
  components: {
    Loading,
    IconBase,
    IconCloseRound
  },
  data() {
    return {
      publicPath: local_image_path,
      isregisterd: 0,
      isLoading: false,
      fullPage: true,
      registerform: {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        agree: ""
      }
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    async doregister() {
      if (this.registerform.name == "") {
        this.$toaster.error("Please enter Name");
      } else if (this.registerform.email == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.registerform.password == "") {
        this.$toaster.error("Please enter Password");
      } else if (this.registerform.cpassword == "") {
        this.$toaster.error("Please enter Repeat Password");
      } else if (this.registerform.password != this.registerform.cpassword) {
        this.$toaster.error("Both Password must be same");
      } else if (this.registerform.agree == "") {
        this.$toaster.error("Please Agree to terms of service");
      } else {
        // do registration
        this.isLoading = true;
        const reg_details = await this.callApi(
          "post",
          window.api_path + "registration",
          {
            name: this.registerform.name,
            email: this.registerform.email,
            password: this.registerform.password
          }
        );

        if (reg_details.status == 200) {
          if (reg_details.data.code == 1) {
            this.$toaster.success(reg_details.data.data);
            this.isregisterd = 1;
            this.isLoading = false;
            this.registerform.name = "";
            this.registerform.email = "";
            this.registerform.password = "";
            this.registerform.cpassword = "";
            this.registerform.agree = "";
            this.$router.push({ name: "login" });
          } else {
            this.$toaster.error(reg_details.data.data);
            this.isLoading = false;
            this.isregisterd = 2;
          }
        } else {
          this.$toaster.error("Registration not done, please try again");
          this.isLoading = false;
          this.isregisterd = 2;
        }

        if (this.isregisterd == 0) {
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    }

  },
  mounted() {}
};
</script>
