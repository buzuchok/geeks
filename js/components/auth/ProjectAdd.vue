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

    <!-- ProjectAdd Container -->
    <div class="dashboard-container project_page">
      <!-- ProjectAdd Sidebar -->
      <Sidebar />
      <!-- ProjectAdd Sidebar / End -->

      <!-- ProjectAdd Content -->
      <!-- data-simplebar -->
      <div class="dashboard-content-container">
        <div class="dashboard-content-inner">
          <!-- Dashboard Headline -->
          <div class="dashboard-headline">
            <h3>
              <!--                0000-->
              <!--                <x-zondicon-cloud/>-->
              <!--                111-->

              <!--                <x-zondicon-cloud class="w-6 h-6 text-gray-500"/>-->
              <!--                222-->

              <!--                <x-zondicon-cloud style="color: #555"/>-->
              <!--                99999-->
              Create New Streaming Project
            </h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                  <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                  Create New Streaming Project
                </li>
              </ul>
            </nav>
          </div>

          <!-- Row -->
          <div class="row margin-top-50">
            <div class="col-xl-12 col-md-12">
              <div class="content">
                <!--content inner-->
                <div class="content__inner">
                  <div class="ccontainer overflow-hiddenn">
                    <!--multisteps-form-->
                    <div class="multisteps-form">
                      <div class="multisteps-form__progress">
                        <button
                          class="multisteps-form__progress-btn js-active"
                          type="button"
                          title="Add Project Info"
                        >
                          Project Info
                        </button>
                        <button
                          class="multisteps-form__progress-btn"
                          type="button"
                          title="Add Product"
                        >
                          Product Details
                        </button>
                        <button
                          class="multisteps-form__progress-btn"
                          type="button"
                          title="Project Budget & Diagram"
                        >
                          Project Budget & Diagram
                        </button>
                        <button
                          class="multisteps-form__progress-btn"
                          type="button"
                          title="Video & Website Link"
                        >
                          Video & Website Link
                        </button>
                      </div>

                      <form class="multisteps-form__form">
                        <!--single form panel-->
                        <div
                          class="multisteps-form__panel shadow p-4 rounded bg-white js-active"
                          data-animation="scaleIn"
                        >
                          <!-- <h3 class="multisteps-form__title">Your User Info</h3> -->
                          <div class="multisteps-form__content">
                            <div class="row">
                              <div class="col-xl-4">
                                <div class="submit-field">
                                  <h5>
                                    Project Name
                                    <span>*</span>
                                  </h5>
                                  <input
                                    type="text"
                                    class="with-border"
                                    id="name_project"
                                    v-model="project.name"
                                  />
                                </div>
                              </div>

                              <div class="col-xl-4">
                                <div class="submit-field">
                                  <h5>
                                    Choose Categories
                                    <span>*</span>
                                  </h5>
                                  <b-form-select
                                    class="tzselectpicker"
                                    v-model="project.category"
                                    :options="category"
                                  ></b-form-select>
                                </div>
                              </div>

                              <div class="col-xl-4">
                                <div class="submit-field">
                                  <h5>
                                    Choose Type
                                    <span>*</span>
                                  </h5>
                                  <b-form-select
                                    class="tzselectpicker"
                                    v-model="project.type"
                                    :options="project_type"
                                  ></b-form-select>
                                </div>
                              </div>

                              <div class="col-xl-12">
                                <div class="submit-field">
                                  <h5>
                                    Describe Project
                                    <span>*</span>
                                  </h5>
                                  <froala
                                    :tag="'textarea'"
                                    v-model="project.desc"
                                    :config="config"
                                  ></froala>
                                </div>
                                <p class="text-right">
                                  * Field Should Be Required
                                </p>
                              </div>

                              <div class="clearfix"></div>

                              <div class="col-xl-4"></div>
                              <div class="col-xl-4">
                                <!-- <div class="col-xl-12 text-center">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect tz_step_1_save_btn"
                                    @click="addProjectStepOne"
                                    >Save<i class="icon-feather-chevrons-right"></i
                                  ></a>
                                </div> -->
                              </div>
                              <div class="col-xl-4">
                                <div class="text-right">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect js-btn-next"
                                    >Next</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--single form panel-->
                        <div
                          class="multisteps-form__panel shadow p-4 rounded bg-white"
                          data-animation="scaleIn"
                        >
                          <!-- <h3 class="multisteps-form__title">Your Address</h3> -->
                          <div class="multisteps-form__content">
                            <div class="row">
                              <div class="add_products_list_append w-100">
                                <!-- loop start -->
                                <div
                                  class="add_products_list"
                                  v-for="(prsub, counter) in product"
                                  v-bind:key="counter"
                                >
                                  <div class="col-xl-4">
                                    <div class="submit-field">
                                      <h5>Product Name</h5>
                                      <input
                                        type="text"
                                        class="with-border"
                                        v-model="prsub.prname"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-xl-4">
                                    <div class="submit-field">
                                      <h5>Product Associated Link</h5>
                                      <input
                                        type="text"
                                        class="with-border"
                                        v-model="prsub.prlink"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-xl-3">
                                    <div class="submit-field">
                                      <h5>Product Price</h5>
                                      <input
                                        type="text"
                                        class="with-border"
                                        v-model="prsub.prprice"
                                      />
                                    </div>
                                  </div>

                                  <div v-if="counter > 0" class="col-xl-1">
                                    <div class="submit-field">
                                      <h5>&nbsp;</h5>
                                      <a
                                        class="button ripple-effect"
                                        href="javascript:;"
                                        @click="deleteProductDOM(counter)"
                                        ><i
                                          class="fa fa-trash"
                                          aria-hidden="true"
                                        ></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                                <!-- loop end -->
                              </div>

                              <div class="clearfix"></div>
                              <div class="row w-100">
                                <div class="col-xl-12 text-right">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect add_more_btn"
                                    @click="addProductDOM"
                                    >Add More<i
                                      class="icon-feather-plus-square"
                                    ></i
                                  ></a>
                                  <p>* Field Should Be Required</p>
                                </div>
                                <div class="clearfix"></div>

                                <div class="col-xl-4">
                                  <div class="text-left">
                                    <a
                                      href="javascript:;"
                                      class="button ripple-effect js-btn-prev"
                                      >Prev</a
                                    >
                                  </div>
                                </div>
                                <div class="col-xl-4">
                                  <!-- <div class="col-xl-12 text-center">
                                    <a
                                      href="javascript:;"
                                      class="button ripple-effect tz_step_2_save_btn"
                                      @click="addProjectStepTwo"
                                      >Save<i class="icon-feather-chevrons-right"></i
                                    ></a>
                                  </div> -->
                                </div>
                                <div class="col-xl-4">
                                  <div class="text-right">
                                    <a
                                      href="javascript:;"
                                      class="button ripple-effect js-btn-next"
                                      >Next</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--single form panel-->
                        <div
                          class="multisteps-form__panel shadow p-4 rounded bg-white"
                          data-animation="scaleIn"
                        >
                          <!-- <h3 class="multisteps-form__title">Your Order Info</h3> -->
                          <div class="multisteps-form__content">
                            <div class="row">
                              <div class="col-xl-6">
                                <div class="submit-field">
                                  <h5>Add Project Pictures</h5>
                                  <div class="uploadButton margin-top-10">
                                    <input
                                      class="uploadButton-input"
                                      type="file"
                                      id="uploadpic"
                                      v-on:change="onPictureChange"
                                      accept="image/x-png,image/bmp,image/jpeg"
                                      multiple
                                    />
                                    <label
                                      class="uploadButton-button ripple-effect"
                                      for="uploadpic"
                                      >Add Project Pictures</label
                                    >

                                    <ul id="uploadpic_list"></ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-6">
                                <div class="submit-field">
                                  <h5>Add Wiring Diagram</h5>
                                  <div class="uploadButton margin-top-10">
                                    <input
                                      class="uploadButton-input"
                                      type="file"
                                      v-on:change="onDiagramChange"
                                      accept="image/x-png,image/bmp,image/jpeg"
                                      id="uploaddiagram"
                                      multiple
                                    />
                                    <label
                                      class="uploadButton-button ripple-effect"
                                      for="uploaddiagram"
                                      >Add Wiring Diagram</label
                                    >

                                    <ul id="uploaddia_list"></ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-6">
                                <div class="submit-field">
                                  <h5>
                                    Estimated Project Budget
                                    <span>*</span>
                                  </h5>
                                  <div class="input-with-icon">
                                    <input
                                      class="with-border"
                                      type="text"
                                      v-model="project.prbudget"
                                    />
                                    <i class="currency">USD</i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-6">
                                <div class="submit-field">
                                  <h5>Tags</h5>
                                  <div class="keywords-container">
                                    <div class="keyword-input-container tags">
                                      <b-form-tags
                                        input-id="tags-pills"
                                        v-model="project.tags"
                                        tag-variant="primary"
                                        tag-pills
                                        size="lg"
                                        :limit="project.taglimit"
                                        placeholder="Type new tags and press enter"
                                      ></b-form-tags>
                                    </div>
                                    <div
                                      class="keywords-list"
                                      style="height: auto"
                                    ></div>
                                    <div class="clearfix"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-12 text-right">
                                <p>* Field Should Be Required</p>
                              </div>

                              <div class="clearfix"></div>

                              <div class="col-xl-4">
                                <div class="text-left">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect js-btn-prev"
                                    >Prev</a
                                  >
                                </div>
                              </div>
                              <div class="col-xl-4">
                                <!-- <div class="col-xl-12 text-center">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect tz_step_2_save_btn"
                                    @click="addProject(3)"
                                    >Save<i class="icon-feather-chevrons-right"></i
                                  ></a>
                                </div> -->
                              </div>
                              <div class="col-xl-4">
                                <div class="text-right">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect js-btn-next"
                                    >Next</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--single form panel-->
                        <div
                          class="multisteps-form__panel shadow p-4 rounded bg-white"
                          data-animation="scaleIn"
                        >
                          <!-- <h3 class="multisteps-form__title">Additional Comments</h3> -->
                          <div class="multisteps-form__content">
                            <div class="row">
                              <div class="col-xl-6 col-md-6">
                                <div
                                  class="section-headline margin-top-25 margin-bottom-12"
                                >
                                  <h5>Add Link to Video (live stream)</h5>
                                </div>
                                <div class="input-with-icon-left no-border">
                                  <i class="icon-feather-video"></i>
                                  <input
                                    type="text"
                                    class="input-text"
                                    v-model="project.videolink"
                                  />
                                </div>
                              </div>
                              <div class="col-xl-6 col-md-6">
                                <div
                                  class="section-headline margin-top-25 margin-bottom-12"
                                >
                                  <h5>Add link to website</h5>
                                </div>
                                <div class="input-with-icon-left no-border">
                                  <i class="icon-feather-globe"></i>
                                  <input
                                    type="text"
                                    class="input-text"
                                    v-model="project.websitelink"
                                  />
                                </div>
                              </div>
                              <div class="col-xl-12 col-md-12">
                                <div
                                  class="section-headline margin-top-25 margin-bottom-12"
                                >
                                  <h5>Publish or Private</h5>
                                </div>
                                <div class="radio">
                                  <input
                                    id="radio-1"
                                    name="pro_status"
                                    type="radio"
                                    value="1"
                                    v-model="project.status"
                                  />
                                  <label class="tz_radio_btn" for="radio-1"
                                    ><span class="radio-label"></span>
                                    Publish</label
                                  >
                                  <input
                                    id="radio-2"
                                    name="pro_status"
                                    v-model="project.status"
                                    type="radio"
                                    value="0"
                                  />
                                  <label class="tz_radio_btn" for="radio-2"
                                    ><span class="radio-label"></span>
                                    Private</label
                                  >
                                </div>
                              </div>

                              <p class="w-100 text-right">
                                * Field Should Be Required
                              </p>

                              <div class="clearfix"></div>

                              <div class="col-xl-4">
                                <div class="text-left">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect js-btn-prev"
                                    >Prev</a
                                  >
                                </div>
                              </div>
                              <div class="col-xl-4"></div>
                              <div class="col-xl-4">
                                <div class="text-right">
                                  <a
                                    href="javascript:;"
                                    class="button ripple-effect"
                                    @click="addProject(4)"
                                    >Save<i
                                      class="icon-feather-chevrons-right"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
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
      <!-- ProjectAdd Content / End -->
    </div>
    <!-- ProjectAdd Container / End -->
  </div>
