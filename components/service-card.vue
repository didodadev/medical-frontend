<template>
  <b-card
    :img-src="img"
    style="border-radius: 13px; height: 100%; border: none; overflow: hidden"
    class="service-card"
  >
    <b-body class="p-5">
      <h4>{{ name }}</h4>

      <p class="text-muted">
        {{ cover }}
      </p>

      <NuxtLink :to="pathHandler(`/services/${seourl}`)">
        <b-button variant="primary">
          {{ $t("readMore") }}
        </b-button>
      </NuxtLink>
    </b-body>
  </b-card>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";

export default Vue.extend({
  props: ["img", "name", "cover", "seourl"],
  methods: {
    pathHandler,
  },
});
</script>

<style scoped>
.service-card img {
  height: 100%;
}

.service-card .card-body {
  position: absolute;
  left: 0;
}

.service-card .card-body * {
  color: white;
}

.service-card::before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
</style>