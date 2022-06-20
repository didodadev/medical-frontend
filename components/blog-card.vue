<template>
  <div class="blog-card">
    <b-card :img-src="img" tag="article" img="top" style="border-radius: 13px; overflow: hidden;">
      <b-card-body>
        <h5>{{ title }}</h5>

        <hr>

        <i class="bi bi-calendar2-week" />
        <small> {{date}} </small> &nbsp;&nbsp;&nbsp;&nbsp;

        <p class="mt-3">
          <small class="text-muted">{{ cover }} </small>
        </p>

        <b-button variant="outline-primary" class="mt-3">
          {{ $t('viewDetails') }}
        </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['img', 'title', 'cover', 'date']
})
</script>
