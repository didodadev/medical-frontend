<template>
  <div class="home">
    <h1 class="page-title"><i class="bi bi-house" /> &nbsp;Anasayfa</h1>

    <h3>Slider</h3>
    <small class="text-muted">
      Anasayfadaki kaydırılan resimlerdir. Lütfen resim yüklerken resim
      genişliklerinin ve yüksekliklerini büyük olduğundan emin olun. <br />
      Minimum genişlik: 900 <br />
      Minimum yükseklik: 500 <br />
      <br />

      Aksi takdirde resimleriniz düzgün görünmeyecektir. Ancak resimlerinizi
      küçük yükleseniz bile sayfada görünecektir.
    </small>

    <div class="row mt-5">
      <div
        class="col-md-4 cover-wrapper"
        v-for="(i, index) in data.slide"
        :key="index"
      >
        <img :src="i.includes('base64') ? i : publicURL(i)" width="100%" />

        <div class="red-cover">
          <i
            class="bi bi-trash"
            @click="!loading ? removeSlide(index) : null"
          />
        </div>
      </div>

      <div class="col-md-7 cover-wrapper mt-3">
        <UploadImage noPreview :setBase64="uploadSlide" />
      </div>
    </div>

    <h2 class="mt-5">Anasayfa ön yazısı</h2>

    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        v-model="onWelcomeTitleEN"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked"
        > {{onWelcomeTitleEN ? 'İngilizce' : 'Türkçe'}} </label
      >
    </div>
    <div class="form-floating mb-3">
      <input
        id="floatingInput"
        type="text"
        class="form-control"
        placeholder="name@example.com"
        v-model="data[onWelcomeTitleEN ? 'welcomeTitleEN' : 'welcomeTitle']"
      />
      <label for="floatingInput">Başlık</label>
    </div>

    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        v-model="onWelcomeTextEN"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked"
        > {{onWelcomeTextEN ? 'İngilizce' : 'Türkçe'}} </label
      >
    </div>
    <div class="form-floating mb-3">
      <textarea
        id="content"
        type="text"
        class="form-control"
        placeholder="..."
        style="height: 300px"
        v-model="data[onWelcomeTextEN ? 'welcomeTextEN' : 'welcomeText']"
      />
      <label for="content">İçerik</label>
    </div>

    <button class="btn btn-primary" @click="save">Kaydet</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UploadImage from "../../components/admin/upload-image.vue";
import publicURL from "../../ts/public-url";

export default Vue.extend({
  data() {
    return {
      data: {},
      loading: false,
      onWelcomeTitleEN: false,
      onWelcomeTextEN: false
    };
  },
  components: {
    UploadImage,
  },
  created() {
    this.getData();
  },
  methods: {
    publicURL,
    async getData() {
      const data = (await this.$axios.get("/home")).data.data;

      data.slide = JSON.parse(data.slide);
      data.removedSlides = [];

      this.data = data;
    },
    save() {
      this.loading = true;

      this.$axios
        .post("/home", this.data)
        .then(this.getData)
        .finally(() => (this.loading = false));
    },
    removeSlide(index: number) {
      // @ts-expect-error
      if (!this.data.slide[index].includes("base64")) {
        // @ts-expect-error
        this.data.removedSlides.push(this.data.slide[index]);
      }

      // @ts-expect-error
      this.data.slide.splice(index, 1);
    },
    uploadSlide(base64: string) {
      // @ts-expect-error
      this.data.slide.push(base64);
    },
  },
});
</script>
