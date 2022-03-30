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

    <!-- ProjectList Container -->
    <div class="dashboard-container">
      <!-- ProjectList Sidebar -->
      <Sidebar />
      <!-- ProjectList Sidebar / End -->

      <!-- ProjectList Content -->
      <!-- data-simplebar -->
      <div class="dashboard-content-container">
        <div class="dashboard-content-inner">
          <!-- Dashboard Headline -->
          <div class="dashboard-headline">
            <h3>Manage Projects</h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                  <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>Manage Projects</li>
              </ul>
            </nav>
          </div>

          <div class="row margin-top-50">
            <div class="col-xl-12">
              <div class="dashboard-box margin-top-0">
                <!-- Headline -->
                <div class="headline">
                  <h3>
                    <i class="icon-material-outline-business-center"></i>
                    My Project Listings
                  </h3>
                </div>

                <div class="content">
                  <b-alert
                    class="mt-5 mb-5"
                    v-if="isprojectfound == 0"
                    show
                    variant="info"
                    >No Details found</b-alert
                  >
                  <div class="clearfix"></div>

                  <ul v-if="isprojectfound == 1" class="dashboard-box-list">
                    <li v-for="item in products" :key="item.id">
                      <div class="job-listing">
                        <div class="job-listing-details">
                          <router-link
                            class="job-listing-company-logo"
                            :to="{
                              name: 'projectedit',
                              params: { id: item.slug },
                            }"
                          >
                            <img :src="`${publicPath}project-default.png`" alt="" />
                          </router-link>
                          <div class="job-listing-description">
                            <h3 class="job-listing-title">
                              <router-link
                                :to="{
                                  name: 'projectedit',
                                  params: { id: item.slug },
                                }"
                              >
                                {{ item.name }}</router-link
                              >
                            </h3>
                            <!-- Job Listing Footer -->
                            <div class="job-listing-footer">
                              <ul>
                                <li>
                                  <i class="icon-material-outline-dashboard"></i>
                                  {{ item.category }}
                                </li>
                                <li>
                                  <i class="icon-material-outline-dns"></i>
                                  {{ item.type }}
                                </li>
                                <li>
                                  <i class="icon-material-outline-access-time"></i>
                                  {{ item.added_time }}
                                </li>
                                <li v-if="item.status == 0">
                                  <i class="icon-feather-eye-off"></i>
                                  Not Published
                                </li>
                                <li v-if="item.status == 1">
                                  <i class="icon-feather-eye"></i>
                                  Published
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons-to-right">
                        <router-link
                          :to="{
                            name: 'projectedit',
                            params: { id: item.slug },
                          }"
                          class="button gray ripple-effect ico"
                          ><i class="icon-feather-edit"></i
                        ></router-link>
                        <a
                          href="javascript:;"
                          @click="ShowDeleteBox(item.id)"
                          class="button red ripple-effect ico tz_pro_del"
                          ><i class="icon-feather-trash-2"></i
                        ></a>
                      </div>
                    </li>
                  </ul>

                  <div v-if="isprojectfound == 1" class="col-xl-12 col-lg-12">
                    <paginate
                      v-if="totalpage > 1"
                      :page-count="totalpage"
                      :click-handler="listProjectList"
                      :prev-text="'<'"
                      :next-text="'>'"
                      :container-class="'tzpagination mb-5 mt-5'"
                    >
                    </paginate>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Row / End -->
        </div>

        <Footer />
      </div>
      <!-- ProjectList Content / End -->
    </div>
    <!-- ProjectList Container / End -->
  </div>
</template>

<script>
import Vue from "vue";
import Paginate from "vuejs-paginate";
import Loading from "vue-loading-overlay";
import Toaster from "v-toaster";
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";
Vue.use(Toaster, { timeout: 4000 });
export default {
  name: "ProjectList",
  components: {
    Header,
    Footer,
    Sidebar,
    Loading,
    Paginate,
  },
  data() {
    return {
      publicPath: local_image_path,
      isLoading: false,
      fullPage: true,
      isprojectfound: 2,
      totalpage: 1,
      products: [],
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.listProjectList(1);
  },
  methods: {
    async listProjectList(pageNum) {
      this.isLoading = true;

      const list = await this.callApi("post", window.api_path + "project/list", {
        currpage: pageNum,
      });

      if (list.status == 200) {
        this.isLoading = false;
        if (list.data.code == 1) {
          this.isprojectfound = 1;
          this.products = list.data.data;
          this.totalpage = list.data.total_page;

          var body = $(".dashboard-content-container");
          body.stop().animate({ scrollTop: 0 }, 500, "swing", function () {});
        } else {
          this.isprojectfound = 0;
        }
      } else if (list.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Project not found, please try again");
        this.isLoading = false;
        this.isprojectfound = 0;
      }
    },
    ShowDeleteBox(prid) {
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete this Project?", {
          okTitle: "Yes",
          cancelTitle: "No",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteProject(prid);
          }
        })
        .catch((err) => {});
    },
    async deleteProject(prid) {
      this.isLoading = true;

      const deletepr = await this.callApi("post", window.api_path + "project/delete", {
        id: prid,
      });

      if (deletepr.status == 200) {
        this.isLoading = false;

        if (deletepr.data.code == 1) {
          this.$toaster.success(deletepr.data.data);
          this.listProjectList();
        } else {
          this.$toaster.error(deletepr.data.data);
        }
      } else if (deletepr.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Project not deleted, please try again");
        this.isLoading = false;
      }
    },
  },
};
</script>
