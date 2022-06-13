<template>
  <div>
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      controls
      fade
      indicators
      label-next=""
      label-prev=""
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; overflow: hidden"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(i, index) in data.slide"
        :key="index"
        :img-src="publicURL(i)"
        style="max-height: 82.5vh"
      />
    </b-carousel>

    <div class="white-block p-4">
      <div class="container mt-5">
        <div class="row justify-content-between text-center">
          <h1>{{ data[isEn ? "welcomeTitleEN" : "welcomeTitle"] }}</h1>

          <p class="text-muted">
            {{ data[isEn ? "welcomeTextEN" : "welcomeText"] }}
          </p>
          <!-- <div class="col-md-6">
            <div class="row">
              <div class="col-md-5 l-bg-primary p-3 m-1">
                <h1><i class="bi bi-activity" /></h1>
                <h3>Event Time</h3>

                <p>Event Date: 11 To 13 Aug Event Time: 9am To 5pm</p>
              </div>
              <div class="col-md-5 l-bg-secondary p-3 m-1">
                <h1><i class="bi bi-person" /></h1>
                <h3>Speakers</h3>

                <p>Programme Workshop Presentations For Medinova Conference.</p>
              </div>
              <div class="col-md-5 l-bg-secondary p-3 m-1">
                <h1><i class="bi bi-activity" /></h1>

                <h3>Submit Opinion</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class="col-md-5 l-bg-primary p-3 m-1">
                <h1><i class="bi bi-person-fill" /></h1>

                <h3>Confirm Ticket</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div> -->
        </div>

        <div class="text-center mt-5">
          <h1>
            {{ $t("homeOur") }}
            <strong class="l-text-primary"> {{ $t("homeServices") }} </strong>
          </h1>
        </div>
        <div class="row justify-content-center services mt-5">
          <div class="col-md-4" v-for="(i, index) in services" :key="index">
            <ServiceCard
              :img="publicURL(i.thumbnailURL)"
              :name="isEn ? i.titleEN : i.title"
            />
          </div>
        </div>
      </div>

      <div class="container mt-5 pt-5">
        <div class="text-center">
          <h1>
            {{ $t("homeOur") }}
            <strong class="l-text-primary"> {{ $t("homePricing") }} </strong>
            {{ $t("homeFees") }}
          </h1>
        </div>

        <div class="row justify-content-center mt-5">
          <div
            class="col-md-3 mb-4"
            style="height: 100%;"
            v-for="(i, index) in price"
            :key="index"
          >
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <h3>{{ isEn ? i.titleEN : i.title }}</h3>
                <small class="text-muted">
                  {{ isEn ? i.explanationEN : i.explanation }}
                </small>

                <div class="price mt-3">
                  <span class="text-muted"> {{ isEn ? "$" : "₺" }} </span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                  >
                    {{ i.price }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="text-center mt-5 pb-5">
        <h1>
          {{ $t("homeOur") }}
          <strong class="l-text-primary"> {{ $t("homeGallery") }} </strong>
        </h1>

        <div class="row justify-content-center mt-5 gallery">
          <div
            class="col-md-4 item mb-3"
            v-for="(i, index) in gallery"
            :key="index"
          >
            <GalleryCard
              :img="publicURL(i.thumbnailURL)"
              :title="isEn ? i.titleEN : i.title"
              :text="isEn ? i.subTitleEN : i.subTitle"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="white-block p-3" style="padding-bottom: 6em !important">
      <div class="container">
        <div class="text-center pt-5 mb-5">
          <h1>
            {{ $t("homeOur") }}
            <strong class="l-text-primary"> {{ $t("homeLatest") }} </strong>
            {{ $t("homeNews") }}
          </h1>
        </div>

        <div class="row blogs justify-content-center">
          <div class="col-md-4 mb-4">
            <NuxtLink
              :to="pathHandler(`/blog/${i.seourl}`)"
              v-for="(i, index) in blog"
              :key="index"
            >
              <BLogCard
                :date="i.createdDate"
                :img="publicURL(i.thumbnailURL)"
                :title="isEn ? i.titleEN : i.title"
                :cover="isEn ? i.coverLetterEN : i.coverLetter"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import pathHandler from "../tools/path-handler";
import ServiceCard from "../components/service-card.vue";
import GalleryCard from "../components/gallery-card.vue";
import BLogCard from "../components/blog-card.vue";
import publicURL from "../ts/public-url";

export default Vue.extend({
  name: "IndexPage",
  components: {
    ServiceCard,
    GalleryCard,
    BLogCard,
  },
  data: () => ({
    slide: 0,
    data: {},
    sliding: true,
    isEn: false,
    services: [],
    gallery: [],
    blog: [],
    price: [],
  }),
  methods: {
    pathHandler,
    publicURL,

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  async created() {
    console.log(this);
    // @ts-expect-error
    if (this.$i18n._localeChainCache.en) {
      this.isEn = true;
    }

    this.data = (await this.$axios.get("/home")).data.data;
    this.services = (await this.$axios.get("/service?range=3")).data.data;
    this.gallery = (await this.$axios.get("/image?range=6")).data.data;
    this.blog = (await this.$axios.get("/blog?range=3")).data.data;
    this.price = (await this.$axios.get("/price?range=3")).data.data;
    // @ts-expect-error
    this.data.slide = JSON.parse(this.data.slide);
  },
});
</script>

<style scoped>
.profile {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  margin-bottom: 2em;
}

.socials {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.socials .item {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: White;
  margin: 0.3em;
  font-size: 14px;
}

.categories {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
}

.categories .item {
  padding: 0.5em 1em;
  /* border: 1px solid var(--border-2); */
  margin-right: 1em;
  background: white;
  transition: 0.2s;
  cursor: pointer;
}

.categories .item:hover,
.categories .active {
  background: var(--primary);
  color: white;
}

.ticket {
  box-shadow: 10px 10px 30px var(--shadow-1);
  border: 1px solid var(--border-1);
  padding: 3em;
  border-radius: 13px;
  display: flex;
  justify-content: center;
}

.ticket .icon {
  width: 50px;
  height: 50px;
  background-color: rgb(223, 223, 223);
  border-radius: 50%;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: auto;
  margin-bottom: 1em;
}

.services > div {
  margin-bottom: 1.5em;
}
</style>
