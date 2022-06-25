<template>
  <div class="white-block">
    <PaginationHeader
      title="Blog"
      :sub-title="getLocaleKey(data, 'title')"
    />

    <div class="container p-5">
      <img
        :src="publicURL(data.thumbnailURL)"
        style="margin-right: 1em; max-width: 100%"
        width="400"
      />

      <h1 class="mt-5">{{ getLocaleKey(data, 'title') }}</h1>

      <p v-html="getLocaleKey(data, 'content')"></p>
    </div>
  </div>
</template>

<script>
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    publicURL,
    getLocaleKey
  },
  async created() {
    this.data = (
      await this.$axios.get(`/blog/${this.$route.params.id}`)
    ).data.data;
  },
};
</script>