<template>
  <div class="white-block">
    <PaginationHeader title="Blog" :sub-title="isEn ? data.titleEN : data.title" />

    <div class="container p-5">
      <img :src="publicURL(data.thumbnailURL)" style="margin-right: 1em; max-width: 100%" width="400" />

      <h1 class="mt-5">{{ isEn ? data.titleEN : data.title }}</h1>

      <p v-html="isEn ? data.contentEN : data.content"></p>
    </div>
  </div>
</template>

<script>
import publicURL from "../../ts/public-url";

export default {
  data() {
    return {
      data: {},
      isEn: false,
    };
  },
  methods: {
    publicURL,
  },
  async created() {
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.data = (
      await this.$axios.get(`/blog/${this.$route.params.id}`)
    ).data.data;
  },
};
</script>