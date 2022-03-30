<template>
  <header class="header">
    <div class="container">
      <div class="header-i">
        <div class="logo">
          <router-link v-if="!isHomepage" :to="{ name: 'home' }"
            ><img
              :src="`${publicPath}logo.png`"
              :srcset="`${publicPath}logo.png, ${publicPath}logo@2x.png 2x`"
              alt="StreamGeeks"
          /></router-link>
          <span v-else
            ><img
              :src="`${publicPath}logo.png`"
              :srcset="`${publicPath}logo.png, ${publicPath}logo@2x.png 2x`"
              alt="StreamGeeks"
          /></span>
        </div>

        <div class="header-r">
          <!-- Main Navigation -->
          <nav class="header-menu" :class="mmenuExpanded ? 'active' : ''">
            <ul>
              <li>
                <div
                  @click="headerDropdown1 = !headerDropdown1"
                  class="dropdown-toggler"
                  :class="headerDropdown1 ? 'active' : ''"
                >
                  <span>Explore </span>
                  <icon-base
                    width="8"
                    height="5"
                    viewBox="0 0 8 4.56"
                    icon-name="dropdown"
                    ><icon-dropdown
                  /></icon-base>
                </div>
                <div class="dd-menu" v-if="headerDropdown1">
                  <div class="row">
                    <div class="dd-menu-section col-12 col-lg-4">
                      <ul>
                        <li class="dd-menu-headline">
                          Top projects
                        </li>
                        <li>
                          <a href="#">Item #1</a>
                        </li>
                        <li>
                          <a href="#">Item #2</a>
                        </li>
                        <li>
                          <a href="#">Item #3</a>
                        </li>
                        <li>
                          <a href="#">Item #4</a>
                        </li>
                        <li>
                          <a href="#">Item #5</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dd-menu-section col-12 col-lg-4">
                      <ul>
                        <li class="dd-menu-headline">
                          Project Ideas
                        </li>
                        <li>
                          <a href="#">Item #1</a>
                        </li>
                        <li>
                          <a href="#">Item #2</a>
                        </li>
                        <li>
                          <a href="#">Item #3</a>
                        </li>
                        <li>
                          <a href="#">Item #4</a>
                        </li>
                        <li>
                          <a href="#">Item #5</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dd-menu-section col-12 col-lg-4">
                      <ul>
                        <li class="dd-menu-headline">
                          Featured users
                        </li>
                        <li>
                          <a href="#">Item #1</a>
                        </li>
                        <li>
                          <a href="">Item #2</a>
                        </li>
                        <li>
                          <a href="">Item #3</a>
                        </li>
                        <li>
                          <a href="">Item #4</a>
                        </li>
                        <li>
                          <a href="">Item #5</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <router-link :to="{ name: 'projects' }">Projects</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'education' }">Education</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'community' }">Community</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'gigs' }">Gigs</router-link>
              </li>
              <li v-if="!isAuthenticated">
                <a href="#" @click.prevent="showLoginDialog">Login</a>
                <span class="sep">/</span>
                <a href="#" @click.prevent="showRegisterDialog">Register</a>
              </li>
            </ul>
            <div class="h-publish-m">
              <router-link
                class="btn btn-secondary"
                :to="{ name: 'projectadd' }"
                >Publish Your Project</router-link
              >
            </div>
          </nav>

          <div class="h-notifications" v-if="isAuthenticated">
            <div
              class="h-notifications-trigger"
              @click="notificationsDropdown = !notificationsDropdown"
            >
              <icon-base
                width="13.83"
                height="16.5"
                view-box="0 0 13.83 16.5"
                icon-name="bell"
                ><icon-bell
              /></icon-base>
            </div>

            <div class="h-notifications-dropdown" v-if="notificationsDropdown">
              <div class="h-notifications-headline">
                Notifications
              </div>
              <div class="h-notifications-list">
                <div class="notification">
                  <a href="#">
                    <div class="notification-userpic">
                      <img
                        class="rounded-circle"
                        :src="`${publicPath}userpic-42.jpg`"
                        alt=""
                      />
                      <span class="status status-on"></span>
                    </div>
                    <div class="notification-info">
                      <div class="text">
                        <strong>nabeelkhan154</strong> made an offer for your
                        request.
                      </div>
                      <div class="date">1 Month</div>
                    </div>
                  </a>
                </div>
                <div class="notification">
                  <a href="#">
                    <div class="notification-userpic">
                      <img :src="`${publicPath}userpic-42.jpg`" alt="" />
                      <span class="status status-on"></span>
                    </div>
                    <div class="notification-info">
                      <div class="text">
                        <strong>nabeelkhan154</strong> made an offer for your
                        second request.
                      </div>
                      <div class="date">1 Month</div>
                    </div>
                  </a>
                </div>
                <div class="notification">
                  <a href="#">
                    <div class="notification-userpic">
                      <img :src="`${publicPath}userpic-42.jpg`" alt="" />
                      <span class="status status-on"></span>
                    </div>
                    <div class="notification-info">
                      <div class="text">
                        <strong>nabeelkhan154</strong> made an offer for your
                        request.
                      </div>
                      <div class="date">1 Month</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="h-notifications-bottom">
                <a href="">
                  <icon-base
                    width="14"
                    height="13.07"
                    view-box="0 0 14 13.07"
                    icon-name="volume"
                    ><icon-volume
                  /></icon-base>
                </a>
                <a href="">
                  <icon-base
                    width="14"
                    height="14"
                    view-box="0 0 14 14"
                    icon-name="gear"
                    ><icon-gear
                  /></icon-base>
                </a>
              </div>
            </div>
          </div>

          <div class="h-search">
            <router-link :to="{ name: 'home' }">
              <icon-base
                width="16"
                height="16"
                view-box="0 0 16 16"
                icon-name="search"
                ><icon-search
              /></icon-base>
            </router-link>
          </div>

          <div class="h-publish">
            <router-link class="btn btn-secondary" :to="{ name: 'projectadd' }"
              >Publish Your Project</router-link
            >
          </div>

          <!-- User Menu -->
          <div class="h-user" v-if="isAuthenticated">
            <div class="h-user-userpic" @click="userDropdown = !userDropdown">
              <img :src="`${userprofilepic}`" alt="" />
            </div>

            <!-- User Dropdown -->
            <div class="h-user-dropdown" v-if="userDropdown">
              <div class="username">
                {{ logged_user_full_name }}
              </div>

              <ul class="h-user-nav">
                <li>
                  <router-link :to="{ name: 'dashboard' }">
                    Dashboard</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'profile' }">
                    My Account</router-link
                  >
                </li>
                <li>
                  <a @click="doLogout" href="javascript:;"> Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="mmenu-trigger"
            :class="mmenuExpanded ? 'active' : ''"
            @click="toggleMMenu"
          >
            <span></span>
          </span>
        </div>
      </div>
    </div>

    <modal
      name="login-modal-dialog"
      :width="500"
      height="auto"
      :scrollable="true"
      :adaptive="true"
      transition=""
      class="section-modal section-modal-login"
    >
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        background-color="#000"
        color="#202c54"
      ></loading>

      <!-- Login block -->
      <!-- <section class="section-modal section-modal-login">
        <div class="modal-container">
          <div class="modal-content modal-content-500"> -->
      <div class="modal-close" @click="$modal.hide('login-modal-dialog')">
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
            <a href="#" @click.prevent="switchSigninRegisterDialog"
              >Signup using Email</a
            >
          </p>
          <p>
            Already a member?
            <button class="btn btn-link p-0" @click="isLoginForm = 1">
              Signin
            </button>
          </p>
        </div>
        <div class="login-text" v-html="loginCMSText"></div>
      </div>

      <div class="login-form" v-if="isLoginForm">
        <form action="">
          <div class="form-group">
            <label for="loginEmailAddress">Email address</label>
            <input
              type="text"
              name="login-email"
              class="form-control"
              autocomplete="off"
              v-model="loginFormData.email"
              id="loginEmailAddress"
              placeholder="Enter email address"
              @keyup.enter="doLogin"
            />
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input
              type="password"
              class="form-control"
              autocomplete="off"
              v-model="loginFormData.password"
              id="loginPassword"
              placeholder="Enter password"
              @keyup.enter="doLogin"
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
            @click="doLogin"
            form="login-form"
          >
            Sign In
          </button>
        </form>

        <div class="login-forgotpassword">
          <router-link class="forgot-password" :to="{ name: 'forgot_password' }"
            >Forgot Password?</router-link
          >
        </div>
        <div class="login-signup">
          Don't a Member yet?
          <a href="#" @click.prevent="switchSigninRegisterDialog">Sign Up</a>
        </div>
      </div>
      <!-- </div>
        </div>
      </section> -->
    </modal>
    <!-- login-modal-dialog -->

    <modal
      name="register-modal-dialog"
      :width="500"
      height="auto"
      :scrollable="true"
      :adaptive="true"
      transition=""
      class="section-modal section-modal-register"
    >
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        background-color="#000"
        color="#202c54"
      ></loading>

      <!-- Register block -->

      <div class="modal-close" @click="$modal.hide('register-modal-dialog')">
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
            <label for="registerLogin">Login</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model="registerFormData.login"
              id="registerLogin"
              placeholder="Enter login"
            />
          </div>
          <div class="form-group">
            <label for="registerEmailAddress">Email address</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model="registerFormData.email"
              id="registerEmailAddress"
              placeholder="Enter email address"
            />
          </div>
          <div class="form-group">
            <label for="registerFullName">Full name</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model="registerFormData.full_name"
              id="registerFullName"
              placeholder="Enter full name"
            />
          </div>
          <div class="form-group">
            <label for="registerPassword">Password</label>
            <input
              type="password"
              class="form-control"
              autocomplete="off"
              v-model="registerFormData.password"
              id="registerPassword"
              placeholder="Create password"
            />
          </div>
          <div class="form-group">
            <label for="registerCPassword">Confirm password</label>
            <input
              type="password"
              class="form-control"
              v-model="registerFormData.cpassword"
              autocomplete="off"
              id="registerCPassword"
              placeholder="Re-enter password"
            />
          </div>

          <div class="custom-checkbox-group">
            <label class="custom-checkbox custom-checkbox-sm">
              <input
                type="checkbox"
                v-model="registerFormData.agree"
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
            @click="doRegister"
            form="register-form"
          >
            Sign Up
          </button>
        </form>

        <div class="register-signin">
          Already member?
          <a href="#" @click.prevent="switchRegisterSigninDialog">Sign In</a>
          <!--                <router-link :to="{ name: 'login' }">Sign In</router-link>-->
        </div>
      </div>
    </modal>
    <!-- register-modal-dialog -->

    <!-- Header / End -->
  </header>
