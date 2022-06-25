<template>
  <div class="white-block">
    <PaginationHeader title="doctors" />

    <div class="container p-5 pt-0">
      <div class="row mt-5">
        <div class="col-md-4" v-for="(i, index) in data" :key="index">
          <NuxtLink :to="pathHandler(`/doctors/${i.seourl}`)">
            <DoctorCard
              :img="publicURL(i.thumbnailURL)"
              :name="getLocaleKey(i, fullName)"
              :branch="getLocaleKey(i, branch)"
              :socials="i.socials"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";
import DoctorCard from "../../components/doctor-card.vue";
import pathHandler from "../../tools/path-handler";
import publicURL from "../../ts/public-url";
import getLocaleKey from '../../ts/get-locale'

export default {
  components: {
    PaginationHeader,
    DoctorCard,
  },
  methods: {
    pathHandler,
    publicURL,
    getLocaleKey
  },
  data: () => ({ data: {} }),
  async created() {
    this.data = (await this.$axios.get("/doctor")).data.data.map(
      (d) => {
        d.socials = JSON.parse(d.socials);
        return d;
      }
    );
  },
};
</script>

<style scoped>
.row > div {
  cursor: pointer;
}
</style>
