<template>
  <div class="header">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-2">
          <img
            src="../assets/images/logo.png"
            width="100%"
          >
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
          <i class="bi bi-list" style="font-size: 30px" @click="changeShowDrawer(true)" />
        </div>

        <div class="bottom d-flex justify-content-center col-1 m-auto mb-3">
          <i
            class="bi bi-search"
            style="font-size: 18px"
            @click="openSearch()"
          />

          <!-- @ts-expected-error -->
          <a-modal v-model:visible="showSearch" centered footer="">
            <div class="search-input">
              <input
                type="text"
                :placeholder="$t('header-search-placeholder')"
              >

              <i class="bi bi-search" />
            </div>
          </a-modal>
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
            <NuxtLink :to="pathHandler(i.path)" @click="changeShowDrawer(false)">
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
import Vue from 'vue'
import pathHandler from '../tools/path-handler'

interface IListItem {
  i18nTitle: string;
  path: string;
}

interface IList {
  i18nTitle: string;
  path: string;
  list?: IListItem[];
  extraKey?: string
}

interface IData {
  headerNavs: IList[];
  showSearch: boolean;
  showDrawer: boolean;
}

export default Vue.extend({
  data (): IData {
    return {
      headerNavs: [
        {
          i18nTitle: 'header-home',
          path: '/home'
        },
        {
          i18nTitle: 'header-about',
          path: '/about'
        },
        {
          i18nTitle: 'header-services',
          path: '/services',
          extraKey: 'service'
        },
        {
          i18nTitle: 'header-contact',
          path: '/contact'
        },
        {
          i18nTitle: 'header-doctors',
          path: '/doctors',
          extraKey: 'doctor'
        },
        {
          i18nTitle: 'header-contract',
          path: '/contracts',
          extraKey: 'contract'
        }
      ],
      showSearch: false,
      showDrawer: false
    }
  },
  mounted () {
    this.$forceUpdate()
  },
  methods: {
    pathHandler,

    openSearch () {
      this.showSearch = true
    },

    changeShowDrawer (t: boolean) {
      this.showDrawer = t
    },

    isActive (p: string, e: string = 'unknow'): string {
      const handlePath = pathHandler(p)
      let rootPath = this.$route.path

      if (rootPath.endsWith('/')) { rootPath = rootPath.slice(0, rootPath.length - 1) }

      if (rootPath === handlePath || rootPath.includes(e)) { return 'active' }

      return ''
    }
  }
})
</script>

<style scoped>
.header {
  background: white;
  z-index: 990999;
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--border-1)
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
  margin: .6em;
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
  transition: .2s;
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
  transition: .3s;
}

.drawer .shadow {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: .3;
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
