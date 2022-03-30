<template>
  <div>
    <Header />

    <!-- Likes Container -->
    <div class="dashboard-container">
      <!-- Likes Sidebar -->
      <Sidebar />
      <!-- Likes Sidebar / End -->

      <!-- Likes Content -->
      <div class="dashboard-content-container" data-simplebar>
        <div class="dashboard-content-inner">
          <!-- Dashboard Headline -->
          <div class="dashboard-headline">
            <h3>Like</h3>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                  <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>Like</li>
              </ul>
            </nav>
          </div>

          <!-- Row -->
          <div class="row">
            <!-- Dashboard Box -->
            <div class="col-xl-12">
              <div class="dashboard-box margin-top-0">
                <!-- Headline -->
                <div class="headline">
                  <h3>
                    <i class="icon-material-outline-business-center"></i>
                    Like Projects
                  </h3>
                </div>

                <div class="content">
                  <ul class="dashboard-box-list">
                    <li>
                      <!-- Job Listing -->
                      <div class="job-listing">
                        <!-- Job Listing Details -->
                        <div class="job-listing-details">
                          <!-- Logo -->

                          <router-link class="job-listing-company-logo" to="/projects/2">
                            <img :src="`${publicPath}company-logo-02.png`" alt="" />
                          </router-link>

                          <!-- Details -->
                          <div class="job-listing-description">
                            <h3 class="job-listing-title">
                              <router-link to="/projects/2"
                                >Barista and Cashier</router-link
                              >
                            </h3>

                            <!-- Job Listing Footer -->
                            <div class="job-listing-footer">
                              <ul>
                                <li>
                                  <i class="icon-material-outline-dashboard"></i>
                                  Software
                                </li>
                                <li>
                                  <i class="icon-material-outline-dns"></i>
                                  Sports
                                </li>
                                <li>
                                  <i class="icon-material-outline-access-time"></i>
                                  2 days ago
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Buttons -->
                      <div class="buttons-to-right">
                        <a
                          href="#"
                          class="button red ripple-effect ico tz_bookmark_pro_del"
                          title="Remove"
                          data-tippy-placement="left"
                          ><i class="icon-feather-trash-2"></i
                        ></a>
                      </div>
                    </li>

                    <li>
                      <!-- Job Listing -->
                      <div class="job-listing">
                        <!-- Job Listing Details -->
                        <div class="job-listing-details">
                          <!-- Logo -->
                          <router-link class="job-listing-company-logo" to="/projects/2">
                            <img :src="`${publicPath}company-logo-04.png`" alt="" />
                          </router-link>

                          <!-- Details -->
                          <div class="job-listing-description">
                            <h3 class="job-listing-title">
                              <router-link to="/projects/2"
                                >Administrative Assistant</router-link
                              >
                            </h3>

                            <!-- Job Listing Footer -->
                            <div class="job-listing-footer">
                              <ul>
                                <li>
                                  <i class="icon-material-outline-dashboard"></i>
                                  Software
                                </li>
                                <li>
                                  <i class="icon-material-outline-dns"></i>
                                  Sports
                                </li>
                                <li>
                                  <i class="icon-material-outline-access-time"></i>
                                  2 days ago
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="buttons-to-right">
                        <a
                          href="#"
                          class="button red ripple-effect ico tz_bookmark_pro_del"
                          title="Remove"
                          data-tippy-placement="left"
                          ><i class="icon-feather-trash-2"></i
                        ></a>
                      </div>
                    </li>

                    <li>
                      <!-- Job Listing -->
                      <div class="job-listing">
                        <!-- Job Listing Details -->
                        <div class="job-listing-details">
                          <!-- Logo -->
                          <router-link class="job-listing-company-logo" to="/projects/2">
                            <img :src="`${publicPath}company-logo-05.png`" alt="" />
                          </router-link>

                          <!-- Details -->
                          <div class="job-listing-description">
                            <h3 class="job-listing-title">
                              <router-link to="/projects/2"
                                >Construction Labourers</router-link
                              >
                            </h3>

                            <!-- Job Listing Footer -->
                            <div class="job-listing-footer">
                              <ul>
                                <li>
                                  <i class="icon-material-outline-dashboard"></i>
                                  Software
                                </li>
                                <li>
                                  <i class="icon-material-outline-dns"></i>
                                  Sports
                                </li>
                                <li>
                                  <i class="icon-material-outline-access-time"></i>
                                  2 days ago
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="buttons-to-right">
                        <a
                          href="#"
                          class="button red ripple-effect ico tz_bookmark_pro_del"
                          title="Remove"
                          data-tippy-placement="left"
                          ><i class="icon-feather-trash-2"></i
                        ></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Row / End -->
        </div>

        <Footer />
      </div>
      <!-- Likes Content / End -->
    </div>
    <!-- Likes Container / End -->
  </div>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";
export default {
  name: "Likes",
  components: {
    Header,
    Footer,
    Sidebar,
  },
  data() {
    return {
      publicPath: local_image_path,
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
};
</script>
