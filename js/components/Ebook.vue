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
            <h2>E-Book</h2>
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

    <!-- Recent Blog Posts -->
    <div
      class="section padding-top-0 padding-bottom-60 full-width-carousel-fix margin-top-80"
    >
      <div class="container">
        <div class="row">
          <div v-if="edufound == 2" class="col-xl-12 col-lg-12">
            <div class="notification notice closeable">No Details found</div>
          </div>

          <div v-for="item in elist" :key="item.id" class="col-xl-4 col-lg-4">
            <router-link
              class="blog-compact-item-container"
              :to="{
                name: 'ebookdetail',
                params: { id: item.slug },
              }"
            >
              <div class="blog-compact-item">
                <img
                  v-if="item.image != null"
                  :src="`${publicPath}${item.image}`"
                  alt=""
                />
                <img
                  v-if="item.image == null"
                  :src="`${local_image_path}blog_default.png`"
                  alt=""
                />

                <span class="blog-item-tag">{{ item.category }}</span>
                <div class="blog-compact-item-content">
                  <ul class="blog-post-tags">
                    <li>{{ item.date }}</li>
                  </ul>
                  <h3>
                    {{ item.title }}
                  </h3>
                  <p>
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>

          <div v-if="edufound == 1" class="col-xl-12 col-lg-12">
            <paginate
              v-if="ebookpagecount > 1"
              :page-count="ebookpagecount"
              :click-handler="listEbook"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'tzpagination'"
            >
            </paginate>
          </div>
        </div>
      </div>
    </div>
    <!-- Recent Blog Posts / End -->

    <Footer />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
export default {
  name: "Ebook",
  components: {
    Header,
    Footer,
    Loading,
    Paginate,
  },
  data() {
    return {
      publicPath: window.image_path,
      local_image_path: window.local_image_path,
      elist: [],
      edufound: 0,
      isLoading: false,
      fullPage: true,
      ebookpagecount: 1,
    };
  },
  async created() {
    document.title = this.$route.meta.title;
    this.listEbook(1);
  },
  methods: {
    async listEbook(pageNum) {
      this.isLoading = true;

      const res = await this.callApi("post", window.api_path + "education/list", {
        type: "1", // 0 = Blog
        currpage: pageNum,
      });

      if (res.status == 200) {
        if (res.data.code == 1) {
          this.elist = res.data.data;
          this.edufound = 1;
          this.isLoading = false;
          this.ebookpagecount = res.data.total_page;

          window.scroll(0, 0);
        } else {
          this.edufound = 2;
          this.isLoading = false;
        }
      } else {
        this.edufound = 2;
        this.isLoading = false;
      }

      if (this.edufound == 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
  },
};
</script>
