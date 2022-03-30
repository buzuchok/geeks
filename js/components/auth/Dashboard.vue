<template>
  <div>
    <Header />

    <!-- Dashboard Container -->
    <div class="dashboard-container">
      <!-- Dashboard Sidebar -->
      <Sidebar />
      <!-- Dashboard Sidebar / End -->

      <!-- Dashboard Content -->
      <div class="dashboard-content-container" data-simplebar>
        <div class="dashboard-content-inner">
          <!-- Dashboard Headline -->
          <div class="dashboard-headline">
            <h3>Howdy, {{ this.full_name }}!</h3>
            <span>We are glad to see you again!</span>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li>
                  <router-link :to="{ name: 'dashboard' }">Home</router-link>
                </li>
                <li>Dashboard</li>
              </ul>
            </nav>
          </div>

          <!-- Fun Facts Container -->
          <div class="fun-facts-container">
            <div class="fun-fact" data-fun-fact-color="#262626">
              <div class="fun-fact-text">
                <span>Projects</span>
                <h4>22</h4>
              </div>
              <div class="fun-fact-icon">
                <i class="icon-material-outline-business-center"></i>
              </div>
            </div>
            <div class="fun-fact" data-fun-fact-color="#262626">
              <div class="fun-fact-text">
                <span>Comments</span>
                <h4>28</h4>
              </div>
              <div class="fun-fact-icon">
                <i class="icon-material-outline-rate-review"></i>
              </div>
            </div>
            <div class="fun-fact" data-fun-fact-color="#262626">
              <div class="fun-fact-text">
                <span>Like</span>
                <h4>22</h4>
              </div>
              <div class="fun-fact-icon">
                <i class="icon-feather-heart"></i>
              </div>
            </div>
            <div class="fun-fact" data-fun-fact-color="#262626">
              <div class="fun-fact-text">
                <span>Bookmark</span>
                <h4>28</h4>
              </div>
              <div class="fun-fact-icon">
                <i class="icon-material-outline-bookmark-border"></i>
              </div>
            </div>

            <!-- Last one has to be hidden below 1600px, sorry :( -->
            <div class="fun-fact" data-fun-fact-color="#2a41e6" style="display: none">
              <div class="fun-fact-text">
                <span>This Month Views</span>
                <h4>987</h4>
              </div>
              <div class="fun-fact-icon">
                <i class="icon-feather-trending-up"></i>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <!-- Dashboard Content / End -->
    </div>
    <!-- Dashboard Container / End -->
  </div>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Sidebar from "../common/Sidebar.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    Footer,
    Sidebar,
  },
  data() {
    return {
      publicPath: local_image_path,
      full_name: localStorage.getItem("sgname"),
    };
  },
  async created() {
    document.title = this.$route.meta.title;
  },
};
</script>
