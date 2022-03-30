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
      <!-- Gigs Hero -->
      <section class="section-gigs-hero">
        <div class="container">
          <h1>Search for a Gig</h1>
        </div>
        <div class="gigs-hero-bg"></div>
      </section>
      <!-- End of Gigs Hero -->

      <!-- Search -->
      <section class="section-search section-search-gigs">
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

      <!-- Gigs List -->
      <section class="section-gigs section-gigs-list">
        <div class="container">
          <h2>Popular Gigs</h2>

          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="card card-dark card-gig">
                <div class="card-img-top">
                  <router-link to="/projects/2">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-user">
                    <div class="card-userpic">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}user-avatar-sm.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-user-r">
                      <div class="card-username">
                        <router-link to="/projects/2">James K</router-link>
                      </div>
                      <div class="card-rating">
                        <div class="rating-val">4.5</div>
                        <div class="rating">
                          <div class="rating-current" style="width: 90%;">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                          <div class="rating-total">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card-price">$50</div>
                  <router-link
                    to="/projects/2"
                    class="btn btn-outline-secondary outline-secondary-white btn-sm"
                    >Hire Now
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card card-dark card-gig">
                <div class="card-img-top">
                  <router-link to="/projects/2">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-user">
                    <div class="card-userpic">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}user-avatar-sm.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-user-r">
                      <div class="card-username">
                        <router-link to="/projects/2">James K</router-link>
                      </div>
                      <div class="card-rating">
                        <div class="rating-val">4.5</div>
                        <div class="rating">
                          <div class="rating-current" style="width: 90%;">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                          <div class="rating-total">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card-price">$50</div>
                  <router-link
                    to="/projects/2"
                    class="btn btn-outline-secondary outline-secondary-white btn-sm"
                    >Hire Now
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card card-dark card-gig">
                <div class="card-img-top">
                  <router-link to="/projects/2">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-user">
                    <div class="card-userpic">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}user-avatar-sm.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-user-r">
                      <div class="card-username">
                        <router-link to="/projects/2">James K</router-link>
                      </div>
                      <div class="card-rating">
                        <div class="rating-val">4.5</div>
                        <div class="rating">
                          <div class="rating-current" style="width: 90%;">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                          <div class="rating-total">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card-price">$50</div>
                  <router-link
                    to="/projects/2"
                    class="btn btn-outline-secondary outline-secondary-white btn-sm"
                    >Hire Now
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card card-dark card-gig">
                <div class="card-img-top">
                  <router-link to="/projects/2">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-user">
                    <div class="card-userpic">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}user-avatar-sm.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-user-r">
                      <div class="card-username">
                        <router-link to="/projects/2">James K</router-link>
                      </div>
                      <div class="card-rating">
                        <div class="rating-val">4.5</div>
                        <div class="rating">
                          <div class="rating-current" style="width: 90%;">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                          <div class="rating-total">
                            <icon-base
                              width="68.01"
                              height="11"
                              view-box="0 0 68.01 10.57"
                              icon-name="stars"
                            >
                              <icon-stars />
                            </icon-base>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu
                  </p>
                </div>
                <div class="card-footer">
                  <div class="card-price">$50</div>
                  <router-link
                    to="/projects/2"
                    class="btn btn-outline-secondary btn-sm"
                    >Hire Now
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <paginate
            :pageCount="20"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination pagination-dark'"
            :page-class="'page-item'"
          >
          </paginate>
        </div>

        <div class="section-bg"></div>
      </section>
      <!-- End of Gigs List -->
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
import IconSearch from "./common/icons/IconSearch.vue";
import IconStars from "./common/icons/IconStars.vue";

export default {
  name: "Gigs",
  components: {
    Header,
    Footer,
    Loading,
    Paginate,
    IconBase,
    IconSearch,
    IconStars
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
