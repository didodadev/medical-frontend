<template>
  <div class="doctor">
    <div class="d-flex align-items-end mb-3">
      <button class="btn btn-primary" @click="setModalShow(true)">
        Doktor ekle
      </button>
    </div>

    <table class="table tabe-responsive table-striped table-bordered w-100">
      <thead>
        <tr>
          <td>#</td>
          <td>İsim</td>
          <td>Soyisim</td>
          <td>Alan</td>
          <td>İşlemler</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in doctors" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ i.fullname.split(" ")[0] }}</td>
          <td>{{ i.fullname.split(" ")[1] }}</td>
          <td>{{ i.branch }}</td>
          <td class="actions">
            <i class="bi bi-trash" style="margin-right: 1em" />
            <i class="bi bi-pen-fill" />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-show="doctors.length === 0">
      <small class="text-muted">
        Doktor bulunamadı. &nbsp;&nbsp;
      </small>

      <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
        Doktor Ekle
      </button>
    </div>

    <Modal
      title="Doktor Ekle"
      :close="() => setModalShow(false)"
      :show="show"
      :err="err"
    >
      <template #body>
        <div class="mb-3">
          <UploadImage :set-base64="setBase64" />
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-floating mb-3">
              <input
                id="fullname"
                type="text"
                class="form-control"
                placeholder="İsim Soyisim"
              >
              <label for="fullname">
                İsim Soyisim
                <i class="required" />
              </label>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-floating">
              <input
                id="branch"
                type="text"
                class="form-control"
                placeholder="Alan"
              >
              <label for="branch">
                Alan
                <i class="required" />
              </label>
            </div>
            <div class="mb-3">
              <small class="text-muted">
                Doktorun çalıştığı alan. Kardiyolog, Cerrahi vb.
              </small>
            </div>
          </div>
        </div>

        <div class="form-floating mb-3">
          <textarea
            id="about"
            class="form-control"
            placeholder="Hakkında"
            style="height: 100px"
          />
          <label for="about">
            Hakkında
            <i class="required" />
          </label>
        </div>

        <div class="d-flex align-items-start">
          <IconSelect :on-select="onSelect" />

          <div class="form-floating" style="margin-right: 0.5em">
            <input
              id="floatingInput"
              v-model="social.link"
              type="email"
              class="form-control"
              placeholder="name@example.com"
              style="height: 50px"
            >
            <label for="floatingInput">Sosyal medya linki</label>
          </div>

          <button
            class="btn btn-success"
            style="height: 50px"
            @click="addSocialMedia()"
          >
            Ekle
          </button>
        </div>

        <div class="mb-3">
          <small class="text-muted">
            Lütfen ekleyeceğiniz sosyal medya adresinin linkini kopyalayıp
            yapıştırın.
          </small>
        </div>

        <div class="row">
          <div v-for="(i, index) in doctor.socials" :key="index" class="col-1">
            <div
              class="icon cover-wrapper centered"
              style="
                width: 30px;
                height: 30px;
                border: 1px solid var(--border-2);
                border-radius: 6px;
              "
            >
              <i class="bi" :class="i.icon" />

              <div
                v-b-tooltip.hover
                class="red-cover"
                :title="i.link"
                @click="deleteIcon(index)"
              >
                <i class="bi bi-trash-fill" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <button class="btn btn-primary" @click="createDoctor()">
          Doktoru Ekle
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
    range: 10,
  }),
  created() {
    this.getDoctors()
  },
  methods: {
    async getDoctors() {
      this.doctors = await this.$axios.get(`/doctor?range=${this.range}`)
    },
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
