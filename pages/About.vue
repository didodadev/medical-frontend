<template>
  <div class="about">
    <PaginationHeader title="about" />

    <div class="white-block p-5">
      <div class="container">
        <div class="row m-0">
          <div class="col-xl-4 p-4 mb-3" style="border: 7px solid #f6f6f6">
            <h5>
              <i
                class="bi bi-clock"
                style="color: var(--primary); margin-right: 0.5em"
              />
              {{ $t("about-opening-hours") }}
            </h5>

            <br>

            <table>
              <tbody>
                <tr>
                  <td>Monday - Thrushday &nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9:00 - 16:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>0:00 - 16:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>

            <br>

            <i class="bi bi-question-circle" style="color: var(--primary)" />
            {{ $t("about-need-help") }} <br>
            <small class="text-muted">Just make an appointment to get help from our experts.</small>
          </div>
          <div class="col-md-8" style="padding-left: 2em">
            <div class="row">
              <div class="col-md-7">
                <h4 class="text-muted">
                  {{ $t("about") }}
                </h4>
                <h2>Medinov Hospital</h2>

                <br>

                <p class="text-muted">
                  <i>
                    One of the world’s leading hospitals providing safe &
                    compassionate care at its best for everyone. <br>
                    <br>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque commodi molestiae autem fugit consectetur dolor ullam
                    illo ipsa numquam. <br>
                    <br>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque commodi molestiae autem fugit consectetur dolor ullam
                    illo ipsa numquam.
                  </i>

                  <br>
                  <br>

                  <img
                    src="https://kodesolution.com/html/2015/medinova-b5/images/signature.png"
                    alt=""
                  >
                </p>
              </div>
              <div class="col-md-5">
                <img
                  src="https://kodesolution.com/html/2015/medinova-b5/images/about/5.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="padding-top: 12em">
          <div class="col-md-6">
            <h1>{{ $t("about-our-services") }}</h1>

            <p class="text-muted">
              Eaque libero unde corrupti deleniti maxime ratione doloremque
              suscipit perferendis aperiam labore debitis atque odit neque
              possimus optio quo. Eaque libero unde corrupti deleniti maxime
              ratione doloremque suscipit perferendis aperiam labore suscipit
              perferendis aperiam labore debitis atque odit neque Eaque libero
              unde corrupti deleniti maxime ratione doloremque suscipit
              perferendis aperiam labore debitis atque odit neque possimus optio
              quo.
            </p>

            <div class="row services mt-5">
              <div class="col-md-6 item">
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <div class="content">
                  <h5>Activity Service</h5>
                  <p class="text-muted">
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div class="col-md-6 item">
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <div class="content">
                  <h5>Activity Service</h5>
                  <p class="text-muted">
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div class="col-md-6 item">
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <div class="content">
                  <h5>Activity Service</h5>
                  <p class="text-muted">
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div class="col-md-6 item">
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <div class="content">
                  <h5>Activity Service</h5>
                  <p class="text-muted">
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6" style="padding-left: 2em">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/services/sc4.jpg"
              width="100%"
            >

            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <div
                    v-b-toggle.accordion-1
                    class="accordion-header"
                    block
                    variant="info"
                  >
                    Where do I find my Office product key?
                  </div>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <div
                    v-b-toggle.accordion-2
                    class="accordion-header"
                    block
                    variant="info"
                  >
                    I am having trouble, what else should I do?
                  </div>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <div
                    v-b-toggle.accordion-3
                    class="accordion-header"
                    block
                    variant="info"
                  >
                    I am having trouble, what else should I do?
                  </div>
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>

        <div class="row" style="padding-top: 12em">
          <div class="text-center">
            <h1>
              Our
              <strong style="color: var(--primary)">{{
                $t("about-our-doctors")
              }}</strong>
            </h1>

            <p class="text-muted">
              Explore Our Completed Services! Consectetur adipiscing elitt elit
              tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
            </p>
          </div>

          <div class="row mt-5">
            <div class="col-md-4">
              <DoctorCard
                img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
                name="Maria"
                branch="Cardiolog"
              />
            </div>

            <div class="col-md-4">
              <DoctorCard
                img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
                name="Maria"
                branch="Cardiolog"
              />
            </div>

            <div class="col-md-4">
              <DoctorCard
                img="https://kodesolution.com/html/2015/medinova-b5/images/team/t1.jpg"
                name="Maria"
                branch="Cardiolog"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from '../components/pagination-header.vue'
import DoctorCard from '../components/doctor-card.vue'

export default {
  components: {
    PaginationHeader,
    DoctorCard
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

table td {
  border-bottom: 1px solid var(--border-2);
  padding: 0.5em 0;
}

table tr td:last-child {
  text-align: right;
}

.services .item {
  display: flex;
  align-items: flex-start;
}

.services .item .icon {
  background: rgb(240, 240, 240);
  margin-right: 0.6em;
  width: 55px;
  height: 55px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  border-radius: 6px;
}

.accordion-header {
  padding: 1em;
}

.not-collapsed {
  background: var(--primary);
  color: white;
}
</style>
