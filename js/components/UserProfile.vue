<template>
  <div>
    <Header />

    <!-- User Profile -->
    <section class="section-userprofile">
      <div
        class="userprofile-img-top"
        :style="{ backgroundImage: `url(${publicPath}profile-bg-1.jpg)` }"
      ></div>

      <div class="container">
        <header class="userprofile-h">
          <div class="userprofile-h-info">
            <div class="userpic">
              <img
                class="rounded-circle"
                :src="`${publicPath}userpic-120.jpg`"
                alt=""
              />
            </div>
            <div class="userinfo">
              <div class="username">Streamer Name</div>
              <div class="position">DJ / Visual Streaming</div>
            </div>
          </div>
          <div class="userprofile-h-contact">
            <!-- Contact-modal-dialog -->
            <button class="btn btn-secondary" @click="showContactDialog">
              Contact Streamer
            </button>
            <modal
              name="contact-modal-dialog"
              :width="1160"
              height="auto"
              :scrollable="true"
              :adaptive="true"
              transition=""
              class="section-modal section-modal-contact"
            >
              <div
                class="modal-close"
                @click="$modal.hide('contact-modal-dialog')"
              >
                <icon-base
                  width="21"
                  height="21"
                  viewBox="0 0 7 7"
                  icon-name="cancel"
                  ><icon-cancel
                /></icon-base>
              </div>
              <h2 class="h1">Contact Streamer</h2>
              <div class="form-group">
                <textarea
                  rows="14"
                  class="form-control"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ></textarea>
              </div>
              <div class="btns">
                <button class="btn btn-primary ml-auto">Send</button>
              </div>
            </modal>
            <!-- End of contact-modal-dialog -->
          </div>
        </header>

        <ul class="nav nav-ptabs">
          <li
            class="nav-link"
            :class="userprofileTab == 1 ? 'active' : ''"
            @click="userprofileTab = 1"
          >
            About
          </li>
          <li
            class="nav-link"
            :class="userprofileTab == 2 ? 'active' : ''"
            @click="userprofileTab = 2"
          >
            Gigs
          </li>
          <li
            class="nav-link"
            :class="userprofileTab == 3 ? 'active' : ''"
            @click="userprofileTab = 3"
          >
            Community
          </li>
        </ul>
      </div>

      <div class="tabs-content">
        <!-- About -->
        <div class="tab-content tab-content-1" v-if="userprofileTab == 1">
          <div class="container">
            <div class="userprofile-t">
              <div class="username">Streamer Name</div>
              <div class="userstreams">253 Streams</div>
            </div>
            <div class="userprofile-desc">
              <div class="label">Description</div>
              <div class="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, ve
                </p>
              </div>
            </div>

            <div class="userprofile-details-blocks">
              <div
                class="userprofile-details-block userprofile-details-block-1"
              >
                <div class="userprofile-details-line">
                  <span class="label">Email:</span>
                  <span class="val">Email</span>
                </div>
                <div class="userprofile-details-line">
                  <span class="label">Twitter:</span>
                  <span class="val">Username</span>
                </div>
                <div class="userprofile-details-line">
                  <span class="label">Linkedin:</span>
                  <span class="val">Username</span>
                </div>
                <div class="userprofile-details-line">
                  <span class="label h5">Instagram:</span>
                  <span class="val">Username</span>
                </div>
              </div>
              <div
                class="userprofile-details-block userprofile-details-block-2"
              >
                <div class="userprofile-details-line">
                  <span class="label">Location:</span>
                  <span class="val">De land Florida, USA</span>
                </div>
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
        <!-- End of About -->

        <!-- Gigs -->
        <div class="tab-content tab-content-2" v-if="userprofileTab == 2">
          <div class="container">
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
                          <img
                            :src="`${publicPath}user-avatar-sm.jpg`"
                            alt=""
                          />
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
                          <img
                            :src="`${publicPath}user-avatar-sm.jpg`"
                            alt=""
                          />
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
                          <img
                            :src="`${publicPath}user-avatar-sm.jpg`"
                            alt=""
                          />
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
                          <img
                            :src="`${publicPath}user-avatar-sm.jpg`"
                            alt=""
                          />
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
          <div class="tab-bg"></div>
        </div>
        <!-- End of Gigs -->

        <!-- Community -->
        <div class="tab-content tab-content-3" v-if="userprofileTab == 3">
          <div class="container">
            <div class="cpost-list">
              <div class="cpost">
                <div class="cpost-body">
                  <div class="cpost-title">
                    <a href=""
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fringilla habitant eu porttitor eu. Libero
                    </a>
                  </div>
                  <div class="cpost-text">
                    Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Fringilla habitant eu
                    porttitor eu. Libero sed feugiat luctus ac quam purus
                  </div>
                  <ul class="tags">
                    <li><a href="" class="tag tag-green">Tag 1</a></li>
                    <li><a href="" class="tag tag-blue">Tag 2</a></li>
                    <li><a href="" class="tag tag-yellow">Tag 3</a></li>
                  </ul>
                </div>
                <div class="cpost-footer">
                  <div class="cpost-info">
                    <div class="cpost-info-item">
                      <icon-base
                        width="20"
                        height="18.67"
                        view-box="0 0 20 18.67"
                        icon-name="like"
                      >
                        <icon-like />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Votes</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19"
                        height="18.96"
                        view-box="0 0 19 18.96"
                        icon-name="answers"
                      >
                        <icon-answers />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Answers</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19.23"
                        height="12.38"
                        view-box="0 0 19.23 12.38"
                        icon-name="views"
                      >
                        <icon-views />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Views</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cpost">
                <div class="cpost-body">
                  <div class="cpost-title">
                    <a href=""
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fringilla habitant eu porttitor eu. Libero
                    </a>
                  </div>
                  <div class="cpost-text">
                    Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Fringilla habitant eu
                    porttitor eu. Libero sed feugiat luctus ac quam purus
                  </div>
                  <ul class="tags">
                    <li><a href="" class="tag tag-green">Tag 1</a></li>
                    <li><a href="" class="tag tag-blue">Tag 2</a></li>
                    <li><a href="" class="tag tag-yellow">Tag 3</a></li>
                  </ul>
                </div>
                <div class="cpost-footer">
                  <div class="cpost-info">
                    <div class="cpost-info-item">
                      <icon-base
                        width="20"
                        height="18.67"
                        view-box="0 0 20 18.67"
                        icon-name="like"
                      >
                        <icon-like />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Votes</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19"
                        height="18.96"
                        view-box="0 0 19 18.96"
                        icon-name="answers"
                      >
                        <icon-answers />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Answers</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19.23"
                        height="12.38"
                        view-box="0 0 19.23 12.38"
                        icon-name="views"
                      >
                        <icon-views />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Views</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cpost">
                <div class="cpost-body">
                  <div class="cpost-title">
                    <a href=""
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fringilla habitant eu porttitor eu. Libero
                    </a>
                  </div>
                  <div class="cpost-text">
                    Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Fringilla habitant eu
                    porttitor eu. Libero sed feugiat luctus ac quam purus
                  </div>
                  <ul class="tags">
                    <li><a href="" class="tag tag-green">Tag 1</a></li>
                    <li><a href="" class="tag tag-blue">Tag 2</a></li>
                    <li><a href="" class="tag tag-yellow">Tag 3</a></li>
                  </ul>
                </div>
                <div class="cpost-footer">
                  <div class="cpost-info">
                    <div class="cpost-info-item">
                      <icon-base
                        width="20"
                        height="18.67"
                        view-box="0 0 20 18.67"
                        icon-name="like"
                      >
                        <icon-like />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Votes</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19"
                        height="18.96"
                        view-box="0 0 19 18.96"
                        icon-name="answers"
                      >
                        <icon-answers />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Answers</span>
                    </div>
                    <div class="cpost-info-item">
                      <icon-base
                        width="19.23"
                        height="12.38"
                        view-box="0 0 19.23 12.38"
                        icon-name="views"
                      >
                        <icon-views />
                      </icon-base>
                      <span class="num">0</span>
                      <span class="lbl">Views</span>
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
              :container-class="'pagination pagination-dark'"
              :page-class="'page-item'"
            >
            </paginate>
          </div>

          <div class="tab-bg"></div>
        </div>
        <!-- End of Community -->
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconStars from "./common/icons/IconStars.vue";
import IconStar from "./common/icons/IconStar.vue";
import IconLike from "./common/icons/IconLike.vue";
import IconLike2 from "./common/icons/IconLike2.vue";
import IconAnswers from "./common/icons/IconAnswers.vue";
import IconCancel from "./common/icons/IconCancel.vue";
import IconViews from "./common/icons/IconViews.vue";
export default {
  name: "UserProfile",
  components: {
    Header,
    Footer,
    Paginate,
    IconBase,
    IconStars,
    IconStar,
    IconLike,
    IconLike2,
    IconAnswers,
    IconCancel,
    IconViews
  },
  data() {
    return {
      publicPath: local_image_path,
      userprofileTab: 1
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    // Contact modal form
    showContactDialog() {
      this.$modal.show("contact-modal-dialog");
    },
    hideContactDialog() {
      this.$modal.hide("contact-modal-dialog");
    }
  }
};
</script>
