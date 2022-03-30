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

    <!-- Bookmark Container -->
    <div class="dashboard-container">
      <!-- Bookmark Sidebar -->
      <Sidebar />
      <!-- Bookmark Sidebar / End -->

      <!-- Bookmark Content -->
      <!-- data-simplebar -->
      <div class="dashboard-content-container">
        <div class="dashboard-content-inner">
          <!-- Bookmark Headline -->
          <div class="dashboard-headline">
            <h3>Edit Question</h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li>
                  <router-link :to="{ name: 'questionlist' }"
                    >Manage Questions</router-link
                  >
                </li>
                <li>Edit Question</li>
              </ul>
            </nav>
          </div>

          <!-- Row -->
          <div class="row">
            <!-- Bookmark Box -->
            <div class="col-xl-12">
              <div class="dashboard-box margin-top-0">
                <!-- Headline -->
                <div class="headline">
                  <h3>
                    <i class="icon-material-outline-business-center"></i>
                    Edit Question details
                  </h3>
                </div>

                <div class="content width100imp with-padding padding-bottom-10">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="submit-field">
                        <h5>Question Title</h5>
                        <input
                          type="text"
                          v-model="questionform.title"
                          class="with-border"
                        />
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="submit-field">
                        <h5>Description</h5>
                        <froala
                          :tag="'textarea'"
                          v-model="questionform.desc"
                          :config="config"
                        ></froala>
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="submit-field tags">
                        <h5>Tags</h5>
                        <b-form-tags
                          input-id="tags-pills"
                          v-model="questionform.tags"
                          tag-variant="primary"
                          tag-pills
                          size="lg"
                          :limit="taglimit"
                          placeholder="Type new tags and press enter"
                        ></b-form-tags>
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="submit-field">
                        <h5>Status</h5>
                        <div class="feedback-yes-no margin-top-0">
                          <div class="radio">
                            <input
                              id="radio-1"
                              v-model="questionform.status"
                              value="1"
                              type="radio"
                            />
                            <label for="radio-1"
                              ><span class="radio-label"></span> Publish</label
                            >
                          </div>

                          <div class="radio">
                            <input
                              id="radio-2"
                              v-model="questionform.status"
                              value="0"
                              type="radio"
                            />
                            <label for="radio-2"
                              ><span class="radio-label"></span> Not Publish</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-12">
                      <a
                        href="javascript:;"
                        @click="updatequestion"
                        class="button ripple-effect big margin-top-30"
                        >Update</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Row / End -->
        </div>

        <Footer />
      </div>
      <!-- Bookmark Content / End -->
    </div>
    <!-- Bookmark Container / End -->
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import Vue from "vue";
import Toaster from "v-toaster";
import "vue-loading-overlay/dist/vue-loading.css";
import "v-toaster/dist/v-toaster.css";

import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";

require("froala-editor/js/froala_editor.pkgd.min.js");
require("froala-editor/js/plugins/fullscreen.min.js");
require("froala-editor/js/plugins/image.min.js");
require("froala-editor/js/plugins/code_view.min.js");
require("froala-editor/js/plugins/draggable.min.js");
require("froala-editor/js/plugins/font_size.min.js");
require("froala-editor/js/plugins/colors.min.js");
require("froala-editor/js/plugins/paragraph_format.min.js");
require("froala-editor/js/plugins/paragraph_style.min.js");
require("froala-editor/js/plugins/quote.min.js");
require("froala-editor/js/plugins/table.min.js");
require("froala-editor/js/plugins/url.min.js");
require("froala-editor/js/plugins/video.min.js");
require("froala-editor/js/plugins/word_paste.min.js");
require("froala-editor/js/plugins/link.min.js");

require("froala-editor/css/froala_editor.pkgd.min.css");
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/plugins/fullscreen.min.css");
require("froala-editor/css/plugins/image.min.css");
require("froala-editor/css/plugins/code_view.min.css");
require("froala-editor/css/plugins/draggable.min.css");
require("froala-editor/css/plugins/colors.min.css");
require("froala-editor/css/plugins/table.min.css");
require("froala-editor/css/plugins/video.min.css");
import VueFroala from "vue-froala-wysiwyg";
Vue.use(VueFroala);
Vue.use(Toaster, { timeout: 4000 });

export default {
  name: "QuestionEdit",
  components: {
    Header,
    Footer,
    Sidebar,
    Loading,
  },
  data() {
    return {
      config: {
        placeholderText: "",
        fileUpload: false,
        dragInline: true,
        height: 300,
        imageEditButtons: [
          "imageReplace",
          "imageAlign",
          "imageRemove",
          "|",
          "imageLink",
          "linkOpen",
          "linkEdit",
          "linkRemove",
          "-",
          "imageDisplay",
          "imageStyle",
          "imageAlt",
          "imageSize",
        ],
        imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"],
        imageAllowedTypes: ["jpeg", "jpg", "png"],
        videoInsertButtons: ["videoBack", "|", "videoByURL", "videoEmbed"],
        events: {
          "image.beforeUpload": function (files) {
            var editor = this;
            if (files.length) {
              var reader = new FileReader();
              reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
              };
              reader.readAsDataURL(files[0]);
            }
            editor.popups.hideAll();
            return false;
          },
        },
      },
      publicPath: local_image_path,
      isLoading: false,
      fullPage: true,
      taglimit: 10,
      questionform: {
        title: "",
        tags: [],
        desc: "",
        status: "",
        id: "",
      },
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.questionDetail(this.$route.params.id);
  },
  methods: {
    async questionDetail(slug) {
      this.isLoading = true;

      // get question details
      const question_details = await this.callApi(
        "post",
        window.api_path + "question/edit",
        {
          id: slug,
        }
      );

      if (question_details.status == 200) {
        this.isLoading = false;

        if (question_details.data.code == 1) {
          this.questionform.title = question_details.data.data.title;
          this.questionform.desc = question_details.data.data.desc;
          this.questionform.tags = question_details.data.data.tags;
          this.questionform.status = question_details.data.data.status;
          this.questionform.id = question_details.data.data.id;
        } else {
          this.$toaster.error(question_details.data.data);
          this.$router.push({ name: "questionlist" });
        }
      } else if (question_details.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Question details not found, please try again");
        this.isLoading = false;
        this.$router.push({ name: "questionlist" });
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
    async updatequestion() {
      if (this.questionform.title == "") {
        this.$toaster.error("Please enter Question Title");
      } else if (this.questionform.desc == "") {
        this.$toaster.error("Please enter Question Description");
      } else if (this.questionform.status == "") {
        this.$toaster.error("Please select Status");
      } else {
        this.isLoading = true;

        const aq_details = await this.callApi(
          "post",
          window.api_path + "question/update",
          {
            id: this.questionform.id,
            title: this.questionform.title,
            desc: this.questionform.desc,
            tags: this.questionform.tags,
            status: this.questionform.status,
          }
        );

        if (aq_details.status == 200) {
          this.isLoading = false;

          if (aq_details.data.code == 1) {
            this.$toaster.success(aq_details.data.data);
            this.$router.push({ name: "questionlist" });
          } else {
            this.$toaster.error(aq_details.data.data);
          }
        } else if (aq_details.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login again");
          this.doLogout();
        } else {
          this.$toaster.error("Question not updated, please try again");
          this.isLoading = false;
        }

        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
  },
};
</script>
