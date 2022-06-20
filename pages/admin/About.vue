<template>
  <div class="about">
    <div class="mt-5">
      <small class="text-muted">
        Eğer haftanın belirli bir günü kapalıysanız işlem kısmındaki seçeneği
        "Kapalı" hale getirebilirsiniz. <br />
        <br />

        Hakkımızda sayfası için açılış saatleriniz.
      </small>
    </div>
    <table class="table table-bordered mt-3">
      <thead>
        <tr>
          <td>Gün</td>
          <td>Açılış Saati</td>
          <td>Kapanış Saati</td>
          <td>İşlem</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, key) in data.workingHours" :key="key">
          <td>{{ key }}</td>
          <td>
            <input v-model="i.openingHour" type="time" />
          </td>
          <td>
            <input v-model="i.closingHour" type="time" />
          </td>
          <td>
            <div class="form-check form-switch">
              <input
                id="flexSwitchCheckChecked"
                class="form-check-input"
                type="checkbox"
                role="switch"
                :checked="i.isClose"
                v-model="i.isClose"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Hakkımızda Sayfasındaki Doktor resmi</h3>
    <UploadImage :setBase64="setBase64" :data="data.doctorImage" />

    <h3 class="mt-5">Hakkımızda Sayfasındaki Hizmetler Kısmına Ait Resim</h3>
    <UploadImage :setBase64="setBase642" :data="data.servicesImage" :id="1" />

    <h3 class="mt-5">Hizmetler için açıklama</h3>
    <small class="text-muted">
      Hizmetleriniz hakkında genel bir açıklama metni.
    </small>

    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        :checked="servicesTextEN"
        @change="servicesTextEN = !servicesTextEN"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked">
        {{ servicesTextEN ? "İngilizce" : "Türkçe" }}
      </label>
    </div>
    <div class="form-floating mt-4">
      <textarea
        id="text"
        class="form-control"
        placeholder="Metin"
        style="height: 200px"
        v-model="data[servicesTextEN ? 'servicesTextEN' : 'servicesText']"
      />
      <label for="text">Metin</label>
    </div>

    <h3 class="mt-5">Hakkımızda Metni</h3>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        :checked="aboutTextEN"
        @change="aboutTextEN = !aboutTextEN"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked">
        {{ aboutTextEN ? "İngilizce" : "Türkçe" }}
      </label>
    </div>
    <div style="height: 50vh" class="mb-5 pb-5">
      <VueEditor
        class="h-100"
        v-model="data[aboutTextEN ? 'aboutTextEN' : 'aboutText']"
      />
    </div>

    <button class="btn btn-dark" @click="save">Kaydet</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UploadImage from "../../components/admin/upload-image.vue";

export default Vue.extend({
  components: {
    UploadImage,
  },
  data: () => ({
    data: {},
    loading: false,
    servicesTextEN: false,
    aboutTextEN: false,
  }),
  created() {
    this.getData();
  },
  methods: {
    setBase64(base64: string) {
      // @ts-expect-error
      this.data.image = base64;
    },

    setBase642(base64: string) {
      // @ts-expect-error
      this.data.imageS = base64;
    },

    save() {
      this.loading = true;

      const cloneData = { ...this.data };

      console.log(cloneData);

      // @ts-expect-error
      cloneData.workingHours = JSON.stringify(cloneData.workingHours);
      this.$axios
        .post("/about", cloneData)
        .then(this.getData)
        .finally(() => (this.loading = false));
    },
    async getData() {
      this.data = (await this.$axios.get("/about")).data.data;

      // @ts-expect-error
      this.data.workingHours = JSON.parse(this.data.workingHours);
    },
  },
});
</script>
