<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      background-color="#000"
      color="#202c54"
    ></loading>

    <Header />

    <!-- Content -->
    <div id="titlebar" class="gradient margin-bottom-30">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>{{ title }}</h2>
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li>
                  <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>Education</li>
                <li>E-Book</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div class="container">
      <div class="row">
        <!-- Inner Content -->
        <div class="col-xl-12 col-lg-12">
          <!-- Blog Post -->
          <div v-if="edufound == 1" class="blog-post single-post">
            <!-- Blog Post Thumbnail -->
            <div class="blog-post-thumbnail">
              <div class="blog-post-thumbnail-inner">
                <span class="blog-item-tag">{{ ecategory }}</span>
                <img v-if="eimage != null" :src="`${publicPath}${eimage}`" alt="" />
                <img
                  v-if="eimage == null"
                  :src="`${local_image_path}blog_default.png`"
                  alt=""
                />
              </div>
            </div>

            <!-- Blog Post Content -->
            <div class="blog-post-content">
              <h3 class="margin-bottom-10">
                {{ title }}
              </h3>

              <div class="blog-post-info-list margin-bottom-20">
                <a href="#" class="blog-post-info">{{ edate }}</a>
              </div>

              <div v-html="desc"></div>

              <div v-if="doc != null" class="blog_doc">
                <iframe :src="`${publicPath}${doc}`"></iframe>
              </div>

              <!-- Share Buttons -->
              <div class="share-buttons margin-top-25">
                <div class="share-buttons-trigger">
                  <i class="icon-feather-share-2"></i>
                </div>
                <div class="share-buttons-content">
                  <span>Interesting? <strong>Share It!</strong></span>
                  <ul class="share-buttons-icons">
                    <li>
                      <a
                        :href="fbshare"
                        target="_blank"
                        data-button-color="#3b5998"
                        title="Share on Facebook"
                        data-tippy-placement="top"
                        ><i class="icon-brand-facebook-f"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        :href="tw_share"
                        target="_blank"
                        data-button-color="#1da1f2"
                        title="Share on Twitter"
                        data-tippy-placement="top"
                        ><i class="icon-brand-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        :href="in_share"
                        target="_blank"
                        data-button-color="#0077b5"
                        title="Share on LinkedIn"
                        data-tippy-placement="top"
                        ><i class="icon-brand-linkedin-in"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        :href="pin_share"
                        target="_blank"
                        data-button-color="#0077b5"
                        title="Share on Pinterest"
                        data-tippy-placement="top"
                        ><i class="icon-brand-pinterest"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        :href="wapp_share"
                        target="_blank"
                        data-button-color="#0077b5"
                        title="Share on Whatsapp"
                        data-tippy-placement="top"
                        ><i class="icon-brand-whatsapp"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div v-if="edufound == 2" class="col-xl-12 col-lg-12">
            <div class="notification notice closeable">No Details found</div>
          </div>
          <!-- Blog Post Content / End -->
        </div>
        <!-- Inner Content / End -->
      </div>
    </div>

    <!-- Spacer -->
    <div class="padding-top-40"></div>
    <!-- Spacer -->

    <Footer />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import Vue from "vue";
import Toaster from "v-toaster";
import "vue-loading-overlay/dist/vue-loading.css";
import "v-toaster/dist/v-toaster.css";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

Vue.use(Toaster, { timeout: 4000 });
export default {
  name: "EbookDetail",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      publicPath: window.image_path,
      local_image_path: window.local_image_path,
      edufound: 0,
      id: 0,
      title: "",
      desc: "",
      ecategory: "",
      ecategoryid: 0,
      eimage: "",
      doc: "",
      edate: "",
      fbshare: "",
      tw_share: "",
      in_share: "",
      pin_share: "",
      wapp_share: "",
      isLoading: false,
      fullPage: true,
    };
  },
  async created() {
    document.title = this.$route.meta.title;
    this.isLoading = true;
    // get education details
    const res_details = await this.callApi("post", window.api_path + "education/detail", {
      id: this.$route.params.id,
    });
    if (res_details.status == 200) {
      if (res_details.data.code == 1) {
        this.id = res_details.data.data.id;
        this.title = res_details.data.data.title;
        document.title = res_details.data.data.title + " | " + this.$route.meta.title;
        this.desc = res_details.data.data.desc;
        this.ecategory = res_details.data.data.category;
        this.ecategoryid = res_details.data.data.categoryid;
        this.eimage = res_details.data.data.image;
        this.doc = res_details.data.data.doc;
        this.edate = res_details.data.data.date;
        this.edufound = 1;
        this.isLoading = false;
        this.showcomment = 1;

        let fbshare_url =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          window.location.href +
          "&title=" +
          res_details.data.data.title;
        this.fbshare = encodeURI(fbshare_url);

        let tw_share_url =
          "http://twitter.com/share?text=" +
          res_details.data.data.title +
          "&url=" +
          window.location.href;
        this.tw_share = encodeURI(tw_share_url);

        let in_share_url =
          "https://www.linkedin.com/shareArticle?mini=true&url=" +
          window.location.href +
          "&title=" +
          res_details.data.data.title;
        this.in_share = encodeURI(in_share_url);

        let pin_share_media = "";
        if (res_details.data.data.image != null) {
          pin_share_media = this.publicPath + res_details.data.data.image;
        }
        let pin_share_url =
          "https://pinterest.com/pin/create/button/?url=" +
          window.location.href +
          "&description=" +
          res_details.data.data.title +
          "&media=" +
          pin_share_media;

        this.pin_share = encodeURI(pin_share_url);

        let wapp_share_url =
          "https://wa.me/?text=" +
          res_details.data.data.title +
          " - " +
          window.location.href;
        this.wapp_share = encodeURI(wapp_share_url);
      } else {
        this.edufound = 2;
      }
    } else {
      this.edufound = 2;
    }

    if (this.edufound == 0 || this.edufound == 2) {
      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    }
  },
  mounted() {},
};
</script>
