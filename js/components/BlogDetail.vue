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
                <li>Blog</li>
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
        <div class="col-xl-8 col-lg-8">
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
                <a href="#" class="blog-post-info">{{ commentcount }} Comments</a>
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

          <!-- Related Posts -->
          <div v-if="related_elist.length > 0" class="row">
            <!-- Headline -->
            <div class="col-xl-12">
              <h3 class="margin-top-40 margin-bottom-35">Related Posts</h3>
            </div>

            <!-- Blog Post Item -->
            <div v-for="item in related_elist" :key="item.id" class="col-xl-6">
              <router-link
                class="blog-compact-item-container"
                :to="{
                  name: 'blogdetail',
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
            <!-- Blog post Item / End -->
          </div>
          <!-- Related Posts / End -->

          <!-- Comments -->
          <div v-if="commentlist.length > 0" class="row">
            <div class="col-xl-12">
              <section class="comments">
                <h3 class="margin-top-45 margin-bottom-0">
                  Comments
                  <span class="comments-amount">({{ commentcount }})</span>
                </h3>

                <ul>
                  <li v-for="clist in commentlist" :key="clist.id">
                    <div class="avatar">
                      <img
                        :src="`${local_image_path}user-avatar-placeholder.png`"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        {{ clist.name }}<span class="date">{{ clist.date }}</span>
                        <a
                          href="javascript:;"
                          @click="showAddReplyModal(clist.id)"
                          class="reply popup-with-zoom-anim"
                          ><i class="fa fa-reply"></i> Reply</a
                        >
                      </div>
                      <p>
                        {{ clist.comment }}
                      </p>
                    </div>

                    <ul v-if="clist.reply_comments.length > 0">
                      <li v-for="reclist in clist.reply_comments" :key="reclist.re_id">
                        <div class="avatar">
                          <img
                            :src="`${local_image_path}user-avatar-placeholder.png`"
                            alt=""
                          />
                        </div>
                        <div class="comment-content">
                          <div class="arrow-comment"></div>
                          <div class="comment-by">
                            {{ reclist.re_name
                            }}<span class="date">{{ reclist.re_date }}</span>
                          </div>
                          <p>
                            {{ reclist.re_comment }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>

            <!-- Add Reply Modal / Start -->
            <b-modal id="add-reply-comment-modal" hide-footer>
              <template #modal-title> </template>

              <div class="welcome-text">
                <div class="d-block text-center">
                  <h3>Add Reply</h3>
                </div>

                <div id="add-comment">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="input-with-icon-left no-border">
                        <i class="icon-material-outline-account-circle"></i>
                        <input
                          type="text"
                          class="input-text"
                          id="namecomment"
                          placeholder="Name"
                          v-model="replycommentform.rename"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="input-with-icon-left no-border">
                        <i class="icon-material-baseline-mail-outline"></i>
                        <input
                          type="text"
                          class="input-text"
                          v-model="replycommentform.reemail"
                          id="emailaddress"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    v-model="replycommentform.retext"
                    cols="30"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>

                <loading
                  :active.sync="isLoadingReplyComment"
                  :is-full-page="false"
                  background-color="#FFF"
                  color="#202c54"
                ></loading>
                <!-- Button -->
                <button
                  class="w-100 button button-sliding-icon ripple-effect margin-bottom-40"
                  type="submit"
                  form="add-comment"
                  @click="addreplycomment"
                >
                  Add <i class="icon-material-outline-arrow-right-alt"></i>
                </button>
              </div>
            </b-modal>
            <!-- Add Reply Modal / End -->
          </div>
          <!-- Comments / End -->

          <!-- Leava a Comment -->
          <div v-if="showcomment == 1" class="row">
            <div class="col-xl-12">
              <h3 class="margin-top-35 margin-bottom-30">Add Comment</h3>

              <!-- Form -->
              <!-- <form method="post" id="add-comment"> -->
              <div class="row">
                <div class="col-xl-6">
                  <div class="input-with-icon-left no-border">
                    <i class="icon-material-outline-account-circle"></i>
                    <input
                      type="text"
                      class="input-text"
                      v-model="addcommentform.comname"
                      id="namecomment"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-with-icon-left no-border">
                    <i class="icon-material-baseline-mail-outline"></i>
                    <input
                      type="text"
                      class="input-text"
                      v-model="addcommentform.comemail"
                      id="emailaddress"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <textarea
                v-model="addcommentform.comtext"
                cols="30"
                rows="5"
                placeholder="Comment"
              ></textarea>
              <!-- </form> -->

              <!-- Button -->
              <loading
                :active.sync="isLoadingComment"
                :is-full-page="false"
                background-color="#383838"
                color="#202c54"
              ></loading>
              <button
                class="button button-sliding-icon ripple-effect margin-bottom-40"
                type="submit"
                form="add-comment"
                @click="addcomment"
              >
                Add Comment
                <i class="icon-material-outline-arrow-right-alt"></i>
              </button>
            </div>
          </div>
          <!-- Leava a Comment / End -->
        </div>
        <!-- Inner Content / End -->

        <div class="col-xl-4 col-lg-4 content-left-offset">
          <div class="sidebar-container">
            <!-- Location -->
            <div class="sidebar-widget margin-bottom-40">
              <div class="input-with-icon">
                <input id="autocomplete-input" type="text" placeholder="Search" />
                <i class="icon-material-outline-search"></i>
              </div>
            </div>

            <!-- Widget -->
            <div v-if="latest_elist.length > 0" class="sidebar-widget">
              <h3>Latest Blog</h3>
              <ul class="widget-tabs">
                <li v-for="item in latest_elist" :key="item.id">
                  <router-link
                    class="widget-content active"
                    :to="{
                      name: 'blogdetail',
                      params: { id: item.slug },
                    }"
                  >
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
                    <div class="widget-text">
                      <h5>
                        {{ item.title }}
                      </h5>
                      <span>{{ item.date }}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- Widget / End-->
          </div>
        </div>
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
  name: "BlogDetail",
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
      showcomment: 0,
      related_elist: [],
      latest_elist: [],
      isLoading: false,
      fullPage: true,
      isLoadingComment: false,
      addcommentform: {
        comname: "",
        comemail: "",
        comtext: "",
      },
      replyid: 0,
      isLoadingReplyComment: false,
      replycommentform: {
        rename: "",
        reemail: "",
        retext: "",
      },
      commentcount: 0,
      commentlist: [],
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

    // get related education
    const related_res = await this.callApi(
      "post",
      window.api_path + "education/related",
      { catid: this.ecategoryid, id: this.id }
    );
    if (related_res.status == 200) {
      if (related_res.data.code == 1) {
        this.related_elist = related_res.data.data;
      }
    }

    // get latest education
    const latest_res = await this.callApi("post", window.api_path + "education/latest", {
      id: this.id,
    });
    if (latest_res.status == 200) {
      if (latest_res.data.code == 1) {
        this.latest_elist = latest_res.data.data;
      }
    }

    // get list of comments
    this.listcomment();
  },
  methods: {
    async listcomment() {
      const listc_details = await this.callApi(
        "post",
        window.api_path + "education/listcomment",
        {
          id: this.id,
        }
      );

      if (listc_details.status == 200) {
        if (listc_details.data.code == 1) {
          this.commentlist = listc_details.data.data;
          this.commentcount = listc_details.data.count;
        }
      }
    },

    async addcomment() {
      if (this.addcommentform.comname == "") {
        this.$toaster.error("Please enter Name");
      } else if (this.addcommentform.comemail == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.addcommentform.comtext == "") {
        this.$toaster.error("Please enter Comment");
      } else {
        // add comment

        this.isLoadingComment = true;
        const ac_details = await this.callApi(
          "post",
          window.api_path + "education/addcomment",
          {
            id: this.id,
            name: this.addcommentform.comname,
            email: this.addcommentform.comemail,
            comment: this.addcommentform.comtext,
          }
        );

        if (ac_details.status == 200) {
          if (ac_details.data.code == 1) {
            this.listcomment();
            this.$toaster.success("Comment added successfully");
            this.addcommentform.comname = "";
            this.addcommentform.comemail = "";
            this.addcommentform.comtext = "";
            this.isLoadingComment = false;
          } else {
            this.$toaster.error(ac_details.data.data);
            this.isLoadingComment = false;
          }
        } else {
          this.$toaster.error("Comment not added, please try again");
          this.isLoadingComment = false;
        }
      }
    },

    showAddReplyModal(id) {
      this.$bvModal.show("add-reply-comment-modal");
      this.replyid = id;
      this.replycommentform.rename = "";
      this.replycommentform.reemail = "";
      this.replycommentform.retext = "";
    },

    async addreplycomment() {
      if (this.replycommentform.rename == "") {
        this.$toaster.error("Please enter Name");
      } else if (this.replycommentform.reemail == "") {
        this.$toaster.error("Please enter Email");
      } else if (this.replycommentform.retext == "") {
        this.$toaster.error("Please enter Comment");
      } else {
        this.isLoadingReplyComment = true;

        const ac_details = await this.callApi(
          "post",
          window.api_path + "education/addcomment",
          {
            id: this.id,
            name: this.replycommentform.rename,
            email: this.replycommentform.reemail,
            comment: this.replycommentform.retext,
            type: "reply",
            parentid: this.replyid,
          }
        );

        if (ac_details.status == 200) {
          if (ac_details.data.code == 1) {
            this.listcomment();
            this.$toaster.success("Comment added successfully");
            this.replycommentform.rename = "";
            this.replycommentform.reemail = "";
            this.replycommentform.retext = "";
            this.isLoadingReplyComment = false;
            this.$bvModal.hide("add-reply-comment-modal");
          } else {
            this.$toaster.error(ac_details.data.data);
            this.isLoadingReplyComment = false;
          }
        } else {
          this.$toaster.error("Comment not added, please try again");
          this.isLoadingReplyComment = false;
        }
      }
    },
  },
  mounted() {},
};
</script>
