<template>
  <div class="guide">
    <div class="markdown" v-html="marked(`
# Guide Page
    `)"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { marked } from "marked";

export default Vue.extend({
  methods: {
    marked,
  },
});
</script>