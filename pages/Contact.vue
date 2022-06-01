<template>
  <div class="contact">
    <PaginationHeader title="contact" />

    <div class="white-block">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-6 mb-5" style="padding-right: 3em;">
            <form action="">
              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="text"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="30"
                >
                <label for="floatingInput">{{ $t('contact-fullname') }}</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="text"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="30"
                >
                <label for="floatingInput">{{ $t('contact-fullname') }}</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                  maxlength="40"
                >
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
                <label for="floatingInput">{{ $t('contact-message') }}</label>
              </div>

              <button class="btn btn-primary" type="submit">
                {{ $t('contact-send-message') }}
              </button>
            </form>
          </div>

          <div class="col-md-6">
            <h5> <i class="bi bi-telephone-fill" /> &nbsp; {{ $t('phone') }} 1 </h5>
            <p class="text-muted">
              0546 789 0567
            </p>

            <h5> <i class="bi bi-telephone-fill" /> &nbsp; {{ $t('phone') }} 2 </h5>
            <p class="text-muted">
              0546 789 5678
            </p>

            <h5> <i class="bi bi-envelope" /> &nbsp; Email </h5>
            <p class="text-muted">
              infohospital@gmail.com
            </p>
          </div>
        </div>

        <iframe
          class="mt-5"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24032.45208615568!2d29.042556698949795!3d41.15511822241542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1653470364070!5m2!1str!2str"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from '../components/pagination-header.vue'

export default {
  components: {
    PaginationHeader
  }
}
</script>
