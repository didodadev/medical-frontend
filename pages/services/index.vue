<template>
  <div>
    <PaginationHeader title="serviceServices" />

    <div class="white-block p-5">
      <div class="container">
        <div class="column services">
          <div class="mb-3" v-for="(i, index) in data" :key="index">
            <ServiceCard
              :img="publicURL(i.thumbnailURL)"
              :name="getLocaleKey(i, 'title')"
              :cover="getLocaleKey(i, 'coverLetter')"
              :seourl="i.seourl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../../tools/path-handler";
import ServiceCard from "../../components/service-card.vue";
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default Vue.extend({
  components: {
    ServiceCard,
    PaginationHeader,
  },
  data: () => ({
    data: {},
  }),
  methods: { pathHandler, publicURL, getLocaleKey },
  async created() {
    this.data = (await this.$axios.get("/service")).data.data;
  },
});
</script>

<style scoped>
.services > div {
  margin-bottom: 1.5em;
}
</style>
