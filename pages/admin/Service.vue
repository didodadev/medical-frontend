<template>
  <div class="doctor">
    <div class="d-flex align-items-end mb-3">
      <button class="btn btn-primary" @click="setModalShow(true)">
        Hizmet ekle
      </button>
    </div>

    <table class="table tabe-responsive table-striped table-bordered w-100">
      <thead>
        <tr>
          <td>#</td>
          <td>İsim</td>
          <td>İşlemler</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in services" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ i.title }}</td>
          <td class="actions">
            <i class="bi bi-trash" />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-show="services.length === 0">
      <small class="text-muted"> Hizmet bulunamadı. &nbsp;&nbsp; </small>

      <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
        Hizmet Ekle
      </button>
    </div>

    <Modal
      title="Hizmet Ekle"
      :close="() => setModalShow(false)"
      :show="show"
      :err="err"
    >
      <template #body>
        <div class="mb-3">
          <UploadImage :set-base64="setBase64" />
        </div>

        <div class="form-floating mb-3">
          <input
            id="name"
            type="text"
            class="form-control"
            placeholder="Hizmet Adı"
            v-model="service.title"
          />
          <label for="name">
            Hizmet Adı
            <i class="required" />
          </label>
        </div>

        <VueEditor v-model="service.content" />
      </template>

      <template #footer>
        <button class="btn btn-primary" @click="createService()">
          Hizmet Ekle
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Vue from "vue";
import Modal from "../../components/ui/modal-component.vue";
import IconSelect from "../../components/ui/icon-select.vue";
import getEmpty from "../../ts/empty-data-and-types";
import UploadImage from "../../components/admin/upload-image.vue";

const errMessages = {
  addSocialMedia: "Lütfen bir simge seçiniz ve link ekleyiniz.",
};

export default Vue.extend({
  components: {
    Modal,
    IconSelect,
    UploadImage,
  },
  data: () => ({
    services: [],
    show: false,
    service: getEmpty("service"),
    social: getEmpty("social"),
    err: "",
    range: 10,
  }),
  async created() {
    this.getServices();
  },
  methods: {
    setBase64(base64) {
      console.log(base64);

      this.service.image = base64;
    },

    setModalShow(t) {
      this.show = t;
    },
    onSelect(i) {
      this.social.icon = i;
    },
    async getServices() {
      this.services = (await this.$axios.get("/service")).data.data;
    },
    addSocialMedia() {
      if (this.social.icon.trim() === "" || this.social.link.trim() === "") {
        this.err = errMessages.addSocialMedia;
      } else {
        if (this.err === errMessages.addSocialMedia) {
          this.err = "";
        }

        this.doctor.socials.push(this.social);
        this.social = getEmpty("social");
      }
    },
    deleteIcon(index) {
      this.doctor.socials.splice(index, 1);
    },
    createService() {
      this.$axios.post('/service', this.service)
    },
  },
});
</script>
