<template>
  <div>
    <PaginationHeader title="service-services" />

    <div class="white-block p-5">
      <div class="container">
        <div class="row services">
          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              name="Activity Service"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
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
import PaginationHeader from '../../components/pagination-header.vue'

export default Vue.extend({
  methods: { pathHandler },
  components: {
    ServiceCard,
    PaginationHeader
  },
});
</script>

<style scoped>
.services > div {
  margin-bottom: 1.5em;
}
</style>