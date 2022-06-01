<template>
  <div class="blog-card">
    <b-card :img-src="img" tag="article" img="top">
      <b-card-body>
        <h5>{{ title }}</h5>

        <hr>

        <i class="bi bi-calendar2-week" />
        <small>Jul 20, 2021</small> &nbsp;&nbsp;&nbsp;&nbsp;
        <i class="bi bi-chat-text" /> <small>Comments</small>

        <p class="mt-3">
          <small class="text-muted">{{ cover }} </small>
        </p>

        <b-button variant="outline-primary" class="mt-3">
          {{ $t('view-details') }}
        </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      default: ''
    }
  }
})
</script>
