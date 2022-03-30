<template>
  <div>
    <Header />

    <main class="main">
      <!-- Community Questions List -->
      <section class="section-cposts">
        <header class="cposts-h">
          <div class="container">
            <h1>Questions</h1>
            <router-link
              :to="{
                name: 'questionadd'
              }"
              class="btn btn-primary"
              >Ask a Question</router-link
            >
          </div>
        </header>

        <!-- Search -->
        <section class="section-search section-search-cposts">
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
                <a href="" class="btn btn-outline-light"
                  >Twitch Channel Setup</a
                >
                <a href="" class="btn btn-outline-light">Tech Support</a>
              </div>
            </div>
          </div>
        </section>
        <!-- End of Search -->

        <div class="container">
          <b-alert v-if="comfound == 2" show variant="info"
            >No Details found</b-alert
          >

          <div v-if="comfound == 1" class="cpost-list">
            <!-- Community question -->
            <div v-for="item in clist" :key="item.id" class="cpost">
              <div class="cpost-body">
                <div class="cpost-title">
                  <router-link
                    :to="{
                      name: 'communitydetail',
                      params: { id: item.slug }
                    }"
                    >{{ item.title }}
                  </router-link>
                </div>
                <p class="cpost-text" v-html="item.desc"></p>
                <ul class="tags" v-if="item.tags.length > 0">
                  <li v-for="itemtag in item.tags" :key="itemtag">
                    <a href="" class="tag tag-green">{{ itemtag }}</a>
                  </li>
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
                    <span class="num">{{ item.answers }}</span>
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
            <!-- End of Community question -->
          </div>

          <paginate
            v-if="compagecount > 1"
            :page-count="compagecount"
            :click-handler="listCommunity"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate>
        </div>
      </section>
      <!-- End of Community Questions List -->
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
import IconLike from "./common/icons/IconLike.vue";
import IconAnswers from "./common/icons/IconAnswers.vue";
import IconViews from "./common/icons/IconViews.vue";

export default {
  name: "Community",
  components: {
    Header,
    Footer,
    Loading,
    Paginate,
    IconBase,
    IconSearch,
    IconLike,
    IconAnswers,
    IconViews
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      clist: [],
      comfound: 0,
      compagecount: 1
    };
  },
  created() {
    document.title = this.$route.meta.title;
    this.listCommunity(1);
  },
  methods: {
    async listCommunity(pageNum) {
      this.isLoading = true;

      const res = await this.callApi(
        "post",
        window.api_path + "community/list",
        {
          currpage: pageNum
        }
      );

      if (res.status == 200) {
        this.isLoading = false;

        if (res.data.code == 1) {
          this.clist = res.data.data;
          this.comfound = 1;
          this.compagecount = res.data.total_page;
          window.scroll(0, 0);
        } else {
          this.comfound = 2;
        }
      } else {
        this.comfound = 2;
        this.isLoading = false;
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    }
  }
};
</script>
