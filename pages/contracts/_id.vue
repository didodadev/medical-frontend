<template>
  <div class="white-block">
    <PaginationHeader title="contractedInstitutions" sub-title="Contract Name" />

    <div class="container p-5">
      <div class="d-flex">
        <img
          :src="publicURL(data.thumbnailURL)"
          style="margin-right: 1em"
          :alt="data.name"
        >

        <div>
          <h3> {{data.name}} </h3>
        </div>
      </div>

      <p class="mt-4" v-html="isEn ? data.contentEN : data.content"></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import publicURL from '../../ts/public-url'

export default Vue.extend({
  data: () => ({
    data: {},
    isEn: false
  }),
  methods: {
    publicURL
  },
  async created() {
    // @ts-expect-error
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.data = (await this.$axios.get(`/contract/${this.$route.params.id}`)).data.data
  }
})
</script>