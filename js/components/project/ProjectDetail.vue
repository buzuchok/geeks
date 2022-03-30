<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <div class="container">
        <!-- Project Details -->
        <section class="section-project">
          <header class="project-h">
            <div class="project-h-info">
              <div class="project-headline">
                <h1>Name of the Project</h1>
                <span class="project-type">Broadcast</span>
              </div>
              <div class="project-cat">Music Category</div>
              <div class="project-short-desc">
                Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit amet, eu
                porttitor eu. Libero sed feugiat luctus ac quam purus
              </div>
            </div>
            <div class="project-h-quote">
              <!-- Send Quote Modal -->
              <button class="btn btn-secondary" @click="showQuoteDialog">
                Send a Quote
              </button>

              <modal
                name="quote-modal-dialog"
                :width="1160"
                height="auto"
                :scrollable="true"
                :adaptive="true"
                transition=""
                class="section-modal section-modal-quote"
              >
                <div class="modal-close" @click="hideQuoteDialog">
                  <icon-base
                    width="21"
                    height="21"
                    viewBox="0 0 7 7"
                    icon-name="cancel"
                    ><icon-cancel
                  /></icon-base>
                </div>
                <h2 class="h1">Send a Quote</h2>
                <div class="form-group">
                  <textarea
                    rows="14"
                    class="form-control"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  ></textarea>
                </div>
                <div
                  class="form-row align-items-center justify-content-end budget-row"
                >
                  <div class="col-auto">
                    <label>Budget:</label>
                  </div>
                  <div class="col-auto">
                    <input type="text" class="form-control form-control" />
                  </div>
                </div>
                <div class="btns">
                  <button class="btn btn-primary ml-auto">Send</button>
                </div>
              </modal>
              <!-- End of Send Quote Modal -->
            </div>
            <div class="project-h-authorinfo">
              <div class="project-author">
                <div class="userpic">
                  <router-link to="/projects/2">
                    <img
                      class="rounded-circle"
                      :src="`${publicPath}userpic-60.jpg`"
                      alt=""
                    />
                  </router-link>
                </div>
                <div class="username">
                  <router-link to="">
                    James Kennedy
                  </router-link>
                </div>
              </div>
              <div class="btns">
                <router-link to="" class="btn btn-outline-blue btn-xs btn-icon">
                  <icon-base
                    width="12"
                    height="11.2"
                    view-box="0 0 12 11.2"
                    icon-name="like2"
                  >
                    <icon-like2 />
                  </icon-base>
                  <span>Upvote</span>
                </router-link>
              </div>
            </div>
          </header>

          <div class="project-img">
            <img
              :src="`${publicPath}project-1-wide.jpg`"
              class="rounded-lg"
              alt=""
            />
            <span class="btn btn-light-secondary btn-xl btn-featured rounded-xl"
              >Featured</span
            >
          </div>

          <div class="project-equip">
            <div class="label">Equipments</div>

            <table class="table table-responsive-md table-align-middle">
              <thead>
                <tr>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Description</th>
                  <th scope="col" class="text-center">Manufacturer</th>
                  <th scope="col" class="text-center">Price</th>
                  <th scope="col" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td>Camera 360</td>
                  <td>
                    Lorem Ipsum dolor sit amet agna finibus risus
                  </td>
                  <td class="text-center">
                    Lorem Ipsum
                  </td>
                  <td class="text-center">400K</td>
                  <td class="text-center">
                    <div class="btn btn-xs btn-link">
                      <icon-base
                        width="20"
                        height="17.58"
                        view-box="0 0 20 17.58"
                        icon-name="shopping-cart"
                      >
                        <icon-shopping-cart />
                      </icon-base>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1</td>
                  <td>Camera 360</td>
                  <td>
                    Lorem Ipsum dolor sit amet agna finibus risus
                  </td>
                  <td class="text-center">
                    Lorem Ipsum
                  </td>
                  <td class="text-center">400K</td>
                  <td class="text-center">
                    <div class="btn btn-xs btn-link">
                      <icon-base
                        width="20"
                        height="17.58"
                        view-box="0 0 20 17.58"
                        icon-name="shopping-cart"
                      >
                        <icon-shopping-cart />
                      </icon-base>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="project-desc">
            <h2>Introduction</h2>

            <div class="text">
              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will enlighten your spark and soul. The beauty
                of the night is among the stars above the sky to the stars below
                the sky. The streets with warm light and covered with trees and
                a water canal give the essence of fantasy.
              </p>
              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will enlighten your spark and soul. The beauty
                of the night is among the stars above the sky to the stars below
                the sky. The streets with warm light and covered with trees and
                a water canal give the essence of fantasy.
              </p>
              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will enlighten your spark and soul.
              </p>
              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will enlighten your spark and soul. The beauty
                of the night is among the stars above the sky to the stars below
                the sky. The streets with warm light and covered with trees and
                a water canal give the essence of fantasy.
              </p>

              <img
                :src="`${publicPath}project-2-wide.jpg`"
                class="rounded-lg mb-5"
                alt=""
              />

              <p>
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place, you
                feel darkness enlightened by the rays of light. The blow of the
                cold chilly wind will enlighten your spark and soul.
              </p>
            </div>
          </div>

          <div class="project-author-b">
            <div class="userpic">
              <router-link to="/projects/2">
                <img
                  class="rounded-circle"
                  :src="`${publicPath}userpic-60.jpg`"
                  alt=""
                />
              </router-link>
            </div>
            <div class="author-info">
              <div class="username">
                <router-link to="">
                  James K
                </router-link>
              </div>
              <div class="author-desc">
                Have you ever seen stars below the sky, on the earth? Yes, the
                spark of light emerging from the land. On a cold night, standing
                on a peak of the mountain, when you look down at the place.
              </div>
            </div>
          </div>
        </section>
        <!-- End of Project Details -->

        <!-- Comments -->
        <section class="project-comments">
          <h2 class="comments-h">Comments</h2>

          <div class="comments-list"></div>

          <div class="comments-form">
            <div class="form-group">
              <label>Leave a comment</label>
              <textarea
                name=""
                rows="5"
                class="form-control"
                placeholder="Post your comment here"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Post</button>
          </div>
        </section>
        <!-- End of Comments -->

        <!-- Other Projects -->
        <section class="section-similar">
          <h2 class="h1">You may also like</h2>

          <div class="row">
            <div class="col-lg-3 col-sm-6 col-xs-12">
              <div class="card card-project">
                <div class="card-img-top">
                  <router-link :to="{}">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                    <span
                      class="is-featured"
                      :style="{
                        backgroundImage: `url(${publicPath}featured-bg.png)`
                      }"
                      >Featured</span
                    >
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-title-vote">
                    <div class="card-title">
                      <router-link :to="{}">
                        Project name here
                      </router-link>
                    </div>
                    <button class="btn btn-link btn-icon btn-vote">
                      <icon-base
                        width="18"
                        height="17.25"
                        view-box="0 0 18 17.25"
                        icon-name="like-4"
                      >
                        <icon-like-4 />
                      </icon-base>
                    </button>
                  </div>
                  <div class="card-category">
                    <div class="label">
                      <router-link to="/">Music Category</router-link>
                    </div>
                  </div>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu porttitor eu. Libero sed feugiat luctus ac quam
                    purus.
                  </p>

                  <div class="card-price-more">
                    <div class="more">
                      <router-link to="/" class="btn btn-link btn-icon">
                        <span>Learn More</span>
                        <icon-base
                          width="18"
                          height="8.72"
                          view-box="0 0 18 8.72"
                          icon-name="arrow-right"
                        >
                          <icon-arrow-right />
                        </icon-base>
                      </router-link>
                    </div>
                    <div class="price">$50</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12">
              <div class="card card-project">
                <div class="card-img-top">
                  <router-link :to="{}">
                    <img :src="`${publicPath}no-image.jpg`" alt="" />
                    <span
                      class="is-featured"
                      :style="{
                        backgroundImage: `url(${publicPath}featured-bg.png)`
                      }"
                      >Featured</span
                    >
                  </router-link>
                </div>
                <div class="card-body">
                  <div class="card-title-vote">
                    <div class="card-title">
                      <router-link :to="{}">
                        Project name here
                      </router-link>
                    </div>
                    <button class="btn btn-link btn-icon btn-vote">
                      <icon-base
                        width="18"
                        height="17.25"
                        view-box="0 0 18 17.25"
                        icon-name="like-4"
                      >
                        <icon-like-4 />
                      </icon-base>
                    </button>
                  </div>
                  <div class="card-category">
                    <div class="label">
                      <router-link to="/">Music Category</router-link>
                    </div>
                  </div>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                    habitant eu porttitor eu. Libero sed feugiat luctus ac quam
                    purus.
                  </p>

                  <div class="card-price-more">
                    <div class="more">
                      <router-link to="/" class="btn btn-link btn-icon">
                        <span>Learn More</span>
                        <icon-base
                          width="18"
                          height="8.72"
                          view-box="0 0 18 8.72"
                          icon-name="arrow-right"
                        >
                          <icon-arrow-right />
                        </icon-base>
                      </router-link>
                    </div>
                    <div class="price">$50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End of Other Projects -->
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import IconBase from "../common/IconBase.vue";
import IconLike2 from "../common/icons/IconLike2.vue";
import IconLink from "../common/icons/IconLink.vue";
import IconShoppingCart from "../common/icons/IconShoppingCart.vue";
import IconArrowRight from "../common/icons/IconArrowRight.vue";
import IconCancel from "../common/icons/IconCancel.vue";
import IconLike4 from "../common/icons/IconLike4.vue";
import IconLike5 from "../common/icons/IconLike5.vue";

export default {
  name: "ProjectDetail",
  components: {
    Header,
    Footer,
    IconBase,
    IconLike2,
    IconLike4,
    IconLike5,
    IconLink,
    IconShoppingCart,
    IconCancel,
    IconArrowRight
  },
  data() {
    return {
      publicPath: local_image_path,
      bgimage: local_image_path + "single-job.jpg"
    };
  },
  created() {
    console.log("this.$route::");
    console.log(this.$route);

    document.title = this.$route.meta.title;
  },
  methods: {
    // Contact modal form
    showQuoteDialog() {
      this.$modal.show("quote-modal-dialog");
    },
    hideQuoteDialog() {
      this.$modal.hide("quote-modal-dialog");
    }
  }
};
</script>
