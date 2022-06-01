<template>
  <div class="contact">
    <h2 class="mb-5">
      İletişim ve harita
    </h2>

    <div class="row">
      <div class="col-md-6">
        <div class="form-floating mb-5">
          <input
            id="phone1"
            type="text"
            class="form-control"
            placeholder="Telefon Numarası"
          >
          <label for="phone1">Telefon Numarası 1</label>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-floating mb-5">
          <input
            id="phone2"
            type="text"
            class="form-control"
            placeholder="Telefon Numarası"
          >
          <label for="phone2">Telefon Numarası 2</label>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-floating mb-2">
          <input
            id="mail"
            type="text"
            class="form-control"
            placeholder="Mail"
          >
          <label for="mail">Mail</label>
        </div>

        <small class="text-muted">
          "Medion Premium" sitesindeki iletişim bölümünden gönderilen mail mesajları, yukarıda girdiğiniz mail adresine gönderilir.
        </small>
      </div>

      <div class="col-md-6">
        <div class="form-floating mb-2">
          <input
            id="mail"
            type="text"
            class="form-control"
            placeholder="Konum"
          >
          <label for="mail">Konum</label>
        </div>
        <small class="text-muted">Google haritalardan konumunuzu işaretleyip ardından "Menü" ye girin,
          sonrasında "Paylaşın veya harita yerleştirin" kısmına girin. Burada
          üst kısımdan "harita yerleştirme" kısmına gelin ve "HTML'yi kopyala"
          yapın ve yukarıdaki bölüme yapıştırın. <br>
          <br>

          Eğer yapamadıysanız klavuzdan "Harita" veya "harita" diye aratarak
          daha detaylı bir açıklama bulabilirsiniz.
        </small>
      </div>
    </div>
  </div>
</template>
