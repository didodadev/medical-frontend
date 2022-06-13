<template>
  <div class="ui-modal" :class="show ? 'open' : 'close'">
    <div class="shadow" @click="close" />
    <div
      class="ui-modal-content col-md-8 col-xl-6 col-11"
      :class="isFullscreen ? 'full-screen' : ''"
    >
      <div class="modal-header d-block">
        <div class="d-flex justify-content-between">
          <h2>{{ title }}</h2>

          <div class="d-flex align-items-center">
            <i class="bi bi-x" style="font-size: 30px" @click="close" />
            &nbsp;&nbsp;
            <i
              class="bi"
              :class="
                isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'
              "
              style="font-size: 17px"
              @click="isFullscreen = !isFullscreen"
            />
          </div>
        </div>

        <small class="err">{{ err }}</small>
      </div>

      <div v-if="show" class="modal-body">
        <slot name="body" />
      </div>

      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    err: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isFullscreen: false
  })
})
</script>

<style scoped>
.modal-header .err {
  color: red;
}

.open {
  visibility: visible;
  opacity: 1;
}

.close {
  visibility: hidden;
  opacity: 0;
}

.close .ui-modal-content {
  margin-top: 20%;
}

.ui-modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  z-index: 9999;
}

.shadow {
  position: absolute;
  content: " ";
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: black;
  opacity: 0.5;
}

.ui-modal-content {
  background: white;
  z-index: 99;
  border-radius: 10px;
  transition: 0.2s;
  max-height: 80vh;
  overflow: auto;
}

.modal-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;
}

.modal-footer {
  position: sticky;
  bottom: 0;
  background: white;
  z-index: 99;
}

.full-screen {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  border-radius: 0;
}
</style>
