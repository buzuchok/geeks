<template>
  <div>
    <Header />

    <main class="main">
      <!-- Buyer Page -->
      <section class="section-buyer">
        <div class="container">
          <div class="buyer-row">
            <div class="buyer-col-l">
              <!-- Buyer Info -->
              <section class="section-buyer-info">
                <div class="btn btn-sm btn-status btn-status-active">
                  Active Status
                </div>
                <div class="userpic">
                  <img
                    :src="`${publicPath}userpic-100.jpg`"
                    class="rounded-circle"
                    alt=""
                  />
                </div>
                <div class="username">Buyer Name Here</div>
                <div class="subtitle">Lorem ispam</div>
                <div class="buyer-info">
                  <div class="buyer-info-h">
                    <div class="label">About:</div>
                    <div class="buyer-rating">5.0 (Review)</div>
                  </div>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas tellus senectus sit interdum tellus. Fermentum
                    arcu, proin morbi neque aenean sed malesuada.
                  </div>
                  <div class="more">
                    <router-link :to="{}">Learn more...</router-link>
                  </div>
                </div>
              </section>
              <!-- End of Buyer Card -->
            </div>
            <div class="buyer-col-r">
              <!-- Buyer Orders -->
              <section class="section-buyer-orders">
                <ul class="nav nav-otabs">
                  <li
                    class="nav-link"
                    :class="orderTab == 1 ? 'active' : ''"
                    @click="orderTab = 1"
                  >
                    All
                  </li>
                  <li
                    class="nav-link"
                    :class="orderTab == 2 ? 'active' : ''"
                    @click="orderTab = 2"
                  >
                    Active Order
                  </li>
                  <li
                    class="nav-link"
                    :class="orderTab == 3 ? 'active' : ''"
                    @click="orderTab = 3"
                  >
                    Pending Orders
                  </li>
                  <li
                    class="nav-link"
                    :class="orderTab == 4 ? 'active' : ''"
                    @click="orderTab = 4"
                  >
                    Complete Orders
                  </li>
                  <li
                    class="nav-link"
                    :class="orderTab == 5 ? 'active' : ''"
                    @click="orderTab = 5"
                  >
                    Cancelled order
                  </li>
                </ul>

                <div class="tabs-content">
                  <!-- Tab 1 -->
                  <div class="tab-content" v-if="orderTab == 1">
                    <div class="order-card-list">
                      <div class="ocard">
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
                          <div class="ocard-info ocard-info-1">
                            <div class="ocard-info-t">John Doe</div>
                            <div class="ocard-info-b">View Order</div>
                          </div>
                          <div class="ocard-info ocard-info-2">
                            <div class="ocard-info-t">Price</div>
                            <div class="ocard-info-b">$342</div>
                          </div>
                          <div class="ocard-info ocard-info-3">
                            <div class="ocard-info-t">Delivery Time</div>
                            <div class="ocard-info-b">
                              <icon-base
                                width="9"
                                height="9"
                                view-box="0 0 9 9"
                                icon-name="clock"
                              >
                                <icon-clock />
                              </icon-base>
                              <span>2 days Late</span>
                            </div>
                          </div>
                        </div>
                        <div class="ocard-b">
                          <div class="ocard-b-l">
                            <a href="">Cancel</a>
                            <p class="text-muted m-0">
                              You re Running late. Deliver Now to avoid negetive
                              rating.
                            </p>
                          </div>
                          <div class="ocard-b-r">
                            <router-link to="{}" class="btn btn-secondary"
                              >View Order</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div class="ocard">
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
                          <div class="ocard-info ocard-info-1">
                            <div class="ocard-info-t">John Doe</div>
                            <div class="ocard-info-b">View Order</div>
                          </div>
                          <div class="ocard-info ocard-info-2">
                            <div class="ocard-info-t">Price</div>
                            <div class="ocard-info-b">$342</div>
                          </div>
                          <div class="ocard-info ocard-info-3">
                            <div class="ocard-info-t">Delivery Time</div>
                            <div class="ocard-info-b">
                              <icon-base
                                width="9"
                                height="9"
                                view-box="0 0 9 9"
                                icon-name="clock"
                              >
                                <icon-clock />
                              </icon-base>
                              <span>2 days Late</span>
                            </div>
                          </div>
                        </div>
                        <div class="ocard-b">
                          <div class="ocard-b-l">
                            <a href="">Cancel</a>
                            <p class="text-muted m-0">
                              You re Running late. Deliver Now to avoid negetive
                              rating.
                            </p>
                          </div>
                          <div class="ocard-b-r">
                            <router-link to="{}" class="btn btn-secondary"
                              >View Order</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End of Tab 1 -->
                  <!-- Tab 2 -->
                  <div class="tab-content" v-if="orderTab == 2">Tab 2</div>
                  <!-- End of Tab 2 -->
                  <!-- Tab 3 -->
                  <div class="tab-content" v-if="orderTab == 3">Tab 3</div>
                  <!-- End of Tab 3 -->
                  <!-- Tab 4 -->
                  <div class="tab-content" v-if="orderTab == 4">Tab 4</div>
                  <!-- End of Tab 4 -->
                  <!-- Tab 5 -->
                  <div class="tab-content" v-if="orderTab == 5">Tab 5</div>
                  <!-- End of Tab 5 -->
                </div>
              </section>
              <!-- End of Orders -->
            </div>
          </div>
        </div>
      </section>
      <!-- End of Buyer Page -->
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

export default {
  name: "Buyer",
  components: {
    Header,
    Footer,
    IconBase,
    IconComment,
    IconClock,
    IconStar
  },
  data() {
    return {
      publicPath: local_image_path,
      orderTab: 1
    };
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