</template>

<script>
import Vue from "vue";

import IconBase from "./IconBase.vue";
import IconDropdown from "./icons/IconDropdown.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";
import IconVolume from "./icons/IconVolume.vue";
import IconGear from "./icons/IconGear.vue";
import IconCloseRound from "./icons/IconCloseRound.vue";
import IconFacebookRound from "./icons/IconFacebookRound.vue";
import IconGoogle from "./icons/IconGoogle.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import Loading from "vue-loading-overlay";
import GoogleLogin from "vue-google-login";
import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
Vue.use(Toaster, { timeout: 4000 });

export default {
  name: "Header",
  components: {
    IconBase,
    IconDropdown,
    Loading,
    IconSearch,
    IconBell,
    GoogleLogin,
    IconVolume,
    IconGear,
    IconCloseRound,
    IconFacebookRound,
    IconGoogle,
    IconTwitter
  },
  computed: {
    isHomepage() {
      return this.$route.path == "/";
    }
  },
  data() {
    return {
      headerDropdown1: false,
      mmenuExpanded: false,
      notificationsDropdown: false,
      userDropdown: false,
      publicPath: local_image_path,
      isAuthenticated: true, // window.isAuthenticated,
      logged_user_full_name: "User",
      logged_user_id: null,
      redirectto: "",
      emailstatus: this.$route.params.emailstatus,
      loginCMSText: "",
      islogin: 0,
      isfblogin: 0,
      isLoading: false,
      fullPage: true,

      isLoginForm: false,
      loginFormData: {
        email: "",
        password: ""
      },

      isRegisterd: 0,
      registerFormData: {
        login: "",
        full_name: "",
        email: "",
        password: "",
        cpassword: "",
        agree: ""
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

  methods: {
    async loadCMSItemByKey(CMSItemKey) {
      const result = await this.callApi(
        "post",
        window.api_path + "getBlockCMSItem",
        {
          key: CMSItemKey
        }
      );

      if (CMSItemKey == "show_login_dialog_block") {
        this.loginCMSText = result.data.cMSItem.text;
      }
    }, // loadCMSItemByKey() {

    toggleMMenu() {
      this.mmenuExpanded = !this.mmenuExpanded;
      this.mmenuExpanded ? this.popupBodyOn() : this.popupBodyOff();
    },
    popupBodyOn() {
      document.body.style.top = "-" + window.scrollY + "px";
      document.body.style.position = "fixed";
    },
    popupBodyOff() {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    },

    // LOGIN FORM BLOCK START
    showLoginDialog() {
      this.loadCMSItemByKey("show_login_dialog_block");
      this.loginFormData.email = "";
      this.loginFormData.password = "";
      this.$modal.show("login-modal-dialog");
    },
    hideLoginDialog() {
      this.$modal.hide("login-modal-dialog");
    },

    switchRegisterSigninDialog() {
      this.hideRegisterDialog();
      this.showLoginDialog();
    },
    switchSigninRegisterDialog() {
      this.hideLoginDialog();
      this.showRegisterDialog();
    },

    async doLogin() {
      if (this.loginFormData.email == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.loginFormData.password == "") {
        this.$toaster.error("Please enter Password");
      } else {
        // do login
        this.isLoading = true;
        const login_details = await this.callApi(
          "post",
          window.api_path + "login",
          {
            email: this.loginFormData.email,
            password: this.loginFormData.password
          }
        );
        console.log("login_details::");
        console.log(login_details);

        if (login_details.status == 200) {
          if (login_details.data.code == 1) {
            this.islogin = 1;
            this.isLoading = false;

            if (localStorage.getItem("sgemail") != null) {
              localStorage.removeItem("sgemail");
            }
            localStorage.setItem("sgemail", this.loginFormData.email);

            if (localStorage.getItem("sgtoken") != null) {
              localStorage.removeItem("sgtoken");
            }
            localStorage.setItem("sgtoken", login_details.data.token);

            if (localStorage.getItem("sgname") != null) {
              localStorage.removeItem("sgname");
            }
            localStorage.setItem("sgname", login_details.data.full_name);
            this.logged_user_full_name = login_details.data.full_name;

            if (localStorage.getItem("logged_user_id") != null) {
              localStorage.removeItem("logged_user_id");
            }
            localStorage.setItem(
              "logged_user_id",
              login_details.data.logged_user_id
            );
            this.logged_user_id = login_details.data.logged_user_id;

            if (localStorage.getItem("sgphoto") != null) {
              localStorage.removeItem("sgphoto");
            }
            localStorage.setItem("sgphoto", login_details.data.profile_photo);

            if (localStorage.getItem("sgtype") != null) {
              localStorage.removeItem("sgtype");
            }
            localStorage.setItem("sgtype", 0);

            this.loginFormData.email = "";
            this.loginFormData.password = "";

            window.isAuthenticated = true;
            if (!this.redirecturl) {
              this.redirecturl = "dashboard";
            }
            if (typeof this.redirecturl != "undefined") {
              this.$router.push(this.redirecturl);
            } else {
              this.$router.push({ name: "dashboard" });
            }
            this.hideLoginDialog();
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
    }, // async doLogin() {

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
          if (!this.redirecturl) {
            this.redirecturl = "dashboard";
          }
          if (typeof this.redirecturl != "undefined") {
            this.$router.push(this.redirecturl);
          } else {
            this.$router.push({ name: "dashboard" });
          }
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
          if (!this.redirecturl) {
            this.redirecturl = "dashboard";
          }
          if (typeof this.redirecturl != "undefined") {
            this.$router.push(this.redirecturl);
          } else {
            this.$router.push({ name: "dashboard" });
          }
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
    }, // async loginWithIN() {

    // REGISTER FORM BLOCK START
    showRegisterDialog() {
      this.loadCMSItemByKey("show_register_dialog_block");

      this.registerFormData.email = "";
      this.registerFormData.login = "";
      this.registerFormData.full_name = "";
      this.registerFormData.password = "";
      this.registerFormData.cpassword = "";
      this.registerFormData.agree = "";
      this.$modal.show("register-modal-dialog");
    },
    hideRegisterDialog() {
      this.$modal.hide("register-modal-dialog");
    },

    async doRegister() {
      if (this.registerFormData.login == "") {
        this.$toaster.error("Please enter Login");
      } else if (this.registerFormData.email == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.registerFormData.full_name == "") {
        this.$toaster.error("Please enter Full Name");
      } else if (this.registerFormData.password == "") {
        this.$toaster.error("Please enter Password");
      } else if (this.registerFormData.cpassword == "") {
        this.$toaster.error("Please enter Repeat Password");
      } else if (
        this.registerFormData.password != this.registerFormData.cpassword
      ) {
        this.$toaster.error("Both Password must be same");
      } else if (this.registerFormData.agree == "") {
        this.$toaster.error("Please Agree to terms of service");
      } else {
        // do registration
        this.isLoading = true;
        const reg_details = await this.callApi(
          "post",
          window.api_path + "registration",
          {
            login: this.registerFormData.login,
            full_name: this.registerFormData.full_name,
            email: this.registerFormData.email,
            password: this.registerFormData.password,
            cpassword: this.registerFormData.cpassword
          }
        );

        // console.log('reg_details::')
        // console.log(reg_details)

        if (reg_details.status == 200) {
          if (reg_details.data.code == 1) {
            this.$toaster.success(reg_details.data.data);
            this.isRegisterd = 1;
            this.isLoading = false;
            this.registerFormData.login = "";
            this.registerFormData.full_name = "";
            this.registerFormData.email = "";
            this.registerFormData.password = "";
            this.registerFormData.cpassword = "";
            this.registerFormData.agree = "";
            // this.$router.push({ name: "login" });
            this.hideRegisterDialog();
          } else {
            this.$toaster.error(reg_details.data.data);
            this.isLoading = false;
            this.isRegisterd = 2;
          }
        } else {
          this.$toaster.error(
            "Registration not done : " + this.getErrorMessage(reg_details)
          );
          this.isLoading = false;
          this.isRegisterd = 2;
        }

        if (this.isRegisterd == 0) {
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    } // async doRegister() {

    // REGISTER FORM BLOCK END
  }, // methods: {
  // LOGIN FORM BLOCK END

  created() {
    var redirectpath = ["communitydetail"];
    if (redirectpath.indexOf(this.$route.name) >= 0) {
      this.redirectto = this.$route.path;
    }
  },

  mounted() {}
};
</script>
