<template>
  <div class="contact">
    <PaginationHeader title="paitentRights" />

    <div class="white-block">
      <div class="container pt-5">
        <h1> {{$t('titlePaitentRights')}} </h1>

        <p v-html="getLocaleKey(data, 'content')"></p>

        <br>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../components/pagination-header.vue";
import getLocaleKey from '../ts/get-locale'

export default {
  components: {
    PaginationHeader,
  },

  data() {
    return {
      data: {},
    };
  },

  methods: {
    getLocaleKey
  },

  async created() {
    this.data = (await this.$axios.get("/paitent-rights")).data.data;
  },
};
</script>

<style>
iframe {
  width: 100% !important;
}
</style>