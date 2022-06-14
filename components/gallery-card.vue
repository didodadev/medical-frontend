<template>
  <div class="gallery-card">
    <img :src="img" width="100%" />

    <Modal :show="show" :close="() => (show = false)">
      <template v-slot:body>
        <img :src="img" width="100%" @click="show = !show" />
      </template>
    </Modal>

    <div class="cover" @click="show = !show">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "./ui/modal-component.vue";

export default Vue.extend({
  props: ["img", "title", "text"],
  components: {
    Modal,
  },
  data: () => ({
    show: false,
  }),
});
</script>

<style scoped>
.gallery-card {
  position: relative;
}

.gallery-card:hover .cover {
  opacity: 0.7;
}

.gallery-card .cover {
  transition: 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0;
  text-align: left;
  padding: 2em;
  cursor: pointer;
}

.gallery-card .cover * {
  color: white;
}
</style>
