<template>
  <div class="login">
    <div class="box shadow-lg p-5 col-md-5 col-xl-4">
      <h2 class="mb-5"> Giriş Yap </h2>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Kullanıcı Adı</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Şifre</label>
      </div>

      <button class="btn btn-dark">Giriş Yap</button>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  border-radius: 7px;
}
</style>