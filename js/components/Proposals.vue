<template>
  <div>
    <Header />

    <main class="main">
      <!-- Proposals -->
      <section class="section-proposals">
        <div class="container">
          <div class="proposals-container wblock">
            <div class="proposals-offer">
              <div class="proposals-offer-title">
                Graphic Designer to create visuals for cutomer communication
              </div>

              <div class="proposals-offer-text">
                <p>
                  Job details: <br />
                  [Tell us a bit more about the project]
                </p>

                <p>
                  We're looking for a talented graphic designer to create
                  visuals that reflect our brand and support our customer
                  communication efforts.
                </p>

                <p>
                  - Expected to follow brand style guide <br />
                  - Include additional requirements [e.g. file format,
                  dimensions, communication channel (social media, email, ads),
                  etc.] <br />
                  - Experience with software [e.g. Adobe Illustrator, Adobe
                  InDesign, Adobe Photoshop, etc.] <br />
                  - Relevant experience [e.g. level of expertise, knowledge of
                  specific industry, etc.]
                </p>

                <p>
                  Share a brief summary of relevant experience and sample(s) of
                  work in your proposal.
                </p>
              </div>
            </div>

            <div class="proposals-b">
              <h2>Proposals</h2>
              <div class="proposals-list">
                <div class="proposal">
                  <header class="proposal-header">
                    <div class="proposal-header-i">
                      <div class="proposal-h-author">
                        <div class="proposal-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              class="rounded-circle"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="proposal-author-r">
                          <div class="proposal-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="rating rating-md">
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
                                width="120"
                                height="19"
                                view-box="0 0 68.01 10.57"
                                icon-name="stars"
                              >
                                <icon-stars />
                              </icon-base>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="proposal-hr">
                        <button class="btn btn-secondary font-weight-medium">
                          Proposed Budget: $50
                        </button>
                      </div>
                    </div>
                    <div
                      class="proposal-toggler"
                      :class="proposal1Expanded ? 'active' : ''"
                      @click="proposal1Expanded = !proposal1Expanded"
                    >
                      <icon-base
                        width="26"
                        height="26"
                        view-box="0 0 26 26"
                        icon-name="angle-down-round"
                      >
                        <icon-angle-down-round />
                      </icon-base>
                    </div>
                  </header>
                  <div class="proposal-brief" v-if="!proposal1Expanded">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      ...
                    </p>
                  </div>
                  <div class="proposal-body" v-if="proposal1Expanded">
                    <div class="proposal-body-title">Cover Letter</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div class="btns justify-content-end">
                      <button class="btn btn-primary btn-wide">Hire</button>
                      <button class="btn btn-outline-primary btn-wide">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div class="proposal">
                  <header class="proposal-header">
                    <div class="proposal-header-i">
                      <div class="proposal-h-author">
                        <div class="proposal-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              class="rounded-circle"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="proposal-author-r">
                          <div class="proposal-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="rating rating-md">
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
                                width="120"
                                height="19"
                                view-box="0 0 68.01 10.57"
                                icon-name="stars"
                              >
                                <icon-stars />
                              </icon-base>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="proposal-hr">
                        <button class="btn btn-secondary font-weight-medium">
                          Proposed Budget: $50
                        </button>
                      </div>
                    </div>
                    <div
                      class="proposal-toggler"
                      :class="proposal2Expanded ? 'active' : ''"
                      @click="proposal2Expanded = !proposal2Expanded"
                    >
                      <icon-base
                        width="26"
                        height="26"
                        view-box="0 0 26 26"
                        icon-name="angle-down-round"
                      >
                        <icon-angle-down-round />
                      </icon-base>
                    </div>
                  </header>
                  <div class="proposal-brief" v-if="!proposal2Expanded">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      ...
                    </p>
                  </div>
                  <div class="proposal-body" v-if="proposal2Expanded">
                    <div class="proposal-body-title">Cover Letter</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div class="btns justify-content-end">
                      <button class="btn btn-primary btn-wide">Hire</button>
                      <button class="btn btn-outline-primary btn-wide">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div class="proposal">
                  <header class="proposal-header">
                    <div class="proposal-header-i">
                      <div class="proposal-h-author">
                        <div class="proposal-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              class="rounded-circle"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="proposal-author-r">
                          <div class="proposal-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="rating rating-md">
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
                                width="120"
                                height="19"
                                view-box="0 0 68.01 10.57"
                                icon-name="stars"
                              >
                                <icon-stars />
                              </icon-base>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="proposal-hr">
                        <button class="btn btn-secondary font-weight-medium">
                          Proposed Budget: $50
                        </button>
                      </div>
                    </div>
                    <div
                      class="proposal-toggler"
                      :class="proposal3Expanded ? 'active' : ''"
                      @click="proposal3Expanded = !proposal3Expanded"
                    >
                      <icon-base
                        width="26"
                        height="26"
                        view-box="0 0 26 26"
                        icon-name="angle-down-round"
                      >
                        <icon-angle-down-round />
                      </icon-base>
                    </div>
                  </header>
                  <div class="proposal-brief" v-if="!proposal3Expanded">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      ...
                    </p>
                  </div>
                  <div class="proposal-body" v-if="proposal3Expanded">
                    <div class="proposal-body-title">Cover Letter</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div class="btns justify-content-end">
                      <button class="btn btn-primary btn-wide">Hire</button>
                      <button class="btn btn-outline-primary btn-wide">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconStars from "./common/icons/IconStars.vue";
import IconAngleDownRound from "./common/icons/IconAngleDownRound.vue";

export default {
  name: "Proposals",
  components: {
    Header,
    Footer,
    IconBase,
    IconStars,
    IconAngleDownRound
  },
  data() {
    return {
      proposal1Expanded: true,
      proposal2Expanded: false,
      proposal3Expanded: false,
      publicPath: local_image_path
    };
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
