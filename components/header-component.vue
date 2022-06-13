<template>
  <div class="header">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-2">
          <img src="../assets/images/logo.png" width="100%" />
        </div>

        <div class="col-xl-10 d-none d-xl-block">
          <div class="navs d-flex">
            <div
              v-for="(i, index) in headerNavs"
              :key="index"
              class="nav-item"
              :class="isActive(i.path, i.extraKey)"
            >
              <div class="title">
                <NuxtLink :to="pathHandler(i.path)">
                  {{ $t(i.i18nTitle) }}
                </NuxtLink>

                <i v-if="i.list" class="bi bi-chevron-down" />
              </div>

              <div v-if="i.list" class="list">
                <div v-for="(k, index2) in i.list" :key="index2" class="item">
                  <NuxtLink :to="k.path">
                    {{ $t(k.i18nTitle) }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-block d-xl-none col-2 mt-2">
          <i
            class="bi bi-list"
            style="font-size: 30px"
            @click="changeShowDrawer(true)"
          />
        </div>

        <div
          class="
            bottom
            d-flex
            align-items-center
            justify-content-center
            col-1
            m-auto
            mb-3
          "
          style="cursor: pointer"
        >
          <img
            src="../assets/images/en.webp"
            alt="en"
            width="30"
            height="20"
            @click="changeLang('en')"
          />
          &nbsp;&nbsp;&nbsp;
          <img
            src="../assets/images/tr.svg"
            alt="tr"
            width="30"
            height="20"
            @click="changeLang('tr')"
          />
        </div>
      </div>
    </div>

    <div class="drawer" :class="showDrawer ? 'show-drawer' : ''">
      <div class="shadow" @click="changeShowDrawer(false)" />

      <div class="navs">
        <div
          v-for="(i, index) in headerNavs"
          :key="index"
          class="nav-item"
          :class="isActive(i.path, i.extraKey)"
        >
          <div class="title">
            <NuxtLink
              :to="pathHandler(i.path)"
              @click="changeShowDrawer(false)"
            >
              {{ $t(i.i18nTitle) }}
            </NuxtLink>

            <i v-if="i.list" class="bi bi-chevron-down" />
          </div>

          <div v-if="i.list" class="list">
            <div v-for="(k, index2) in i.list" :key="index2" class="item">
              <NuxtLink :to="k.path">
                {{ $t(k.i18nTitle) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";

export default Vue.extend({
  data() {
    return {
      headerNavs: [
        {
          i18nTitle: "headerHome",
          path: "/home",
        },
        {
          i18nTitle: "headerAbout",
          path: "/about",
        },
        {
          i18nTitle: "headerServices",
          path: "/services",
          extraKey: "service",
        },
        {
          i18nTitle: "headerContact",
          path: "/contact",
        },
        {
          i18nTitle: "headerDoctors",
          path: "/doctors",
          extraKey: "doctor",
        },
        {
          i18nTitle: "headerContract",
          path: "/contracts",
          extraKey: "contract",
        },
      ],
      showSearch: false,
      showDrawer: false,
      isEn: false,
    };
  },
  mounted() {
    // @ts-expect-error
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.$forceUpdate();
  },
  methods: {
    pathHandler,

    openSearch() {
      this.showSearch = true;
    },

    changeShowDrawer(t: boolean) {
      this.showDrawer = t;
    },

    isActive(p: string, e: string = "unknow"): string {
      const handlePath = pathHandler(p);
      let rootPath = this.$route.path;

      if (rootPath.endsWith("/")) {
        rootPath = rootPath.slice(0, rootPath.length - 1);
      }

      if (rootPath === handlePath || rootPath.includes(e)) {
        return "active";
      }

      return "";
    },

    changeLang(lang: string) {
      this.$i18n.setLocale(lang);
    },
  },
});
</script>

<style scoped>
/* .lang-select {
  padding: 6px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
}

div[class="lang-select active-lang"] {
  background-color: var(--secondary);
  opacity: .4;
} */

.header {
  background: white;
  z-index: 990999;
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--border-2);
}

.search-input {
  margin-top: 2em;
  position: relative;
}

.search-input input {
  padding: 1em;
  border: none;
  background: rgb(245, 245, 245);
  border-radius: 6px;
  width: 100%;
}

.search-input i {
  background: rgb(233, 233, 233);
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 17px;
  width: 2em !important;
  height: 2em !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: rgb(104, 104, 104);
}

.nav-item {
  margin: 0.6em;
  position: relative;
}

.nav-item .title {
  /* background: var(--secondary); */
  /* color: white; */
  padding: 0.5em 1em;
  /* font-weight: 600; */
}

.nav-item .title i {
  margin-left: 1em;
}

.active {
  background: var(--secondary);
  color: white;
  border-radius: 30px;
}

.nav-item:hover .list {
  height: max-content;
  opacity: 1;
  visibility: visible;
  left: 0;
  z-index: 5;
}

.nav-item .list {
  transition: 0.2s;
  position: absolute;
  background: white;
  /* border-top: 2px solid black; */
  width: max-content;
  opacity: 0;
  visibility: hidden;
  left: -2em;
  /* box-shadow: 10px 10px 25px var(--shadow-1); */
  border-radius: 7px;
  /* border-bottom-left-radius: 7px; */
  min-width: 20vw;
  overflow: hidden;
  border: 1px solid var(--border-1);
}

.nav-item .list .item {
  cursor: pointer;
  padding: 0.5em 1em;
  transition: 0.3s;
  font-size: 16px;
  color: rgb(52, 52, 52);
}

.nav-item .list .item:hover {
  background: rgb(245, 245, 245);
}

.drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;
  text-align: center;
  display: flex;
  justify-content: center;
}

.drawer .navs {
  z-index: 999;
  background: white;
  padding: 3em;
  height: 100vh;
  position: absolute;
  right: -20em;
  top: 0;
  transition: 0.3s;
}

.drawer .shadow {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.3;
  z-index: -1 !important;
}

.show-drawer {
  opacity: 1;
  visibility: visible;
}

.show-drawer .navs {
  right: 0;
}
</style>
