<template>
  <div class="white-block">
    <PaginationHeader title="contracted-institutions" />

    <div class="container p-5">
      <div class="row ">
        <div class="col-md-4 item" v-for="(i, index) in data" :key="index">
          <nuxt-link :to="pathHandler(`/contracts/${i.seourl}`)">
            <img :src="publicURL(i.thumbnailURL)" :alt="i.name">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../../tools/path-handler'
import publicURL from '../../ts/public-url'

export default Vue.extend({
  methods: {
    pathHandler,
    publicURL
  },
  data: () => ({
    data: {}
  }),
  async created() {
    this.data = (await this.$axios.get('/contract')).data.data
  }
})
</script>

<style scoped>
.item {
  filter: grayscale(100%);
  display: flex;
  justify-content: center;
  transition: .3s;
  margin-bottom: 4em;
}

.item:hover {
  filter: grayscale(0);
}
</style>
