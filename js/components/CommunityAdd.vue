<template>
  <div>
    <Header />

    <section class="section-cpostadd">
      <div class="container">
        <h1>Ask a public question</h1>
        <div class="cpostadd-container wblock">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Be Specific and imagine you’re asking a Questation to another person"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              rows="14"
              class="form-control"
              placeholder="Include all the information someone would need to answer your question"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Tags</label>
            <vue-tags-input
              v-model="cposttag"
              :tags="cposttags"
              :autocomplete-items="filteredItems"
              placeholder="Add up to 5 tags to describe what your question is about"
              @tags-changed="newTags => (tags = newTags)"
            />
          </div>
          <div class="btns">
            <button class="btn btn-primary btn-wide">Publish</button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

export default {
  name: "CommunityAdd",
  components: {
    VueTagsInput,
    Header,
    Footer
  },
  data() {
    return {
      publicPath: local_image_path,
      cposttag: "",
      cposttags: [],

      cpostfilteredTags: [
        {
          text: "Website Design"
        },
        {
          text: "PSD to HTML"
        },
        {
          text: "CSS"
        },
        {
          text: "MySQL"
        },
        {
          text: "Javascript"
        }
      ]
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  computed: {
    filteredItems() {
      return this.cpostfilteredTags.filter(i => {
        return i.text.toLowerCase().indexOf(this.cposttag.toLowerCase()) !== -1;
      });
    }
  }
};
</script>
