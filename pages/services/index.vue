<template>
  <div>
    <PaginationHeader title="serviceServices" />

    <div class="white-block p-5">
      <div class="container">
        <div class="row services">
          <div class="col-md-4" v-for="(i, index) in data" :key="index">
            <ServiceCard
              :img="publicURL(i.thumbnailURL)"
              :name="isEn ? i.titleEN : i.title"
              :cover="isEn ? i.coverLetterEN : i.coverLetter"
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

export default Vue.extend({
  components: {
    ServiceCard,
    PaginationHeader,
  },
  data: () => ({
    data: {},
    isEn: false,
  }),
  methods: { pathHandler, publicURL },
  async created() {
    // @ts-expect-error
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.data = (await this.$axios.get("/service")).data.data;
  },
});
</script>

<style scoped>
.services > div {
  margin-bottom: 1.5em;
}
</style>
