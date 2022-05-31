<template>
  <div class="home">
    <h1 class="page-title"><i class="bi bi-house"></i> &nbsp;Anasayfa</h1>

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
      <div class="col-md-3 cover-wrapper">
        <img
          src="https://picsum.photos/1024/480/?image=54"
          alt=""
          width="100%"
        />

        <div class="red-cover">
          <i class="bi bi-trash"></i>
        </div>
      </div>

      <div class="col-md-3 cover-wrapper">
        <img
          src="https://picsum.photos/1024/480/?image=52"
          alt=""
          width="100%"
        />

        <div class="red-cover">
          <i class="bi bi-trash"></i>
        </div>
      </div>
    </div>
    
  </div>
</template>