<template>
  <div class="default-template container-fluid p-0">
    <!-- <TopSideBarVue v-if="!$route.path.includes('admin')" /> -->
    <HeaderVue v-if="!$route.path.includes('admin')" />
    <SocialsVue v-if="!$route.path.includes('admin')" />

    <div
      v-if="$route.path.includes('admin') && !$route.path.includes('login')"
      class="admin"
    >
      <div class="row p-0 m-0 white-block">
        <div class="col-xl-2 p-0">
          <AdminSideBar />
        </div>

        <div class="col-xl-10 p-0">
          <div class="admin-header">
            <h3 class="page-title m-0">
              <i ref="icon" class="bi" :class="icon" /> &nbsp;

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

    <div class="toast-container">
      <div
        v-for="(i, index) in notifications"
        :key="index"
        class="toast d-block"
        :class="i.type ? 'text-bg-success' : 'text-bg-danger'"
        role="alert"
      >
        <!-- <div class="toast-header">
        <strong class="me-auto"> {{ i.title }} </strong>
      </div> -->
        <div class="toast-body">
          <i class="bi bi-check2-circle" v-if="i.type"></i>
          <i class="bi bi-x-circle" v-if="!i.type"></i>

          <strong>
            &nbsp; {{ i.message }}
          </strong>
        </div>
      </div>
    </div>

    <FooterVue v-if="!$route.path.includes('admin')" />
  </div>
</template>

<style lang="css">
.toast-container {
  position: fixed;
  top: 1em;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 999999999;
  max-height: 300px;
  overflow: hidden;
}

.text-bg-success {
  background-color: #1ABC9C !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import TopSideBarVue from "../components/top-side-bar.vue";
import HeaderVue from "../components/header-component.vue";
import SocialsVue from "../components/social-icons.vue";
import FooterVue from "../components/footer-component.vue";
import AdminSideBar from "../components/admin/side-bar.vue";
import pathHandler from "../tools/path-handler";
import { mapState, mapActions } from "vuex";

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
  [pathHandler("/admin/price")]: {
    title: "Fiyatlandırmalar",
    icon: "bi-tag-fill",
  },
  [pathHandler("/admin/social")]: {
    title: "Sosyal Medya",
    icon: "bi-globe",
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
  computed: {
    ...mapState(["notifications"]),
  },
  components: {
    TopSideBarVue,
    HeaderVue,
    SocialsVue,
    FooterVue,
    AdminSideBar,
  },
  data: (): IData => ({
    title: "",
    icon: "",
  }),
  updated() {
    this.changeTitleAndIcon();
  },
  created() {
    this.changeTitleAndIcon();

    this.$forceUpdate();
  },
  methods: {
    ...mapActions(["addNotification"]),
    changeTitleAndIcon() {
      const routeData = routeTitleAndNames[this.$route.fullPath];

      if (routeData) {
        this.icon = routeData.icon;
        this.title = routeData.title;
      }
    },
  },
});
</script>
