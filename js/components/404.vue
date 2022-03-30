<template>
  <div>
    <Header />

    <main class="main">
      <!-- 404 -->
      <section class="section-404">
        <div class="container">
          <h1>404!</h1>
          <div class="s404-message wblock">
            <h2>Sorry, Page Not found</h2>
            <p>
              The page you are looking for might have been removed or is
              temporarily unavailable.
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

export default {
  name: "404",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>
