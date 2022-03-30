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
      <!-- Order Page -->
      <section class="section-order">
        <div class="order-topbar">
          <div class="order-topbar-container">
            <div class="order-topbar-item">
              <icon-base
                width="17"
                height="13.2"
                view-box="0 0 17 13.2"
                icon-name="checkbox2"
              >
                <icon-checkbox2 />
              </icon-base>
              <span class="text-uppercase"
                >Buyersubmitted <br />Information</span
              >
            </div>
            <div class="order-topbar-item">
              <icon-base
                width="13.36"
                height="20"
                view-box="0 0 13.36 20"
                icon-name="delivery"
              >
                <icon-delivery />
              </icon-base>
              <span class="text-uppercase"
                >Order in progress <br />Delivery soon</span
              >
            </div>

            <button class="btn btn-secondary ml-lg-auto">Delivery Now</button>
          </div>
        </div>
        <div class="container">
          <div class="order-container">
            <div class="order-content">
              <div class="order-message wblock">
                <icon-base
                  width="27.22"
                  height="28"
                  view-box="0 0 27.22 28"
                  icon-name="like3"
                >
                  <icon-like3 />
                </icon-base>
                <span
                  >This user is top Buyer, a V.I.D <br />
                  Provide excellent service to keep them coming back.
                  <router-link :to="{}">Learn more</router-link>
                </span>
              </div>
              <section class="section-order-info wblock">
                <header class="order-info-header">
                  <div class="order-info-hl">
                    <div class="order-info-hlt">
                      <div class="order-num">Order #123123UI12</div>
                      <router-link :to="{}">View Gig</router-link>
                    </div>
                    <div class="order-info-hb">
                      Buyer: Username (<router-link :to="{}"
                        >View History</router-link
                      >) January 19-2021
                    </div>
                  </div>
                  <div class="order-info-hr">
                    <div class="order-price">$342.23</div>
                    <div class="order-type">Custom Order</div>
                  </div>
                </header>
                <div class="order-info-body">
                  <p>
                    Thank you for reching out, here is the offer to get started
                  </p>

                  <table class="table table-borderless table-order-list">
                    <thead class="order-list-head">
                      <tr>
                        <th class="col-item">Item</th>
                        <th class="col-quantity">Quantity</th>
                        <th class="col-duration">Duration</th>
                        <th class="col-amount">Amount</th>
                      </tr>
                    </thead>
                    <tbody class="order-list-body">
                      <tr class="order-item-top">
                        <td class="col-item">
                          I’ll do UX,UI for web and mobile apps
                        </td>
                        <td colspan="3"></td>
                      </tr>
                      <tr>
                        <td class="col-item">
                          <ul class="list-green">
                            <li>Unlimited revisions</li>
                            <li>Include Source File</li>
                            <li>Commercial Use</li>
                          </ul>
                        </td>
                        <td class="col-quantity">1</td>
                        <td class="col-duration">7 Days</td>
                        <td class="col-amount">$342.23</td>
                      </tr>
                      <tr class="order-item-top">
                        <td class="col-item">
                          I’ll do UX,UI for web and mobile apps
                        </td>
                        <td colspan="3"></td>
                      </tr>
                      <tr>
                        <td class="col-item">
                          <ul class="list-green">
                            <li>Unlimited revisions</li>
                            <li>Include Source File</li>
                            <li>Commercial Use</li>
                          </ul>
                        </td>
                        <td class="col-quantity">1</td>
                        <td class="col-duration">7 Days</td>
                        <td class="col-amount">$342.23</td>
                      </tr>
                    </tbody>
                    <tfoot class="order-list-foot">
                      <tr>
                        <th class="label" colspan="3"><b>Total</b></th>
                        <th class="val">$684.46</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>

              <section class="section-order-countdown">
                <div class="order-countdown">
                  <div class="countdown-item">
                    <div class="countdown-val">
                      <div class="countdown-val-cell wblock">2</div>
                      <div class="countdown-val-cell wblock">0</div>
                    </div>
                    <div class="countdown-label">Days</div>
                  </div>
                  <div class="countdown-colon">:</div>
                  <div class="countdown-item">
                    <div class="countdown-val">
                      <div class="countdown-val-cell wblock">1</div>
                      <div class="countdown-val-cell wblock">8</div>
                    </div>
                    <div class="countdown-label">Hours</div>
                  </div>
                  <div class="countdown-colon">:</div>
                  <div class="countdown-item">
                    <div class="countdown-val">
                      <div class="countdown-val-cell wblock">5</div>
                      <div class="countdown-val-cell wblock">5</div>
                    </div>
                    <div class="countdown-label">Minutes</div>
                  </div>
                  <div class="countdown-colon">:</div>
                  <div class="countdown-item">
                    <div class="countdown-val">
                      <div class="countdown-val-cell wblock">3</div>
                      <div class="countdown-val-cell wblock">6</div>
                    </div>
                    <div class="countdown-label">Seconds</div>
                  </div>
                </div>
              </section>

              <section class="section-order-conversation">
                <div class="order-conversation wblock">
                  <div class="order-conversation-intro">
                    <icon-base
                      width="120"
                      height="120"
                      view-box="0 0 120 120"
                      icon-name="chat"
                    >
                      <icon-chat />
                    </icon-base>
                    <div class="intro-message">
                      RECENT CONVERSATION
                    </div>
                    <div class="intro-view">
                      View your recent inbox conversation with
                      this&nbsp;<b>username</b>.&nbsp;
                      <router-link :to="{}" class="btn btn-icon btn-link"
                        ><span>Show conversation</span>
                        <icon-base
                          width="7.79"
                          height="6.75"
                          view-box="0 0 7.79 6.75"
                          icon-name="triangle2"
                          ><icon-triangle2 /> </icon-base
                      ></router-link>
                    </div>
                  </div>
                </div>

                <div class="btns justify-content-center">
                  <button class="btn btn-secondary">Delivery Now</button>
                </div>

                <div class="order-conversation-form">
                  <div class="label">Start Communication here</div>
                  <div class="form-group">
                    <textarea
                      rows="6"
                      class="form-control"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div class="btns justify-content-end">
                    <button class="btn btn-secondary"><b>Send</b></button>
                  </div>
                </div>
              </section>
            </div>
            <div class="order-sidebar">
              <div class="order-note bblock">
                <div class="text"><b>Private Note</b></div>
                <div class="text f14 mb-lg-5">Only Visible to You</div>

                <button class="btn btn-link btn-icon">
                  <icon-base
                    width="12.68"
                    height="16"
                    view-box="0 0 12.68 16"
                    icon-name="note-add"
                    ><icon-note-add />
                  </icon-base>
                  <span>Add Note</span>
                </button>
              </div>

              <div class="bblock">
                <div class="text text-center">
                  <p>Need to change or cancel your order</p>
                  <p class="text-uppercase f14">
                    Visit the resolution resolution center
                  </p>
                  <p class="mb-0"><a href="">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End of Order Page -->
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
import IconCheckbox2 from "./common/icons/IconCheckbox2.vue";
import IconDelivery from "./common/icons/IconDelivery.vue";
import IconLike3 from "./common/icons/IconLike3.vue";
import IconChat from "./common/icons/IconChat.vue";
import IconTriangle2 from "./common/icons/IconTriangle2.vue";
import IconNoteAdd from "./common/icons/IconNoteAdd.vue";

export default {
  name: "Order",
  components: {
    Header,
    Footer,
    Loading,
    IconBase,
    IconCheckbox2,
    IconDelivery,
    IconLike3,
    IconChat,
    IconTriangle2,
    IconNoteAdd
  },
  data() {
    return {
      isLoading: false,
      publicPath: local_image_path
    };
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
