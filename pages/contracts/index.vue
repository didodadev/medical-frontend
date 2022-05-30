<template>
  <div class="white-block">
    <PaginationHeader title="contracted-institutions" />

    <div class="container p-5">
      <div class="row ">
        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-4 item">
          <nuxt-link :to="pathHandler('/contracts/test')">
            <img src="../../assets/images/contracted.png" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../../tools/path-handler'

export default Vue.extend({
  methods: {
    pathHandler
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