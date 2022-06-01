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
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=52"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" />

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      />

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

    <div class="white-block p-4">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <p>Welcome To</p>

            <h1>Medianova Conference 2021</h1>
            <h4 class="mt-5">
              121 King Street Melbourne
            </h4>

            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              nisi unde tempora osim aspernatur est excepturi quiaam debitis
              sequi voluptatem ab tenetur repellat amet dicta facere quas quos
              ut, illum iste sed cupiditate sunt, laboriosam. Voluptas pariat
              voluptatem, Cum veritatis, nemo minima deserunt molestias. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit cum elit. Amet
              dignissimos atque voluptas pariatur excepturi quiaam debitis sequi
              voluptatem ab tenetur repellat.
            </p>
          </div>

          <div class="col-md-6">
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
          </div>
        </div>

        <div class="text-center mt-5">
          <h1>
            {{ $t("home-our") }}
            <strong class="l-text-primary"> {{ $t("home-services") }} </strong>
          </h1>
          <p class="text-muted">
            Explore Our Completed Services! Consectetur adipiscing elitt elit
            tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
          </p>
        </div>

        <div class="row services">
          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
              name="Activity Service"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
              name="Activity Service"
            />
          </div>

          <div class="col-md-4">
            <ServiceCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws1.jpg"
              cover="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati!"
              name="Activity Service"
            />
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="text-center">
          <h1>
            {{ $t("home-our") }}
            <strong class="l-text-primary"> {{ $t("home-pricing") }} </strong>
            {{ $t("home-fees") }}
          </h1>
          <p class="text-muted">
            Explore Our Completed Services! Consectetur adipiscing elitt elit
            tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
          </p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                  >129</span>
                </div>

                <b-button variant="primary" class="mt-4">
                  {{ $t("home-get-offer") }}
                </b-button>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                  >129</span>
                </div>

                <b-button variant="primary" class="mt-4">
                  {{ $t("home-get-offer") }}
                </b-button>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                  >129</span>
                </div>

                <b-button variant="primary" class="mt-4">
                  {{ $t("home-get-offer") }}
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="text-center mt-5">
        <h1>
          {{ $t("home-our") }}
          <strong class="l-text-primary"> {{ $t("home-gallery") }} </strong>
        </h1>
        <p class="text-muted">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </p>

        <div class="row justify-content-center mt-5 gallery">
          <div class="categories col-12">
            <div class="item active">
              {{ $t("home-all") }}
            </div>
            <div class="item">
              LABARATORY
            </div>
            <div class="item">
              SURGERY
            </div>
            <div class="item">
              ORTHOPEDICS
            </div>
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>

          <div class="col-md-4 item mb-3">
            <GalleryCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              title="Title"
              text="tellus, luctus pulvinar dapibus leoconsectetur luctus nec."
            />
          </div>
        </div>
      </div>
    </div>

    <div class="white-block p-3" style="padding-bottom: 6em !important">
      <div class="container">
        <div class="text-center pt-5 mb-5">
          <h1>
            {{ $t("home-our") }}
            <strong class="l-text-primary"> {{ $t("home-latest") }} </strong>
            {{ $t("home-news") }}
          </h1>
          <p class="text-muted">
            Explore Our Completed Services! Consectetur adipiscing elitt elit
            tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
          </p>
        </div>

        <div class="row blogs">
          <div class="col-md-4 mb-4">
            <BLogCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              title="Capitalize on low hanging fruit to identify a ballpark test"
              cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis...."
            />
          </div>

          <div class="col-md-4 mb-4">
            <BLogCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              title="Capitalize on low hanging fruit to identify a ballpark test"
              cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis...."
            />
          </div>

          <div class="col-md-4 mb-4">
            <BLogCard
              img="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              title="Capitalize on low hanging fruit to identify a ballpark test"
              cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis...."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import pathHandler from '../tools/path-handler'
import ServiceCard from '../components/service-card.vue'
import GalleryCard from '../components/gallery-card.vue'
import BLogCard from '../components/blog-card.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    ServiceCard,
    GalleryCard,
    BLogCard
  },
  data: () => ({
    slide: 0,
    sliding: true
  }),
  methods: {
    pathHandler,

    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
})
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
