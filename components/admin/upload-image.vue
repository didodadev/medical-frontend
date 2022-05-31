<template>
  <div>
    <div class="preview">
      <input
      id="uploadInput"
      type="file"
      style="display: none"
      @change="onSelect($event)"
    />

    <label class="cover-wrapper" for="uploadInput">
      <div class="primary-cover">
        <i class="bi bi-pen-fill" style="font-size: 30px"></i>
      </div>

      <img alt="" ref="image" class="w-100" v-show="imageBase64 !== ''" />
    </label>
    </div>

    <div class="upload-image centered" v-show="imageBase64 === ''">
      <label for="uploadInput">
        <h4>
          <i class="bi bi-images"></i>

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

interface IData {
  imageBase64: string;
}

export default Vue.extend({
  data: (): IData => ({
    imageBase64: "",
  }),
  props: ["setBase64"],
  methods: {
    onSelect(e: Event) {
      // @ts-expect-error
      const file = e.target.files[0];
      const reader = new FileReader();

      if (!file) return

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