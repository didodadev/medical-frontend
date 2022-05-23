<template>
  <div class="default-template container-fluid">
    <TopSideBarVue />
    <HeaderVue />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopSideBarVue from '../components/top-side-bar.vue'
import HeaderVue from '../components/header.vue'

export default Vue.extend({
  components: {
    TopSideBarVue,
    HeaderVue
  }
})
</script>
v