<template>
  <div class="about">
    <PaginationHeader title="about" />

    <div class="white-block p-5">
      <div class="container">
        <div class="row m-0 align-items-start">
          <div class="col-xl-4 p-4 mb-3" style="border: 7px solid #f6f6f6">
            <h5>
              <i
                class="bi bi-clock"
                style="color: var(--primary); margin-right: 0.5em"
              />
              {{ $t("aboutOpeningHours") }}
            </h5>

            <br />

            <table>
              <tbody>
                <tr v-for="(i, key) in data.workingHours" :key="key">
                  <td>{{ key }} &nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>
                    <span v-if="i.isClose">
                      {{ i.openingHour }} - {{ i.closingHour }}
                    </span>
                    <i v-else class="bi bi-x-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-8" style="padding-left: 2em">
            <div class="row">
              <div class="col-md-7">
                <h4 class="text-muted">
                  {{ $t("about") }}
                </h4>

                <p class="text-muted about-text" v-html="getLocaleKey(data, 'aboutText')"></p>
              </div>
              <div class="col-md-5">
                <img :src="publicURL(data.doctorImage)" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="padding-top: 12em">
          <div class="col-md-6">
            <h1>{{ $t("aboutOurServices") }}</h1>

            <p class="text-muted">
              {{ getLocaleKey(data, 'servicesText') }}
            </p>

            <div class="row services mt-5">
              <div
                class="col-md-6 item mb-4"
                v-for="(i, index) in services"
                :key="index"
              >
                <div class="icon">
                  <i class="bi bi-activity" />
                </div>

                <div class="content">
                  <h5>{{ getLocaleKey(i, 'title') }}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6" style="padding-left: 2em">
            <img :src="publicURL(data.servicesImage)" width="100%" />

            <!-- <div class="accordion" role="tablist">
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
            </div> -->
          </div>
        </div>

        <div class="row" style="padding-top: 12em">
          <div class="text-center">
            <h1>
              <strong style="color: var(--primary)">{{
                $t("aboutOurDoctors")
              }}</strong>
            </h1>
          </div>

          <div class="row mt-5 justify-content-center">
            <div
              class="col-md-4 col-xl-3"
              v-for="(i, index) in doctors"
              :key="index"
            >
              <NuxtLink :to="pathHandler(`/doctors/${i.seourl}`)">
                <DoctorCard
                  :img="publicURL(i.thumbnailURL)"
                  :name="i.fullName"
                  :branch="getLocaleKey(i, 'branch')"
                  :socials="i.socials"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from "../components/pagination-header.vue";
import DoctorCard from "../components/doctor-card.vue";
import publicURL from "../ts/public-url";
import pathHandler from "../tools/path-handler";
import getLocaleKey from '../ts/get-locale'

export default {
  components: {
    PaginationHeader,
    DoctorCard,
  },
  data() {
    return {
      data: {},
      services: [],
      doctors: [],
    };
  },
  methods: {
    publicURL,
    pathHandler,
    getLocaleKey
  },
  async created() {
    this.data = (await this.$axios.get("/about")).data.data;
    this.services = (await this.$axios.get("/service?range=4")).data.data;
    this.doctors = (await this.$axios.get("/doctor?range=3")).data.data.map(
      (d) => {
        d.socials = JSON.parse(d.socials);
        return d;
      }
    );
    this.data.workingHours = JSON.parse(this.data.workingHours);
  },
};
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

.about-text {
  word-wrap: break-word;
}
</style>
