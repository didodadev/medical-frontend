<template>
  <div class="side-bar white-block">
    <div class="nav d-block">
      <!-- <div class="nav-title">İçerikler</div> -->

      <NuxtLink
        class="item"
        v-for="(i, index) in routes"
        :key="index"
        :class="$route.path.includes(i.path) ? 'active' : ''"
        :to="pathHandler('/admin' + i.path)"
      >
        <i class="bi" :class="'bi-' + i.icon"></i>
        <div class="text">{{ i.text }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../../tools/path-handler";

interface IRoute {
  icon: string;
  path: string;
  text: string;
}

interface IData {
  routes: IRoute[];
}

export default Vue.extend({
  data: (): IData => ({
    routes: [
      { icon: "journal-text", path: "/guide", text: "Klavuz" },
      { icon: "person-heart", path: "/doctor", text: "Doktorlar" },
      { icon: "box2-heart", path: "/service", text: "Hizmetler" },
      { icon: "images", path: "/gallery", text: "Galeri" },
      { icon: "card-text", path: "/blog", text: "Blog" },
      { icon: "telephone", path: "/contact", text: "İletişim" },
      { icon: "building", path: "/contracts", text: "Kurumlar" },
      { icon: "blockquote-right", path: "/about", text: "Hakkımızda" },
      { icon: "house", path: "/home", text: "Anasayfa" },
    ],
  }),
  methods: {
    pathHandler
  }
});
</script>

<style scoped>
.side-bar {
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid var(--border-2);
  display: flex;
  justify-content: center;
  padding-top: 3em;
  background: #292A43;
  color: white;
}

.nav .item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3em 1.5em;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 0.5em;
}

.nav .active {
  position: relative;
  background-color: var(--primary);
}

.nav .active .text {
  font-weight: 600;
}

.nav .active::before {
  content: " ";
  background: var(--primary);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: -1;
}

.nav .item .text {
  z-index: 3;
}

.nav .item i {
  margin-right: 0.5em;
  font-size: 20px;
}

.nav .nav-title {
  font-size: 20px;
}
</style>