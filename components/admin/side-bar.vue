<template>
  <div style="position: sticky; top: 0; z-index: 1000">
    <div class="side-bar white-block d-none d-xl-flex">
      <div class="nav d-block p-5">
        <img src="../../assets/images/logo.png" class="mb-5 w-100">
        <!-- <div class="nav-title">İçerikler</div> -->

        <NuxtLink
          v-for="(i, index) in routes"
          :key="index"
          class="item"
          :class="$route.path.includes(i.path) ? 'active' : ''"
          :to="pathHandler('/admin' + i.path)"
        >
          <i class="bi" :class="'bi-' + i.icon" />
          <div class="text">
            {{ i.text }}
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      class="side-bar mobile-side-bar d-flex d-xl-none col-sm-5 col-7"
      :class="showMobileSideBar ? 'open' : 'close'"
    >
      <div class="nav d-block p-5 text-center mb-5">
        <img src="../../assets/images/logo.png" class="mb-5 w-50">
        <!-- <div class="nav-title">İçerikler</div> -->

        <NuxtLink
          v-for="(i, index) in routes"
          :key="index"
          class="item"
          :class="$route.path.includes(i.path) ? 'active' : ''"
          :to="pathHandler('/admin' + i.path)"
          @click="setMobileSideBarShow(false)"
        >
          <i class="bi" :class="'bi-' + i.icon" />
          <div class="text">
            {{ i.text }}
          </div>
        </NuxtLink>
      </div>
      <div class="shadow" @click="setMobileSideBarShow(false)" />
    </div>

    <div
      class="open-mobile-side-bar d-flex d-xl-none centered"
      @click="setMobileSideBarShow(true)"
    >
      <i class="bi bi-list" style="font-size: 30px" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../../tools/path-handler'

interface IRoute {
  icon: string;
  path: string;
  text: string;
}

interface IData {
  routes: IRoute[];
  showMobileSideBar: boolean;
}

export default Vue.extend({
  data: (): IData => ({
    routes: [
      { icon: 'journal-text', path: '/guide', text: 'Klavuz' },
      { icon: 'person-heart', path: '/doctor', text: 'Doktorlar' },
      { icon: 'box2-heart', path: '/service', text: 'Hizmetler' },
      { icon: 'images', path: '/gallery', text: 'Galeri' },
      { icon: 'card-text', path: '/blog', text: 'Blog' },
      { icon: 'building', path: '/contracts', text: 'Kurumlar' },
      { icon: 'body-text', path: '/about', text: 'Hakkımızda' },
      { icon: 'house', path: '/home', text: 'Anasayfa' },
      { icon: 'telephone', path: '/contact', text: 'İletişim' },
      { icon: 'tag-fill', path: '/price', text: 'Fiyatlandırmalar' },
      { icon: 'tag-fill', path: '/social', text: 'Sosyal Medya' },
    ],
    showMobileSideBar: false
  }),
  methods: {
    pathHandler,

    setMobileSideBarShow (m: boolean = true) {
      this.showMobileSideBar = m
    }
  }
})
</script>

<style scoped>
.mobile-side-bar {
  position: fixed !important;
  z-index: 999;
  transition: 0.2s;
}

.open {
  right: 0;
  opacity: 1;
  visibility: visible;
}

.close {
  right: -50%;
  opacity: 0;
  visibility: hidden;
}

.open-mobile-side-bar {
  position: fixed;
  right: 2em;
  bottom: 2em;
  border: 1px solid var(--border-2);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: auto;
  background: white;
}

.side-bar {
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid var(--border-2);
  display: flex;
  justify-content: center;
  padding-top: 3em;
  background: black;
  color: white;
}

.mobile-side-bar .shadow {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: black;
  opacity: 0.3;
}

.nav .item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3em 1em;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 0.5em;
}

.nav .active {
  position: relative;
}

.nav .active .text {
  font-weight: 600;
}

.nav .active::before {
  content: " ";
  background: white;
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
