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

    <!-- Profile Container -->
    <div class="dashboard-container">
      <!-- Profile Sidebar -->
      <Sidebar />
      <!-- Profile Sidebar / End -->

      <!-- Profile Content -->
      <!-- data-simplebar -->
      <div class="dashboard-content-container">
        <div class="dashboard-content-inner">
          <!-- Dashboard Headline -->
          <div class="dashboard-headline">
            <h3>Streamer Profile Account Handle</h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                  <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>Manage Profile</li>
              </ul>
            </nav>
          </div>

          <!-- Tabs Container -->
          <div class="tabs">
            <div class="tabs-header">
              <ul>
                <li class="active">
                  <a href="#tab-1" data-tab-id="1">Profile</a>
                </li>
                <li>
                  <a href="#tab-2" data-tab-id="2">Change Password</a>
                </li>
              </ul>
              <div class="tab-hover"></div>
            </div>
            <!-- Tab Content -->
            <div class="tabs-content">
              <div class="tab active" data-tab-id="1">
                <div class="col-xl-12">
                  <div class="margin-top-50">
                    <div class="content with-padding padding-bottom-0 mb-0">
                      <div class="row">
                        <div class="col-auto">
                          <div
                            class="avatar-wrapper"
                            data-tippy-placement="bottom"
                            title="Change Avatar"
                          >
                            <img
                              class="profile-pic"
                              :src="`${profileform.profilephoto}`"
                            />

                            <div class="upload-button"></div>
                            <input
                              class="file-upload"
                              v-on:change="onImageChange"
                              type="file"
                              accept="image/x-png,image/bmp,image/jpeg"
                            />
                          </div>

                          <b-alert show variant="info">
                            <p><strong>Rank:</strong><br />{{ profileform.rank }}</p>
                            <p><strong>Points:</strong><br />{{ profileform.point }}</p>
                          </b-alert>
                        </div>

                        <div class="col">
                          <div class="row">
                            <div class="col-xl-6">
                              <div class="submit-field">
                                <h5>
                                  Full name
                                  <span>*</span>
                                </h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.fullname"
                                />
                              </div>
                            </div>

                            <div class="col-xl-6">
                              <div class="submit-field">
                                <h5>
                                  Email
                                  <span>*</span>
                                </h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  readonly
                                  v-model="profileform.email"
                                />
                              </div>
                            </div>

                            <div class="col-xl-6">
                              <div class="submit-field">
                                <h5>Tag Line</h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.tagline"
                                />
                              </div>
                            </div>

                            <div class="col-xl-6">
                              <div class="submit-field">
                                <h5>Location</h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.location"
                                />
                              </div>
                            </div>

                            <div class="col-xl-6">
                              <div class="submit-field">
                                <h5>Service</h5>
                                <b-form-select
                                  v-model="profileform.service"
                                  :options="services"
                                  class="tzselectpicker"
                                ></b-form-select>
                                <select
                                  class="selectpicker with-border"
                                  id="project_service"
                                  name="project_service"
                                  data-size="7"
                                  title="Select Service"
                                >
                                  <option>Freelance</option>
                                  <option>Installation</option>
                                  <option>Service</option>
                                  <option>Consulting</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-4">
                              <div class="submit-field">
                                <h5>Facebook</h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.fblink"
                                />
                              </div>
                            </div>

                            <div class="col-xl-4">
                              <div class="submit-field">
                                <h5>Instagram</h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.instalink"
                                />
                              </div>
                            </div>

                            <div class="col-xl-4">
                              <div class="submit-field">
                                <h5>Twitter</h5>
                                <input
                                  type="text"
                                  class="with-border"
                                  v-model="profileform.twlink"
                                />
                              </div>
                            </div>

                            <!-- Button -->

                            <div class="col-xl-12 text-right margin-bottom-20">
                              <p>* Field Should Be Required</p>
                              <button
                                class="button ripple-effect big button-sliding-icon tab_btn_first"
                                @click="updateuserdetails"
                              >
                                Update
                                <i class="icon-feather-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- margin-top-50 -->
                </div>
                <!-- col-xl-12 -->
              </div>
              <div class="tab" data-tab-id="2">
                <div class="margin-top-50">
                  <div class="content with-padding mb-0">
                    <div class="row">
                      <div v-if="profileform.type == 0" class="col-xl-4">
                        <div class="submit-field">
                          <h5>Current Password</h5>
                          <input
                            type="password"
                            v-model="passwordform.current_pass"
                            class="with-border"
                          />
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>New Password</h5>
                          <input
                            type="password"
                            v-model="passwordform.new_pass"
                            class="with-border"
                          />
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>Confirm New Password</h5>
                          <input
                            type="password"
                            v-model="passwordform.repeatnew_pass"
                            class="with-border"
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <!-- Button -->
                        <div class="col-xl-12 text-right">
                          <button
                            @click="updatepassword"
                            class="button ripple-effect big button-sliding-icon tab_btn_all"
                          >
                            Update
                            <i class="icon-feather-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- margin-top-50 -->
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <!-- Profile Content / End -->
    </div>
    <!-- Profile Container / End -->
  </div>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Profile",
  components: {
    Header,
    Footer,
    Sidebar,
    Loading,
  },
  data() {
    return {
      publicPath: local_image_path,
      sendimage: "",
      defaultimage: window.local_image_path + "user-avatar-small-01.jpg",
      isLoading: false,
      fullPage: true,
      services: [
        { value: 0, text: "Select" },
        { value: 1, text: "Freelance" },
        { value: 2, text: "Installation" },
        { value: 3, text: "Service" },
        { value: 4, text: "Consulting" },
      ],
      profileform: {
        fullname: "",
        email: "",
        tagline: "",
        location: "",
        fblink: "",
        instalink: "",
        twlink: "",
        service: 0,
        profilephoto: window.local_image_path + "user-avatar-small-01.jpg",
        rank: "",
        type: "",
        point: "",
      },
      passwordform: {
        current_pass: "",
        new_pass: "",
        repeatnew_pass: "",
      },
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.userdetails();
  },
  methods: {
    async userdetails() {
      this.isLoading = true;

      const details = await this.callApi("post", window.api_path + "profile/get");

      if (details.status == 200) {
        this.isLoading = false;
        if (details.data.code == 1) {
          this.profileform.fullname = details.data.data.name;
          this.profileform.email = details.data.data.email;
          this.profileform.location = details.data.data.location;
          this.profileform.point = details.data.data.point;
          this.profileform.rank = details.data.data.rank;
          this.profileform.type = details.data.data.type;
          if (details.data.data.photo == "" || details.data.data.photo == null) {
            this.profileform.profilephoto = this.defaultimage;
          } else {
            this.profileform.profilephoto = window.image_path + details.data.data.photo;
          }

          this.profileform.service = details.data.data.service;

          this.profileform.fblink = details.data.data.fblink;
          this.profileform.instalink = details.data.data.instalink;
          this.profileform.twlink = details.data.data.twlink;

          this.profileform.tagline = details.data.data.tagline;
        } else {
          this.$toaster.error(details.data.data);
        }
      } else if (details.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login");
      } else {
        this.$toaster.error("Details not found, please try again");
        this.isLoading = false;
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
    async updateuserdetails() {
      if (this.profileform.fullname == "") {
        this.$toaster.error("Please enter Name");
      } else {
        this.isLoading = true;
        const send_detail = await this.callApi(
          "post",
          window.api_path + "profile/update",
          {
            name: this.profileform.fullname,
            location: this.profileform.location,
            service: this.profileform.service,
            tagline: this.profileform.tagline,
            fblink: this.profileform.fblink,
            instalink: this.profileform.instalink,
            twlink: this.profileform.twlink,
            profilephoto: this.sendimage,
          }
        );

        if (send_detail.status == 200) {
          this.isLoading = false;
          if (send_detail.data.code == 1) {
            this.$toaster.success(send_detail.data.data);
            if (localStorage.getItem("sgname") != null) {
              localStorage.removeItem("sgname");
            }
            localStorage.setItem("sgname", this.profileform.fullname);

            if (localStorage.getItem("sgphoto") != null) {
              localStorage.removeItem("sgphoto");
            }
            localStorage.setItem("sgphoto", send_detail.data.photo);

            this.updateUserDetails();
          } else {
            this.$toaster.error(send_detail.data.data);
          }
        } else if (send_detail.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login again");
          this.doLogout();
        } else {
          this.isLoading = false;
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    },
    async updatepassword() {
      if (this.passwordform.type == 0) {
        if (this.passwordform.current_pass == "") {
          this.$toaster.error("Please enter Current password");
          return false;
        }
      }

      if (this.passwordform.new_pass == "") {
        this.$toaster.error("Please enter New password");
      } else if (this.passwordform.repeatnew_pass == "") {
        this.$toaster.error("Please enter Confirm New password");
      } else if (this.passwordform.new_pass != this.passwordform.repeatnew_pass) {
        this.$toaster.error("New password and Confirm New password is not same");
      } else {
        this.isLoading = true;

        const send_detail = await this.callApi(
          "post",
          window.api_path + "profile/password/update",
          {
            new_pass: this.passwordform.new_pass,
            current_pass: this.passwordform.current_pass,
          }
        );

        if (send_detail.status == 200) {
          this.isLoading = false;
          if (send_detail.data.code == 1) {
            this.passwordform.current_pass = "";
            this.passwordform.new_pass = "";
            this.passwordform.repeatnew_pass = "";
            this.$toaster.success(send_detail.data.data);
          } else {
            this.$toaster.error(send_detail.data.data);
          }
        } else if (send_detail.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login again");
          this.doLogout();
        } else {
          this.isLoading = false;
          setTimeout(() => {
            this.isLoading = false;
          }, 10000);
        }
      }
    },
    onImageChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      // let vm = this;
      reader.onload = (e) => {
        // vm.image = e.target.result;
        this.sendimage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
