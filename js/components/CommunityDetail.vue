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

    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li>
                  <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'community' }">Community</router-link>
                </li>
                <li>Details</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Content -->
    <div class="container">
      <!-- Leava a Comment -->
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-xl-12 col-lg-12 content-right-offset community_head">
              <div class="tasks-list-container margin-top-35">
                <div class="margin-top-0 margin-bottom-40">
                  <h2>{{ ctitle }}</h2>

                  <div
                    class="margin-top-30 margin-bottom-15 fr-view com_desc"
                    v-html="cdesc"
                  ></div>

                  <ul v-if="ctags.length > 0" class="comdetailtags">
                    <li v-for="ct in ctags" :key="ct">
                      <a href="javascript:;">{{ ct }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-xl-12">
              <section class="comments" v-if="answerlist.length > 0">
                <h3 class="margin-top-45 margin-bottom-0">
                  Answers
                  <span class="comments-amount">({{ answercount }})</span>
                </h3>
                <ul>
                  <li v-for="clist in answerlist" :key="clist.id">
                    <div class="avatar">
                      <img
                        :src="`${publicPath}${clist.author_pic}`"
                        alt=""
                        v-if="clist.author_pic != null"
                      />
                      <img
                        :src="`${local_image_path}user-avatar-placeholder.png`"
                        alt=""
                        v-if="clist.author_pic == null"
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        {{ clist.name }}<span class="date">{{ clist.date }}</span>
                        <a
                          href="javascript:;"
                          @click="showAddReplyModal(clist.id)"
                          :class="
                            clist.author == 'me'
                              ? 'reply popup-with-zoom-anim rightspace'
                              : 'reply popup-with-zoom-anim'
                          "
                          ><i class="fa fa-reply"></i> Reply</a
                        >
                        <b-dropdown
                          v-if="clist.author == 'me'"
                          class="comdots"
                          id="dropdown-right"
                          right
                        >
                          <b-dropdown-item
                            @click="showEditReplyModal(clist.id_parent, clist.id)"
                            >Edit</b-dropdown-item
                          >
                          <b-dropdown-item @click="ShowDeleteBox(clist.id)"
                            >Delete</b-dropdown-item
                          >
                        </b-dropdown>
                      </div>
                      <p>
                        {{ clist.comment }}
                      </p>
                    </div>

                    <ul v-if="clist.reply_answers.length > 0">
                      <li v-for="reclist in clist.reply_answers" :key="reclist.re_id">
                        <div class="avatar">
                          <img
                            :src="`${publicPath}${reclist.re_author_pic}`"
                            alt=""
                            v-if="reclist.re_author_pic != null"
                          />
                          <img
                            :src="`${local_image_path}user-avatar-placeholder.png`"
                            alt=""
                            v-if="reclist.re_author_pic == null"
                          />
                        </div>
                        <div class="comment-content">
                          <div class="arrow-comment"></div>
                          <div class="comment-by">
                            {{ reclist.re_name
                            }}<span class="date">{{ reclist.re_date }}</span>
                          </div>
                          <b-dropdown
                            v-if="reclist.re_author == 'me'"
                            class="comdots"
                            id="dropdown-right"
                            right
                          >
                            <b-dropdown-item
                              @click="
                                showEditReplyModal(reclist.id_parent, reclist.re_id)
                              "
                              >Edit</b-dropdown-item
                            >
                            <b-dropdown-item @click="ShowDeleteBox(reclist.re_id)"
                              >Delete</b-dropdown-item
                            >
                          </b-dropdown>
                          <p>
                            {{ reclist.re_answer }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

                <!-- Add Reply Modal / Start -->
                <b-modal id="add-reply-comment-modal" hide-footer>
                  <template #modal-title> </template>

                  <div class="welcome-text">
                    <div class="d-block text-center">
                      <h3>Add Reply</h3>
                    </div>

                    <div id="add-comment">
                      <textarea
                        v-model="addreplyform.replytext"
                        cols="30"
                        rows="3"
                        placeholder="Type your reply"
                      ></textarea>
                    </div>

                    <!-- Button -->
                    <button
                      class="w-100 button button-sliding-icon ripple-effect margin-bottom-40"
                      type="submit"
                      form="add-comment"
                      @click="addreplyanswer"
                    >
                      Add
                      <i class="icon-material-outline-arrow-right-alt"></i>
                    </button>
                  </div>
                </b-modal>
                <!-- Add Reply Modal / End -->

                <!-- Edit Comment/Reply Modal - Start -->
                <b-modal id="edit-reply-comment-modal" hide-footer>
                  <template #modal-title> </template>

                  <div class="welcome-text">
                    <div class="d-block text-center">
                      <h3>Edit Answer</h3>
                    </div>

                    <div id="add-comment">
                      <textarea
                        v-model="editreplyform.replytext"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>

                    <!-- Button -->
                    <button
                      class="w-100 button button-sliding-icon ripple-effect margin-bottom-40"
                      type="submit"
                      form="edit-comment"
                      @click="editreplyanswer"
                    >
                      Edit
                      <i class="icon-material-outline-arrow-right-alt"></i>
                    </button>
                  </div>
                </b-modal>
                <!-- Edit Comment/Reply - End -->
              </section>
            </div>
          </div>

          <h3 class="margin-top-45 margin-bottom-10">Answer</h3>

          <b-alert v-if="!isloggedin" show variant="info"
            >Please Login to add Answer</b-alert
          >
          <textarea
            name="comment-content"
            cols="30"
            rows="3"
            v-model="addanswerform.answertext"
            placeholder="Type your answer"
          ></textarea>

          <div v-if="isloggedin">
            <button
              class="button button-sliding-icon ripple-effect margin-bottom-40"
              type="submit"
              form="add-comment"
              @click="addAnswer"
            >
              Submit
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Leava a Comment / End -->
    </div>

    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Loading from "vue-loading-overlay";
import Vue from "vue";
import Toaster from "v-toaster";
import "vue-loading-overlay/dist/vue-loading.css";
import "v-toaster/dist/v-toaster.css";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

require("froala-editor/css/froala_editor.pkgd.min.css");
require("froala-editor/css/froala_style.min.css");

Vue.use(Toaster, { timeout: 4000 });
export default {
  name: "CommunityDetail",
  components: {
    Header,
    Footer,
    Loading,
  },
  created() {
    document.title = this.$route.meta.title;
    this.communityDetail();
  },
  data() {
    return {
      publicPath: window.image_path,
      local_image_path: window.local_image_path,
      isloggedin: window.isAuthenticated,
      isLoading: false,
      fullPage: true,
      comfound: 0,
      cid: 0,
      ctitle: "",
      cdesc: "",
      ctags: [],
      addanswerform: {
        answertext: "",
      },
      addreplyform: {
        replytext: "",
      },
      editreplyform: {
        replytext: "",
        id: 0,
      },
      answerlist: [],
      answercount: 0,
      id: 0,
    };
  },
  methods: {
    async communityDetail() {
      this.isLoading = true;
      // get community details
      const res_details = await this.callApi(
        "post",
        window.api_path + "community/detail",
        {
          id: this.$route.params.id,
        }
      );

      if (res_details.status == 200) {
        this.isLoading = false;
        if (res_details.data.code == 1) {
          this.comfound = 1;
          this.cid = res_details.data.data.id;
          this.ctitle = res_details.data.data.title;
          this.cdesc = res_details.data.data.desc;
          this.ctags = res_details.data.data.tags;
          document.title = this.ctitle + " | " + this.$route.meta.title;
          this.listCommunityAnswer(this.cid);
        } else {
          this.comfound = 2;
          this.$toaster.error("No Details found");
          this.$router.push({ name: "community" });
        }
      } else {
        this.isLoading = false;
        this.comfound = 2;
        this.$toaster.error("No Details found");
      }

      if (this.comfound == 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
    async addAnswer() {
      if (this.addanswerform.answertext == "") {
        this.$toaster.error("Please enter Answer");
      } else {
        this.isLoading = true;

        const add_details = await this.callApi(
          "post",
          window.api_path + "community/answer/add",
          {
            id: this.cid,
            answer: this.addanswerform.answertext,
          }
        );

        if (add_details.status == 200) {
          this.isLoading = false;
          if (add_details.data.code == 1) {
            this.$toaster.success(add_details.data.data);
            this.addanswerform.answertext = "";
            this.listCommunityAnswer(this.cid);
          } else {
            this.$toaster.error(add_details.data.data);
          }
        } else if (add_details.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login to add Answer");
        } else {
          this.$toaster.error("Answer not added, please try again");
          this.isLoading = false;
        }

        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
    async listCommunityAnswer(cid) {
      this.isLoading = true;

      const ans_details = await this.callApi(
        "post",
        window.api_path + "community/detail/answer/list",
        {
          id: cid,
        }
      );

      if (ans_details.status == 200) {
        this.isLoading = false;

        if (ans_details.data.code == 1) {
          this.answerlist = ans_details.data.data;
          this.answercount = ans_details.data.count;
        }
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
    showAddReplyModal(id) {
      this.$bvModal.show("add-reply-comment-modal");
      this.id = id;
      this.addreplyform.replytext = "";
      // this.cid
    },
    async addreplyanswer() {
      if (this.addreplyform.replytext == "") {
        this.$toaster.error("Please enter Reply");
      } else {
        this.isLoading = true;

        const add_details = await this.callApi(
          "post",
          window.api_path + "community/answer/add",
          {
            id: this.cid,
            parentid: this.id,
            answer: this.addreplyform.replytext,
          }
        );

        if (add_details.status == 200) {
          this.isLoading = false;
          if (add_details.data.code == 1) {
            this.$toaster.success(add_details.data.data);
            this.addreplyform.replytext = "";
            this.listCommunityAnswer(this.cid);
            this.$bvModal.hide("add-reply-comment-modal");
          } else {
            this.$toaster.error(add_details.data.data);
          }
        } else if (add_details.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login to add Reply");
        } else {
          this.$toaster.error("Reply not added, please try again");
          this.isLoading = false;
        }

        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
    showEditReplyModal(parentid, id) {
      this.$bvModal.show("edit-reply-comment-modal");
      this.editreplyform.id = id;

      var comment_text_final = "";
      if (parentid == 0) {
        $.map(this.answerlist, function (obj) {
          if (obj.id === id) {
            comment_text_final = obj.comment;
          }
        });
      } else if (parentid > 0) {
        $.map(this.answerlist, function (obj) {
          $.map(obj.reply_answers, function (obj_re) {
            if (obj_re.re_id === id) {
              comment_text_final = obj_re.re_answer;
            }
          });
        });
      }

      this.editreplyform.replytext = comment_text_final;
    },
    async editreplyanswer() {
      if (this.editreplyform.replytext == "") {
        this.$toaster.error("Please enter Answer");
      } else {
        this.isLoading = true;

        const edit_details = await this.callApi(
          "post",
          window.api_path + "community/answer/update",
          {
            id: this.editreplyform.id,
            answer: this.editreplyform.replytext,
          }
        );

        if (edit_details.status == 200) {
          this.isLoading = false;
          if (edit_details.data.code == 1) {
            this.$toaster.success(edit_details.data.data);
            this.editreplyform.replytext = "";
            this.listCommunityAnswer(this.cid);
            this.$bvModal.hide("edit-reply-comment-modal");
          } else {
            this.$toaster.error(edit_details.data.data);
          }
        } else if (edit_details.status == 401) {
          this.isLoading = false;
          this.$toaster.error("Please Login again");
        } else {
          this.$toaster.error("Answer not updated, please try again");
          this.isLoading = false;
        }

        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
      }
    },
    ShowDeleteBox(ansid) {
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete this Answer?", {
          okTitle: "Yes",
          cancelTitle: "No",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteAnswer(ansid);
          }
        })
        .catch((err) => {});
    },
    async deleteAnswer(ansid) {
      this.isLoading = true;

      const delete_question = await this.callApi(
        "post",
        window.api_path + "community/answer/delete",
        {
          id: ansid,
        }
      );

      if (delete_question.status == 200) {
        this.isLoading = false;

        if (delete_question.data.code == 1) {
          this.$toaster.success(delete_question.data.data);
          this.listCommunityAnswer(this.cid);
        } else {
          this.$toaster.error(delete_question.data.data);
        }
      } else if (delete_question.status == 401) {
        this.isLoading = false;
        this.$toaster.error("Please Login again");
        this.doLogout();
      } else {
        this.$toaster.error("Answer not deleted, please try again");
        this.isLoading = false;
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
  },
};
</script>
