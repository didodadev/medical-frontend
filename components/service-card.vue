<template>
  <b-card
    :img-src="img"
    class="shadow"
    style="border-radius: 13px; height: 100%; border: 1px solid var(--border-2); overflow: hidden;"
  >
    <b-body class="p-5">
      <h4> {{ name }} </h4>

      <p class="text-muted">
        {{ cover }}
      </p>

      <NuxtLink :to="pathHandler(`/services/${seourl}`)">
        <b-button variant="primary">
          {{ $t('readMore') }}
        </b-button>
      </NuxtLink>
    </b-body>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../tools/path-handler'

export default Vue.extend({
  props: ['img', 'name', 'cover', 'seourl'],
  methods: {
    pathHandler
  }
})
</script>