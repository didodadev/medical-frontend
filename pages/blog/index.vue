<template>
  <div>
    <PaginationHeader title="blog" />

    <div class="white-block p-5">
      <div class="container">
        <div class="column services">
          <div class="mb-3" v-for="(i, index) in data" :key="index">
            <BlogCard
              :img="publicURL(i.thumbnailURL)"
              :title="getLocaleKey(i, 'title')"
              :cover="getLocaleKey(i, 'coverLetter')"
              :seourl="i.seourl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../../tools/path-handler";
import BlogCard from "../../components/blog-card.vue";
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default Vue.extend({
  components: {
    BlogCard,
    PaginationHeader,
  },
  data: () => ({
    data: {},
  }),
  methods: { pathHandler, publicURL, getLocaleKey },
  async created() {
    this.data = (await this.$axios.get("/blog")).data.data;
  },
});
</script>

<style scoped>
.services > div {
  margin-bottom: 1.5em;
}
</style>
