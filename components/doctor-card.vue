<template>
  <b-card
    :img-src="img"
    style="border: none; border-radius: 5px"
    class="shadow"
  >
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

      <br>

      <div class="socials">
        <div class="item">
          <i class="bi bi-instagram" />
        </div>

        <div class="item">
          <i class="bi bi-facebook" />
        </div>

        <div class="item">
          <i class="bi bi-twitter" />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    }
  }
}
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
