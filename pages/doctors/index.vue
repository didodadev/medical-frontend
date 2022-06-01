<template>
  <div class="white-block">
    <PaginationHeader title="doctors" />

    <div class="container p-5 pt-0">
      <div class="row mt-5">
        <div class="col-md-4">
          <DoctorCard
            img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
            name="Maria"
            branch="Cardiolog"
          />
        </div>

        <div class="col-md-4">
          <DoctorCard
            img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
            name="Maria"
            branch="Cardiolog"
          />
        </div>

        <div class="col-md-4">
          <DoctorCard
            img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
            name="Maria"
            branch="Cardiolog"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from '../../components/pagination-header.vue'
import DoctorCard from '../../components/doctor-card.vue'

export default {
  components: {
    PaginationHeader,
    DoctorCard
  }
}
</script>
