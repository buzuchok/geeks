<template>
  <div class="dashboard-sidebar">
    <!-- data-simplebar -->
    <div class="dashboard-sidebar-inner">
      <div class="dashboard-nav-container">
        <a href="#" class="dashboard-responsive-nav-trigger">
          <span class="hamburger hamburger--collapse">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </span>
          <span class="trigger-title">Dashboard Navigation</span>
        </a>
        <div class="dashboard-nav">
          <div class="dashboard-nav-inner">
            <ul>
              <li class="">
                <router-link :to="{ name: 'dashboard' }"
                  ><i class="icon-material-outline-dashboard"></i> Dashboard</router-link
                >
              </li>
            </ul>
            <ul>
              <li id="sidebar_submenu_ques">
                <a href="#"
                  ><i class="icon-material-outline-question-answer"></i> Questions</a
                >
                <ul>
                  <li>
                    <router-link :to="{ name: 'questionlist' }">
                      Manage Questions</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'questionadd' }">
                      Ask a Question</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li id="sidebar_submenu">
                <a href="#"
                  ><i class="icon-material-outline-business-center"></i> Projects</a
                >
                <ul>
                  <li>
                    <router-link :to="{ name: 'projectlist' }">
                      Manage Projects</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'projectadd' }">
                      Post a Projects</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <router-link :to="{ name: 'bookmarks' }"
                  ><i class="icon-line-awesome-bookmark-o"></i> Bookmarks</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'likes' }"
                  ><i class="icon-feather-heart"></i> Like</router-link
                >
              </li>
              <li>
                <a @click="doLogout" href="javascript:;"
                  ><i class="icon-material-outline-power-settings-new"></i> Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Sidebar",
  data() {
    return {
      publicPath: local_image_path,
    };
  },
  components: {},
  methods: {},
  mounted() {
    if (
      this.$route.name == "projectlist" ||
      this.$route.name == "projectadd" ||
      this.$route.name == "projectedit"
    ) {
      setTimeout(() => {
        $("#sidebar_submenu").addClass("active-submenu");
      }, 500);
    }

    if (
      this.$route.name == "questionlist" ||
      this.$route.name == "questionadd" ||
      this.$route.name == "questionedit"
    ) {
      setTimeout(() => {
        $("#sidebar_submenu_ques").addClass("active-submenu");
      }, 500);
    }
  },
};
</script>
