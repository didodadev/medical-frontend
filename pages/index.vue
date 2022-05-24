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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

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
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <!-- <form>
          <div class="row m-0">
            <div class="col-md-4 left m-0">
              <h4>{{ $t("home-call-us-anytime") }}</h4>
              <h2>023-459-729</h2>
              <br />

              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                commodi molestiae autem fugit dolor ullam ipsa numquam, quod
                iusto enim amet...
              </p>
            </div>
            <div class="col-md-8 right">
              <div class="row">
                <h3 class="col-12"> {{ $t('home-book-an-appointment') }} </h3>

                <div class="col-md-6">
                  <input type="text" :placeholder="$t('home-enter-name')">
                </div>

                <div class="col-md-6">
                  <input type="text" :placeholder="$t('home-enter-email')">
                </div>

                <div class="col-md-6">
                  <input type="text" :placeholder="$t('home-enter-phone')">
                </div>

                <div class="col-md-6">
                  <input type="text" :placeholder="$t('home-enter-appoinment')">
                </div>

                <div class="col-md-6">
                  <input type="text" :placeholder="$t('home-enter-department')">
                </div>
              </div>

              <b-button variant="dark-primary"> {{ $t('home-submit') }} </b-button>
            </div>
          </div>
        </form> -->
    <div class="white-block p-4">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <p>Welcome To</p>

            <h1>Medianova Conference 2021</h1>
            <h4 class="mt-5">121 King Street Melbourne</h4>

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
                <h1><i class="bi bi-activity"></i></h1>
                <h3>Event Time</h3>

                <p>Event Date: 11 To 13 Aug Event Time: 9am To 5pm</p>
              </div>
              <div class="col-md-5 l-bg-secondary p-3 m-1">
                <h1><i class="bi bi-person"></i></h1>
                <h3>Speakers</h3>

                <p>Programme Workshop Presentations For Medinova Conference.</p>
              </div>
              <div class="col-md-5 l-bg-secondary p-3 m-1">
                <h1><i class="bi bi-activity"></i></h1>

                <h3>Submit Opinion</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class="col-md-5 l-bg-primary p-3 m-1">
                <h1><i class="bi bi-person-fill"></i></h1>

                <h3>Confirm Ticket</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center mt-5">
        <h1>Our <strong class="l-text-primary"> Gallery </strong></h1>
        <p class="text-muted">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </p>

        <div class="row justify-content-center mt-5 gallery">
          <div class="categories col-12">
            <div class="item active">ALL</div>
            <div class="item">LABARATORY</div>
            <div class="item">SURGERY</div>
            <div class="item">ORTHOPEDICS</div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/1.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/2.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/3.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/4.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/5.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>

          <div class="col-md-4 item">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/gallery/6.jpg"
              width="100%"
            />

            <div class="cover">
              <h3>Title</h3>
              <p>tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="white-block mt-5 p-5" style="padding-bottom: 6em !important;">
      <div class="text-center">
        <h1>Our <strong class="l-text-primary"> Pricing </strong> Fees</h1>
        <p class="text-muted">
          Explore Our Completed Services! Consectetur adipiscing elitt elit
          tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                    >129</span
                  >
                </div>

                <b-button variant="primary" class="mt-4">Get Offer</b-button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                    >129</span
                  >
                </div>

                <b-button variant="primary" class="mt-4">Get Offer</b-button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="ticket text-center">
              <div>
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>

                <h3>Activity</h3>
                <small class="text-muted"> Hurry to gap your offer now </small>

                <div class="price mt-3">
                  <span class="text-muted">$</span>
                  <span
                    style="font-size: 40px !important"
                    class="l-text-primary"
                    >129</span
                  >
                </div>

                <b-button variant="primary" class="mt-4">Get Offer</b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <h1>Our <strong class="l-text-primary"> Latest </strong> News</h1>
          <p class="text-muted">
            Explore Our Completed Services! Consectetur adipiscing elitt elit
            tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
          </p>
        </div>

        <div class="row blogs">
          <div class="col-md-4">
            <b-card
              img-src="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              tag="article"
              img="top"
            >
              <b-card-body>
                <h5>
                  Capitalize on low hanging fruit to identify a ballpark test
                </h5>

                <hr />

                <i class="bi bi-calendar2-week"></i>
                <small>Jul 20, 2021</small> &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="bi bi-chat-text"></i> <small>Comments</small>

                <p class="mt-3">
                  <small class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis....
                  </small>
                </p>

                <b-button variant="outline-primary" class="mt-3"
                  >View Details</b-button
                >
              </b-card-body>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card
              img-src="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              tag="article"
              img="top"
            >
              <b-card-body>
                <h5>
                  Capitalize on low hanging fruit to identify a ballpark test
                </h5>

                <hr />

                <i class="bi bi-calendar2-week"></i>
                <small>Jul 20, 2021</small> &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="bi bi-chat-text"></i> <small>Comments</small>

                <p class="mt-3">
                  <small class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis....
                  </small>
                </p>

                <b-button variant="outline-primary" class="mt-3"
                  >View Details</b-button
                >
              </b-card-body>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card
              img-src="https://kodesolution.com/html/2015/medinova-b5/images/blog/b1.jpg"
              tag="article"
              img="top"
            >
              <b-card-body>
                <h5>
                  Capitalize on low hanging fruit to identify a ballpark test
                </h5>

                <hr />

                <i class="bi bi-calendar2-week"></i>
                <small>Jul 20, 2021</small> &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="bi bi-chat-text"></i> <small>Comments</small>

                <p class="mt-3">
                  <small class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis....
                  </small>
                </p>

                <b-button variant="outline-primary" class="mt-3"
                  >View Details</b-button
                >
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    slide: 0,
    sliding: true,
  }),
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
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

.gallery .item {
  position: relative;
  margin-bottom: 1.5em;
}

.gallery .item:hover .cover {
  opacity: 0.7;
}

.gallery .item .cover {
  transition: 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.8em;
  right: 0.8em;
  background: black;
  opacity: 0;
  text-align: left;
  padding: 2em;
  cursor: pointer;
}

.gallery .item .cover * {
  color: white;
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
/* form {
  position: absolute;
  margin-top: -4em;
  z-index: 3;
}

form .left {
  background: var(--dark-primary);
  padding: 3em;
}

form .left * {
  color: white;
}

form .right h3 {
  color: white;
  margin-bottom: 1em;
}
form .left h3,
form .left h2 {
  font-weight: 500;
}

form .right {
  background: var(--primary);
  padding: 4em;
}

form input {
  width: 100%
}

form .right .col-md-6 {
  margin-bottom: 1em;
}

form input {
  padding: .5em;
  border: none;
} */
</style>