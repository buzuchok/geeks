<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <!-- Create Project Hero -->
      <section class="section-createproject-hero">
        <div class="container">
          <h1>Create a Live Stream Project</h1>
          <p>Input all the project details and start streaming</p>
          <div class="btns">
            <router-link to="/" class="btn btn-primary btn-icon mx-auto">
              <icon-base
                width="13"
                height="13"
                view-box="0 0 13 13"
                icon-name="plus"
                ><icon-plus
              /></icon-base>
              <span>Publish Project</span>
            </router-link>
          </div>
        </div>
        <div class="createproject-hero-bg"></div>
      </section>

      <!-- Search -->
      <section class="section-search section-search-projects">
        <div class="section-search-form">
          <div class="search-form-w">
            <icon-base
              width="23.5"
              height="23.5"
              view-box="0 0 16 16"
              icon-name="search"
              ><icon-search
            /></icon-base>
            <input
              type="text"
              class="form-control"
              placeholder="Find Services"
            />
            <button type="submit" class="btn btn-secondary">
              <span class="text">Search</span>
              <icon-base
                width="23.5"
                height="23.5"
                view-box="0 0 16 16"
                icon-name="search"
                ><icon-search
              /></icon-base>
            </button>
          </div>
          <div class="search-tags">
            <div class="label">Tags</div>
            <div class="search-taglist">
              <a href="" class="btn btn-outline-light">OBS Setup</a>
              <a href="" class="btn btn-outline-light">Twitch Channel Setup</a>
              <a href="" class="btn btn-outline-light">Tech Support</a>
            </div>
          </div>
          <div class="search-params row">
            <div class="form-group col-md-6">
              <div class="select-container select-container-lg">
                <select>
                  <option value="" disabled selected>Category</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Min Budget"
              />
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Max Budget"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- End of Search -->

      <!-- Projects -->
      <section class="section-projects section-projects-list">
        <div class="container">
          <h2 class="h1">Find Projects</h2>

          <ul class="nav nav-ctabs">
            <li
              class="nav-link"
              :class="projectsListTab == 1 ? 'active' : ''"
              @click="projectsListTab = 1"
            >
              Newest
            </li>
            <li
              class="nav-link"
              :class="projectsListTab == 2 ? 'active' : ''"
              @click="projectsListTab = 2"
            >
              Featured
            </li>
            <li
              class="nav-link"
              :class="projectsListTab == 3 ? 'active' : ''"
              @click="projectsListTab = 3"
            >
              Popular
            </li>
          </ul>

          <div class="tabs-content">
            <!-- Tab 1 -->
            <div class="tab-content" v-if="projectsListTab == 1">
              <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-12">
                  <div class="card card-project">
                    <div class="card-img-top">
                      <router-link :to="{}">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                        <span
                          class="is-featured"
                          :style="{
                            backgroundImage: `url(${publicPath}featured-bg.png)`
                          }"
                          >Featured</span
                        >
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title-vote">
                        <div class="card-title">
                          <router-link :to="{}">
                            Project name here
                          </router-link>
                        </div>
                        <button class="btn btn-link btn-icon btn-vote">
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-4"
                          >
                            <icon-like-4 />
                          </icon-base>
                        </button>
                      </div>
                      <div class="card-category">
                        <div class="label">
                          <router-link to="/">Music Category</router-link>
                        </div>
                      </div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu porttitor eu. Libero sed feugiat luctus ac
                        quam purus.
                      </p>

                      <div class="card-price-more">
                        <div class="more">
                          <router-link to="/" class="btn btn-link btn-icon">
                            <span>Learn More</span>
                            <icon-base
                              width="18"
                              height="8.72"
                              view-box="0 0 18 8.72"
                              icon-name="arrow-right"
                            >
                              <icon-arrow-right />
                            </icon-base>
                          </router-link>
                        </div>
                        <div class="price">$50</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12">
                  <div class="card card-project">
                    <div class="card-img-top">
                      <router-link :to="{}">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                        <span
                          class="is-featured"
                          :style="{
                            backgroundImage: `url(${publicPath}featured-bg.png)`
                          }"
                          >Featured</span
                        >
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title-vote">
                        <div class="card-title">
                          <router-link :to="{}">
                            Project name here
                          </router-link>
                        </div>
                        <span class="btn btn-link btn-icon">
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-5"
                          >
                            <icon-like-5 />
                          </icon-base>
                        </span>
                      </div>
                      <div class="card-category">
                        <div class="label">
                          <router-link to="/">Music Category</router-link>
                        </div>
                      </div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu porttitor eu. Libero sed feugiat luctus ac
                        quam purus.
                      </p>

                      <div class="card-price-more">
                        <div class="more">
                          <router-link to="/" class="btn btn-link btn-icon">
                            <span>Learn More</span>
                            <icon-base
                              width="18"
                              height="8.72"
                              view-box="0 0 18 8.72"
                              icon-name="arrow-right"
                            >
                              <icon-arrow-right />
                            </icon-base>
                          </router-link>
                        </div>
                        <div class="price">$50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <paginate
                :page-count="4"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              >
              </paginate>
            </div>
            <!-- End of Tab 1 -->

            <!-- Tab 2 -->
            <div class="tab-content" v-if="projectsListTab == 2"></div>
            <!-- End of Tab 2 -->

            <!-- Tab 3 -->
            <div class="tab-content" v-if="projectsListTab == 3"></div>
            <!-- End of Tab 3 -->
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Paginate from "vuejs-paginate";
import IconBase from "../common/IconBase.vue";
import IconPlus from "../common/icons/IconPlus.vue";
import IconSearch from "../common/icons/IconSearch.vue";
import IconLike4 from "../common/icons/IconLike4.vue";
import IconLike5 from "../common/icons/IconLike5.vue";

import IconArrowRight from "../common/icons/IconArrowRight.vue";

Vue.component("paginate", Paginate);

export default {
  name: "Projects",
  components: {
    Header,
    Footer,
    IconBase,
    IconPlus,
    IconSearch,
    IconLike4,
    IconLike5,
    IconArrowRight
  },
  data() {
    return {
      publicPath: local_image_path,
      sidebar_category: [
        { value: 0, text: "CHANGE ME!" }
        /*
        { value: 1, text: "Software" },
        { value: 2, text: "Computer" },
        { value: 3, text: "Cameras" },
        { value: 4, text: "Audio" },
        { value: 5, text: "Video Switcher" },
        { value: 6, text: "Converters" },
        { value: 7, text: "Other" },
*/
      ],
      sidebar_type: [
        { value: 0, text: "CHANGE ME!" }
        // { value: 1, text: "Church" },
        // { value: 2, text: "Business" },
        // { value: 3, text: "Sports" },
      ],
      sidebar_sort: [
        { value: 0, text: "CHANGE ME!" }
        // { value: 1, text: "Relevance" },
        // { value: 2, text: "Newest" },
        // { value: 3, text: "Oldest" },
        // { value: 4, text: "Random" },
      ],
      sidebar: {
        category: 0,
        type: 0,
        sort: 0
      },
      projectsListTab: 1
    };
  },

  created() {
    console.log("Projects this.$route::");
    console.log(this.$route);
    document.title = this.$route.meta.title;
  },

  mounted() {},

  methods: {
    clickCallback(page) {
      console.log("clickCallback page::");
      console.log(page);
    }
  } // methods: {
};
</script>
