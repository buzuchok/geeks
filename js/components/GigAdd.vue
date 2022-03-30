<template>
  <div>
    <Header />

    <main class="main">
      <!-- Gig Add -->
      <section class="section-gigadd">
        <div class="container">
          <!-- Gig Add Steps -->
          <div class="gigadd-steps">
            <div
              class="gigadd-step"
              :class="gigaddStep == 1 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Overview</span>
            </div>
            <div
              class="gigadd-step"
              :class="gigaddStep == 6 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Pricing</span>
            </div>
            <div
              class="gigadd-step"
              :class="gigaddStep == 2 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Description & FAQ</span>
            </div>
            <div
              class="gigadd-step"
              :class="gigaddStep == 3 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Requirements</span>
            </div>
            <div
              class="gigadd-step"
              :class="gigaddStep == 4 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Gallery</span>
            </div>
            <div
              class="gigadd-step"
              :class="gigaddStep == 5 ? 'is-active' : ''"
            >
              <icon-base
                width="25"
                height="25"
                view-box="0 0 25 25"
                icon-name="checkbox-round"
              >
                <icon-checkbox-round />
              </icon-base>
              <span class="step-title">Publish</span>
            </div>
          </div>
          <!-- End of Gig Add Steps -->

          <div class="gigadd-container">
            <!-- Gig Add Step 1 -->
            <section
              v-if="gigaddStep == 1"
              class="section-gigadd-step-1 wblock"
            >
              <div class="gigadd-step-row">
                <div class="gigadd-step-1-container">
                  <div class="gigadd-step-1-block border rounded">
                    <div class="form-group mb-lg-5">
                      <label>Gig Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="I Will Do Something I’m Really Good at"
                      />
                    </div>
                    <div class="row">
                      <div class="form-group mb-lg-5 col-md-6">
                        <label>Category</label>
                        <div class="select-container">
                          <select>
                            <option value="" disabled selected
                              >Select a Category</option
                            >
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group mb-lg-5">
                      <label>Platform</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter text"
                      />
                    </div>
                    <div class="form-group mb-lg-5">
                      <label>Tags</label>
                      <div class="btns tag-btns">
                        <button class="btn btn-light btn-sm">
                          + MySQL Administration
                        </button>
                        <button class="btn btn-light btn-sm">
                          + API Integration
                        </button>
                        <button class="btn btn-light btn-sm">+ MongoDB</button>
                        <button class="btn btn-light btn-sm">+ RESTful</button>
                        <button class="btn btn-light btn-sm">+ Nodejs</button>
                        <button class="btn btn-light btn-sm">
                          + PostgreSQL Administration
                        </button>
                        <button class="btn btn-light btn-sm">
                          + Bootstrap
                        </button>
                        <button class="btn btn-light btn-sm">+ React.js</button>
                        <button class="btn btn-light btn-sm">+ CSS</button>
                        <button class="btn btn-light btn-sm">+ jQuery</button>
                        <button class="btn btn-light btn-sm">+ HTML</button>
                        <button class="btn btn-light btn-sm">+ MS SQL</button>
                      </div>
                    </div>

                    <p class="f14">
                      <b>Please Note:</b>&nbsp;<span class="text-muted"
                        >Some categories require that sellers verify their
                        skills.</span
                      >
                    </p>
                  </div>
                </div>
                <div class="gigadd-step-sidebar">
                  <div class="gigadd-step-sidebar-block border rounded">
                    <div class="h5 text-center mb-3">
                      Start Defining Your Gig
                    </div>
                    <div class="video-block mb-3">
                      <img
                        :src="`${publicPath}gig-245.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <icon-base
                        width="37"
                        height="37"
                        view-box="0 0 37 37"
                        icon-name="play"
                      >
                        <icon-play />
                      </icon-base>
                    </div>

                    <ul class="list-black text-muted f14 mb-5">
                      <li>Lorem ipsum dolor sit amet,</li>
                      <li>Choose a Category that fits your Gig.</li>
                      <li>
                        Add meta data to help buyes find more information
                        regarding your Gig. your Gig.
                      </li>
                      <li>
                        Add tags to help buyers find your Gig while searching
                      </li>
                    </ul>

                    <div class="f12 text-center">
                      <router-link to="" class="text-muted"
                        >Our Policy and terms and Conditions</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="gigadd-btns">
                <div class="btns justify-content-end">
                  <button class="btn btn-outline-primary">Cancel</button>
                  <button
                    class="btn btn-primary"
                    @click="
                      gigaddStep = 6;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Gig Add Step 1 -->

            <!-- Gig Add Step 6 (Pricing) -->
            <section
              v-if="gigaddStep == 6"
              class="section-gigadd-step-6 wblock"
            >
              <div class="gigadd-step-row">
                <div class="gigadd-step-6-container">
                  <div class="gigadd-step-6-block">
                    <header class="gigadd-header mb-5">
                      <h2>Scope & Pricing</h2>
                      <div class="gigadd-header-r my-2">
                        <div class="label">3 packages</div>
                        <div class="custom-switch">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="pricingPackages"
                          />
                          <label for="pricingPackages"></label>
                        </div>
                      </div>
                    </header>

                    <!-- First Pricing Block -->
                    <div class="gigadd-body gigadd-body-1">
                      <h3>Packages</h3>

                      <table
                        class="table table-bordered table-responsive table-tform table-packages"
                      >
                        <tbody>
                          <tr>
                            <th rowspan="4"></th>
                            <th class="pricing-title">Basic</th>
                            <th class="pricing-title">Standard</th>
                            <th class="pricing-title">Pro</th>
                          </tr>
                          <tr>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="3"
                                  placeholder="Name your package"
                                  ref="p1name"
                                  :readonly="!p1nameOn"
                                  @blur="p1nameOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p1nameOn = true;
                                    $refs.p1name.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="3"
                                  placeholder="Name your package"
                                  ref="p2name"
                                  :readonly="!p2nameOn"
                                  @blur="p2nameOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p2nameOn = true;
                                    $refs.p2name.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="3"
                                  placeholder="Name your package"
                                  ref="p3name"
                                  :readonly="!p3nameOn"
                                  @blur="p3nameOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p3nameOn = true;
                                    $refs.p3name.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="6"
                                  placeholder="Describe the details of your offering"
                                  ref="p1details"
                                  :readonly="!p1detailsOn"
                                  @blur="p1detailsOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p1detailsOn = true;
                                    $refs.p1details.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="6"
                                  placeholder="Describe the details of your offering"
                                  ref="p2details"
                                  :readonly="!p2detailsOn"
                                  @blur="p2detailsOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p2detailsOn = true;
                                    $refs.p2details.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <textarea
                                  class="tform-control"
                                  rows="6"
                                  placeholder="Describe the details of your offering"
                                  ref="p3details"
                                  :readonly="!p3detailsOn"
                                  @blur="p3detailsOn = false"
                                ></textarea>
                                <button
                                  class="btn btn-white-icon btn-edit"
                                  @click="
                                    p3detailsOn = true;
                                    $refs.p3details.focus();
                                  "
                                >
                                  <icon-base
                                    width="12.53"
                                    height="14"
                                    view-box="0 0 12.53 14"
                                    icon-name="pencil"
                                  >
                                    <icon-pencil />
                                  </icon-base>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Delivery time</option>
                                    <option value="">3 Days Delivery</option>
                                    <option value="">7 Days Delivery</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Delivery time</option>
                                    <option value="">3 Days Delivery</option>
                                    <option value="">7 Days Delivery</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Delivery time</option>
                                    <option value="">3 Days Delivery</option>
                                    <option value="">7 Days Delivery</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Revisions</th>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select>
                                    <option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Page Setup</th>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" checked />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Brand Book Design</th>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" checked />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Page Optimization</th>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" checked />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Tailored Marketing Plan</th>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" checked />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Social media posts</th>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Compaign Development</th>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" checked />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>&nbsp;</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Management Duration (Weeks)</th>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <div
                                  class="select-container select-container-2"
                                >
                                  <select
                                    ><option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option></select
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td>
                              <div class="tform-group">
                                <input
                                  type="number"
                                  class="tform-control"
                                  maxlength="8"
                                  size="5"
                                  min="0"
                                  value="0"
                                />
                                <span class="curr">$</span>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <input
                                  type="number"
                                  class="tform-control"
                                  maxlength="8"
                                  size="5"
                                  min="0"
                                  value="0"
                                />
                                <span class="curr">$</span>
                              </div>
                            </td>
                            <td>
                              <div class="tform-group">
                                <input
                                  type="number"
                                  class="tform-control"
                                  maxlength="8"
                                  size="5"
                                  min="0"
                                  value="0"
                                />
                                <span class="curr">$</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- End of First Pricing Block -->

                    <!-- Second Pricing Block -->
                    <div class="gigadd-body gigadd-body-2">
                      <h3>Add Extra Services</h3>

                      <table class="table table-bordered table-extraservices">
                        <tbody>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Extra fast Delivery</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Additional Revision</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Page Setup</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Page Optimization</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Tailored Marketing Plan</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Additional Social Media Post</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Compaign Development</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-checkbox-group">
                                <label
                                  class="custom-checkbox custom-checkbox-dark"
                                >
                                  <input type="checkbox" />
                                  <span>Additiona Social Media Mgmt</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="addextra-row">
                                <div class="addextra-checkbox">
                                  <div class="custom-checkbox-group">
                                    <label
                                      class="custom-checkbox custom-checkbox-dark"
                                    >
                                      <input type="checkbox" />
                                      <span>&nbsp;</span>
                                    </label>
                                  </div>
                                </div>
                                <div class="addextra-form">
                                  <div
                                    class="form-group row align-items-center"
                                  >
                                    <div class="col-sm-2">
                                      <label>Title</label>
                                    </div>
                                    <div class="col-sm-5">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Title your extra service"
                                      />
                                    </div>
                                    <div class="col-auto">
                                      <i class="my-1">0 / 20 max</i>
                                    </div>
                                  </div>
                                  <div
                                    class="form-group row align-items-center"
                                  >
                                    <div class="col-sm-2">
                                      <label>Description</label>
                                    </div>
                                    <div class="col-sm-10">
                                      <input
                                        type="text"
                                        class="form-control form-control-block"
                                        placeholder="Describe your offering"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    class="form-group row align-items-center"
                                  >
                                    <div class="col-md-2 mb-2">
                                      <label class="mx-2">For an Extra</label>
                                    </div>
                                    <div
                                      class="col-auto col-md-2 d-flex align-items-center mb-2"
                                    >
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder=""
                                      />
                                      <span class="curr ml-2">$</span>
                                    </div>
                                    <div class="col-auto mb-2">
                                      <span class="m-2">and an additional</span>
                                    </div>
                                    <div class="col-sm-6 col-md-3 mb-2">
                                      <div
                                        class="select-container select-container-2"
                                      >
                                        <select name="" id="">
                                          <option value="">Select</option>
                                          <option value="">option 1</option>
                                          <option value="">option 2</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <button class="btn btn-light btn-icon">
                                <icon-base
                                  width="11"
                                  height="11"
                                  view-box="0 0 11 11"
                                  icon-name="plus-2"
                                >
                                  <icon-plus-2 />
                                </icon-base>
                                <span>Add Gig Extra</span>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- End of Second Pricing Block -->
                  </div>
                </div>

                <div class="gigadd-step-sidebar">
                  <div class="gigadd-step-sidebar-block border rounded">
                    <div class="h5 text-center mb-3">
                      Start Defining Your Gig
                    </div>
                    <div class="video-block mb-3">
                      <img
                        :src="`${publicPath}gig-245.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <icon-base
                        width="37"
                        height="37"
                        view-box="0 0 37 37"
                        icon-name="play"
                      >
                        <icon-play />
                      </icon-base>
                    </div>

                    <ul class="list-black text-muted f14 mb-5">
                      <li>Lorem ipsum dolor sit amet,</li>
                      <li>Choose a Category that fits your Gig.</li>
                      <li>
                        Add meta data to help buyes find more information
                        regarding your Gig. your Gig.
                      </li>
                      <li>
                        Add tags to help buyers find your Gig while searching
                      </li>
                    </ul>

                    <div class="f12 text-center">
                      <router-link to="" class="text-muted"
                        >Our Policy and terms and Conditions</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="gigadd-btns">
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      gigaddStep = 1;
                      scrollToTop();
                    "
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="
                      gigaddStep = 2;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Gig Add Step Price -->

            <!-- Gig Add Step 2 -->
            <section
              v-if="gigaddStep == 2"
              class="section-gigadd-step-2 wblock"
            >
              <div class="gigadd-step-row">
                <div class="gigadd-step-2-container">
                  <div class="gigadd-step-2-block gigadd-step-2-block-1">
                    <header class="gigadd-header mb-5">
                      <h2>Description</h2>
                    </header>

                    <div class="gigadd-body gigadd-body-1">
                      <div class="form-group">
                        <label>Briefly Describe Your Gig</label>
                        <textarea
                          class="form-control"
                          rows="7"
                          placeholder="Briefly Describe Your Gig"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="gigadd-step-2-block gigadd-step-2-block-2">
                    <header class="gigadd-header">
                      <h2>Frequently Asked Questions</h2>
                      <button class="btn btn-link btn-icon">
                        <icon-base
                          width="11"
                          height="11"
                          view-box="0 0 11 11"
                          icon-name="plus-2"
                        >
                          <icon-plus-2 />
                        </icon-base>
                        <span>Add FAQ</span>
                      </button>
                    </header>

                    <div class="gigadd-body">
                      <div class="faq-list">
                        <div class="faq-item">
                          <div class="faq-q">Lorem ipsum dolor sit amet?</div>
                          <div class="faq-a">
                            <p>
                              Wealth$hare is an app platform that gives its
                              members direct access to revolving, interest free
                              loans that is funded within & by our community.
                              However, what makes W$ truly special is the
                              members themselves who come together like a family
                              to help each other accomplish one’s financial
                              dreams.
                            </p>
                          </div>
                        </div>
                        <div class="faq-item">
                          <div class="faq-q">How does it work?</div>
                          <div class="faq-a">
                            <p>
                              Utilizing our modern & easy to use automated
                              system, the W$ app helps members to Contribute,
                              Receive, Recycle, & Invest amazing amounts of
                              money among each other to unlock all types of
                              Financial Goals.
                            </p>
                            <p class="ml-3">
                              <strong>First Step:</strong> Members contribute a
                              designated amount into the community based on what
                              subscription & amount they want to receive on a
                              continuous basis. Once you are cycled in and reach
                              the receiving position, you'll receive an increase
                              on your contribution from the shared contributions
                              from other Wealth$hare members in less than 7
                              days!
                            </p>
                            <p class="ml-3">
                              <strong>Second Step:</strong> The automated system
                              makes sure each member receives, repay & recycle
                              money on a continuous schedule to make sure every
                              member has access to loans every month.
                            </p>
                            <p class="ml-3">
                              <strong>Third Step:</strong> W$ provides financial
                              literacy to their members so they can utilize the
                              funds to unlock financial freedoms such as:
                              Starting A Business, Investing in Properties,
                              Paying off Debt, Buying a Home, etc. With
                              Wealth$hare Your Options Are Unlimited!
                            </p>
                          </div>
                        </div>
                        <div class="faq-item">
                          <div class="faq-q">Lorem ipsum dolor sit amet?</div>
                          <div class="faq-a">
                            <p>
                              Wealth$hare is an app platform that gives its
                              members direct access to revolving, interest free
                              loans that is funded within & by our community.
                              However, what makes W$ truly special is the
                              members themselves who come together like a family
                              to help each other accomplish one’s financial
                              dreams.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gigadd-step-sidebar">
                  <div class="gigadd-step-sidebar-block border rounded">
                    <div class="h5 text-center mb-3">
                      Start Defining Your Gig
                    </div>
                    <div class="video-block mb-3">
                      <img
                        :src="`${publicPath}gig-245.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <icon-base
                        width="37"
                        height="37"
                        view-box="0 0 37 37"
                        icon-name="play"
                      >
                        <icon-play />
                      </icon-base>
                    </div>

                    <ul class="list-black text-muted f14 mb-5">
                      <li>Lorem ipsum dolor sit amet,</li>
                      <li>Choose a Category that fits your Gig.</li>
                      <li>
                        Add meta data to help buyes find more information
                        regarding your Gig. your Gig.
                      </li>
                      <li>
                        Add tags to help buyers find your Gig while searching
                      </li>
                    </ul>

                    <div class="f12 text-center">
                      <router-link to="" class="text-muted"
                        >Our Policy and terms and Conditions</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="gigadd-btns">
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      gigaddStep = 6;
                      scrollToTop();
                    "
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="
                      gigaddStep = 3;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Gig Add Step 2 -->
            <!-- Gig Add Step 3 -->
            <section
              v-if="gigaddStep == 3"
              class="section-gigadd-step-3 wblock"
            >
              <header class="gigadd-header">
                <h2>Requirements</h2>
              </header>

              <div class="gigadd-body">
                <div class="form-group">
                  <label>Submit your Requirements</label>
                  <textarea
                    class="form-control"
                    rows="19"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <div class="btns justify-content-end">
                <button
                  class="btn btn-outline-primary"
                  @click="
                    gigaddStep = 2;
                    scrollToTop();
                  "
                >
                  Back
                </button>
                <button
                  class="btn btn-primary"
                  @click="
                    gigaddStep = 4;
                    scrollToTop();
                  "
                >
                  Save and Continue
                </button>
              </div>
            </section>
            <!-- End of Gig Add Step 3 -->
            <!-- Gig Add Step 4 -->
            <section
              v-if="gigaddStep == 4"
              class="section-gigadd-step-4 wblock"
            >
              <div class="gigadd-step-row">
                <div class="gigadd-step-4-container">
                  <div class="gigadd-body">
                    <h2>Build Your Gig Gallery</h2>
                    <p>
                      Add memorable content to your gallery to set yourself
                      apart from competitors.
                    </p>

                    <p class="note">
                      Note: To comply with Fiverr’s terms of service, make sure
                      to upload only content you either own or you have the
                      permission or license to use.
                    </p>

                    <div class="gigadd-body-block gigadd-body-block-1">
                      <h3>Gig Video</h3>

                      <p>
                        Add a relevant, high quality video that best showcases
                        yo ur Gig. <br />
                        Please choose a video shorter than 75 seconds and
                        smaller than 50MB
                      </p>

                      <div
                        class="gigadd-media-add gigadd-video-add"
                        :class="
                          $refs.uploadVideo &&
                          $refs.uploadVideo.dropActive &&
                          dragVideoActive
                            ? 'active'
                            : ''
                        "
                        @dragenter="dragVideoActive = true"
                        @dragleave="dragVideoActive = false"
                      >
                        <div class="add-message">
                          <icon-base
                            width="30"
                            height="17.88"
                            view-box="0 0 30 17.88"
                            icon-name="video"
                          >
                            <icon-video />
                          </icon-base>
                          <div class="add-text">
                            Drug a Video or<br />

                            <file-upload
                              v-model="vfiles"
                              ref="uploadVideo"
                              extensions="gif,jpg,jpeg,png,webp"
                              accept="image/png,image/gif,image/jpeg,image/webp"
                              post-action="/upload"
                              :multiple="false"
                              :drop="`.gigadd-video-add`"
                              :drop-directory="false"
                              @input-filter="inputFilter"
                              @input-file="inputFile"
                            >
                              Browse
                            </file-upload>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="gigadd-body-block gigadd-body-block-2">
                      <h3>Gig Photo</h3>

                      <p>
                        Upload photos that describe or are related to your Gig.
                      </p>

                      <div class="gigadd-media-add-container row">
                        <div class="col-sm-4">
                          <div
                            class="gigadd-media-add gigadd-photo-1-add"
                            :class="
                              $refs.uploadphoto1 &&
                              $refs.uploadphoto1.dropActive &&
                              dragPhoto1Active
                                ? 'active'
                                : ''
                            "
                            @dragenter="dragPhoto1Active = true"
                            @dragleave="dragPhoto1Active = false"
                          >
                            <div class="add-message">
                              <icon-base
                                width="32"
                                height="25.2"
                                view-box="0 0 31.5 25.2"
                                icon-name="picture"
                              >
                                <icon-picture />
                              </icon-base>
                              <div class="add-text">
                                Drug a Photo or<br />

                                <file-upload
                                  v-model="pfiles"
                                  ref="uploadphoto1"
                                  extensions="gif,jpg,jpeg,png,webp"
                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                  post-action="/upload"
                                  :multiple="false"
                                  :drop="`.gigadd-photo-1-add`"
                                  :drop-directory="false"
                                  @input-filter="inputFilter"
                                  @input-file="inputFile"
                                >
                                  Browse
                                </file-upload>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div
                            class="gigadd-media-add gigadd-photo-2-add"
                            :class="
                              $refs.uploadphoto2 &&
                              $refs.uploadphoto2.dropActive &&
                              dragPhoto2Active
                                ? 'active'
                                : ''
                            "
                            @dragenter="dragPhoto2Active = true"
                            @dragleave="dragPhoto2Active = false"
                          >
                            <div class="add-message">
                              <icon-base
                                width="32"
                                height="25.2"
                                view-box="0 0 31.5 25.2"
                                icon-name="picture"
                              >
                                <icon-picture />
                              </icon-base>
                              <div class="add-text">
                                Drug a Photo or<br />

                                <file-upload
                                  v-model="pfiles"
                                  ref="uploadphoto2"
                                  extensions="gif,jpg,jpeg,png,webp"
                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                  post-action="/upload"
                                  :multiple="false"
                                  :drop="`.gigadd-photo-2-add`"
                                  :drop-directory="false"
                                  @input-filter="inputFilter"
                                  @input-file="inputFile"
                                >
                                  Browse
                                </file-upload>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div
                            class="gigadd-media-add gigadd-photo-3-add"
                            :class="
                              $refs.uploadphoto3 &&
                              $refs.uploadphoto3.dropActive &&
                              dragPhoto3Active
                                ? 'active'
                                : ''
                            "
                            @dragenter="dragPhoto3Active = true"
                            @dragleave="dragPhoto3Active = false"
                          >
                            <div class="add-message">
                              <icon-base
                                width="32"
                                height="25.2"
                                view-box="0 0 31.5 25.2"
                                icon-name="picture"
                              >
                                <icon-picture />
                              </icon-base>
                              <div class="add-text">
                                Drug a Photo or<br />

                                <file-upload
                                  v-model="pfiles"
                                  ref="uploadphoto3"
                                  extensions="gif,jpg,jpeg,png,webp"
                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                  post-action="/upload"
                                  :multiple="false"
                                  :drop="`.gigadd-photo-3-add`"
                                  :drop-directory="false"
                                  @input-filter="inputFilter"
                                  @input-file="inputFile"
                                >
                                  Browse
                                </file-upload>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="custom-checkbox-group mb-md-5">
                        <label class="custom-checkbox custom-checkbox-sm">
                          <input type="checkbox" checked />
                          <span
                            >I declare that these materials were created by
                            myself or by my team and do not infringe on any 3rd
                            party rights. I understand that the illegal use of
                            digital assets is against Fiverr’s
                            <router-link to="">Terms of Service</router-link>
                            and may result in blocking my account</span
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gigadd-step-sidebar">
                  <div class="gigadd-step-sidebar-block border rounded">
                    <div class="h5 text-center mb-3">
                      Start Defining Your Gig
                    </div>
                    <div class="video-block mb-3">
                      <img
                        :src="`${publicPath}gig-245.jpg`"
                        alt=""
                        class="rounded"
                      />
                      <icon-base
                        width="37"
                        height="37"
                        view-box="0 0 37 37"
                        icon-name="play"
                      >
                        <icon-play />
                      </icon-base>
                    </div>

                    <ul class="list-black text-muted f14 mb-5">
                      <li>Lorem ipsum dolor sit amet,</li>
                      <li>Choose a Category that fits your Gig.</li>
                      <li>
                        Add meta data to help buyes find more information
                        regarding your Gig. your Gig.
                      </li>
                      <li>
                        Add tags to help buyers find your Gig while searching
                      </li>
                    </ul>

                    <div class="f12 text-center">
                      <router-link to="" class="text-muted"
                        >Our Policy and terms and Conditions</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="gigadd-btns">
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      gigaddStep = 3;
                      scrollToTop();
                    "
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="
                      gigaddStep = 5;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Gig Add Step 4 -->
            <!-- Gig Add Step 5 -->
            <section
              v-if="gigaddStep == 5"
              class="section-gigadd-step-5 wblock"
            >
              <div class="gigadd-step-4-container">
                <div class="gigadd-step-5-block">
                  <div class="gigadd-step-5-block-inner">
                    <p><b>Almost There..</b></p>
                    <p class="text-secondary">
                      Let’s publish your Gig and get some buyers rolling in
                    </p>
                  </div>
                </div>
                <div class="btns justify-content-end">
                  <button
                    class="btn btn-outline-primary"
                    @click="
                      gigaddStep = 3;
                      scrollToTop();
                    "
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="
                      gigaddStep = 5;
                      scrollToTop();
                    "
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </section>
            <!-- End of Gig Add Step 5 -->
          </div>
        </div>
      </section>
      <!-- End of Gig Add -->
    </main>

    <Footer />
  </div>
