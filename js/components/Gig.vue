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
      <!-- Gig Page -->
      <section class="section-gig">
        <div class="container">
          <header class="gig-h">
            <h1 class="h2">
              I will design a professional and modern website UI design
            </h1>
            <span class="btn btn-secondary rounded-xl btn-xl btn-featured"
              >Featured</span
            >
          </header>

          <div class="gig-row row">
            <div class="gig-content col-lg-7">
              <div class="gig-info">
                <div class="created">Created at 4th July 2021</div>
                <div class="gig-cat">
                  <div class="gig-cat-label">Music Category</div>
                  <div class="gig-cat-val"><a href="">Classical Music</a></div>
                </div>

                <div class="gig-author">
                  <div class="gig-userpic">
                    <router-link to="/projects/2">
                      <img
                        :src="`${publicPath}user-avatar-sm.jpg`"
                        class="rounded-circle"
                        alt=""
                      />
                    </router-link>
                  </div>
                  <div class="gig-author-r">
                    <div class="gig-username">
                      <router-link to="/projects/2">James K</router-link>
                    </div>
                    <div class="gig-author-rating">
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

                <div class="gig-gallery">
                  <div
                    class="gig-gallery-main"
                    :style="
                      'background-image: url(' +
                        publicPath +
                        galleryPhotos[activeGalleryPhoto] +
                        ');'
                    "
                  ></div>

                  <div class="gig-gallery-thumbs">
                    <div
                      v-for="(galleryThumb, index) in galleryThumbs"
                      :src="galleryThumb"
                      :key="index"
                      @click="activeGalleryPhoto = index"
                      class="gig-gallery-thumb"
                      :class="{ active: activeGalleryPhoto == index }"
                      :style="
                        'background-image: url(' +
                          publicPath +
                          galleryThumb +
                          ')'
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gig Sidebar -->
            <div class="gig-sidebar col-lg-5">
              <div class="gig-price">
                <ul class="nav nav-gtabs">
                  <li
                    class="nav-link"
                    :class="gigPriceTab == 1 ? 'active' : ''"
                    @click="gigPriceTab = 1"
                  >
                    Basic
                  </li>
                  <li
                    class="nav-link"
                    :class="gigPriceTab == 2 ? 'active' : ''"
                    @click="gigPriceTab = 2"
                  >
                    Standard
                  </li>
                  <li
                    class="nav-link"
                    :class="gigPriceTab == 3 ? 'active' : ''"
                    @click="gigPriceTab = 3"
                  >
                    Pro
                  </li>
                </ul>

                <div class="tabs-content">
                  <div class="tab-content" v-if="gigPriceTab == 1">
                    <div class="price-title">Basic</div>
                    <div class="price-desc">
                      Have you ever seen stars below the sky, on the earth? Yes,
                      the spark of light emerging from the land. On a cold
                      night, standing on a peak of the mountain
                    </div>

                    <div class="price-features-1">
                      <div class="item">
                        <icon-base
                          width="24"
                          height="23.83"
                          view-box="0 0 24 23.83"
                          icon-name="time-left"
                        >
                          <icon-time-left />
                        </icon-base>
                        <span>3 Days delivery</span>
                      </div>
                      <div class="item">
                        <icon-base
                          width="24"
                          height="22"
                          view-box="0 0 24 22"
                          icon-name="revision"
                        >
                          <icon-revision />
                        </icon-base>
                        <span>Revisions</span>
                      </div>
                    </div>
                    <div class="price-features-2">
                      <ul class="list-green">
                        <li>Source File</li>
                        <li>Have you ever seen stars</li>
                        <li>Have you ever seen stars</li>
                      </ul>
                    </div>

                    <div class="btn btn-secondary btn-block">
                      Continue at 180$
                    </div>
                  </div>
                  <div class="tab-content" v-if="gigPriceTab == 2">2</div>
                  <div class="tab-content" v-if="gigPriceTab == 3">3</div>
                </div>
              </div>

              <div
                class="gig-getquote"
                :style="{
                  backgroundImage: `url(${publicPath}getquote-bg.png)`
                }"
              >
                <p>Do you have any special requirements</p>

                <button class="btn btn-primary">Get Qoute</button>
              </div>
            </div>
            <!-- End of Gig Sidebar -->
          </div>

          <div class="gig-about">
            <h2>About this Gig</h2>
            <div class="text">
              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will your spark and soul. The beauty of the
                night is among the stars above the sky to the stars below the
                sky. The streets with warm light and covered with trees and a
                water canal give the essence of fantasy. Have you ever seen
                stars below the sky, on the earth? Yes, the spark of light from
                the land. On a cold night, standing on a peak of the mountain,
                when you look down at the place, you feel darkness enlightened
                by the rays of light. The blow of the cold chilly wind will
                enlighten your spark and soul. The beauty of the night is among
                the stars above the sky to the stars below the sky. The streets
                with warm light and covered with trees and a water canal give
                the essence of fantasy.
              </p>
            </div>
          </div>

          <div class="gig-aboutseller">
            <h2>About this Seller</h2>
            <div class="aboutseller-info">
              <div class="userpic">
                <img
                  class="rounded-circle"
                  :src="`${publicPath}userpic-120.jpg`"
                  alt=""
                />
              </div>
              <div class="aboutseller-r">
                <div class="username"><a href="">James K</a></div>
                <div class="aboutseller-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <div class="aboutseller-rating">
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
                <button class="btn btn-primary">Contact</button>
              </div>
            </div>

            <div class="aboutseller-card wblock">
              <div class="aboutseller-card-t">
                <div class="aboutseller-from">
                  <span class="label">From</span>
                  <span class="val">Pakistan</span>
                </div>
                <div class="aboutseller-since">
                  <span class="label">Member since</span>
                  <span class="val">2021</span>
                </div>
              </div>
              <div class="aboutseller-card-text">
                <p>
                  Have you ever seen stars below the sky, on the earth? Yes, the
                  spark of light emerging from the land. On a cold night,
                  standing on a peak of the mountain, when you look down at the
                  place, you feel darkness enlightened by the rays of light. The
                  blow of the cold chilly wind will enlighten your spark and
                  soul.
                </p>
              </div>
            </div>

            <!-- UserProfile Reviews -->
            <div class="userprofile-reviews">
              <div class="reviews-summary">
                <div class="reviews-summary-h">
                  <div class="reviews-summary-rating">
                    <div class="rating-label">10,694 Reviews</div>
                    <div class="rating-val-w">
                      <div class="rating rating-lg">
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
                            width="127"
                            height="20.5"
                            view-box="0 0 68.01 10.57"
                            icon-name="stars"
                          >
                            <icon-stars />
                          </icon-base>
                        </div>
                      </div>
                      <div class="rating-val">4.5</div>
                    </div>
                  </div>
                  <div class="reviews-summary-sort">
                    <div class="label">Sort By</div>
                    <div class="select-container select-container-light">
                      <select>
                        <option value="">Most recent</option>
                        <option value="">From 1 to 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="rating-summary-details">
                  <div class="rating-summary-starbars">
                    <div class="starbar">
                      <div class="starbar-label">5 Stars</div>
                      <div class="progress progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 75%"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="starbar">
                      <div class="starbar-label">4 Stars</div>
                      <div class="progress progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 85%"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="starbar">
                      <div class="starbar-label">3 Stars</div>
                      <div class="progress progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="starbar">
                      <div class="starbar-label">2 Stars</div>
                      <div class="progress progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 15%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="starbar">
                      <div class="starbar-label">1 Star</div>
                      <div class="progress progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 5%"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="rating-summary-breakdown">
                    <div class="breakdown-label">Rating Breakdown</div>
                    <div class="breakdown-items">
                      <div class="breakdown-item">
                        <div class="breakdown-item-label">
                          Seller communication level
                        </div>
                        <div class="breakdown-item-val">
                          <div class="num">4.9</div>
                          <icon-base
                            width="16"
                            height="15"
                            view-box="0 0 11 10.54"
                            icon-name="star"
                          >
                            <icon-star />
                          </icon-base>
                        </div>
                      </div>
                      <div class="breakdown-item">
                        <div class="breakdown-item-label">
                          Recommend to a friend
                        </div>
                        <div class="breakdown-item-val">
                          <div class="num">4.9</div>
                          <icon-base
                            width="16"
                            height="15"
                            view-box="0 0 11 10.54"
                            icon-name="star"
                          >
                            <icon-star />
                          </icon-base>
                        </div>
                      </div>
                      <div class="breakdown-item">
                        <div class="breakdown-item-label">
                          Service as described
                        </div>
                        <div class="breakdown-item-val">
                          <div class="num">4.9</div>
                          <icon-base
                            width="16"
                            height="15"
                            view-box="0 0 11 10.54"
                            icon-name="star"
                          >
                            <icon-star />
                          </icon-base>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reviews-list">
                <div class="review">
                  <div class="userpic">
                    <img
                      :src="`${publicPath}user-avatar-sm.jpg`"
                      class="rounded rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="review-r">
                    <div class="review-author-t">
                      <div class="author-name">
                        <router-link to="">sidneiverssimod</router-link>
                      </div>
                      <div class="author-rating">
                        <div class="num">4.9</div>
                        <icon-base
                          width="16"
                          height="15"
                          view-box="0 0 11 10.54"
                          icon-name="star"
                        >
                          <icon-star />
                        </icon-base>
                      </div>
                    </div>
                    <div class="review-author-location">England</div>

                    <div class="review-text">
                      <p>
                        Have you ever seen stars below the sky, on the earth?
                        Yes, the spark of light emerging from the land. On a
                        cold night, standing on a peak of the mountain, when you
                        look down at the place, you feel darkness enlightened by
                        the rays of light. The blow of the cold chilly wind will
                        enlighten your spark and soul.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="review">
                  <div class="userpic">
                    <img
                      :src="`${publicPath}user-avatar-sm.jpg`"
                      class="rounded rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="review-r">
                    <div class="review-author-t">
                      <div class="author-name">
                        <router-link to="">sidneiverssimod</router-link>
                      </div>
                      <div class="author-rating">
                        <div class="num">4.9</div>
                        <icon-base
                          width="11"
                          height="10.54"
                          view-box="0 0 11 10.54"
                          icon-name="star"
                        >
                          <icon-star />
                        </icon-base>
                      </div>
                    </div>
                    <div class="review-author-location">England</div>

                    <div class="review-text">
                      <p>
                        Have you ever seen stars below the sky, on the earth?
                        Yes, the spark of light emerging from the land. On a
                        cold night, standing on a peak of the mountain, when you
                        look down at the place, you feel darkness enlightened by
                        the rays of light. The blow of the cold chilly wind will
                        enlighten your spark and soul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of UserProfile Reviews -->
          </div>
        </div>
      </section>
      <!-- End of Gig page -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconStars from "./common/icons/IconStars.vue";
import IconStar from "./common/icons/IconStar.vue";
import IconTimeLeft from "./common/icons/IconTimeLeft.vue";
import IconRevision from "./common/icons/IconRevision.vue";

export default {
  name: "Gig",
  components: {
    Header,
    Footer,
    Loading,
    IconBase,
    IconStars,
    IconStar,
    IconTimeLeft,
    IconRevision
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      gigPriceTab: 1,
      publicPath: local_image_path,
      activeGalleryPhoto: 0,
      galleryPhotos: ["gig-658.jpg", "project-1-746.jpg", "gig-658.jpg"],
      galleryThumbs: [
        "gig-gallery-thumb-1.jpg",
        "gig-gallery-thumb-2.jpg",
        "gig-gallery-thumb-1.jpg"
      ]
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {}
};
</script>
