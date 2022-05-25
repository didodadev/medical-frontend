<template>
  <div>
    <div class="pagination-header">
      <div class="cover">
        <h3 class="title">{{ $t("service-services") }}</h3>

        <small>
          Home
          <i class="bi bi-chevron-right"></i>
          Pages
          <i class="bi bi-chevron-right"></i>
          Page Title
        </small>
      </div>
    </div>
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

export default Vue.extend({
  methods: { pathHandler },
  components: {
    ServiceCard,
  },
});
</script>

<style scoped>
.services > div {
  margin-bottom: 1.5em;
}
</style>