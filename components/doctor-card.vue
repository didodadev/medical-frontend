<template>
  <b-card style="border-radius: 5px" class="doctor-card shadow">
    <div class="text-center">
      <img
        class="card-img img-fluid"
        :src="img"
        style="max-width: 100%; max-height: 300px; width: auto; height: auto"
      />
    </div>
    <b-card-body class="p-3 mt-5">
      <h2>{{ name }}</h2>
      <p class="text-muted">
        {{ branch }}
      </p>

      <br />

      <div class="socials">
        <a
          :href="i.link"
          class="item"
          v-for="(i, index) in socials"
          :key="index"
        >
          <i class="bi" :class="i.icon" style="color: white;" />
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: ['img', 'name', 'branch', 'socials']
};
</script>

<style scoped>
.doctor-card {
  border: 1px solid var(--border-2);
  height: 100%;
}

.socials {
  display: flex;
  margin-top: 1em;
}

.socials .item {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: White;
  margin: 0.3em;
  font-size: 14px;
}

table {
  width: 100%;
}

table td {
  border-bottom: 1px solid var(--border-2);
  padding: 0.5em 0;
}
</style>
