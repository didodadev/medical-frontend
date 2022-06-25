<template>
  <div>
    <PaginationHeader
      title="service"
      :sub-title="getLocaleKey(data, 'title')"
    />

    <div class="white-block p-5">
      <div class="container">
        <img :src="publicURL(data.thumbnailURL)" width="100%" />

        <h3 class="mt-5">{{ getLocaleKey(data, 'title') }}</h3>

        <p class="mt-4" v-html="getLocaleKey(data, 'content')"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default {
  components: {
    PaginationHeader,
  },
  data: () => ({
    data: {},
  }),
  methods: {
    publicURL,
    getLocaleKey
  },
  async created() {
    this.data = (
      await this.$axios.get(`/service/${this.$route.params.id}`)
    ).data.data;
  },
};
</script>
