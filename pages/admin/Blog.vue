<template>
  <div class="doctor">
    <div class="d-flex align-items-end mb-3">
      <button class="btn btn-primary" @click="setModalShow(true)">
        Blog Ekle
      </button>
    </div>

    <div class="row mb-3 gallery-wrapper">
      <div class="col-md-4">
        <BlogCard
          title="Saç Ekimi"
          img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws5.jpg"
          cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis...."
        />
      </div>

      <div class="col-md-4">
        <BlogCard
          title="Saç Ekimi"
          img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws5.jpg"
          cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis...."
        />
      </div>

      <div class="col-md-4">
        <BlogCard
          title="Saç Ekimi"
          img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws5.jpg"
          cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis...."
        />
      </div>

      <div class="col-md-4">
        <BlogCard
          title="Saç Ekimi"
          img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws5.jpg"
          cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis...."
        />
      </div>

      <div class="col-md-4">
        <BlogCard
          title="Saç Ekimi"
          img="https://kodesolution.com/html/2015/medinova-b5/images/services/ws5.jpg"
          cover="Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis...."
        />
      </div>
    </div>

    <!-- <small class="text-muted" v-show="doctors.length === 0">
      Blog bulunamadı. &nbsp;&nbsp;
    </small>

    <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
      Blog Ekle
    </button> -->

    <Modal
      title="Blog Ekle"
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
            placeholder="Blog Adı"
          />
          <label for="name">
            Blog Adı
            <i class="required"></i>
          </label>
        </div>

        <VueEditor />
      </template>

      <template v-slot:footer>
        <button class="btn btn-primary" @click="createDoctor()">
          Blog Ekle
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
    console.log(this.doctors);
  },
  components: {
    Modal,
    IconSelect,
    UploadImage,
  },
});
</script>

<style scoped>
.gallery-wrapper > div {
  margin-bottom: 1.5em;
}

.quillWrapper svg {
  font-size: 10px !important;
}
</style>