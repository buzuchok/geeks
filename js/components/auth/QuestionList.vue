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
            <h3>Manage Questions</h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>Manage Questions</li>
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
                    <i class="icon-material-outline-question-answer"></i>
                    List of added Questions
                  </h3>
                </div>

                <div class="content">
                  <div class="tztable">
                    <b-alert v-if="isquestionfound == 0" show variant="info"
                      >No Question added yet</b-alert
                    >
                    <div v-if="isquestionfound > 0">
                      <b-row align-h="end">
                        <b-col lg="3" md="4" class="my-1">
                          <b-form-group>
                            <b-input-group size="md">
                              <b-form-input
                                id="filter-input"
                                v-model="filter"
                                type="search"
                                placeholder="Search"
                              ></b-form-input>
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-table
                        responsive
                        :items="items"
                        :fields="fields"
                        :per-page="perPage"
                        :current-page="currentPage"
                        :filter="filter"
                        @filtered="onFiltered"
                      >
                        <template #cell(status)="row">
                          <b-button
                            size="sm"
                            v-if="row.item.status == 1"
                            variant="success"
                            >Published</b-button
                          >
                          <b-button size="sm" v-if="row.item.status == 0" variant="danger"
                            >Not Published</b-button
                          >
                        </template>
                        <template #cell(action)="row">
                          <b-button size="sm" v-b-tooltip.hover title="Edit">
                            <router-link
                              :to="{
                                name: 'questionedit',
                                params: { id: row.item.slug },
                              }"
                              ><i class="icon-feather-edit"></i
                            ></router-link>
                          </b-button>
                          <b-button
                            size="sm"
                            variant="danger"
                            v-b-tooltip.hover
                            title="Delete"
                            @click="ShowDeleteBox(row.item.id)"
                          >
                            <i class="icon-feather-trash-2"></i>
                          </b-button>
                        </template>
                      </b-table>

                      <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        align="right"
                      ></b-pagination>
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
Vue.use(Toaster, { timeout: 4000 });
export default {
  name: "QuestionList",
  components: {
    Header,
    Footer,
    Sidebar,
    Loading,
  },
  data() {
    return {
      publicPath: local_image_path,
      isLoading: false,
      fullPage: true,
      perPage: 10,
      currentPage: 1,
      totalRows: 1,
      isquestionfound: 2,
      filter: null,
      fields: [
        { key: "srno", label: "Sr No." },
        { key: "title", label: "Question" },
        { key: "answers", label: "Answers" },
        { key: "status", label: "Status" },
        { key: "date", label: "Added Date" },
        { key: "action", label: "Action" },
      ],
      items: [],
    };
  },
  created() {
    document.title = this.$route.meta.title;

    // get question list
    this.listQuestion();
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    ShowDeleteBox(quesid) {
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete this Question?", {
          okTitle: "Yes",
          cancelTitle: "No",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteQuestion(quesid);
          }
        })
        .catch((err) => {});
    },
    async listQuestion() {
      this.isLoading = true;

      const list_question = await this.callApi("post", window.api_path + "question/list");

      if (list_question.status == 200) {
        this.isLoading = false;

        if (list_question.data.code == 1) {
          this.items = list_question.data.data;
          this.totalRows = list_question.data.count;
          this.isquestionfound = 1;
        } else {
          this.totalRows = list_question.data.count;
          this.isquestionfound = 0;
        }
      } else if (list_question.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Question not found, please try again");
        this.isLoading = false;
        this.isquestionfound = 0;
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
    async deleteQuestion(quesid) {
      this.isLoading = true;

      const delete_question = await this.callApi(
        "post",
        window.api_path + "question/delete",
        {
          id: quesid,
        }
      );

      if (delete_question.status == 200) {
        this.isLoading = false;

        if (delete_question.data.code == 1) {
          this.$toaster.success(delete_question.data.data);
          this.listQuestion();
        } else {
          this.$toaster.error(delete_question.data.data);
        }
      } else if (delete_question.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Question not deleted, please try again");
        this.isLoading = false;
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
  },
  mounted() {},
};
</script>
