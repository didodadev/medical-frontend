<template>
  <div class="default-template container-fluid p-0">
    <TopSideBarVue v-if="!$route.path.includes('admin')" />
    <HeaderVue v-if="!$route.path.includes('admin')" />
    <SocialsVue v-if="!$route.path.includes('admin')" />

    <div v-if="$route.path.includes('admin')" class="admin">
      <div class="row p-0 m-0 white-block">
        <div class="col-xl-2 p-0">
          <AdminSideBar />
        </div>

        <div class="col-xl-10 p-0">
          <div class="admin-header">
            <h3 class="page-title m-0">
              <i class="bi" ref="icon" :class="icon"></i> &nbsp;

              {{ title }}
            </h3>
          </div>

          <div class="container-xl mb-5">
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
import pathHandler from "../tools/path-handler";

interface RouteTitleAndName {
  [key: string]: {
    title: string;
    icon: string;
  };
}

const routeTitleAndNames: RouteTitleAndName = {
  [pathHandler("/admin/blog")]: {
    title: "Blog",
    icon: "bi-card-text",
  },
  [pathHandler("/admin/guide")]: {
    title: "Klavuz",
    icon: "bi-journal-text",
  },
  [pathHandler("/admin/doctor")]: {
    title: "Doktorlar",
    icon: "bi-person-heart",
  },
  [pathHandler("/admin/gallery")]: {
    title: "Galeri",
    icon: "bi-images",
  },
  [pathHandler("/admin/service")]: {
    title: "Hizmetler",
    icon: "bi-box2-heart",
  },
  [pathHandler("/admin/contact")]: {
    title: "İletişim",
    icon: "bi-telephone",
  },
  [pathHandler("/admin/contracts")]: {
    title: "Kurumlar",
    icon: "bi-building",
  },
  [pathHandler("/admin/about")]: {
    title: "Hakkımızda",
    icon: "bi-body-text",
  },
  [pathHandler("/admin/home")]: {
    title: "Anasayfa",
    icon: "bi-house",
  },
};

interface IData {
  title: string;
  icon: string;
}

export default Vue.extend({
  data: () => ({
    title: "",
    icon: "",
  }),
  methods: {
    changeTitleAndIcon() {
      const routeData = routeTitleAndNames[this.$route.fullPath];

      if (routeData) {
        this.icon = routeData.icon;
        this.title = routeData.title;
      }
    },
  },
  updated() {
    this.changeTitleAndIcon();
  },
  created() {
    this.changeTitleAndIcon();

    this.$forceUpdate()
  },
  components: {
    TopSideBarVue,
    HeaderVue,
    SocialsVue,
    FooterVue,
    AdminSideBar,
  },
});
</script>
