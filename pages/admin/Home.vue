<template>
  <div class="home">
    <h1 class="page-title">
      <i class="bi bi-house" /> &nbsp;Anasayfa
    </h1>

    <h3>Slider</h3>
    <small class="text-muted">
      Anasayfadaki kaydırılan resimlerdir. Lütfen resim yüklerken resim
      genişliklerinin ve yüksekliklerini büyük olduğundan emin olun. <br>
      Minimum genişlik: 900 <br>
      Minimum yükseklik: 500 <br>
      <br>

      Aksi takdirde resimleriniz düzgün görünmeyecektir. Ancak resimlerinizi
      küçük yükleseniz bile sayfada görünecektir.
    </small>

    <div class="row mt-5">
      <div class="col-md-4 cover-wrapper">
        <img
          src="https://picsum.photos/1024/480/?image=54"
          alt=""
          width="100%"
        >

        <div class="red-cover">
          <i class="bi bi-trash" />
        </div>
      </div>

      <div class="col-md-4 cover-wrapper">
        <img
          src="https://picsum.photos/1024/480/?image=52"
          alt=""
          width="100%"
        >

        <div class="red-cover">
          <i class="bi bi-trash" />
        </div>
      </div>

      <div class="col-md-4 cover-wrapper">
        <img
          src="https://picsum.photos/1024/480/?image=58"
          alt=""
          width="100%"
        >

        <div class="red-cover">
          <i class="bi bi-trash" />
        </div>
      </div>

      <div class="col-md-7 cover-wrapper mt-3">
        <UploadImage />
      </div>
    </div>

    <h2 class="mt-5">
      Anasayfa ön yazısı
    </h2>

    <div class="form-floating mb-3">
      <input
        id="floatingInput"
        type="text"
        class="form-control"
        placeholder="name@example.com"
      >
      <label for="floatingInput">Başlık</label>
    </div>

    <div class="form-floating mb-3">
      <textarea
        id="content"
        type="text"
        class="form-control"
        placeholder="..."
        style="height: 300px"
      />
      <label for="content">İçerik</label>
    </div>

    <button class="btn btn-primary">
      Kaydet
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UploadImage from '../../components/admin/upload-image.vue'

export default Vue.extend({
  components: {
    UploadImage
  }
})
</script>
