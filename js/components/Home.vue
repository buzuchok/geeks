<template>
  <div>
    <Header />
    <main class="main">
      <!-- Intro -->
      <section
        class="section-intro"
        :style="{ backgroundImage: `url(${publicPath}home-intro-bg.jpg)` }"
      >
        <div class="container">
          <div class="intro-i">
            <h1 v-html="homepageJoinOurCommunityBlockHeaderText"></h1>

            <div class="btns">
              <a href="" class="btn btn-primary btn-lg">Join Now</a>
              <a href="" class="btn btn-link btn-lg btn-icon">
                <span>Hire Experts</span>
                <icon-base
                  width="18"
                  height="8.72"
                  view-box="0 0 18 8.72"
                  icon-name="arrow-right"
                >
                  <icon-arrow-right />
                </icon-base>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Search -->
      <section class="section-search section-search-home">
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
              <a href="" class="btn btn-outline-light">Twitch Channel Setup</a>
              <a href="" class="btn btn-outline-light">Tech Support</a>
            </div>
          </div>
          <div class="search-params row">
            <div class="form-group col-md-6">
              <div class="select-container select-container-lg">
                <select>
                  <option value="" disabled selected>Category</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Min Budget"
              />
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Max Budget"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- End of Search -->

      <!-- Gigs -->
      <section class="section-gigs section-gigs-home">
        <div class="container">
          <h2 class="h1">Gigs</h2>

          <p class="desc" v-html="homepageGigsListingBlockHeaderText"></p>

          <ul class="nav nav-ctabs">
            <li
              class="nav-link"
              :class="gigsHomeTab == 1 ? 'active' : ''"
              @click="gigsHomeTab = 1"
            >
              Newest
            </li>
            <li
              class="nav-link"
              :class="gigsHomeTab == 2 ? 'active' : ''"
              @click="gigsHomeTab = 2"
            >
              Featured
            </li>
            <li
              class="nav-link"
              :class="gigsHomeTab == 3 ? 'active' : ''"
              @click="gigsHomeTab = 3"
            >
              Popular
            </li>
          </ul>

          <div class="tabs-content">
            <div class="tab-content" v-if="gigsHomeTab == 1">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary outline-secondary-white btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary outline-secondary-white btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary outline-secondary-white btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2">James K</router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" v-if="gigsHomeTab == 2">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2"
                              >Tab 2 User
                            </router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" v-if="gigsHomeTab == 3">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="card card-dark card-gig">
                    <div class="card-img-top">
                      <router-link to="/projects/2">
                        <img :src="`${publicPath}no-image.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-category">
                        <div class="label">Music Category</div>
                        <div class="val"><a href="">Classical Music</a></div>
                      </div>
                      <div class="card-user">
                        <div class="card-userpic">
                          <router-link to="/projects/2">
                            <img
                              :src="`${publicPath}user-avatar-sm.jpg`"
                              alt=""
                            />
                          </router-link>
                        </div>
                        <div class="card-user-r">
                          <div class="card-username">
                            <router-link to="/projects/2"
                              >Tab 3 User
                            </router-link>
                          </div>
                          <div class="card-rating">
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
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="card-price">$50</div>
                      <router-link
                        to="/projects/2"
                        class="btn btn-outline-secondary btn-sm"
                        >Hire Now
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="view-all">
            <router-link :to="{ name: 'projects' }">View All</router-link>
          </div>
        </div>
        <div class="section-bg"></div>
      </section>

      <!-- Projects -->
      <section class="section-projects section-projects-home">
        <div class="container">
          <h2 class="h1">Projects</h2>

          <p class="desc" v-html="homepageProjectsListingBlockHeaderText"></p>

          <ul class="nav nav-ctabs nav-ctabs-dark">
            <li
              class="nav-link"
              :class="projectsHomeTab == 1 ? 'active' : ''"
              @click="projectsHomeTab = 1"
            >
              Newest
            </li>
            <li
              class="nav-link"
              :class="projectsHomeTab == 2 ? 'active' : ''"
              @click="projectsHomeTab = 2"
            >
              Featured
            </li>
            <li
              class="nav-link"
              :class="projectsHomeTab == 3 ? 'active' : ''"
              @click="projectsHomeTab = 3"
            >
              Popular
            </li>
          </ul>

          <div class="tabs-content">
            <div class="tab-content" v-if="projectsHomeTab == 1">
              <div class="row">
                <div
                  class="col-lg-3 col-sm-6 col-sm-12"
                  v-for="nextHomepageProject in homepageProjects"
                  :key="nextHomepageProject.id"
                >
                  <div class="card card-project">
                    <div class="card-img-top">
                      <router-link
                        :to="{
                          name: 'projectDetail',
                          params: { slug: nextHomepageProject.slug }
                        }"
                      >
                        <img
                          :src="
                            nextHomepageProject.projectImagePropsArray.image_url
                          "
                          :alt="nextHomepageProject.projectImagePropsArray.info"
                        />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title-vote">
                        <div class="card-title">
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProject.slug }
                            }"
                          >
                            {{ nextHomepageProject.name }}
                          </router-link>
                        </div>
                        <button
                          class="btn btn-link btn-icon btn-vote"
                          v-show="!nextHomepageProject.is_already_voted"
                          @click.prevent="voteProject(nextHomepageProject.id)"
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-4"
                          >
                            <icon-like-4 />
                          </icon-base>
                        </button>
                        <span
                          class="btn btn-link btn-icon"
                          v-show="nextHomepageProject.is_already_voted"
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-5"
                          >
                            <icon-like-5 />
                          </icon-base>
                        </span>
                      </div>
                      <div class="card-category">
                        <div class="label">
                          <router-link
                            :to="{
                              name: 'projectsByCategory',
                              params: {
                                slug: nextHomepageProject.category.slug
                              }
                            }"
                          >
                            {{ nextHomepageProject.category.title }}
                          </router-link>
                        </div>
                      </div>

                      <p class="card-text">
                        <span v-html="nextHomepageProject.short_desc"></span>
                      </p>
                      <div class="card-price-more">
                        <div class="more">
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProject.slug }
                            }"
                            class="btn btn-link btn-icon"
                          >
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
                <!-- v-for="nextHomepageProject in homepageProjects" block-->

                <div
                  class="col-xl-12 col-lg-12"
                  style=" display: flex;  flex-direction: row !important;"
                ></div>
              </div>

              <div class="view-all">
                <router-link :to="{ name: 'projects' }">View All</router-link>
              </div>
            </div>
            <!-- End of Projects Tab 1 -->

            <!-- Projects Tab 2 -->
            <div class="tab-content" v-if="projectsHomeTab == 2">
              <div class="row">
                <div
                  class="col-lg-3 col-sm-6 col-sm-12"
                  v-for="nextHomepageProjectFeatured in homepageProjectsFeatured"
                  :key="nextHomepageProjectFeatured.id"
                >
                  <div class="card card-project">
                    <div class="card-img-top">
                      <router-link
                        :to="{
                          name: 'projectDetail',
                          params: { slug: nextHomepageProjectFeatured.slug }
                        }"
                      >
                        <img
                          :src="
                            nextHomepageProjectFeatured.projectImagePropsArray
                              .image_url
                          "
                          :alt="
                            nextHomepageProjectFeatured.projectImagePropsArray
                              .info
                          "
                        />
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
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProjectFeatured.slug }
                            }"
                          >
                            {{ nextHomepageProjectFeatured.name }}
                          </router-link>
                        </div>
                        <button
                          class="btn btn-link btn-icon btn-vote"
                          v-show="!nextHomepageProjectFeatured.is_already_voted"
                          @click.prevent="
                            voteProject(nextHomepageProjectFeatured.id)
                          "
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-4"
                          >
                            <icon-like-4 />
                          </icon-base>
                        </button>
                        <span
                          class="btn btn-link btn-icon"
                          v-show="nextHomepageProjectFeatured.is_already_voted"
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-5"
                          >
                            <icon-like-5 />
                          </icon-base>
                        </span>
                      </div>
                      <div class="card-category">
                        <div class="label">
                          <router-link to="/">Music Category</router-link>
                        </div>
                      </div>

                      <p class="card-text">
                        <span
                          v-html="nextHomepageProjectFeatured.short_desc"
                        ></span>
                      </p>

                      <div class="card-price-more">
                        <div class="more">
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProjectFeatured.slug }
                            }"
                            class="btn btn-link btn-icon"
                          >
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
            </div>
            <!-- End of Projects Tab 2 -->

            <!-- Projects Tab 3 -->
            <div class="tab-content" v-if="projectsHomeTab == 3">
              <div class="row">
                <div
                  class="col-lg-3 col-sm-6 col-sm-12"
                  v-for="nextHomepageProjectPopular in homepageProjectsPopular"
                  :key="nextHomepageProjectPopular.id"
                >
                  <div class="card card-project">
                    <div class="card-img-top">
                      <router-link
                        :to="{
                          name: 'projectDetail',
                          params: { slug: nextHomepageProjectPopular.slug }
                        }"
                      >
                        <img
                          :src="
                            nextHomepageProjectPopular.projectImagePropsArray
                              .image_url
                          "
                          :alt="
                            nextHomepageProjectPopular.projectImagePropsArray
                              .info
                          "
                        />
                      </router-link>
                    </div>
                    <div class="card-body">
                      <div class="card-title-vote">
                        <div class="card-title">
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProjectPopular.slug }
                            }"
                          >
                            {{ nextHomepageProjectPopular.name }}
                          </router-link>
                        </div>
                        <button
                          class="btn btn-link btn-icon btn-vote"
                          v-show="!nextHomepageProjectPopular.is_already_voted"
                          @click.prevent="
                            voteProject(nextHomepageProjectPopular.id)
                          "
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-4"
                          >
                            <icon-like-4 />
                          </icon-base>
                        </button>
                        <span
                          class="btn btn-link btn-icon"
                          v-show="nextHomepageProjectPopular.is_already_voted"
                        >
                          <icon-base
                            width="18"
                            height="17.25"
                            view-box="0 0 18 17.25"
                            icon-name="like-5"
                          >
                            <icon-like-5 />
                          </icon-base>
                        </span>
                      </div>
                      <div class="card-category">
                        <div class="label">
                          <router-link to="/">Music Category</router-link>
                        </div>
                      </div>

                      <p class="card-text">
                        <span
                          v-html="nextHomepageProjectPopular.short_desc"
                        ></span>
                      </p>
                      <div class="card-price-more">
                        <div class="more">
                          <router-link
                            :to="{
                              name: 'projectDetail',
                              params: { slug: nextHomepageProjectPopular.slug }
                            }"
                            class="btn btn-link btn-icon"
                          >
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
                <!-- v-for="nextHomepageProjectPopular in homepageProjectsPopular" block-->

                <div
                  class="col-xl-12 col-lg-12"
                  style=" display: flex;  flex-direction: row !important;"
                ></div>
              </div>
            </div>
            <!-- End of Projects Tab 3 -->
          </div>
        </div>
      </section>

      <section
        class="section-home-info"
        :style="{ backgroundImage: `url(${publicPath}home-info-bg.jpg)` }"
      >
        <div class="container">
          <p v-html="homepageTheSiteAreGroupBlockHeaderText"></p>
        </div>
      </section>

      <!-- Books -->
      <section class="section-books">
        <div class="container">
          <h2 class="h1">Education</h2>

          <p class="desc" v-html="homepageEducationBlockHeaderText"></p>

          <ul class="nav nav-ctabs">
            <li
              class="nav-link"
              :class="booksHomeTab == 1 ? 'active' : ''"
              @click="booksHomeTab = 1"
            >
              Newest
            </li>
            <li
              class="nav-link"
              :class="booksHomeTab == 2 ? 'active' : ''"
              @click="booksHomeTab = 2"
            >
              Featured
            </li>
            <li
              class="nav-link"
              :class="booksHomeTab == 3 ? 'active' : ''"
              @click="booksHomeTab = 3"
            >
              Popular
            </li>
          </ul>

          <div class="tabs-content">
            <div class="tab-content" v-if="booksHomeTab == 1">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" v-if="booksHomeTab == 2">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" v-if="booksHomeTab == 3">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="bcard">
                    <div class="bcard-img-top">
                      <router-link to="/books">
                        <img :src="`${publicPath}book-1.jpg`" alt="" />
                      </router-link>
                    </div>
                    <div class="bcard-body">
                      <div class="bcard-title">
                        <router-link to="/books">Book name</router-link>
                      </div>

                      <p class="bcard-text">
                        Lorem ipsum dolor sit amet, adipiscing elit. Fringilla
                        habitant eu
                      </p>
                      <router-link
                        to="/books"
                        class="btn btn-outline-secondary btn-sm"
                        >Download
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="view-all">
            <router-link :to="{ name: 'projects' }">View All</router-link>
          </div>
        </div>
      </section>

      <section class="section-community">
        <div class="container">
          <h2 class="h1">Community</h2>

          <p class="desc" v-html="homepageCommunityListingBlockHeaderText"></p>

          <ul class="nav nav-ctabs">
            <li
              class="nav-link"
              :class="communityHomeTab == 1 ? 'active' : ''"
              @click="communityHomeTab = 1"
            >
              Newest
            </li>
            <li
              class="nav-link"
              :class="communityHomeTab == 2 ? 'active' : ''"
              @click="communityHomeTab = 2"
            >
              Featured
            </li>
            <li
              class="nav-link"
              :class="communityHomeTab == 3 ? 'active' : ''"
              @click="communityHomeTab = 3"
            >
              Popular
            </li>
          </ul>

          <div class="tabs-content">
            <div class="tab-content" v-if="communityHomeTab == 1">
              <div class="cpost-list">
                <div class="cpost">
                  <div class="cpost-body">
                    <div class="cpost-title">
                      <a href=""
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Fringilla habitant eu porttitor eu. Libero
                      </a>
                    </div>
                    <div class="cpost-text">
                      Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Fringilla habitant eu
                      porttitor eu. Libero sed feugiat luctus ac quam purus
                    </div>
                    <ul class="tags">
                      <li><a href="" class="tag tag-green">Tag 1</a></li>
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
                        <span class="num">0</span>
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
                <div class="cpost">
                  <div class="cpost-body">
                    <div class="cpost-title">
                      <a href=""
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Fringilla habitant eu porttitor eu. Libero
                      </a>
                    </div>
                    <div class="cpost-text">
                      Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Fringilla habitant eu
                      porttitor eu. Libero sed feugiat luctus ac quam purus
                    </div>
                    <ul class="tags">
                      <li><a href="" class="tag tag-green">Tag 1</a></li>
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
                        <span class="num">0</span>
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
                <div class="cpost">
                  <div class="cpost-body">
                    <div class="cpost-title">
                      <a href=""
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Fringilla habitant eu porttitor eu. Libero
                      </a>
                    </div>
                    <div class="cpost-text">
                      Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Fringilla habitant eu
                      porttitor eu. Libero sed feugiat luctus ac quam purus
                    </div>
                    <ul class="tags">
                      <li><a href="" class="tag tag-green">Tag 1</a></li>
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
                        <span class="num">0</span>
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
              </div>
            </div>
            <div class="tab-content" v-if="communityHomeTab == 2">
              <div class="cpost">
                <div class="cpost-body">
                  <div class="cpost-title">
                    <a href=""
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fringilla habitant eu porttitor eu. Libero
                    </a>
                  </div>
                  <div class="cpost-text">
                    Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Fringilla habitant eu
                    porttitor eu. Libero sed feugiat luctus ac quam purus
                  </div>
                  <ul class="tags">
                    <li><a href="" class="tag tag-green">Tag 1</a></li>
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
                      <span class="num">0</span>
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
            </div>
            <div class="tab-content" v-if="communityHomeTab == 3">
              <div class="cpost">
                <div class="cpost-body">
                  <div class="cpost-title">
                    <a href=""
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fringilla habitant eu porttitor eu. Libero
                    </a>
                  </div>
                  <div class="cpost-text">
                    Sed feugiat luctus ac quam purus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Fringilla habitant eu
                    porttitor eu. Libero sed feugiat luctus ac quam purus
                  </div>
                  <ul class="tags">
                    <li><a href="" class="tag tag-green">Tag 1</a></li>
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
                      <span class="num">0</span>
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
            </div>
          </div>

          <div class="view-all">
            <router-link :to="{ name: 'projects' }">View All</router-link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import appMixin from "../appMixin";
