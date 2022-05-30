<template>
  <div class="doctors">
    <PaginationHeader title="doctor" subTitle="Maria" />

    <div class="white-block">
      <div class="container p-5">
        <h4 class="text-muted">Doctor</h4>

        <h2>Maria Gear</h2>

        <div class="mt-4 text-muted">
          <i>
            One of the world’s leading hospitals providing safe & compassionate
            care at its best for everyone. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque commodi molestiae autem fugit
            consectetur dolor ullam illo ipsa numquam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Atque commodi molestiae autem
            fugit consectetur dolor ullam illo ipsa numquam. One of the world’s
            leading hospitals providing safe & compassionate care at its best
            for everyone. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Atque commodi molestiae autem fugit consectetur dolor ullam
            illo ipsa numquam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Atque commodi
            <br />
            <br />
            molestiae autem fugit consectetur dolor ullam illo ipsa numquam. One
            of the world’s leading hospitals providing safe & compassionate care
            at its best for everyone. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Atque commodi molestiae autem fugit consectetur
            dolor ullam illo ipsa numquam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque commodi molestiae autem fugit
            consectetur
            <br />
            dolor ullam illo ipsa numquam. One of the world’s leading hospitals
            providing safe & compassionate care at its best for everyone. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
            <br />
            <br />

            molestiae autem fugit consectetur dolor ullam illo ipsa numquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            commodi
            <br />
            <br />
            molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.molestiae autem fugit consectetur dolor ullam illo ipsa
            numquam.
          </i>
        </div>

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
  </div>
</template>

<script>
import PaginationHeader from "../../components/pagination-header.vue";

export default {
  components: {
    PaginationHeader,
  },
};
</script>