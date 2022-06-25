<template>
  <div class="login">
    <div class="box shadow-lg p-5 col-md-5 col-xl-4">
      <h2 class="mb-5">Giriş Yap</h2>
      <div class="form-floating mb-3">
        <input
          id="floatingInput"
          type="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="data.username"
        />
        <label for="floatingInput">Kullanıcı Adı</label>
      </div>

      <div class="form-floating mb-3">
        <input
          id="floatingInput"
          type="password"
          class="form-control"
          placeholder="name@example.com"
          v-model="data.password"
        />
        <label for="floatingInput">Şifre</label>
      </div>

      <button class="btn btn-dark" @click="login">Giriş Yap</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    data: {
      username: "",
      password: "",
    },
  }),
  methods: {
    login() {
      this.$axios.post("/login", this.data).then((d) => {
        localStorage.setItem("token", d.data.data.token);
        this.$router.replace(`/tr/admin/guide`);
      });
    },
  },
});
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
}

.box {
  border-radius: 7px;
}
</style>
