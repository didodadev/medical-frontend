<template>
  <div class="contact">
    <PaginationHeader title="contact" />

    <div class="white-block">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-6">
            <h1> {{ $t('contactMe') }} </h1>

            <p v-html="getLocaleKey(data, 'contactText')"></p>
          </div>

          <div class="col-md-6">
            <h5>
              <i class="bi bi-telephone-fill" /> &nbsp; {{ $t("phone") }} 1
            </h5>
            <p class="text-muted">
              {{ data.phone1 }}
            </p>

            <h5>
              <i class="bi bi-telephone-fill" /> &nbsp; {{ $t("phone") }} 2
            </h5>
            <p class="text-muted">
              {{ data.phone2 }}
            </p>

            <h5><i class="bi bi-envelope" /> &nbsp; Email</h5>
            <p class="text-muted">
              {{ data.mail }}
            </p>
          </div>
        </div>

        <div class="mt-5" v-html="data.location"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../components/pagination-header.vue";
import getLocaleKey from '../ts/get-locale'

export default {
  components: {
    PaginationHeader,
  },

  data() {
    return {
      data: {},
    };
  },

  methods: {
    getLocaleKey
  },

  async created() {
    this.data = (await this.$axios.get("/contact")).data.data;
  },
};
</script>

<style>
iframe {
  width: 100% !important;
}
</style>