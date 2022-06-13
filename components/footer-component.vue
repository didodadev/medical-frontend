<template>
  <footer>
    <div class="footer-content">
      <div class="container">
        <div class="row m-0 text-muted">
          <div class="col-md-3 mb-4">
            <img src="../assets/images/logo.png" alt="" width="100%">

            <p>
              203, Envato Labs, Behind Alis Steet, Melbourne,
              Australia.immersion along the information close the loop on
              focusing
            </p>

            <div class="socials d-flex">
              <div class="item">
                <i class="bi bi-instagram" />
              </div>

              <div class="item">
                <i class="bi bi-facebook" />
              </div>

              <div class="item">
                <i class="bi bi-youtube" />
              </div>

              <div class="item">
                <i class="bi bi-twitter" />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <h3> {{ $t('footer pages') }} </h3>
            <div class="title-line" />

            <p>
              <NuxtLink :to="pathHandler('/home')">
                Home
              </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/about')">
                About
              </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/services')">
                Services
              </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/contact')">
                Contact
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container">
        © 2021 ThemeMascot. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import pathHandler from '../tools/path-handler'

export default Vue.extend({
  methods: {
    pathHandler
  }
})
</script>

<style scoped>
.info i {
  font-size: 40px;
  color: white;
}

.footer-content {
  background: #1a1b1b;
  padding: 2em;
}

.footer-content * {
  color: white;
}

.socials .item {
  width: 30px;
  height: 30px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
  border-radius: 5px;
}

.bottom {
  background: #2a2b2b;
  color: white;
  padding: 1em;
  padding-left: 2.8em;
}

.title-line {
  display: flex;
  margin-bottom: 1em;
}

.title-line::before {
  content: " ";
  width: 20%;
  background: var(--secondary);
  height: 3px;
}

.title-line::after {
  content: " ";
  width: 80%;
  background: #363838;
  height: 3px;
}
</style>
