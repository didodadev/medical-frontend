<template>
  <div class="white-block">
    <PaginationHeader title="doctors" />

    <div class="container p-5 pt-0">
      <div class="row mt-5">
        <div class="col-md-4">
          <NuxtLink :to="pathHandler('/doctors/test')">
            <DoctorCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
              name="Maria"
              branch="Cardiolog"
            />
          </NuxtLink>
        </div>

        <div class="col-md-4">
          <NuxtLink :to="pathHandler('/doctors/test')">
            <DoctorCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
              name="Maria"
              branch="Cardiolog"
            />
          </NuxtLink>
        </div>

        <div class="col-md-4">
          <NuxtLink :to="pathHandler('/doctors/test')">
            <DoctorCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
              name="Maria"
              branch="Cardiolog"
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
import pathHandler from '../../tools/path-handler'

export default {
  components: {
    PaginationHeader,
    DoctorCard,
  },
  methods: {
    pathHandler
  }
};
</script>

<style scoped>
.row > div {
  cursor: pointer
}
</style>