import Paginate from "vuejs-paginate";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconArrowRight from "./common/icons/IconArrowRight.vue";
import IconStars from "./common/icons/IconStars.vue";
import IconSearch from "./common/icons/IconSearch.vue";
import IconLike from "./common/icons/IconLike.vue";
import IconLike4 from "./common/icons/IconLike4.vue";
import IconLike5 from "./common/icons/IconLike5.vue";
import IconAnswers from "./common/icons/IconAnswers.vue";
import IconViews from "./common/icons/IconViews.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    IconBase,
    IconArrowRight,
    Paginate,
    IconStars,
    IconSearch,
    IconLike,
    IconLike4,
    IconLike5,
    IconAnswers,
    IconViews
  },

  mixins: [appMixin],

  data() {
    return {
      isAuthenticated: window.isAuthenticated,
      homepageProjects: [],
      homepageProjectsNumberOfPages: 0,
      // totalHomepageProjectsCount: 0,
      currentHomepageProjectsPageNum: 1,

      homepageProjectsFeatured: [],
      homepageProjectsFeaturedNumberOfPages: 0,
      totalHomepageProjectsFeaturedCount: 0,
      currentHomepageProjectsFeaturedPageNum: 1,

      homepageProjectsPopular: [],
      homepageProjectsPopularNumberOfPages: 0,
      totalHomepageProjectsPopularCount: 0,
      currentHomepageProjectsPopularPageNum: 1,

      homepageProjectsListingBlockHeaderText: "",
      homepageGigsListingBlockHeaderText: "",
      homepageCommunityListingBlockHeaderText: "",
      homepageJoinOurCommunityBlockHeaderText: "",
      homepageEducationBlockHeaderText: "",
      homepageTheSiteAreGroupBlockHeaderText: "",

      projectsHomeTab: 1,
      gigsHomeTab: 1,
      booksHomeTab: 1,
      communityHomeTab: 1,
      publicPath: local_image_path
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  mounted() {
    this.loadProjects(1);
    this.loadProjectsFeatured(1);
    this.loadProjectsPopular(1);

    this.loadCMSItemByKey("projects_listing_block_header");
    this.loadCMSItemByKey("gigs_listing_block_header");
    this.loadCMSItemByKey("community_listing_block_header");
    this.loadCMSItemByKey("join_our_community_block_header");
    this.loadCMSItemByKey("education_block_header");
    this.loadCMSItemByKey("the_site_are_group_block_header");
  }, // mounted() {

  methods: {
    async loadCMSItemByKey(CMSItemKey) {
      const result = await this.callApi(
        "post",
        window.api_path + "getBlockCMSItem",
        {
          key: CMSItemKey
        }
      );

      if (CMSItemKey == "projects_listing_block_header") {
        this.homepageProjectsListingBlockHeaderText = result.data.cMSItem.text;
      }
      if (CMSItemKey == "gigs_listing_block_header") {
        this.homepageGigsListingBlockHeaderText = result.data.cMSItem.text;
      }
      if (CMSItemKey == "community_listing_block_header") {
        this.homepageCommunityListingBlockHeaderText = result.data.cMSItem.text;
      }
      if (CMSItemKey == "join_our_community_block_header") {
        this.homepageJoinOurCommunityBlockHeaderText = result.data.cMSItem.text;
      }
      if (CMSItemKey == "education_block_header") {
        this.homepageEducationBlockHeaderText = result.data.cMSItem.text;
      }
      if (CMSItemKey == "the_site_are_group_block_header") {
        this.homepageTheSiteAreGroupBlockHeaderText = result.data.cMSItem.text;
      }
    }, // loadCMSItemByKey() {

    async loadProjects(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum
        }
      );
      this.currentHomepageProjectsPageNum = pageNum;
      this.homepageProjectsNumberOfPages = result.data.numberOfPages;
      this.homepageProjects = result.data.projects;
      console.log("this.homepageProjects::");
      console.log(this.homepageProjects);
    }, // async loadProjects(pageNum) {

    async loadProjectsFeatured(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum,
          data_type: "Featured"
        }
      );
      this.currentHomepageProjectsFeaturedPageNum = pageNum;
      this.homepageProjectsFeaturedNumberOfPages = result.data.numberOfPages;
      this.homepageProjectsFeatured = result.data.projects;
    }, // async loadProjectsFeatured(pageNum) {

    async loadProjectsPopular(pageNum) {
      const result = await this.callApi(
        "post",
        window.api_path + "getFilteredProjects",
        {
          page: pageNum,
          data_type: "Popular"
        }
      );

      this.currentHomepageProjectsPopularPageNum = pageNum;
      this.homepageProjectsPopularNumberOfPages = result.data.numberOfPages;
      this.homepageProjectsPopular = result.data.projects;
    }, // async loadProjectsPopular(pageNum) {

    async voteProject(project_id) {
      if (!isAuthenticated || !localStorage.getItem("logged_user_id")) {
        this.$toaster.error("To vote you need to login firstly !");
        return;
      }
      const result = await this.callApi(
        "post",
        window.api_path + "voteProject",
        {
          project_id: project_id,
          user_id: localStorage.getItem("logged_user_id")
        }
      );
      let self = this;
      if (result.status == 200) {
        self.$toaster.success(result.data.message);
        self.homepageProjects.forEach(function(nextHomepageProject, index) {
          if (nextHomepageProject.id == project_id) {
            self.homepageProjects[index].is_already_voted = true;
          }
        });
        self.homepageProjectsPopular.forEach(function(
          nextHomepageProjectPopular,
          index
        ) {
          if (nextHomepageProjectPopular.id == project_id) {
            self.homepageProjectsPopular[index].is_already_voted = true;
          }
        });
        self.homepageProjectsFeatured.forEach(function(
          nextHomepageProjectFeatured,
          index
        ) {
          if (nextHomepageProjectFeatured.id == project_id) {
            self.homepageProjectsFeatured[index].is_already_voted = true;
          }
        });
        return;
      }
      this.$toaster.error(result.data.message);
    }
  } // methods: {
};
</script>
