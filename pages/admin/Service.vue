<template>
  <div class="doctor">
    <div class="admin-header">
      <h1 class="page-title">
        <i class="bi bi-box2-heart"></i> &nbsp;Hizmetler
      </h1>

      <div class="head-actions d-flex">
        <button class="btn btn-primary" @click="setModalShow(true)">
          Hizmet Ekle
        </button>
      </div>
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
        <tr v-for="(i, index) in doctors" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ i.name }}</td>
          <td class="actions">
            <i class="bi bi-trash"></i>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>Kalp ve cerrahi</td>
          <td class="actions">
            <i class="bi bi-trash"></i>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Saç Ektirme</td>
          <td class="actions">
            <i class="bi bi-trash"></i>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Doğum</td>
          <td class="actions">
            <i class="bi bi-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <small class="text-muted" v-show="doctors.length === 0">
      Hizmet bulunamadı. &nbsp;&nbsp;
    </small>

    <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
      Hizmet Ekle
    </button>

    <Modal
      title="Hizmet Ekle"
      :close="() => setModalShow(false)"
      :show="show"
      :err="err"
    >
      <template v-slot:body>
        <div class="mb-3">
          <UploadImage :setBase64="setBase64" />
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Hizmet Adı"
          />
          <label for="name">
            Hizmet Adı
            <i class="required"></i>
          </label>
        </div>

        <VueEditor />
      </template>

      <template v-slot:footer>
        <button class="btn btn-primary" @click="createDoctor()">
          Hizmet Ekle
        </button>
      </template>
    </Modal>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Modal from "../../components/ui/modal.vue";
import IconSelect from "../../components/ui/icon-select.vue";
import getEmpty, {
  IEmptyDoctor,
  ISocial,
  IViewDoctor,
} from "../../ts/empty-data-and-types";
import UploadImage from "../../components/admin/upload-image.vue";

const errMessages = {
  addSocialMedia: "Lütfen bir simge seçiniz ve link ekleyiniz.",
};

interface IData {
  doctors: IViewDoctor[];
  show: boolean;
  doctor: IEmptyDoctor;
  social: ISocial;
  err: string;
  range: number;
}

export default Vue.extend({
  data: (): IData => ({
    doctors: [],
    show: false,
    doctor: getEmpty("doctor"),
    social: getEmpty("social"),
    err: "",
    range: 10,
  }),
  methods: {
    setBase64(base64: string) {
      console.log(base64);

      this.doctor.image = base64;
    },

    setModalShow(t: boolean) {
      this.show = t;
    },
    onSelect(i: string) {
      this.social.icon = i;
    },
    addSocialMedia() {
      if (this.social.icon.trim() === "" || this.social.link.trim() === "") {
        this.err = errMessages.addSocialMedia;
      } else {
        if (this.err === errMessages.addSocialMedia) this.err = "";

        this.doctor.socials.push(this.social);
        this.social = getEmpty("social");
      }
    },
    deleteIcon(index: number) {
      this.doctor.socials.splice(index, 1);
    },
    createDoctor() {
      console.log(this.doctor);
    },
  },
  async created() {
    this.doctors = (
      await this.$axios.$get(`/api/doctor?range=${this.range}`)
    ).data;

    console.log(this.doctors);
  },
  components: {
    Modal,
    IconSelect,
    UploadImage,
  },
});
</script>
