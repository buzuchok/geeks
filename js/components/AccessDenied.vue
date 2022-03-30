<template>
  <div>
    <Header />

    <main class="main">
      <!-- 404 -->
      <section class="section-denied">
        <div class="container">
          <div class="denied-icon">
            <icon-base
              width="66"
              height="88"
              view-box="0 0 66 88"
              icon-name="lock"
              ><icon-lock />
            </icon-base>
          </div>
          <div class="denied-message wblock">
            <h1>Access Denied</h1>
            <p>
              You don’t have permissions to access this page. Contact an
              administrator to get permissions or go to the homepage or browse
              another pages.
            </p>
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
import IconLock from "./common/icons/IconLock.vue";

export default {
  name: "AccessDenied",
  components: {
    Header,
    Footer,
    IconBase,
    IconLock
  },
  data() {
    return {};
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
