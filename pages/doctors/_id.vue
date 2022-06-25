
<style></style>
<template>
  <div class="doctors">
    <PaginationHeader title="doctorsDoctor" :sub-title="data.fullName" />

    <div class="white-block">
      <div class="container p-5">
        <div>
          <img
            :src="publicURL(data.thumbnailURL)"
            :alt="data.fullName"
            width="400"
            height="auto"
          />
          <h2 class="mt-3">{{ data.fullName }}</h2>
        </div>

        <div
          class="mt-4 text-muted"
          v-html="getLocaleKey(data, 'about')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default {
  components: {
    PaginationHeader,
  },
  methods: {
    publicURL,
    getLocaleKey
  },
  data: () => ({ data: {} }),
  async created() {
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