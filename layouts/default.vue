<template>
  <div class="default-template container-fluid p-0">
    <TopSideBarVue v-if="!$route.path.includes('admin')" />
    <HeaderVue v-if="!$route.path.includes('admin')" />
    <SocialsVue v-if="!$route.path.includes('admin')" />

    <Nuxt :class="$route.path.includes('admin') ? 'admin' : ''" />

    <FooterVue v-if="!$route.path.includes('admin')" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopSideBarVue from "../components/top-side-bar.vue";
import HeaderVue from "../components/header.vue";
import SocialsVue from "../components/socials.vue";
import FooterVue from "../components/footer.vue";

export default Vue.extend({
  components: {
    TopSideBarVue,
    HeaderVue,
    SocialsVue,
    FooterVue
  },
});
</script>
