<template>
  <!-- Footer -->
  <footer class="footer">
    <loading
      :active.sync="isLoadingFooter"
      :can-cancel="true"
      :is-full-page="fullPageFooter"
      background-color="#000"
      color="#202c54"
    ></loading>

    <div class="container">
      <div class="footer-t">
        <div class="footer-t-info">
          <div class="logo">
            <img
              :src="`${publicPath}logo-f.png`"
              :srcset="`${publicPath}logo-f.png, ${publicPath}logo-f@2x.png 2x`"
              alt="StreamGeeks"
            />
          </div>
          <div class="text">
            <p v-html="homepageFooterContentBlockHeaderText"></p>
          </div>
        </div>
        <nav class="footer-t-menu">
          <div class="row">
            <div class="col-sm-6">
              <ul class="nav flex-column mb-4 mb-sm-0">
                <li class="nav-item">
                  <a href="" class="nav-link"><strong>Home</strong></a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Contact Us</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Terms & Conditions</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">FAQ</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a href="" class="nav-link"><strong>Explore</strong></a>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'projects' }" class="nav-link"
                    >Projects</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'community' }" class="nav-link"
                    >Community</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'blog' }" class="nav-link"
                    >Education</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'gigs' }">Gigs</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="footer-t-subscribe">
          <form action="">
            <div class="form-group">
              <label for="subscribe-email">Subscribe to an email</label>
              <input
                type="email"
                name="subscribe-email"
                class="form-control"
                placeholder="Email address"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="footer-b">
        <div class="copy">Copyrights 2020. All rights reserved.</div>
        <div class="social">
          <a href="">
            <icon-base
              width="24"
              height="24"
              view-box="0 0 24 24"
              icon-name="facebook"
            >
              <icon-facebook />
            </icon-base>
          </a>
          <a href="">
            <icon-base
              width="28"
              height="21"
              view-box="0 0 28 21"
              icon-name="twitter"
            >
              <icon-twitter />
            </icon-base>
          </a>
          <a href="">
            <icon-base
              width="24"
              height="24"
              view-box="0 0 24 24"
              icon-name="instagram"
            >
              <icon-instagram />
            </icon-base>
          </a>
        </div>
      </div>
    </div>

    <div id="fb-root"></div>
  </footer>
  <!-- Footer / End -->
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import IconBase from "./IconBase.vue";
import IconFacebook from "./icons/IconFacebook.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import IconInstagram from "./icons/IconInstagram.vue";

export default {
  name: "Footer",
  components: {
    Loading,
    IconBase,
    IconFacebook,
    IconTwitter,
    IconInstagram
  },
  data() {
    return {
      homepageFooterContentBlockHeaderText: "",
      isLoadingFooter: false,
      fullPageFooter: true,
      publicPath: local_image_path
    };
  },
  mounted() {
    this.wrapperHeight();
    this.fullPageScrollbar();
    this.customJS();
    this.checkLoginStatus();
    this.loadCMSItemByKey("footer_content_block_header");
  },

  methods: {
    async loadCMSItemByKey(CMSItemKey) {
      const result = await this.callApi(
        "post",
        window.api_path + "getBlockCMSItem",
        {
          key: CMSItemKey
        }
      );
      if (CMSItemKey == "footer_content_block_header") {
        this.homepageFooterContentBlockHeaderText = result.data.cMSItem.text;
      }
      // return result.data.cMSItem.text
    } // loadCMSItemByKey() {
  } // methods: {
};
</script>
