<template>
  <div class="default-template container-fluid p-0">
    <TopSideBarVue />
    <HeaderVue />
    <SocialsVue />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopSideBarVue from "../components/top-side-bar.vue";
import HeaderVue from "../components/header.vue";
import SocialsVue from "../components/socials.vue";

export default Vue.extend({
  components: {
    TopSideBarVue,
    HeaderVue,
    SocialsVue,
  },
});
</script>
