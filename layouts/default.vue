<template>
  <div class="default-template container-fluid p-0">
    <TopSideBarVue v-if="!$route.path.includes('admin')" />
    <HeaderVue v-if="!$route.path.includes('admin')" />
    <SocialsVue v-if="!$route.path.includes('admin')" />

    <div v-if="$route.path.includes('admin')" class="admin">
      <div class="row p-0 m-0 white-block">
        <div class="col-md-2 p-0">
          <AdminSideBar />
        </div>

        <div class="col-md-10 p-5">
          <div class="container-xl">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Nuxt />
    </div>

    <FooterVue v-if="!$route.path.includes('admin')" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopSideBarVue from "../components/top-side-bar.vue";
import HeaderVue from "../components/header.vue";
import SocialsVue from "../components/socials.vue";
import FooterVue from "../components/footer.vue";
import AdminSideBar from "../components/admin/side-bar.vue";

export default Vue.extend({
  components: {
    TopSideBarVue,
    HeaderVue,
    SocialsVue,
    FooterVue,
    AdminSideBar,
  },
});
</script>
