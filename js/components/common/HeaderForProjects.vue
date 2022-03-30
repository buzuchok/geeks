<template>
  <div>
    <!-- Header Container -->
    <header id="header-container" class="fullwidth">
      <!-- Header -->
      <div id="header">
        <div class="container">
          <!-- Left Side Content -->
          <div class="left-side">
            <!-- Logo -->
            <div id="logo">
              <router-link :to="{ name: 'home' }"
                ><img :src="`${publicPath}logo_new.png`" alt=""
              /></router-link>
            </div>

            <div class="input-with-icon-left no-border tz-header-search">
              <i class="icon-line-awesome-search"></i>
              <input type="text" class="input-text" placeholder="Search...." />
            </div>

            <!-- Main Navigation -->
            <nav id="navigation">
              <ul id="responsive">
                <li>
                  <a href="#">Explore</a>
                  <div class="mega-menu mobile-styles three-columns">
                    <div class="mega-menu-section">
                      <ul>
                        <li class="mega-menu-headline">Curated list of top projects</li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #1</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #2</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #3</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #4</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #5</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mega-menu-section">
                      <ul>
                        <li class="mega-menu-headline">Project Ideas</li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #1</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #2</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #3</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #4</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #5</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mega-menu-section">
                      <ul>
                        <li class="mega-menu-headline">Featured list of user profiles</li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #1</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #2</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #3</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #4</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><i class="sl sl-icon-user"></i>Item #5</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link :to="{ name: 'projects' }">Projects</router-link>
                </li>
                <li>
                  <a href="javascript:;" class="">Education</a>
                  <ul class="dropdown-nav">
                    <li><router-link :to="{ name: 'ebook' }">E-Book</router-link></li>
                    <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
                  </ul>
                </li>
                <li>
                  <router-link :to="{ name: 'community' }">Community</router-link>
                </li>
                <router-link
                  class="button ripple-effect button-sliding-icon tz-mobile-pad"
                  :to="{ name: 'projectadd' }"
                  >Start Project <i class="icon-feather-arrow-right"></i
                ></router-link>
              </ul>
            </nav>
            <div class="clearfix"></div>
            <!-- Main Navigation / End -->
          </div>
          <!-- Left Side Content / End -->

          <!-- Right Side Content / End -->
          <div class="right-side">
            <div class="header-widget hide-on-mobile">
              <div class="header-notifications">
                <div class="header-notifications-trigger">
                  <a href="#"><i class="icon-feather-bell"></i><span>4</span></a>
                </div>
                <div class="header-notifications-dropdown">
                  <div class="header-notifications-headline">
                    <h4>Notifications</h4>
                    <button
                      class="mark-as-read ripple-effect-dark"
                      data-tippy-placement="left"
                      data-tippy=""
                      data-original-title="Mark all as read"
                    >
                      <i class="icon-feather-check-square"></i>
                    </button>
                  </div>
                  <div class="header-notifications-content">
                    <div
                      class="header-notifications-scroll"
                      data-simplebar="init"
                      style="height: 270px"
                    >
                      <div class="simplebar-track vertical" style="visibility: visible">
                        <div
                          class="simplebar-scrollbar"
                          style="visibility: visible; top: 0px; height: 192px"
                        ></div>
                      </div>
                      <div class="simplebar-track horizontal" style="visibility: visible">
                        <div
                          class="simplebar-scrollbar"
                          style="visibility: visible; left: 0px; width: 25px"
                        ></div>
                      </div>
                      <div
                        class="simplebar-scroll-content"
                        style="padding-right: 15px; margin-bottom: -30px"
                      >
                        <div
                          class="simplebar-content"
                          style="padding-bottom: 15px; margin-right: -15px"
                        >
                          <ul>
                            <li class="notifications-not-read">
                              <a href="javascript:;">
                                <span class="notification-icon"
                                  ><i class="icon-material-outline-group"></i
                                ></span>
                                <span class="notification-text">
                                  <strong>Lorem Ipsum is simply dummy text</strong>
                                  of the printing and typesetting industry.
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <span class="notification-icon"
                                  ><i class="icon-material-outline-gavel"></i
                                ></span>
                                <span class="notification-text">
                                  <strong>Lorem Ipsum is simply dummy text</strong>
                                  of the printing and typesetting industry.
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <span class="notification-icon"
                                  ><i class="icon-material-outline-autorenew"></i
                                ></span>
                                <span class="notification-text">
                                  <strong>Lorem Ipsum is simply dummy text</strong>
                                  of the printing and typesetting industry.
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- User Menu -->
            <div class="header-widget">
              <!-- Messages -->
              <div class="header-notifications user-menu">
                <div class="header-notifications-trigger">
                  <a href="#">
                    <div class="user-avatar status-online">
                      <img :src="`${publicPath}user-avatar-small-01.jpg`" alt="" />
                    </div>
                  </a>
                </div>

                <!-- Dropdown -->
                <div class="header-notifications-dropdown">
                  <!-- User Status -->
                  <div class="user-status">
                    <!-- User Name / Avatar -->
                    <div class="user-details">
                      <div class="user-avatar status-online">
                        <img :src="`${publicPath}user-avatar-small-01.jpg`" alt="" />
                      </div>
                      <div class="user-name">Tom Smith</div>
                    </div>
                  </div>

                  <ul class="user-menu-small-nav">
                    <li>
                      <router-link :to="{ name: 'dashboard' }"
                        ><i class="icon-material-outline-dashboard"></i>
                        Dashboard</router-link
                      >
                    </li>
                    <li>
                      <a href="javascript:;"
                        ><i class="icon-feather-user"></i> My Account</a
                      >
                    </li>
                    <li>
                      <a href="javascript:;"
                        ><i class="icon-material-outline-power-settings-new"></i>
                        Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- User Menu / End -->

            <!-- Mobile Navigation Button -->
            <span class="mmenu-trigger">
              <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </span>
          </div>
          <!-- Right Side Content / End -->
        </div>
      </div>
      <!-- Header / End -->
    </header>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
  </div>
</template>

<script>
export default {
  name: "HeaderForProjects",
  data() {
    return {
      publicPath: local_image_path,
    };
  },
};
</script>
