
<style></style>
<template>
  <div class="doctors">
    <PaginationHeader title="doctorsDoctor" sub-title="Maria" />

    <div class="white-block">
      <div class="container p-5">
        <h4 class="text-muted">
          {{ $t("doctors-doctor") }}
        </h4>

        <div>
          <img
            :src="publicURL(data.thumbnailURL)"
            :alt="data.fullName"
            width="200"
            height="auto"
          />
          <h2>{{ data.fullName }}</h2>
        </div>

        <div
          class="mt-4 text-muted"
          v-html="isEn ? data.aboutEN : data.about"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";

export default {
  components: {
    PaginationHeader,
  },
  methods: {
    publicURL,
  },
  data: () => ({ data: {}, isEn: false }),
  async created() {
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }
    this.data = (
      await this.$axios.get(`/doctor/${this.$route.params.id}`)
    ).data.data;
  },
};
</script>

<style scoped>
.row > div {
  cursor: pointer;
}
</style>