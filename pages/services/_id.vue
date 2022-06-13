<template>
  <div>
    <PaginationHeader title="service" sub-title="Example Service" />

    <div class="white-block p-5">
      <div class="container">
        <img :src="publicURL(data.thumbnailURL)" width="100%" />

        <h3 class="mt-5">Operation Theater</h3>

        <p class="mt-4" v-html="isEn ? data.contentEN : data.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";

export default {
  components: {
    PaginationHeader,
  },
  data: () => ({
    data: {},
    isEn: false,
  }),
  methods: {
    publicURL,
  },
  async created() {
    // @ts-expect-error
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.data = (
      await this.$axios.get(`/service/${this.$route.params.id}`)
    ).data.data;
  },
};
</script>
