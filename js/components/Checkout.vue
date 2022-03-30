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
      <!-- Checkout Page -->
      <section class="section-checkout">
        <div class="container">
          <!-- Checkout Steps -->
          <div class="checkout-steps">
            <div class="checkout-step is-active">
              <span class="step-num">1</span>
              <span class="step-title">Order Details</span>
            </div>
            <div class="sep">
              <icon-base
                width="9.12"
                height="16"
                view-box="0 0 9.12 16"
                icon-name="angle-right"
              >
                <icon-angle-right />
              </icon-base>
            </div>
            <div
              class="checkout-step"
              :class="checkoutStep > 1 ? 'is-active' : ''"
            >
              <span class="step-num">2</span>
              <span class="step-title">Confirm & Pay</span>
            </div>
            <div class="sep">
              <icon-base
                width="9.12"
                height="16"
                view-box="0 0 9.12 16"
                icon-name="angle-right"
              >
                <icon-angle-right />
              </icon-base>
            </div>
            <div
              class="checkout-step"
              :class="checkoutStep == 3 ? 'is-active' : ''"
            >
              <span class="step-num">3</span>
              <span class="step-title">Submit Requirements</span>
            </div>
          </div>
          <!-- End of Checkout Steps -->

          <div class="checkout-container">
            <!-- Checkout Step 1 -->
            <section v-if="checkoutStep == 1" class="section-checkout-step-1">
              <div class="row">
                <div class="col-lg-7">
                  <h1>Customize your order</h1>

                  <div class="order-info">
                    <div class="order-img">
                      <img
                        :src="`${publicPath}checkout-img-260.jpg`"
                        class="rounded-lg"
                        alt=""
                      />
                    </div>
                    <div class="order-info-r">
                      <div class="order-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tristique
                      </div>
                      <div class="order-rating">
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

                  <div class="order-details">
                    <div class="label">Basic</div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>

                  <div class="order-features row">
                    <div class="col-md-6">
                      <ul class="list-green">
                        <li>2 Days Delivery</li>
                        <li>5 Revisions</li>
                        <li>3 Initial Concepts Included</li>
                        <li>Vector File</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-green">
                        <li>Include Source File</li>
                        <li>Logo Transparency</li>
                        <li>Printable Resolution File</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="order-summary">
                    <div class="summary-header">Summary</div>
                    <div class="summary-body">
                      <div class="summary-lines">
                        <div class="summary-line">
                          <div class="label">Subtotal</div>
                          <div class="val">$5</div>
                        </div>
                        <div class="summary-line">
                          <div class="label">Service fee</div>
                          <div class="val">$75</div>
                        </div>
                        <hr />
                        <div class="summary-line">
                          <div class="label">Total</div>
                          <div class="val">$80</div>
                        </div>
                        <div class="summary-line">
                          <div class="label">Delivery Time</div>
                          <div class="val">7 Days</div>
                        </div>
                      </div>
                    </div>
                    <div class="summary-footer pt-2 pb-3">
                      <button
                        class="btn btn-secondary btn-block"
                        @click="
                          checkoutStep = 2;
                          scrollToTop();
                        "
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                  <div class="order-payment-options">
                    <img :src="`${publicPath}payment-options.png`" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <!-- End of Checkout Step 1 -->

            <!-- Checkout Step 2 -->
            <section v-if="checkoutStep == 2" class="section-checkout-step-2">
              <div class="row">
                <div class="col-lg-7">
                  <div class="checkout-payment">
                    <div class="payment-h">
                      <h2>Credit & Debit card</h2>
                      <img :src="`${publicPath}payment-options.png`" alt="" />
                    </div>
                    <div class="payment-form">
                      <div class="row">
                        <div class="form-group col-sm-4">
                          <label for="checkoutcardnumber">Card number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="checkoutcardnumber"
                          />
                        </div>
                        <div class="form-group col-sm-4 col-lg-3 col-6">
                          <label for="checkoutexpdate">Expiration Date</label>
                          <input
                            type="text"
                            class="form-control"
                            id="checkoutexpdate"
                          />
                        </div>
                        <div class="form-group col-sm-4 col-lg-3 col-6">
                          <label for="checkoutsecuritycode"
                            >Security Code</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="checkoutsecuritycode"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-4">
                          <label for="checkoutcardnumber">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="checkoutcardnumber"
                          />
                        </div>
                        <div class="form-group col-4">
                          <label for="checkoutexpdate">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="checkoutexpdate"
                          />
                        </div>
                      </div>
                      <div class="custom-checkbox-group">
                        <label class="custom-checkbox custom-checkbox-sm">
                          <input type="checkbox" />
                          <span>Save as default</span>
                        </label>
                      </div>
                      <hr />
                      <div class="custom-radio-group my-4">
                        <label class="custom-radio custom-radio-sm">
                          <input type="radio" />
                          <span>
                            <img :src="`${publicPath}paypal.png`" alt="" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="order-summary">
                    <div class="summary-body">
                      <div class="summary-orderinfo">
                        <div class="orderinfo-img">
                          <img
                            :src="`${publicPath}checkout-img-142.jpg`"
                            class="rounded-lg"
                            alt=""
                          />
                        </div>
                        <div class="orderinfo-title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus tristique
                        </div>
                      </div>
                      <ul class="list-green">
                        <li>2 Days Delivery</li>
                        <li>5 Revisions</li>
                        <li>3 Initial Concepts Included</li>
                        <li>Vector File</li>
                      </ul>
                      <hr />
                      <div class="summary-promo">
                        <button class="btn btn-link">Enter promo code</button>
                      </div>
                      <hr />
                      <div class="summary-lines">
                        <div class="summary-line">
                          <div class="label">Total</div>
                          <div class="val">$80</div>
                        </div>
                        <div class="summary-line">
                          <div class="label">Delivery Time</div>
                          <div class="val">7 Days</div>
                        </div>
                      </div>
                    </div>
                    <div class="summary-footer mt-3">
                      <button
                        class="btn btn-secondary btn-block mb-2"
                        @click="
                          checkoutStep = 3;
                          scrollToTop();
                        "
                      >
                        Confirm & Pay
                      </button>
                      <div class="summary-notice">SSL Secure Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End of Checkout Step 2 -->

            <!-- Checkout Step 3 -->
            <section v-if="checkoutStep == 3" class="section-checkout-step-3">
              <div class="checkout-requirements">
                <h2>Submit your Requirements</h2>
                <div class="form-group">
                  <textarea rows="14" class="form-control"></textarea>
                </div>

                <div class="btns justify-content-end">
                  <button class="btn btn-primary">Publish</button>
                </div>
              </div>
            </section>
            <!-- End of Checkout Step 3 -->
          </div>
        </div>
      </section>
      <!-- End of Checkout page -->
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
import IconAngleRight from "./common/icons/IconAngleRight.vue";
import IconStars from "./common/icons/IconStars.vue";

export default {
  name: "Checkout",
  components: {
    Header,
    Footer,
    Loading,
    IconBase,
    IconAngleRight,
    IconStars
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      publicPath: local_image_path,
      checkoutStep: 1
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    scrollToTop: function() {
      window.scrollTo({ top: 0 });
    }
  }
};
</script>
