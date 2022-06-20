<template>
  <div>
    <input
      :id="`upload-image${id}`"
      type="file"
      style="display: none"
      @change="onSelect($event)"
    />

    <div v-if="(imageBase64 !== '' || (data !== '' && data)) && noPreview === undefined" class="preview">
      <label class="cover-wrapper" :for="`upload-image${id}`">
        <div class="primary-cover">
          <i class="bi bi-pen-fill" style="font-size: 30px" />
        </div>

        <img ref="image" :src="data ? publicURL(data) : imageBase64" alt="" style="max-width: 300px;" />
      </label>
    </div>

    <div v-else-if="!noPreview" class="upload-image centered">
      <label :for="`upload-image${id}`">
        <h4>
          <i class="bi bi-images" /> 

          <small class="text-muted">
            Resim yüklemek için lütfen tıklayınız
          </small>
        </h4>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import publicURL from "../../ts/public-url";

interface IData {
  imageBase64: string;
}

export default Vue.extend({
  props: ['setBase64', 'data', 'id', 'noPreview'],
  data: (): IData => ({
    imageBase64: "",
  }),
  methods: {
    publicURL,
    onSelect(e: Event) {
      // @ts-expect-error
      const file = e.target.files[0];
      const reader = new FileReader();

      if (!file) {
        return;
      }

      reader.addEventListener("loadend", () => {
        this.setBase64(reader.result);

        // @ts-expect-error
        this.imageBase64 = reader.result;

        // @ts-expect-error
        this.$refs.image.src = reader.result;
      });

      reader.readAsDataURL(file);
    },
  },
});
</script>

<style scoped>
.upload-image {
  height: 150px;
  border: 1px dashed var(--primary);
  cursor: pointer;
  overflow: auto;
}

.preview {
  max-height: 400px;
  max-width: 100%;
  width: max-content;
  overflow: hidden;
  border: 1px solid var(--border-2);
  border-radius: 5px;
  display: flex;
}

.cover-wrapper {
  width: 100%;
}
</style>
