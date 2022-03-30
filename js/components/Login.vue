<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      background-color="#000"
      color="#202c54"
    ></loading>

    <!-- Login block -->
    <section class="section-modal section-modal-login">
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

          <!-- Social Login -->
          <div class="social-login-buttons">
            <div id="fb-root"></div>
            <button
              @click.prevent="loginWithFacebook"
              class="btn btn-outline-grey btn-block btn-icon"
            >
              <icon-base
                width="20"
                height="20"
                viewBox="0 0 20 20"
                icon-name="facebook-round"
                ><icon-facebook-round
              /></icon-base>
              <span>Continue with Facebook</span>
            </button>

            <GoogleLogin
              class="btn btn-outline-grey btn-block btn-icon"
              :params="params"
              :onSuccess="loginWithGoogle"
            >
              <icon-base
                width="20"
                height="20"
                viewBox="0 0 20 20"
                icon-name="google"
                ><icon-google
              /></icon-base>
              <span>Continue with Google</span>
            </GoogleLogin>

            <button class="btn btn-outline-grey btn-block btn-icon">
              <icon-base
                width="26"
                height="20"
                viewBox="0 0 28 21"
                icon-name="twitter"
                ><icon-twitter
              /></icon-base>
              <span>Continue with Twitter</span>
            </button>
          </div>

          <div class="login-separator">
            <span>or</span>
          </div>

          <div class="login-noforms" v-if="isLoginForm == 0">
            <div class="login-links">
              <p>
                <router-link :to="{ name: 'register' }"
                  >Signup using Email</router-link
                >
              </p>
              <p>
                Already a member?
                <button class="btn btn-link p-0" @click="isLoginForm = 1">
                  Signin
                </button>
              </p>
            </div>
            <div class="login-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              diam faucibus turpis pretium, odio morbi aliquam. Privacy Plicy
            </div>
          </div>

          <div class="login-form" v-if="isLoginForm">
            <form action="">
              <div class="form-group">
                <label for="loginEmailAddress">Email address</label>
                <input
                  type="text"
                  name="login-email"
                  class="form-control"
                  v-model="loginform.email"
                  id="loginEmailAddress"
                  placeholder="Enter email address"
                  @keyup.enter="dologin"
                />
              </div>
              <div class="form-group">
                <label for="loginPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="loginform.password"
                  id="loginPassword"
                  placeholder="Enter password"
                  @keyup.enter="dologin"
                />
              </div>

              <div class="custom-checkbox-group">
                <label class="custom-checkbox custom-checkbox-sm">
                  <input type="checkbox" />
                  <span>Keep me signin</span>
                </label>
              </div>

              <button
                class="btn btn-primary btn-lg btn-block"
                @click="dologin"
                form="login-form"
              >
                Sign In
              </button>
            </form>

            <div class="login-forgotpassword">
              <router-link
                class="forgot-password"
                :to="{ name: 'forgot_password' }"
                >Forgot Password?</router-link
              >
            </div>
            <div class="login-signup">
              Don't a Member yet?
              <router-link :to="{ name: 'register' }">Sign Up</router-link>
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
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import { initFbsdk } from "../fb.js";
import GoogleLogin from "vue-google-login";
import IconBase from "./common/IconBase.vue";
import IconCloseRound from "./common/icons/IconCloseRound.vue";
import IconFacebookRound from "./common/icons/IconFacebookRound.vue";
import IconGoogle from "./common/icons/IconGoogle.vue";
import IconTwitter from "./common/icons/IconTwitter.vue";

Vue.use(Toaster, { timeout: 4000 });

