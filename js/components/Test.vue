<template>
  <fragment>
    <Header />
    <main class="main">
      <!-- Intro -->
      <section class="section-intro">
        <div class="container">
          <div class="intro-i">
            <h1>
              Home
<!--              Test : http://127.0.0.1:8000/test<br>-->
<!--              https://github.com/redxtech/vue-plyr-->
            </h1>

            <div class="btns">
              <a href="" class="btn btn-primary btn-lg mr-4">Join Now</a>
              <a href="" class="btn btn-link btn-lg btn-icon">
                <span>Hire Experts</span>
                <icon-base
                  width="18"
                  height="8.72"
                  view-box="0 0 18 8.72"
                  icon-name="arrow-right"
                >
                  <icon-arrow-right />
                </icon-base>
              </a>
            </div>
          </div>
        </div>
        <div class="video-bg" style="z-index: 100 !important;">
<!--          <img :src="`${publicPath}tmp/video-preview.jpg`" alt="" />-->
<!--          data-poster="poster.jpg"-->

          <vue-plyr :options="options" style="z-index: 100 !important;">
            <video
              controls
              crossorigin
              playsinline
            >
              <source
                size="1080"
                src="/storage/video/video_demo.mp4"
                type="video/mp4"
              />
            </video>
          </vue-plyr>

        </div>
      </section>




      <!-- Search -->
      <section class="section-search">
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
          <div class="search-popular">
            <span>Popular searches:</span>
            <a href="" class="btn btn-outline-light">OBS Setup</a>
            <a href="" class="btn btn-outline-light">Twitch Channel Setup</a>
            <a href="" class="btn btn-outline-light">Tech Support</a>
          </div>
        </div>
      </section>



<!--      <section class="section-home-info">-->
<!--        <div class="container">-->

<!--          <vue-plyr :options="options">-->
<!--            <video-->
<!--              controls-->
<!--              crossorigin-->
<!--              playsinline-->
<!--              data-poster="poster.jpg"-->
<!--            >-->
<!--              <source-->
<!--                size="1080"-->
<!--                src="/storage/video/video_demo.mp4"-->
<!--                type="video/mp4"-->
<!--              />-->
<!--            </video>-->
<!--          </vue-plyr>-->

<!--        </div>-->
<!--      </section>-->


      <section class="section-home-info">
        <div class="container">
          <p>
            The StreamGeeks are a group of video production experts dedicated to
            helping businesses discover the power of live streaming. The
            StreamGeeks have an impressive following and a tight-knit online
            community which they serve through consultations and live shows that
            continue to inspire, motivate, and inform business owners who refuse
            to settle for mediocrity.
          </p>
        </div>
      </section>


    </main>

    <Footer />
  </fragment>
</template>

<script>
import appMixin from "../appMixin";
import Vue from "vue";
import Paginate from "vuejs-paginate";
import Fragment from "vue-fragment";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconArrowRight from "./common/icons/IconArrowRight.vue";
import IconStars from "./common/icons/IconStars.vue";
import IconSearch from "./common/icons/IconSearch.vue";
import IconLike from "./common/icons/IconLike.vue";
import IconAnswers from "./common/icons/IconAnswers.vue";
import IconViews from "./common/icons/IconViews.vue";

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(Fragment.Plugin);

Vue.use(VuePlyr, {
  plyr: {}
})

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    IconBase,
    IconArrowRight,
    Paginate,
    IconStars,
    IconSearch,
    IconLike,
    IconAnswers,
    IconViews
  },

  mixins: [appMixin],

  data() {
    return {
      options: {
        title: 'Example Title',
        quality: { default: '1080p' }
      },
      homepageProjects: [],
      homepageProjectsNumberOfPages: 0,
      // totalHomepageProjectsCount: 0,
      currentHomepageProjectsPageNum: 1,

      homepageProjectsFeatured: [],
      homepageProjectsFeaturedNumberOfPages: 0,
      totalHomepageProjectsFeaturedCount: 0,
      currentHomepageProjectsFeaturedPageNum: 1,

      homepageProjectsPopular: [],
      homepageProjectsPopularNumberOfPages: 0,
      totalHomepageProjectsPopularCount: 0,
      currentHomepageProjectsPopularPageNum: 1,

      homepageProjectsListingBlockHeaderText: "",

      projectsHomeTab: 1,
      gigsHomeTab: 1,
      booksHomeTab: 1,
      communityHomeTab: 1,
      publicPath: local_image_path,
      bgimage: local_image_path + "home-background.jpg"
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  mounted() {
/*
    this.loadProjects(1);
    this.loadProjectsFeatured(1);
    this.loadProjectsPopular(1);
    this.loadCMSItemProjectsListingBlock();
*/
  }, // mounted() {

  methods: {
    // homepageProjectsPaginatorClick(pageNum) {
    //   this.loadProjects(pageNum);
    //   this.loadCMSItemProjectsListingBlock();
    // },
/*
    async loadCMSItemProjectsListingBlock() {
      const result = await this.callApi(
        "post",
        window.api_path + "getBlockCMSItem",
        {
          key: "projects_listing_block_header"
        }
      );
      this.homepageProjectsListingBlockHeaderText = result.data.cMSItem.text;
    }, // loadCMSItemProjectsListingBlock() {

    async loadProjects(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum
        }
      );
      console.log('loadProjects result::')
      console.log(result)

      this.currentHomepageProjectsPageNum = pageNum;
      this.homepageProjectsNumberOfPages = result.data.numberOfPages;
      this.homepageProjects = result.data.projects;
      // this.totalHomepageProjectsCount = result.data.projectsCount;
    }, // async loadProjects(pageNum) {

    async loadProjectsFeatured(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum,
          data_type: 'Featured',
        }
      );
      // console.log('loadProjectsFeatured result::')
      // console.log(result)

      this.currentHomepageProjectsFeaturedPageNum = pageNum;
      this.homepageProjectsFeaturedNumberOfPages = result.data.numberOfPages;
      this.homepageProjectsFeatured = result.data.projects;
      // this.totalHomepageProjectsFeaturedCount = result.data.projectsCount;
    },  // async loadProjectsFeatured(pageNum) {


    async loadProjectsPopular(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum,
          data_type: 'Popular',
        }
      );
      // console.log('result::')
      // console.log(result)

      this.currentHomepageProjectsPopularPageNum = pageNum;
      this.homepageProjectsPopularNumberOfPages = result.data.numberOfPages;
      this.homepageProjectsPopular = result.data.projects;
      // this.totalHomepageProjectsPopularCount = result.data.projectsCount;
    },  // async loadProjectsPopular(pageNum) {
*/

  } // methods: {


};
</script>
