<template>
  <div>
    <input
      id="uploadInput"
      type="file"
      style="display: none"
      @change="onSelect($event)"
    />

    <div v-if="imageBase64 !== '' || (data !== '' && data)" class="preview">
      <label class="cover-wrapper" for="uploadInput">
        <div class="primary-cover">
          <i class="bi bi-pen-fill" style="font-size: 30px" />
        </div>

        <img ref="image" :src="data ? publicURL(data) : imageBase64" alt="" class="w-100" />
      </label>
    </div>

    <div v-else class="upload-image centered">
      <label for="uploadInput">
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
  props: {
    setBase64: {
      type: Function,
      required: true,
    },
    data: {
      type: String,
    },
  },
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
  overflow: hidden;
}
</style>
