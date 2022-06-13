<template>
  <b-card
    :img-src="img"
    class="shadow"
    style="border: none; border-radius: 7px"
  >
    <b-body class="p-5">
      <h4> {{ name }} </h4>

      <p class="text-muted">
        {{ cover }}
      </p>

      <NuxtLink :to="pathHandler(`/services/${seourl}`)">
        <b-button variant="primary">
          {{ $t('read-more') }}
        </b-button>
      </NuxtLink>
    </b-body>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../tools/path-handler'

export default Vue.extend({
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    seourl: String
  },
  methods: {
    pathHandler
  }
})
</script>