export default {
  name: "Login",
  components: {
    Header,
    Footer,
    Loading,
    initFbsdk,
    GoogleLogin,
    IconBase,
    IconCloseRound,
    IconFacebookRound,
    IconGoogle,
    IconTwitter
  },
  data() {
    return {
      publicPath: local_image_path,
      emailstatus: this.$route.params.emailstatus,
      islogin: 0,
      isfblogin: 0,
      isLoading: false,
      fullPage: true,
      isLoginForm: false,
      loginform: {
        email: "",
        password: ""
      },
      params: {
        client_id: window.google_client_id
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      redirecturl: "",
      linkedin_callback: window.linkedin_callback
    };
  },
  created() {
    document.title = this.$route.meta.title;
    if (this.emailstatus == 1) {
      this.$toaster.success("Email verified suucessfully");
    } else if (this.emailstatus == 0) {
      this.$toaster.error("Email not verified, please try again");
    }
    this.redirecturl = this.$route.query.redirect;
  },
  methods: {
    async dologin() {
      if (this.loginform.email == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.loginform.password == "") {
        this.$toaster.error("Please enter Password");
      } else {
        // do login
        this.isLoading = true;
        const login_details = await this.callApi(
          "post",
          window.api_path + "login",
          {
            email: this.loginform.email,
            password: this.loginform.password
          }
        );

        if (login_details.status == 200) {
          if (login_details.data.code == 1) {
            this.islogin = 1;
            this.isLoading = false;

            if (localStorage.getItem("sgemail") != null) {
              localStorage.removeItem("sgemail");
            }
            localStorage.setItem("sgemail", this.loginform.email);

            if (localStorage.getItem("sgtoken") != null) {
              localStorage.removeItem("sgtoken");
            }
            localStorage.setItem("sgtoken", login_details.data.token);

            if (localStorage.getItem("sgname") != null) {
              localStorage.removeItem("sgname");
            }
            localStorage.setItem("sgname", login_details.data.name);

            if (localStorage.getItem("sgphoto") != null) {
              localStorage.removeItem("sgphoto");
            }
            localStorage.setItem("sgphoto", login_details.data.photo);

            if (localStorage.getItem("sgtype") != null) {
              localStorage.removeItem("sgtype");
            }
            localStorage.setItem("sgtype", 0);

            this.loginform.email = "";
            this.loginform.password = "";

            window.isAuthenticated = true;

            if (typeof this.redirecturl != "undefined") {
              this.$router.push(this.redirecturl);
            } else {
              this.$router.push({ name: "dashboard" });
            }
          } else {
            this.$toaster.error(login_details.data.data);
            this.isLoading = false;
            this.islogin = 2;
          }
        } else {
          this.$toaster.error("Details not sent, please try again");
          this.isLoading = false;
          this.islogin = 2;
        }

        if (this.islogin == 0) {
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    }, // async dologin() {

    loginWithFacebook() {
      this.isLoading = true;

      window.FB.login(
        response => {
          if (response.status == "connected") {
            this.loginWithFacebookNext(
              response.authResponse.accessToken,
              response.authResponse.userID
            );
          } else {
            this.isLoading = false;
          }
        },
        { scope: "email" }
      );
    }, // loginWithFacebook() {

    async loginWithFacebookNext(accessToken, userID) {
      const fblogin_details = await this.callApi(
        "post",
        window.api_path + "fblogin",
        {
          token: accessToken,
          user: userID
        }
      );

      if (fblogin_details.status == 200) {
        this.isLoading = false;
        if (fblogin_details.data.code == 1) {
          this.isfblogin = 1;

          if (localStorage.getItem("sgemail") != null) {
            localStorage.removeItem("sgemail");
          }
          localStorage.setItem("sgemail", userID);

          if (localStorage.getItem("sgtoken") != null) {
            localStorage.removeItem("sgtoken");
          }
          localStorage.setItem("sgtoken", fblogin_details.data.token);

          if (localStorage.getItem("sgname") != null) {
            localStorage.removeItem("sgname");
          }
          localStorage.setItem("sgname", fblogin_details.data.name);

          if (localStorage.getItem("sgphoto") != null) {
            localStorage.removeItem("sgphoto");
          }
          localStorage.setItem("sgphoto", fblogin_details.data.photo);

          if (localStorage.getItem("sgtype") != null) {
            localStorage.removeItem("sgtype");
          }
          localStorage.setItem("sgtype", 1);

          window.sgtype = 1;
          window.isAuthenticated = true;
          this.$router.push({ name: "dashboard" });
        } else {
          this.$toaster.error(fblogin_details.data.data);
          this.isfblogin = 2;
        }
      } else {
        this.$toaster.error("Login not done, please try again");
        this.isLoading = false;
        this.isfblogin = 2;
      }

      if (this.isfblogin == 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    }, // async loginWithFacebookNext(accessToken, userID) {

    async loginWithGoogle(googleUser) {
      this.isLoading = true;
      var profile = googleUser.getBasicProfile();

      const googlelogin_details = await this.callApi(
        "post",
        window.api_path + "googlelogin",
        {
          name: profile.getName(),
          email: profile.getEmail(),
          user: profile.getId()
        }
      );

      if (googlelogin_details.status == 200) {
        this.isLoading = false;
        if (googlelogin_details.data.code == 1) {
          this.isfblogin = 1;

          if (localStorage.getItem("sgemail") != null) {
            localStorage.removeItem("sgemail");
          }
          localStorage.setItem("sgemail", profile.getEmail());

          if (localStorage.getItem("sgtoken") != null) {
            localStorage.removeItem("sgtoken");
          }
          localStorage.setItem("sgtoken", googlelogin_details.data.token);

          if (localStorage.getItem("sgname") != null) {
            localStorage.removeItem("sgname");
          }
          localStorage.setItem("sgname", googlelogin_details.data.name);

          if (localStorage.getItem("sgphoto") != null) {
            localStorage.removeItem("sgphoto");
          }
          localStorage.setItem("sgphoto", googlelogin_details.data.photo);

          if (localStorage.getItem("sgtype") != null) {
            localStorage.removeItem("sgtype");
          }
          localStorage.setItem("sgtype", 2);

          window.sgtype = 2;
          window.isAuthenticated = true;
          this.$router.push({ name: "dashboard" });
        } else {
          this.$toaster.error(googlelogin_details.data.data);
          this.isfblogin = 2;
        }
      } else {
        this.$toaster.error("Login not done, please try again");
        this.isLoading = false;
        this.isfblogin = 2;
      }

      if (this.isfblogin == 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    }, // async loginWithGoogle(googleUser) {

    async loginWithIN() {
      var myWidth = 600;
      var myHeight = 600;
      var left = (screen.width - 500) / 2;
      var top = (screen.height - 400) / 4;

      var random_number = Math.floor(Math.random() * 99999999999 + 111111);

      var in_auth_url =
        "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pfblgpgdwsgc&redirect_uri=" +
        this.linkedin_callback +
        "&state=" +
        random_number +
        "&scope=r_emailaddress%20r_liteprofile";

      var myWindow = window.open(
        in_auth_url,
        "Test",
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
          myWidth +
          ", height=" +
          myHeight +
          ", top=" +
          top +
          ", left=" +
          left
      );
      myWindow.focus();
    } // async loginWithIN() {

  },
  mounted() {
    initFbsdk();
  }
};
</script>
