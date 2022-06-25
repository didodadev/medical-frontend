<template>
  <footer>
    <div class="footer-content">
      <div class="container">
        <div class="row m-0 text-muted">
          <div class="col-md-3 mb-4 text-center">
            <img src="../assets/images/logo.png" alt="" width="100%" />

            <div class="socials d-flex justify-content-center">
              <div class="item" v-for="(i, index) in data" :key="index">
                <a :href="i.link">
                  <i class="bi" :class="i.icon" />
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <h3>{{ $t("footerPages") }}</h3>
            <div class="title-line" />

            <p>
              <NuxtLink :to="pathHandler('/home')"> {{ $t("home") }} </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/about')">
                {{ $t("about") }}
              </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/services')">
                {{ $t("services") }}
              </NuxtLink>
            </p>

            <p>
              <NuxtLink :to="pathHandler('/contact')">
                {{ $t("contact") }}
              </NuxtLink>
            </p>
          </div>

          <div class="col-md-3">
            <h3>{{ $t("homeLatest") }}</h3>
            <div class="title-line" />

            <div v-for="(i, index) in latest" :key="index" class="mb-3">
              <NuxtLink :to="pathHandler(`/blog/${i.seourl}`)">
                <h6 class="mb-0">{{ getLocaleKey(i, 'title') }}</h6>

                <small class="text-muted">
                  {{ getLocaleKey(i, 'coverLetter') }}
                  {{
                    getLocaleKey(i, 'coverLetter').length > 100 ? '...' : null
                  }}
                </small>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom text-center">
      <div class="container">Medion Premium</div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";
import getLocaleKey from '../ts/get-locale'

export default Vue.extend({
  data: () => ({
    data: {},
    latest: [],
  }),
  async created() {
    this.data = (await this.$axios("/social")).data.data;
    this.latest = (await this.$axios("/blog?range=3")).data.data;
  },
  methods: {
    pathHandler,
    getLocaleKey
  },
});
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
