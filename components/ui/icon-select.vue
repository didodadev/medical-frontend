<template>
  <div class="icon-select">
    <div class="selected-icon">
      <i class="bi" :class="selectedIcon" />
    </div>

    <div class="cover" @click="showIconsList = !showIconsList">
      <i class="bi bi-pen-fill" style="color: white" />
    </div>

    <div class="icon-list" :class="showIconsList ? 'open' : 'close'">
      <div class="header">
        Simgeler

        <i
          class="bi bi-x"
          style="font-size: 18px"
          @click="showIconsList = false"
        />
      </div>

      <div v-if="social" class="row m-0 p-0 w-100 mt-2">
        <div
          class="col-1 d-flex align-items-center justify-content-center"
          v-for="(i, index) in socialIcons"
          :key="index"
        >
          <i
            :class="`${i} ${i === selectedIcon ? 'active' : ''}`"
            class="icon bi"
            @click="selectIcon(i)"
          />
        </div>
      </div>

      <div v-else class="row m-0 p-0 w-100 mt-2">
        <div
          class="col-1 d-flex align-items-center justify-content-center"
          v-for="(i, index) in showIcons"
          :key="index"
        >
          <i
            :class="`${i} ${i === selectedIcon ? 'active' : ''}`"
            class="icon bi"
            @click="selectIcon(i)"
          />
        </div>
      </div>

      <small
        v-show="lastMoreIndex < icons.length - 1"
        class="pb-2"
        @click="showMoreIcons"
      >
        &nbsp; Daha fazla göster
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import icons from "../../tools/bootstrap-icons-names";

interface IData {
  selectedIcon: string;
  icons: string[];
  showIcons: string[];
  lastMoreIndex: number;
  showIconsList: boolean;
  socialIcons: string[];
}

const socialIcons: string[] = [
  "bi-instagram",
  "bi-facebook",
  "bi-youtube",
  "bi-linkedin",
  "bi-spotify",
  "bi-twitter",
  "bi-reddit",
  "bi-google"
];

export default Vue.extend({
  props: {
    onSelect: {
      type: Function,
      required: true,
    },
    social: Boolean,
  },
  data: (): IData => ({
    selectedIcon: "bi-question",
    icons,
    showIcons: icons.slice(0, 100),
    lastMoreIndex: 0,
    showIconsList: false,
    socialIcons,
  }),
  methods: {
    showMoreIcons() {
      this.showIcons.push(
        ...this.icons.slice(this.lastMoreIndex, this.lastMoreIndex + 150)
      );

      this.lastMoreIndex += 150;
    },
    selectIcon(icon: string) {
      this.selectedIcon = icon;
      this.showIconsList = false;

      if (this.onSelect) {
        this.onSelect(icon);
      }
    },
  },
});
</script>

<style scoped>
.close {
  opacity: 0;
  visibility: hidden;
}

.open {
  opacity: 1;
  visibility: visible;
}

.icon-select {
  padding: 0.4em;
  border: 1px solid var(--border-2);
  border-radius: 6px;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
}

.icon-list {
  position: absolute;
  background: white;
  border: 1px solid var(--border-2);
  border-radius: 6px;
  /* top: 0; */
  left: 50px;
  max-height: 250px;
  width: 400px;
  overflow: auto;
  top: 0;
  z-index: 99;
  transition: 0.2s;
}

.icon-list .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid var(--border-2);
  position: sticky;
  top: 0;
  height: 40px;
  padding: 0 1em;
}

.icon-list .icon {
  padding: 1em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  height: 20px;
}

.icon-list .icon:hover {
  background-color: var(--primary);
  color: white;
}

.icon-select .selected-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
}

.icon-select .cover {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  opacity: 0;
}

.icon-select .cover::before {
  position: absolute;
  content: " ";
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  opacity: 0.7;
  z-index: -1;
  border-radius: 6px;
}

.icon-select:hover .cover {
  opacity: 1;
}
</style>
