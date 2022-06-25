<template>
  <div class="blog-card">
    <b-card
      :img-src="img"
      tag="article"
      img="top"
      style="border-radius: 13px; overflow: hidden"
      class="d-block blog-card"
    >
      <b-card-body>
        <h5>{{ title }}</h5>

        <hr />

        <i class="bi bi-calendar2-week" />
        <small> {{ date }} </small> &nbsp;&nbsp;&nbsp;&nbsp;

        <p class="mt-3">
          <small class="text-muted">{{ cover }} </small>
        </p>

        <NuxtLink :to="pathHandler(`/blog/${seourl}`)">
          <b-button variant="outline-primary" class="mt-3">
          {{ $t("viewDetails") }}
        </b-button>
        </NuxtLink>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";

export default Vue.extend({
  props: ["img", "title", "cover", "date", "seourl"],
  methods: {
    pathHandler
  }
});
</script>

<style scoped>
.blog-card {
  height: max-content !important;
}
</style>