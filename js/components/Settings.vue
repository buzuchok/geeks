<template>
  <div>
    <Header />

    <main class="main">
      <!-- Settings Page -->
      <section class="section-settings">
        <div class="container">
          <!-- Settings Steps -->
          <div class="settings-steps">
            <div
              class="settings-step"
              :class="settingsStep == 1 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Account</span>
            </div>
            <div
              class="settings-step"
              :class="settingsStep == 2 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Security</span>
            </div>
            <div
              class="settings-step"
              :class="settingsStep == 3 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Notifications</span>
            </div>
          </div>
          <!-- End of Settings Steps -->

          <div class="settings-container gblock">
            <!-- Settings Step 1 -->
            <section v-if="settingsStep == 1" class="section-settings-step-1 ">
              <div class="form-group settings-photoupload">
                <label>Profile Photo</label>
                <div class="photoupload">
                  <div class="photo">
                    <img
                      :src="`${publicPath}user-avatar-sm.jpg`"
                      class="rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="photoupload-r">
                    <div class="btn-photoupload mb-2">
                      <file-upload
                        v-model="files"
                        class="btn btn-primary"
                        ref="upload"
                        extensions="gif,jpg,jpeg,png,webp"
                        accept="image/png,image/gif,image/jpeg,image/webp"
                        post-action="/upload"
                        :multiple="false"
                        :drop="false"
                        :drop-directory="false"
                        @input-filter="inputFilter"
                        @input-file="inputFile"
                      >
                        Choose Photo
                      </file-upload>
                    </div>

                    <p class="text-muted">
                      This photo is your identity on streamgeeks and appears on
                      your profile and gigs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="form-group mb-5">
                <label
                  >Something about you
                  <span class="font-weight-normal"
                    >(English) (150-300) characters.</span
                  ></label
                >
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder=""
                ></textarea>
              </div>

              <div class="settings-language row">
                <div class="col-lg-5">
                  <div class="form-group">
                    <label>Site Language</label>
                    <p>
                      This changes the streamgeeks.com user interface and
                      defines what language will be used in all email
                      communications.
                    </p>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="select-container">
                          <select>
                            <option value="">English</option>
                            <option value="">German</option>
                            <option value="">French</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                  <div class="form-group">
                    <label>I can communicate</label>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="select-container">
                          <select>
                            <option value="">English</option>
                            <option value="">German</option>
                            <option value="">French</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-link font-weight-bold px-0 f16">
                      + Add language
                    </button>
                  </div>
                </div>
              </div>

              <div class="settings-btns">
                <div class="btns justify-content-end">
                  <button class="btn btn-outline-primary">Cancel</button>
                  <button
                    class="btn btn-primary"
                    @click="
                      settingsStep = 2;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Settings Step 1 -->

            <!-- Settings Step 2 -->
            <section v-if="settingsStep == 2" class="section-settings-step-2">
              <div class="headline mb-4">
                <h3 class="d-inline mb-0 mr-1">Set password</h3>
                <span
                  >(8 characters or longer. Combine upper and lowercase letters
                  and numbers)</span
                >
              </div>

              <div class="row mb-5 mx-lg-n3">
                <div class="form-group col-md-6 px-lg-3">
                  <label>New Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="form-group col-md-6 px-lg-3">
                  <label>Confirm Password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <div class="form-group mb-5">
                <label class="text-uppercase">Phone verification</label>
                <div class="row">
                  <div class="col pr-4">
                    Your phone is verified with Fiverr. Click Edit to change
                    your phone number
                  </div>
                  <div class="col-auto ml-auto">
                    <button class="btn btn-secondary">Edit</button>
                  </div>
                </div>
              </div>

              <div class="form-group mb-4">
                <label class="text-uppercase">Security question</label>
                <div class="row">
                  <div class="col pr-4">
                    By creating a security question, you will add an additional
                    layer of protection for your revenue withdrawls and for
                    changing your password
                  </div>
                  <div class="col-auto ml-auto">
                    <button class="btn btn-secondary">Edit</button>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="text-uppercase mb-3"
                  >Two factor authentication</label
                >
                <div class="row">
                  <div class="col-auto col-md-2">
                    <div class="text-uppercase font-weight-bold text-primary">
                      Recommended
                    </div>
                  </div>
                  <div class="col col-md-10 ml-auto ml-md-0">
                    <div class="custom-switch custom-switch-y">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="twoFactorRecommeded"
                        checked
                      />
                      <label for="twoFactorRecommeded"></label>
                    </div>

                    <p>
                      To help keep your account secure, we’ll ask you to submit
                      a code when using a new device to log in. We’ll send the
                      code via SMS, email, or Streamgeeks notification.
                    </p>
                  </div>
                </div>
              </div>
              <div class="settings-btns">
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      settingsStep = 1;
                      scrollToTop();
                    "
                  >
                    Cancel
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="
                      settingsStep = 3;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Settings Step 2 -->

            <!-- Settings Step 3 -->
            <section v-if="settingsStep == 3" class="section-settings-step-3">
              <div class="settings-3-table row">
                <div class="col-lg-5 pt-2">
                  <div class="text-uppercase font-weight-medium mb-4">
                    Notifications
                  </div>
                  <p>
                    For important updates regarding you <br />
                    Streamgeeks activiy, certain <br />
                    notifications cannot be disabled.
                  </p>
                </div>
                <div class="col-lg-7">
                  <table class="table table-borderless table-settings-3">
                    <thead>
                      <tr>
                        <th class="text-uppercase font-weight-medium">Type</th>
                        <th
                          class="text-uppercase font-weight-medium text-center"
                        >
                          Email
                        </th>
                        <th
                          class="text-uppercase font-weight-medium text-center"
                        >
                          Mobile
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Inbox Messages</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Order Messages</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Order Updates</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Buyer Requests</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>My Gigs</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>My Account</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>To-dos</td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="custom-checkbox-group">
                            <label
                              class="custom-checkbox custom-checkbox-dark custom-checkbox-empty"
                            >
                              <input type="checkbox" checked />
                              <span>&nbsp;</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="settings-3-notifications">
                <div class="row mb-4">
                  <div
                    class="col-lg-5 text-uppercase text-uppercase font-weight-medium"
                  >
                    Real-time notifications
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col col-md-5">
                    Enable/disable real-time notifications
                  </div>
                  <div class="col-auto col-md-7 ml-auto">
                    <div class="custom-switch custom-switch-y">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="realTimeNotifications"
                        checked
                      />
                      <label for="realTimeNotifications"></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto col-md-5">
                    Enable/disable sound
                  </div>
                  <div class="col-auto col-md-7 ml-auto">
                    <div class="custom-switch custom-switch-y">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="realTimeSound"
                        checked
                      />
                      <label for="realTimeSound"></label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="form-group form-group-settings-3">
                <div class="row mb-2">
                  <div class="col-label">
                    
                  </div>
                  <div class="col-val">
                    
                  </div>
                </div>
                <div class="row">
                  <div class="col-label"></div>
                  <div class="col-val">
                    <div class="custom-switch custom-switch-y">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="realTimeSound"
                        checked
                      />
                      <label for="realTimeSound"></label>
                    </div>
                  </div>
                </div>
              </div> -->

              <div class="settings-btns">
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      settingsStep = 2;
                      scrollToTop();
                    "
                  >
                    Cancel
                  </button>
                  <button class="btn btn-primary">
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Settings Step 3 -->
          </div>
        </div>
      </section>
      <!-- End of Settings page -->
    </main>

    <Footer />
  </div>
</template>

<script>
import FileUpload from "vue-upload-component";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconCheckboxRound from "./common/icons/IconCheckboxRound.vue";

export default {
  name: "Checkout",
  components: {
    FileUpload,
    Header,
    Footer,
    IconBase,
    IconCheckboxRound
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      files: [],
      publicPath: local_image_path,
      settingsStep: 1
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    scrollToTop: function() {
      window.scrollTo({ top: 0 });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log("add", newFile);
      }
      if (newFile && oldFile) {
        // update
        console.log("update", newFile);
      }
      if (!newFile && oldFile) {
        // remove
        console.log("remove", oldFile);
      }
    }
  }
};
</script>
