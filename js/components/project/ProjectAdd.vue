<template>
  <div>
    <Header />

    <main class="main">
      <!-- Project Add -->
      <section class="section-projectadd">
        <div class="container">
          <header class="projectadd-header">
            <h1>Add new project</h1>
            <button class="btn btn-secondary btn-wide">+ New Project</button>
          </header>
          <div class="projectadd-container wblock">
            <div class="projectadd-row">
              <!-- Project Add Thumbnail -->
              <div class="projectadd-media">
                <div class="projectadd-media-heading">
                  <h2>Add project thumbnail</h2>
                  <span class="projectadd-media-info">Up to 5</span>
                </div>

                <div class="projectadd-media-items">
                  <div class="projectadd-media-item">
                    <div class="item-img">
                      <img
                        :src="`${publicPath}project-1-354.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <div class="btns">
                        <button class="btn btn-white-icon-rounded">
                          <icon-base
                            width="12.53"
                            height="14"
                            view-box="0 0 12.53 14"
                            icon-name="pencil"
                          >
                            <icon-pencil />
                          </icon-base>
                        </button>
                        <button class="btn btn-white-icon-rounded">
                          <icon-base
                            width="12"
                            height="14.64"
                            view-box="0 0 12 14.64"
                            icon-name="trash"
                          >
                            <icon-trash />
                          </icon-base>
                        </button>
                      </div>
                    </div>
                    <div class="item-caption">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter a caption"
                        />
                      </div>
                    </div>
                    <div class="item-is-cover">
                      <div class="custom-radio-group">
                        <label class="custom-radio">
                          <input type="radio" checked name="project-is-cover" />
                          <span>Cover Image</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="projectadd-media-item">
                    <div class="item-img">
                      <img
                        :src="`${publicPath}project-1-354.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <div class="btns">
                        <button class="btn btn-white-icon-rounded">
                          <icon-base
                            width="12.53"
                            height="14"
                            view-box="0 0 12.53 14"
                            icon-name="pencil"
                          >
                            <icon-pencil />
                          </icon-base>
                        </button>
                        <button class="btn btn-white-icon-rounded">
                          <icon-base
                            width="12"
                            height="14.64"
                            view-box="0 0 12 14.64"
                            icon-name="trash"
                          >
                            <icon-trash />
                          </icon-base>
                        </button>
                      </div>
                    </div>
                    <div class="item-caption">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter a caption"
                        />
                      </div>
                    </div>
                    <div class="item-is-cover">
                      <div class="custom-radio-group">
                        <label class="custom-radio">
                          <input type="radio" checked name="project-is-cover" />
                          <span>Cover Image</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="projectadd-media-add"
                  :class="
                    $refs.upload && $refs.upload.dropActive && dragActive
                      ? 'active'
                      : ''
                  "
                  @dragenter="dragEnter"
                  @dragleave="dragLeave"
                >
                  <div class="add-text">
                    Drag images here or
                    <file-upload
                      v-model="files"
                      ref="upload"
                      extensions="gif,jpg,jpeg,png,webp"
                      accept="image/png,image/gif,image/jpeg,image/webp"
                      post-action="/upload"
                      :multiple="false"
                      :drop="`.projectadd-media-add`"
                      :drop-directory="false"
                      @input-filter="inputFilter"
                      @input-file="inputFile"
                    >
                      browse
                    </file-upload>
                    to upload
                  </div>
                </div>
              </div>
              <!-- End of Project Add Thumbnail -->

              <!-- Project Add Content -->
              <div class="projectadd-content">
                <div class="projectadd-form">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Write project title"
                    />
                  </div>
                  <div class="form-group">
                    <label>Sub title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Write project subtitle"
                    />
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label>Select category</label>
                      <div class="select-container select-container-2">
                        <select>
                          <option value="" disabled selected>Select</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label>Platform</label>
                      <div class="select-container select-container-2">
                        <select>
                          <option value="" disabled selected>Select</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Add product</label>
                    <vue-tags-input
                      v-model="projecttag"
                      :tags="projecttags"
                      :add-only-from-autocomplete="true"
                      :autocomplete-items="filteredItems"
                      placeholder="Add..."
                      @tags-changed="newTags => (tags = newTags)"
                    />
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label>Add Budget</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Add Budget"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Add Video link</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tags</label>
                    <div class="btns tag-btns">
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag1Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag1Selected = !projectTag1Selected"
                      >
                        + MySQL Administration
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag2Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag2Selected = !projectTag2Selected"
                      >
                        + API Integration
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag3Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag3Selected = !projectTag3Selected"
                      >
                        + MongoDB
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag4Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag4Selected = !projectTag4Selected"
                      >
                        + RESTful
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag5Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag5Selected = !projectTag5Selected"
                      >
                        + Nodejs
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag6Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag6Selected = !projectTag6Selected"
                      >
                        + PostgreSQL Administration
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag7Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag7Selected = !projectTag7Selected"
                      >
                        + Bootstrap
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag8Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag8Selected = !projectTag8Selected"
                      >
                        + React.js
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag9Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag9Selected = !projectTag9Selected"
                      >
                        + CSS
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag10Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag10Selected = !projectTag10Selected"
                      >
                        + jQuery
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag11Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag11Selected = !projectTag11Selected"
                      >
                        + HTML
                      </button>
                      <button
                        class="btn btn-sm"
                        :class="
                          projectTag12Selected ? 'btn-secondary' : 'btn-light'
                        "
                        @click="projectTag12Selected = !projectTag12Selected"
                      >
                        + MS SQL
                      </button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Not what you’re looking for?</label>
                    <div class="select-container select-container-2">
                      <select>
                        <option value="" disabled selected
                          >Search Skills</option
                        >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Project Description</label>
                    <textarea
                      rows="4"
                      class="form-control"
                      placeholder="Start writing your description..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- Project Add Content -->
            </div>

            <div class="projectadd-btns">
              <div class="btns mb-5">
                <button class="btn btn-primary">Next</button>
                <button class="btn btn-outline-primary">Previous</button>
              </div>

              <div class="custom-checkbox-group mb-4">
                <label class="custom-checkbox">
                  <input type="checkbox" checked />
                  <span
                    >As Gold Member you can set your new project as
                    featured</span
                  >
                </label>
              </div>

              <div class="btns">
                <button class="btn btn-primary btn-wide">Publish</button>
                <button class="btn btn-outline-primary btn-wide">
                  Save as draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End of Project Add -->
    </main>

    <Footer />
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import FileUpload from "vue-upload-component";
import Header from "./../common/Header.vue";
import Footer from "./../common/Footer.vue";
import IconBase from "./../common/IconBase.vue";
import IconPencil from "./../common/icons/IconPencil.vue";
import IconTrash from "./../common/icons/IconTrash.vue";

