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

    <main class="main">
      <!-- Education Hero -->
      <section class="section-education-hero">
        <div class="container">
          <h1>Education</h1>
          <p>A small description about the project will be here in the text</p>
        </div>
        <div class="education-hero-bg"></div>
      </section>
      <!-- End of Education Hero -->

      <!-- Education List -->
      <section class="section-education section-education-list">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 education-articles">
              <h2 class="h1">Articles</h2>

              <div class="card card-dark card-lg card-article">
                <div class="card-img-top">
                  <router-link to="/">
                    <img :src="`${publicPath}project-1-746.jpg`" alt="" />
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-title">
                    <router-link to="/">
                      Article name here
                    </router-link>
                  </div>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu porttitor eu. Libero sed feugiat luctus ac quam
                    purus.
                  </p>
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
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="card card-dark card-article">
                    <div class="card-img-top">
                      <router-link to="/">
                        <img :src="`${publicPath}project-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <router-link to="/">
                          Article name here
                        </router-link>
                      </div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu porttitor eu. Libero sed feugiat luctus ac
                        quam purus.
                      </p>
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
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card card-dark card-article">
                    <div class="card-img-top">
                      <router-link to="/">
                        <img :src="`${publicPath}project-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <router-link to="/">
                          Article name here
                        </router-link>
                      </div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu porttitor eu. Libero sed feugiat luctus ac
                        quam purus.
                      </p>
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
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card card-dark card-article">
                    <div class="card-img-top">
                      <router-link to="/">
                        <img :src="`${publicPath}project-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <router-link to="/">
                          Article name here
                        </router-link>
                      </div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu porttitor eu. Libero sed feugiat luctus ac
                        quam purus.
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>

              <paginate
                :pageCount="4"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination pagination-dark'"
                :page-class="'page-item'"
              >
              </paginate>
            </div>
            <div class="col-lg-4 education-books">
              <div class="education-books-container">
                <h2>Books</h2>

                <div class="bcard">
                  <div class="bcard-img-top">
                    <router-link to="/books">
                      <img :src="`${publicPath}book-1.jpg`" alt="" />
                    </router-link>
                  </div>
                  <div class="bcard-body">
                    <div class="bcard-title">
                      <router-link to="/books">Book name</router-link>
                    </div>

                    <p class="bcard-text">
                      Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                      habitant eu
                    </p>
                    <router-link
                      to="/books"
                      class="btn btn-outline-primary btn-sm"
                      >Download
                    </router-link>
                  </div>
                </div>
                <div class="bcard">
                  <div class="bcard-img-top">
                    <router-link to="/books">
                      <img :src="`${publicPath}book-1.jpg`" alt="" />
                    </router-link>
                  </div>
                  <div class="bcard-body">
                    <div class="bcard-title">
                      <router-link to="/books">Book name</router-link>
                    </div>

                    <p class="bcard-text">
                      Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                      habitant eu
                    </p>
                    <router-link
                      to="/books"
                      class="btn btn-outline-primary btn-sm"
                      >Download
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-bg"></div>
      </section>
      <!-- End of Education List -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconArrowRight from "./common/icons/IconArrowRight.vue";

export default {
  name: "Education",
  components: {
    Header,
    Footer,
    Loading,
    Paginate,
    IconBase,
    IconArrowRight
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      clist: [],
      comfound: 0,
      compagecount: 1,
      publicPath: local_image_path
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {}
};
</script>
