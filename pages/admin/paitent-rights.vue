<template>
  <div class="mt-5">
    <div class="lang-list">
      <div
        class="lang-item"
        @click="changeLang('')"
        :class="lang === '' ? 'active' : ''"
      >
        Türkçe
      </div>
      <div
        class="lang-item"
        @click="changeLang('EN')"
        :class="lang === 'EN' ? 'active' : ''"
      >
        İngilizce
      </div>
      <div
        class="lang-item"
        @click="changeLang('DE')"
        :class="lang === 'DE' ? 'active' : ''"
      >
        Almanca
      </div>
    </div>
    <VueEditor v-model="data['content' + lang]" />

    <button class="mt-5 btn btn-primary" @click="save"> Kaydet </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    lang: "",
    data: {},
  }),
  methods: {
    changeLang(lang: '' | 'EN' | 'DE') {
      this.lang = lang;
    },

    save() {
      this.$axios.post('paitent-rights', this.data)
    }
  },
  async created() {
    this.data = (await this.$axios.get('/paitent-rights')).data.data
  }
});
</script>

<style scoped>
.lang-list {
  display: flex;
  justify-content: flex-start;
  margin-bottom: .4em;
}

.lang-item {
  box-shadow: 0 0 10px 10px rgb(241, 241, 241);
  margin-right: 1em;
  border-radius: 3px;
  padding: .3em .6em;
  font-size: 15px;
  cursor: pointer;
}

div[class="lang-item active"] {
  background: var(--primary);
  color: white;
}
</style>