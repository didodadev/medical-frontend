<template>
  <div class="guide">
    <h1><i class="bi bi-journal-bookmark-fill"></i> Klavuz</h1>

    <small class="text-muted">
      Klavuz uygulamayı kullanmanız için gereken temel bilgileri ve nasıl
      kullanacağınızı anlatır. <br />
      Bir sorun ile karşılaştığınızda klavuz içerisinde aratabilirsiniz.
    </small>

    <div class="form-floating mb-3 mt-3">
      <input
        type="text"
        class="form-control"
        id="search"
        placeholder="kelime ara"
        autocomplete="off"
        @keyup="search"
      />
      <label for="search">
        <i class="bi bi-search"></i> &nbsp; Kelime arayın
      </label>
    </div>

    <div class="markdown mt-5 pt-2" v-html="mdContent"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { marked } from "marked";

const mdContent = `
# Site hakkında

Örnek içerik
`;

export default Vue.extend({
  data: () => ({
    mdContent: marked(mdContent),
  }),
  methods: {
    search(e: InputEvent) {
      const searchKey = (<HTMLInputElement>e.target).value.trim();

      console.log(searchKey);

      if (searchKey === "") this.mdContent = marked(mdContent);
      else {
        this.mdContent = marked(
          mdContent.replaceAll(
            searchKey,
            `<span class="mark">${searchKey}</span>`
          )
        );
      }
    },
  },
});
</script>

<style scoped>
.mark {
  background: black;
  color: white;
  padding: 0 !important;
}
</style>