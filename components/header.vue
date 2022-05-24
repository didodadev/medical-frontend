<template>
  <div class="header">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-2">LOGO</div>

        <div class="col-md-9">
          <div class="navs d-flex">
            <div
              class="nav-item"
              v-for="(i, index) in headerNavs"
              :key="index"
              :class="pathHandler(i.path) === $route.path + '/' ? 'active' : ''"
            >
              <div class="title">
                <NuxtLink :to="i.path">
                  {{ $t(i.i18nTitle) }}
                </NuxtLink>

                <i class="bi bi-chevron-down" v-if="i.list"></i>
              </div>

              <div class="list" v-if="i.list">
                <div v-for="(k, index) in i.list" :key="index" class="item">
                  <NuxtLink :to="k.path">
                    {{ $t(k.i18nTitle) }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom d-flex justify-content-center">
        <i
          class="bi bi-search"
          style="font-size: 18px"
          @click="openSearch()"
        ></i>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i class="bi bi-cart" style="font-size: 18px"></i>

        <a-modal v-model:visible="showSearch" footer="">
          <div class="search-input">
            <input type="text" :placeholder="$t('header-search-placeholder')" />

            <i class="bi bi-search"></i>
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";

interface IListItem {
  i18nTitle: string;
  path: string;
}

interface IList {
  i18nTitle: string;
  path: string;
  list?: IListItem[];
}

interface IData {
  headerNavs: IList[];
  showSearch: boolean;
}

export default Vue.extend({
  data(): IData {
    return {
      headerNavs: [
        {
          // i18n key
          i18nTitle: "header-home",
          path: "/",
        },
        {
          i18nTitle: "header-about",
          path: "/about",
          list: [
            { i18nTitle: "header-our-doctors", path: "/doctors" },
            { i18nTitle: "header-our-clinics-and-hospitals", path: "/clinics-and-hospitals" },
          ],
        },
        {
          i18nTitle: "header-procedures",
          path: "/procedures",
          list: [
            { i18nTitle: "header-hair-transplant", path: "/" },
            { i18nTitle: "header-dental-treatments", path: "/" },
            { i18nTitle: "header-plastic-surgery", path: "/" },
            { i18nTitle: "header-IVF", path: "/" },
          ],
        },
        {
          i18nTitle: "header-before-after",
          path: "/before-after",
        },
        {
          i18nTitle: "header-experiences",
          path: "/experiences",
        },
      ],
      showSearch: false,
    };
  },
  methods: {
    pathHandler,

    openSearch() {
      this.showSearch = true;

      console.log("test", this.showSearch);
    },
  },
  mounted() {
    this.$forceUpdate();
  },
});
</script>

<style scoped>
.header {
  background: white;
  padding-bottom: 1em;
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
  margin: 1em;
  position: relative;
}

.nav-item .title {
  /* background: var(--scondary); */
  /* color: white; */
  padding: 0.5em 1em;
  /* font-weight: 600; */
}

.active {
  background: var(--scondary);
  color: white;
  border-radius: 30px;
}

.nav-item:hover .list {
  height: max-content;
  opacity: 1;
  visibility: visible;
  left: 0;
}

.nav-item .list {
  transition: 0.2s;
  position: absolute;
  background: white;
  /* border-top: 2px solid black; */
  width: max-content;
  margin-top: 0.5em;
  opacity: 0;
  visibility: hidden;
  left: -2em;
  box-shadow: 10px 10px 25px var(--shadow-1);
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
</style>