</template>

<style>
/* @import "/frontassets/css/step-form-style.css"; */
</style>
<script>
import Vue from "vue";
import Loading from "vue-loading-overlay";
import Toaster from "v-toaster";
import "vue-loading-overlay/dist/vue-loading.css";
import "v-toaster/dist/v-toaster.css";
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";
Vue.use(Toaster, { timeout: 4000 });
// import simplebar from "simplebar";
// import "simplebar/dist/simplebar.min.css";
// import CKEditor from "ckeditor4-vue";

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
// Vue.use(CKEditor);
Vue.use(VueFroala);
export default {
  name: "ProjectAdd",
  components: {
    Header,
    Footer,
    Sidebar,
    Loading
    // simplebar,
    // CKEditor,
  },
  data() {
    return {
      publicPath: local_image_path,
      isLoading: false,
      fullPage: true,
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
          "imageSize"
        ],
        imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"],
        imageAllowedTypes: ["jpeg", "jpg", "png"],
        videoInsertButtons: ["videoBack", "|", "videoByURL", "videoEmbed"],
        events: {
          "image.beforeUpload": function(files) {
            var editor = this;
            if (files.length) {
              var reader = new FileReader();
              reader.onload = function(e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
              };
              reader.readAsDataURL(files[0]);
            }
            editor.popups.hideAll();
            return false;
          }
        }
      },
      category: [],
      project_type: [],
      project: {
        name: "",
        slug: "",
        category: 0,
        type: 0,
        desc: "",
        picture: "",
        diagram: "",
        prbudget: "",
        tags: [],
        taglimit: 5,
        videolink: "",
        websitelink: "",
        status: 1
      },
      send_picture_image: [],
      send_diagram_image: [],
      product: [
        {
          prname: "",
          prlink: "",
          prprice: ""
        }
      ]
    };
  },

  created() {
    document.title = this.$route.meta.title;
    this.listCategory();
  },
  methods: {
    addmoreproject() {},
    async listCategory() {
      const list = await this.callApi(
        "post",
        window.api_path + "project/category/get"
      );

      if (list.status == 200) {
        if (list.data.code == 1) {
          var category = [];

          Object.keys(list.data.data).forEach(function(key) {
            category.push({
              value: list.data.data[key].id,
              text: list.data.data[key].title
            });
          });

          category.push({
            value: 0,
            text: "Select"
          });

          category.reverse();

          this.category = category;

          const typesList = await this.callApi(
            "post",
            window.api_path + "project/type/get"
          );
          if (typesList.status == 200) {
            if (typesList.data.code == 1) {
              var projecttype = [];

              Object.keys(typesList.data.data).forEach(function(key) {
                projecttype.push({
                  value: typesList.data.data[key].id,
                  text: typesList.data.data[key].title
                });
              });

              projecttype.push({
                value: 0,
                text: "Select"
              });

              projecttype.reverse();

              this.project_type = projecttype;
            }
          }
        }
      }
    },
    onPictureChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var i;
      for (i = 0; i < files.length; i++) {
        this.createPictureImage(files[i]);
      }
    },
    createPictureImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.send_picture_image.push(e.target.result);
      };

      reader.readAsDataURL(file);

      setTimeout(() => {
        $("#uploadpic_list").html("");
        var allpic = this.send_picture_image;
        Object.keys(allpic).forEach(function(key) {
          $("#uploadpic_list").append(
            "<li><img src='" +
              allpic[key] +
              "'><i class='fa fa-times-circle'></i></li>"
          );
        });

        this.wrapperHeight();
        this.fullPageScrollbar();
        this.setStepForm();
      }, 500);
    },
    onDiagramChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var j;
      for (j = 0; j < files.length; j++) {
        this.createDiagramImage(files[j]);
      }
    },
    createDiagramImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.send_diagram_image.push(e.target.result);
      };
      reader.readAsDataURL(file);

      setTimeout(() => {
        $("#uploaddia_list").html("");
        var alldia = this.send_diagram_image;
        Object.keys(alldia).forEach(function(key) {
          $("#uploaddia_list").append(
            "<li><img src='" +
              alldia[key] +
              "'><i class='fa fa-times-circle'></i></li>"
          );
        });
      }, 500);
    },
    async addProjectStepOne() {
      if (this.project.name == "") {
        this.$toaster.error("Please enter Project name");
      } else if (this.project.category == "") {
        this.$toaster.error("Please select category");
      } else if (this.project.type == "") {
        this.$toaster.error("Please select Project type");
      } else if (this.project.desc == "") {
        this.$toaster.error("Please enter Project description");
      } else {
        this.isLoading = true;

        const add = await this.callApi(
          "post",
          window.api_path + "project/addstepone",
          {
            slug: this.project.slug,
            name: this.project.name,
            category: this.project.category,
            type: this.project.type,
            desc: this.project.desc
          }
        );

        if (add.status == 200) {
          this.isLoading = false;
          if (add.data.code == 1) {
            this.$toaster.success(add.data.data);
            this.project.slug = add.data.slug;
          } else {
            this.$toaster.error(add.data.data);
          }
        } else {
          this.isLoading = false;
        }
      }
    },
    async addProject(step) {
      console.log("addProject step::");
      console.log(step);

      console.log("addProject this.project::");
      console.log(this.project);

      if (this.project.name == "") {
        this.$toaster.error("Please enter Project name");
      } else if (this.project.category == "") {
        this.$toaster.error("Please select category");
      } else if (this.project.type == "") {
        this.$toaster.error("Please select Project type");
      } else if (this.project.desc == "") {
        this.$toaster.error("Please enter Project description");
      } else if (this.project.prbudget == "") {
        this.$toaster.error("Please enter Project Estimated Budget");
      } else if (this.project.status == "") {
        this.$toaster.error("Please enter Project status");
      } else {
        this.isLoading = true;

        var send_picture_image_final = "";
        var send_diagram_image_final = "";
        if (this.send_picture_image.length > 0) {
          send_picture_image_final = JSON.stringify(this.send_picture_image);
        }
        if (this.send_diagram_image.length > 0) {
          send_diagram_image_final = JSON.stringify(this.send_diagram_image);
        }

        var product_json = "";
        if (this.product.length > 0) {
          if (this.product[0]["prname"] != "") {
            product_json = JSON.stringify(this.product);
          }
        }

        const add = await this.callApi(
          "post",
          window.api_path + "project/addproject",
          {
            slug: this.project.slug,
            name: this.project.name,
            category: this.project.category,
            type: this.project.type,
            desc: this.project.desc,
            prbudget: this.project.prbudget,
            tags: this.project.tags,
            videolink: this.project.videolink,
            websitelink: this.project.websitelink,
            status: this.project.status,
            send_picture_image: send_picture_image_final,
            send_diagram_image: send_diagram_image_final,
            products: product_json
          }
        );

        if (add.status == 200) {
          this.isLoading = false;
          if (add.data.code == 1) {
            this.$toaster.success(add.data.data);

            this.project.slug = "";
            this.project.name = "";
            this.project.category = 0;
            this.project.type = 0;
            this.project.desc = "";
            this.project.prbudget = "";
            this.project.tags = [];
            this.project.videolink = "";
            this.project.websitelink = "";
            this.project.status = 1;
            this.send_picture_image = [];
            this.send_diagram_image = [];
            this.product = [];

            // $(".multisteps-form__progress-btn").removeClass("js-active");
            // $(".multisteps-form__progress .multisteps-form__progress-btn:first").addClass(
            //   "js-active"
            // );

            // $(".multisteps-form__form .multisteps-form__panel").removeClass("js-active");
            // $(".multisteps-form__form .multisteps-form__panel:first").addClass(
            //   "js-active"
            // );

            // this.wrapperHeight();
            // this.fullPageScrollbar();
            // this.setStepForm();

            this.$router.push({ name: "projectlist" });
          } else {
            this.$toaster.error(add.data.data);
          }
        } else if (aq_details.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login again");
          this.doLogout();
        } else {
          this.isLoading = false;
          this.$toaster.error("Project details not saved, please try again");
        }
      }
    },
    addProductDOM() {
      this.product.push({
        prname: "",
        prlink: "",
        prprice: ""
      });

      this.wrapperHeight();
      this.fullPageScrollbar();
      this.setStepForm();
    },
    deleteProductDOM(counter) {
      this.product.splice(counter, 1);
    }
  },
  mounted() {
    // setTimeout(() => {
    //   // new SimpleBar($(".dashboard-content-container")[0]);
    //   new SimpleBar($(".dashboard-content-container")[0], {
    //     autoHide: false,
    //   });
    // }, 1000);
    var vm = this;

    setTimeout(() => {
      vm.setStepForm();
    }, 500);

    $("body").on("click", "#uploadpic_list li i", function() {
      var imgsrc = $(this)
        .parent()
        .find("img")
        .attr("src");
      $(this)
        .parent()
        .remove();

      Object.keys(vm.send_picture_image).forEach(function(key) {
        if (vm.send_picture_image[key] == imgsrc) {
          vm.send_picture_image.splice(key, 1);
        }
      });
    });

    $("body").on("click", "#uploaddia_list li i", function() {
      var imgsrc = $(this)
        .parent()
        .find("img")
        .attr("src");
      $(this)
        .parent()
        .remove();

      Object.keys(vm.send_diagram_image).forEach(function(key) {
        if (vm.send_diagram_image[key] == imgsrc) {
          vm.send_diagram_image.splice(key, 1);
        }
      });
    });
  }
};
</script>
