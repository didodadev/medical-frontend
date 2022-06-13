<template>
  <b-card style="border: none; border-radius: 5px" class="shadow">
    <div class="text-center">
      <img
        class="card-img img-fluid"
        :src="img"
        style="max-width: 100%; max-height: 300px; width: auto; height: auto"
      />
    </div>
    <b-card-body class="p-3">
      <h2>{{ name }}</h2>
      <p class="text-muted">
        {{ branch }}
      </p>

      <table>
        <tbody>
          <tr>
            <td>Monday Friday</td>
            <td>9:00 - 16:00</td>
          </tr>

          <tr>
            <td>Saturday</td>
            <td>9:00 - 16:00</td>
          </tr>
        </tbody>
      </table>

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
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    socials: Array,
  },
};
</script>

<style scoped>
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
