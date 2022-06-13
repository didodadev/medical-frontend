<template>
  <div class="socials">
    <div class="item" v-for="(i, index) in data" :key="index">
      <a :href="i.link">
        <i class="bi" :class="i.icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    this.data = (await this.$axios.get('/social')).data.data
  }
}
</script>

<style scoped>
.socials {
  position: fixed;
  right: -1px;
  top: calc(50% - ((2em * 3) / 2));
  border: 1px solid var(--border-2);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: white;
  z-index: 4;
}

.socials .item {
  height: 2em;
  width: 2em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 20px;
}
</style>
