<template>
  <div class="contact">
    <PaginationHeader title="contact" />

    <div class="white-block">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-6 mb-5" style="padding-right: 3em">
            <form action="">
              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="text"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="30"
                />
                <label for="floatingInput">{{ $t("contactFullname") }}</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="text"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="30"
                />
                <label for="floatingInput">{{ $t("contactFullname") }}</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="40"
                />
                <label for="floatingInput">Mail</label>
              </div>

              <div class="form-floating mb-3">
                <textarea
                  id="floatingInput"
                  class="form-control"
                  placeholder="name@example.com"
                  style="height: 150px"
                  required
                  maxlength="500"
                />
                <label for="floatingInput">{{ $t("contactMessage") }}</label>
              </div>

              <button class="btn btn-primary" type="submit">
                {{ $t("contactSendMessage") }}
              </button>
            </form>
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

        <div v-html="data.location"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../components/pagination-header.vue";

export default {
  components: {
    PaginationHeader,
  },
  data() {
    return {
      data: {},
    };
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