</template>

<script>
import FileUpload from "vue-upload-component";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import IconBase from "./common/IconBase.vue";
import IconCheckboxRound from "./common/icons/IconCheckboxRound.vue";
import IconPlay from "./common/icons/IconPlay.vue";
import IconPlus2 from "./common/icons/IconPlus2.vue";
import IconPencil from "./common/icons/IconPencil.vue";
import IconVideo from "./common/icons/IconVideo.vue";
import IconPicture from "./common/icons/IconPicture.vue";

export default {
  name: "GigAdd",
  components: {
    FileUpload,
    Header,
    Footer,
    IconBase,
    IconCheckboxRound,
    IconPlay,
    IconPlus2,
    IconVideo,
    IconPencil,
    IconPicture
  },
  data() {
    return {
      publicPath: local_image_path,
      gigaddStep: 6,
      vfiles: [],
      pfiles: [],
      dragVideoActive: false,
      dragPhoto1Active: false,
      dragPhoto2Active: false,
      dragPhoto3Active: false,
      p1nameOn: false,
      p2nameOn: false,
      p3nameOn: false,
      p1detailsOn: false,
      p2detailsOn: false,
      p3detailsOn: false
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    scrollToTop: function() {
      window.scrollTo({ top: 0 });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log("add", newFile);
      }
      if (newFile && oldFile) {
        // update
        console.log("update", newFile);
      }
      if (!newFile && oldFile) {
        // remove
        console.log("remove", oldFile);
      }
    }
  }
};
</script>
