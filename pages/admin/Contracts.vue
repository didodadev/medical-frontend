<template>
  <div class="doctor">
    <div class="d-flex align-items-end mb-3">
      <button class="btn btn-primary" @click="setModalShow(true)">
        Kurum ekle
      </button>
    </div>

    <div class="row mb-3 gallery-wrapper">
      <div class="col-md-4">
        <div class="cover-wrapper">
          <GalleryCard
            title="Saç Ekimi"
            img="https://www.cetintas.com.tr/tema/genel/uploads/logo/cetintas_logo_yazili.png"
            text="Lorem ipsum dolor sit amet, consectetur!"
            style="border-radius: 6px; overflow: hidden"
          />
          <div class="red-cover">
            <i class="bi bi-trash" style="font-size: 30px" />
          </div>
        </div>
      </div>
    </div>

    <!-- <small class="text-muted" v-show="doctors.length === 0">
      Kurum bulunamadı. &nbsp;&nbsp;
    </small>

    <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
      Kurum Ekle
    </button> -->

    <Modal
      title="Kurum Ekle"
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
            placeholder="Kurum Adı"
          >
          <label for="name">
            Kurum Adı
            <i class="required" />
          </label>
        </div>

        <VueEditor />
      </template>

      <template #footer>
        <button class="btn btn-primary" @click="createDoctor()">
          Kurum Ekle
        </button>
      </template>
    </Modal>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Modal from '../../components/ui/modal-component.vue'
import IconSelect from '../../components/ui/icon-select.vue'
import getEmpty, {
  IEmptyDoctor,
  ISocial,
  IViewDoctor
} from '../../ts/empty-data-and-types'
import UploadImage from '../../components/admin/upload-image.vue'

const errMessages = {
  addSocialMedia: 'Lütfen bir simge seçiniz ve link ekleyiniz.'
}

interface IData {
  doctors: IViewDoctor[];
  show: boolean;
  doctor: IEmptyDoctor;
  social: ISocial;
  err: string;
  range: number;
}

export default Vue.extend({
  components: {
    Modal,
    IconSelect,
    UploadImage
  },
  data: (): IData => ({
    doctors: [],
    show: false,
    doctor: getEmpty('doctor'),
    social: getEmpty('social'),
    err: '',
    range: 10
  }),
  async created () {
    console.log(this.doctors)
  },
  methods: {
    setBase64 (base64: string) {
      console.log(base64)

      this.doctor.image = base64
    },

    setModalShow (t: boolean) {
      this.show = t
    },
    onSelect (i: string) {
      this.social.icon = i
    },
    addSocialMedia () {
      if (this.social.icon.trim() === '' || this.social.link.trim() === '') {
        this.err = errMessages.addSocialMedia
      } else {
        if (this.err === errMessages.addSocialMedia) { this.err = '' }

        this.doctor.socials.push(this.social)
        this.social = getEmpty('social')
      }
    },
    deleteIcon (index: number) {
      this.doctor.socials.splice(index, 1)
    },
    createDoctor () {
      console.log(this.doctor)
    }
  }
})
</script>

<style scoped>
.gallery-wrapper > div {
  margin-bottom: 1.5em;
}
</style>
