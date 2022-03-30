<template>
  <div>
    <Header />

    <main class="main">
      <!-- Active Order Page -->
      <section class="section-activeorder">
        <div class="container">
          <div class="activeorder-row">
            <div class="activeorder-col-l">
              <!-- Active Order Info -->
              <section class="section-activeorder-info">
                <div class="info-t">
                  <div class="userpic">
                    <img
                      :src="`${publicPath}user-avatar-sm.jpg`"
                      class="rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="username">TheUserName</div>
                  <div class="user-rating">
                    <icon-base
                      width="14"
                      height="13.42"
                      view-box="0 0 11 10.54"
                      icon-name="star"
                    >
                      <icon-star />
                    </icon-base>
                    <span class="val">5</span>
                  </div>
                </div>
                <div class="info-bars">
                  <div class="info-bar">
                    <div class="bar-label">Response Rate</div>
                    <div class="progress progress-sm progress-green">
                      <div
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        class="progress-bar"
                        style="width: 100%;"
                      ></div>
                    </div>
                    <div class="bar-val">100%</div>
                  </div>
                  <div class="info-bar">
                    <div class="bar-label">Delivered on Time</div>
                    <div class="progress progress-sm progress-green">
                      <div
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        class="progress-bar"
                        style="width: 75%;"
                      ></div>
                    </div>
                    <div class="bar-val">75%</div>
                  </div>
                  <div class="info-bar">
                    <div class="bar-label">Order Completion</div>
                    <div class="progress progress-sm progress-green">
                      <div
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        class="progress-bar"
                        style="width: 95%;"
                      ></div>
                    </div>
                    <div class="bar-val">95%</div>
                  </div>
                </div>
                <div class="info-details">
                  <div class="info-detail">
                    <div class="label">Earned in January</div>
                    <div class="val">$0</div>
                  </div>
                  <div class="info-detail">
                    <div class="label">Order Completion</div>
                    <div class="val">1 Hrs</div>
                  </div>
                </div>
              </section>
              <!-- End of Active Order Info -->

              <!-- Active Order Conversation -->
              <section class="section-conversation-list">
                <div class="conversation-list-h" v-if="activeChat == 0">
                  <h2>Recent conversation</h2>
                  <icon-base
                    width="13.26"
                    height="11.75"
                    view-box="0 0 13.26 11.75"
                    icon-name="triangle"
                  >
                    <icon-triangle />
                  </icon-base>
                </div>
                <div class="conversation-list-h">
                  <h2>Inbox</h2>
                  <div class="all">
                    <router-link :to="{}">View All</router-link>
                  </div>
                </div>
                <div class="conversation-list-container">
                  <vue-scroll :ops="ops">
                    <div class="conversation-list">
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-on"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w is-comment">
                            <span class="text">Good Morning Orenba,</span>
                            <span class="comments"
                              ><span class="num">1</span>
                              <icon-base
                                width="17"
                                height="16"
                                view-box="0 0 16.87 15.53"
                                icon-name="comment"
                              >
                                <icon-comment /> </icon-base
                            ></span>
                          </div>
                        </div>
                        <div class="citem-r">
                          <icon-base
                            width="9"
                            height="9"
                            view-box="0 0 9 9"
                            icon-name="clock"
                          >
                            <icon-clock />
                          </icon-base>
                          <div class="ago">2 m</div>
                          <icon-base
                            width="14"
                            height="13.42"
                            view-box="0 0 11 10.54"
                            icon-name="star"
                          >
                            <icon-star />
                          </icon-base>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-on"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <icon-base
                            width="9"
                            height="9"
                            view-box="0 0 9 9"
                            icon-name="clock"
                          >
                            <icon-clock />
                          </icon-base>
                          <div class="ago">2 m</div>
                          <icon-base
                            width="14"
                            height="13.42"
                            view-box="0 0 11 10.54"
                            icon-name="star"
                          >
                            <icon-star />
                          </icon-base>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">John Doe</div>
                          <div class="text-w is-comment">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                            <span class="comments"
                              ><span class="num">1</span>
                              <icon-base
                                width="17"
                                height="16"
                                view-box="0 0 16.87 15.53"
                                icon-name="comment"
                              >
                                <icon-comment /> </icon-base
                            ></span>
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">1 Week</div>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">2 weeks</div>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">2 weeks</div>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">2 weeks</div>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">2 weeks</div>
                        </div>
                      </div>
                      <div class="citem">
                        <div class="userpic">
                          <img
                            :src="`${publicPath}userpic-56.jpg`"
                            class="rounded-circle"
                            alt=""
                          />
                          <div class="status status-off"></div>
                        </div>
                        <div class="citem-c">
                          <div class="username">Moin Haikal</div>
                          <div class="text-w">
                            <span class="text"
                              >Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.</span
                            >
                          </div>
                        </div>
                        <div class="citem-r">
                          <div class="ago">2 weeks</div>
                        </div>
                      </div>
                    </div>
                  </vue-scroll>
                </div>
              </section>
              <!-- End of Active Order Conversation -->
            </div>
            <div class="activeorder-col-r">
              <!-- Active Orders -->
              <section class="section-activeorders">
                <div class="activeorders-h">
                  <div class="activeorders-hl">Active Order 1($400)</div>
                  <div class="activeorders-hr">Active Orders (1)</div>
                </div>

                <div class="order-card-list">
                  <div class="ocard ocard-sm">
                    <div class="ocard-content">
                      <div class="ocard-img">
                        <img
                          :src="`${publicPath}order-152.jpg`"
                          class="rounded"
                          alt=""
                        />
                      </div>
                      <div class="ocard-userpic">
                        <img
                          :src="`${publicPath}userpic-66.jpg`"
                          class="rounded-circle"
                          alt=""
                        />
                        <div class="status status-on"></div>
                      </div>
                      <div class="ocard-username">TheUserName</div>
                      <div class="ocard-info ocard-info-sm-1">
                        <div class="ocard-info-t">Price</div>
                        <div class="ocard-info-b">$400</div>
                      </div>
                      <div class="ocard-info ocard-info-sm-2">
                        <div class="ocard-info-t">Due In</div>
                        <div class="ocard-info-b">$342</div>
                      </div>
                      <div class="ocard-info ocard-info-sm-3">
                        <div class="ocard-info-t">Status</div>
                        <div class="ocard-info-b">
                          <span class="badge badge-success text-uppercase"
                            >Progress</span
                          >
                        </div>
                      </div>
                      <div class="ocard-info ocard-info-sm-4">
                        <router-link :to="{}">View</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="ocard ocard-sm">
                    <div class="ocard-content">
                      <div class="ocard-img">
                        <img
                          :src="`${publicPath}order-152.jpg`"
                          class="rounded"
                          alt=""
                        />
                      </div>
                      <div class="ocard-userpic">
                        <img
                          :src="`${publicPath}userpic-66.jpg`"
                          class="rounded-circle"
                          alt=""
                        />
                        <div class="status status-on"></div>
                      </div>
                      <div class="ocard-username">TheUserName</div>
                      <div class="ocard-info ocard-info-sm-1">
                        <div class="ocard-info-t">Price</div>
                        <div class="ocard-info-b">$400</div>
                      </div>
                      <div class="ocard-info ocard-info-sm-2">
                        <div class="ocard-info-t">Due In</div>
                        <div class="ocard-info-b">$342</div>
                      </div>
                      <div class="ocard-info ocard-info-sm-3">
                        <div class="ocard-info-t">Status</div>
                        <div class="ocard-info-b">
                          <span class="badge badge-success text-uppercase"
                            >Progress</span
                          >
                        </div>
                      </div>
                      <div class="ocard-info ocard-info-sm-4">
                        <router-link :to="{}">View</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- End of Active Orders -->

              <!-- Active Order Analytics -->
              <section class="section-activeorder-analytics">
                <div class="analytics-h">Seller analytics</div>
                <div class="analytics-row">
                  <div class="analytics-content">
                    <div class="analytics-content-h">Seller analytics</div>
                    <div class="analytics-content-t">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="analytics-item analytics-item-earnings">
                            <div class="item-info">
                              <div class="val">$230</div>
                              <div class="label">Total earnings</div>
                            </div>
                            <div class="item-graph">
                              <svg
                                width="69"
                                height="25"
                                viewBox="0 0 69 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 23C2.61905 21.3622 5.09524 17.4726 10.0476 19.9292C11.2857 20.5434 15.619 24.8425 18.7143 17.4726C21.1905 11.5767 27.1746 13.3782 29.8571 15.016C33.1587 16.6538 40.7524 16.9813 44.7143 5.18951C45.3333 3.34703 47.8095 -1.56623 55.8571 6.41782C58.3334 8.87449 64.1111 7.03199 67 6.41782"
                                  stroke="#234FF8"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="analytics-item analytics-item-orders">
                            <div class="item-info">
                              <div class="val">88</div>
                              <div class="label">Total Orders</div>
                            </div>
                            <div class="item-graph">
                              <svg
                                width="69"
                                height="25"
                                viewBox="0 0 69 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 23C2.61905 21.3622 5.09524 17.4726 10.0476 19.9292C11.2857 20.5434 15.619 24.8425 18.7143 17.4726C21.1905 11.5767 27.1746 13.3782 29.8571 15.016C33.1587 16.6538 40.7524 16.9813 44.7143 5.18951C45.3333 3.34703 47.8095 -1.56623 55.8571 6.41782C58.3334 8.87449 64.1111 7.03199 67 6.41782"
                                  stroke="#F6C35E"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="analytics-item analytics-item-price">
                            <div class="item-info">
                              <div class="val">$64</div>
                              <div class="label">AVG Selling Price</div>
                            </div>
                            <div class="item-graph">
                              <svg
                                width="69"
                                height="25"
                                viewBox="0 0 69 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 23C2.61905 21.3622 5.09524 17.4726 10.0476 19.9292C11.2857 20.5434 15.619 24.8425 18.7143 17.4726C21.1905 11.5767 27.1746 13.3782 29.8571 15.016C33.1587 16.6538 40.7524 16.9813 44.7143 5.18951C45.3333 3.34703 47.8095 -1.56623 55.8571 6.41782C58.3334 8.87449 64.1111 7.03199 67 6.41782"
                                  stroke="#EC5A22"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="analytics-item analytics-item-totalmoney">
                            <div class="item-info">
                              <div class="val">$230</div>
                              <div class="label">Total Money Earned</div>
                            </div>
                            <div class="item-graph">
                              <svg
                                width="69"
                                height="25"
                                viewBox="0 0 69 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 23C2.61905 21.3622 5.09524 17.4726 10.0476 19.9292C11.2857 20.5434 15.619 24.8425 18.7143 17.4726C21.1905 11.5767 27.1746 13.3782 29.8571 15.016C33.1587 16.6538 40.7524 16.9813 44.7143 5.18951C45.3333 3.34703 47.8095 -1.56623 55.8571 6.41782C58.3334 8.87449 64.1111 7.03199 67 6.41782"
                                  stroke="#020E1F"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="analytics-content-b row">
                      <div class="analytics-content-bl col-md-6">
                        <div class="analytics-reviews row">
                          <div class="analytics-reviews-item col-sm-6">
                            <div class="val">59</div>
                            <div class="label text-uppercase">All reviews</div>
                          </div>
                          <div class="analytics-reviews-item col-sm-6">
                            <div class="val">0</div>
                            <div class="label text-uppercase">Negative</div>
                          </div>
                          <div class="analytics-reviews-item col-sm-6">
                            <div class="val">18</div>
                            <div class="label text-uppercase">Not rated</div>
                          </div>
                        </div>
                      </div>
                      <div class="analytics-content-br col-md-6">
                        <div class="analytics-pies row mx-n1">
                          <div class="analytics-pie-item col-sm-6 px-1">
                            <div class="pie">
                              <svg
                                width="67"
                                height="67"
                                viewBox="0 0 67 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="33.5"
                                  cy="33.5"
                                  r="33.5"
                                  fill="#FFD8C9"
                                />
                                <path
                                  d="M16.75 4.48815C11.3358 7.61402 6.90437 12.1926 3.95688 17.7059C1.00939 23.2192 -0.336522 29.4473 0.071382 35.6857C0.479286 41.9242 2.62473 47.924 6.26504 53.0066C9.90535 58.0892 14.8953 62.0517 20.6704 64.4459C26.4455 66.8402 32.7754 67.5707 38.944 66.5547C45.1127 65.5387 50.8739 62.8169 55.5762 58.697C60.2785 54.5772 63.7341 49.2237 65.5521 43.2422C67.3702 37.2606 67.4782 30.8896 65.864 24.8499L33.5 33.5L16.75 4.48815Z"
                                  fill="#FFA583"
                                />
                                <path
                                  d="M16.75 4.48815C12.3567 7.0246 8.5969 10.5257 5.75414 14.7272C2.91138 18.9288 1.05995 23.7211 0.33953 28.7426C-0.380889 33.764 0.0485202 38.8836 1.59536 43.7149C3.1422 48.5462 5.76607 52.9631 9.26901 56.6324C12.7719 60.3017 17.0625 63.1276 21.8169 64.8967C26.5713 66.6659 31.6654 67.3322 36.7149 66.8454C41.7644 66.3586 46.6373 64.7313 50.9662 62.0864C55.295 59.4415 58.9666 55.848 61.7041 51.5771L33.5 33.5L16.75 4.48815Z"
                                  fill="#EB571F"
                                />
                              </svg>
                            </div>
                            <div class="label text-uppercase">
                              Positive reviews
                            </div>
                          </div>
                          <div class="analytics-pie-item col-sm-6 px-1">
                            <div class="pie">
                              <svg
                                width="67"
                                height="67"
                                viewBox="0 0 67 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="33.5"
                                  cy="33.5"
                                  r="33.5"
                                  fill="#B5FFC5"
                                />
                                <path
                                  d="M30.1512 0.167796C23.8301 0.802858 17.8198 3.22225 12.8216 7.14373C7.82335 11.0652 4.04322 16.3271 1.92219 22.3155C-0.198842 28.304 -0.573334 34.7721 0.842403 40.9653C2.25814 47.1586 5.40574 52.8216 9.918 57.2937C14.4303 61.7658 20.1211 64.8627 26.3268 66.223C32.5324 67.5833 38.9969 67.1511 44.9662 64.9766C50.9354 62.8021 56.1633 58.9752 60.04 53.9421C63.9167 48.909 66.2822 42.8774 66.8608 36.5508L33.5 33.5L30.1512 0.167796Z"
                                  fill="#0D9F2D"
                                />
                                <path
                                  d="M33.5 0C28.4095 -6.07036e-08 23.3859 1.1601 18.8109 3.39219C14.2359 5.62428 10.2297 8.86964 7.09662 12.8818C3.96357 16.8939 1.78607 21.5673 0.729512 26.5469C-0.327043 31.5266 -0.234864 36.6815 0.999046 41.6202C2.23296 46.5589 4.57615 51.1515 7.85063 55.049C11.1251 58.9466 15.2448 62.0466 19.8967 64.1137C24.5486 66.1808 29.6104 67.1606 34.6977 66.9786C39.7849 66.7966 44.7638 65.4576 49.2561 63.0634L33.5 33.5V0Z"
                                  fill="#14CF3C"
                                />
                              </svg>
                            </div>
                            <div class="label text-uppercase">
                              Orders cancelled
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="analytics-sidebar">
                    <div class="gigadd-step-sidebar-block border rounded">
                      <div class="h5 text-center mb-3">
                        Start Defining Your Gig
                      </div>
                      <div class="video-block mb-3">
                        <img
                          :src="`${publicPath}gig-245.jpg`"
                          alt=""
                          class="rounded"
                        />
                        <icon-base
                          width="37"
                          height="37"
                          view-box="0 0 37 37"
                          icon-name="play"
                        >
                          <icon-play />
                        </icon-base>
                      </div>

                      <ul class="list-black text-muted f14 mb-5">
                        <li>Lorem ipsum dolor sit amet,</li>
                        <li>Choose a Category that fits your Gig.</li>
                        <li>
                          Add meta data to help buyes find more information
                          regarding your Gig. your Gig.
                        </li>
                        <li>
                          Add tags to help buyers find your Gig while searching
                        </li>
                      </ul>

                      <div class="f12 text-center">
                        <router-link to="" class="text-muted"
                          >Our Policy and terms and Conditions</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- End of Active Order Analytics -->
            </div>
          </div>
        </div>
      </section>
      <!-- End of Active Order -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconComment from "./common/icons/IconComment.vue";
import IconClock from "./common/icons/IconClock.vue";
import IconStar from "./common/icons/IconStar.vue";
import IconPlay from "./common/icons/IconPlay.vue";

export default {
  name: "ActiveOrder",
  components: {
    Header,
    Footer,
    IconBase,
    IconComment,
    IconClock,
    IconStar,
    IconPlay
  },
  data() {
    return {
      publicPath: local_image_path,
      orderTab: 1,
      ops: {
        vuescroll: {
          wheelScrollDuration: 400
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {
          background: "transparent",
          opacity: 0,
          size: "9px",
          keepShow: true
        },
        bar: {
          size: "9px",
          keepShow: true,
          // opacity: 0.2,
          specifyBorderRadius: "5px",
          background: "#202C54"
        }
      }
    };
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
