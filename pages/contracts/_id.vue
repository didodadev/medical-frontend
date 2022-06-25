<template>
  <div class="white-block">
    <PaginationHeader
      title="contractedInstitutions"
      :sub-title="data.name"
    />

    <div class="container p-5">
      <div class="d-flex">
        <img
          :src="publicURL(data.thumbnailURL)"
          style="margin-right: 1em"
          :alt="data.name"
        />

        <div>
          <h3>{{ data.name }}</h3>
        </div>
      </div>

      <p class="mt-4" v-html="getLocaleKey(data, 'content')"></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default Vue.extend({
  data: () => ({
    data: {},
  }),
  methods: {
    publicURL,
    getLocaleKey
  },
  async created() {
    this.data = (
      await this.$axios.get(`/contract/${this.$route.params.id}`)
    ).data.data;
  },
});
</script>