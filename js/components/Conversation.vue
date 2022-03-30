<template>
  <div>
    <Header />

    <main class="main">
      <!-- Conversation Page -->
      <section class="section-conversation">
        <div class="container">
          <div class="conversation-row">
            <div
              class="conversation-col-l"
              :class="activeChat == 0 ? '' : 'm-collapsed'"
            >
              <!-- Conversation List -->
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
                <div class="conversation-list-h back" v-if="activeChat != 0">
                  <icon-base
                    width="13.26"
                    height="11.75"
                    view-box="0 0 13.26 11.75"
                    icon-name="triangle"
                  >
                    <icon-triangle />
                  </icon-base>
                  <h2 @click="activeChat = 0">Back</h2>
                </div>
                <div class="conversation-list-container">
                  <vue-scroll :ops="ops">
                    <div class="conversation-list">
                      <div
                        class="citem"
                        :class="activeChat == 1 ? 'active' : ''"
                        @click="activeChat = 1"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 2 ? 'active' : ''"
                        @click="activeChat = 2"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 3 ? 'active' : ''"
                        @click="activeChat = 3"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 4 ? 'active' : ''"
                        @click="activeChat = 4"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 4 ? 'active' : ''"
                        @click="activeChat = 4"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 4 ? 'active' : ''"
                        @click="activeChat = 4"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 4 ? 'active' : ''"
                        @click="activeChat = 4"
                      >
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
                      <div
                        class="citem"
                        :class="activeChat == 4 ? 'active' : ''"
                        @click="activeChat = 4"
                      >
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
              <!-- End of Conversation List -->
            </div>
            <div
              class="conversation-col-r"
              :class="activeChat == 0 ? 'm-collapsed' : ''"
            >
              <!-- Chat -->
              <section class="section-conversation-chat">
                <div class="conversation-chat-empty" v-if="activeChat == 0">
                  <div class="empty-container">
                    <icon-base
                      width="120"
                      height="120"
                      view-box="0 0 120 120"
                      icon-name="chat"
                    >
                      <icon-chat />
                    </icon-base>
                    <div class="empty-message">Select a Conversation</div>
                    <div class="empty-info">
                      Try Selecting Conversation or searching for someone
                      specific
                    </div>
                  </div>
                </div>
                <div class="conversation-chat-content" v-if="activeChat != 0">
                  Chat
                </div>
              </section>
              <!-- End of Chat -->
            </div>
          </div>
        </div>
      </section>
      <!-- End of Conversation Page -->
    </main>

    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconComment from "./common/icons/IconComment.vue";
import IconClock from "./common/icons/IconClock.vue";
import IconStar from "./common/icons/IconStar.vue";
import IconTriangle from "./common/icons/IconTriangle.vue";
import IconChat from "./common/icons/IconChat.vue";
import vuescroll from "vuescroll";

Vue.use(vuescroll);

export default {
  name: "Conversation",
  components: {
    Header,
    Footer,
    IconBase,
    IconComment,
    IconClock,
    IconStar,
    IconTriangle,
    IconChat
  },
  data() {
    return {
      publicPath: local_image_path,
      activeChat: 0,
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