export default {
  name: "ProjectAdd",
  components: {
    VueTagsInput,
    FileUpload,
    Header,
    Footer,
    IconBase,
    IconPencil,
    IconTrash
  },
  data() {
    return {
      publicPath: local_image_path,
      files: [],
      dragActive: false,
      projecttag: "",
      projecttags: [
        {
          text: "CSS"
        },
        {
          text: "Website Design"
        }
      ],

      projectfilteredTags: [
        {
          text: "Website Design"
        },
        {
          text: "PSD to HTML"
        },
        {
          text: "CSS"
        },
        {
          text: "MySQL"
        },
        {
          text: "Javascript"
        }
      ],
      projectTag1Selected: false,
      projectTag2Selected: false,
      projectTag3Selected: false,
      projectTag4Selected: false,
      projectTag5Selected: false,
      projectTag6Selected: false,
      projectTag7Selected: false,
      projectTag8Selected: false,
      projectTag9Selected: false,
      projectTag10Selected: false,
      projectTag11Selected: false,
      projectTag12Selected: false
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
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
    },
    dragEnter() {
      this.dragActive = true;
    },
    dragLeave() {
      this.dragActive = false;
    }
  },
  computed: {
    filteredItems() {
      return this.projectfilteredTags.filter(i => {
        return (
          i.text.toLowerCase().indexOf(this.projecttag.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>
