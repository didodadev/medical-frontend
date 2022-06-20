<template>
  <div class="top-side-bar">
    <div class="container-xl">
      <div class="row">
        <div class="item col-md-2">
          <i class="bi bi-telephone-fill" /> +440-98-5298
        </div>

        <div class="item col-md-2">
          <i class="bi bi-envelope-fill" /> info@example.com
        </div>

        <div class="item col-md-3">
          <i class="bi bi-map-fill" /> 121 King Street, Melbourne
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-side-bar {
  background-color: var(--primary);
  color: white;
  padding: 1.2em;
}

.top-side-bar .item {
  font-size: 17px;
  padding: 0 1em;
  line-height: 14px;
}

.top-side-bar .item:last-child {
  border: none;
}

@media screen and (max-width: 768px) {
  .top-side-bar .item {
    padding: 0.5em 0;
    width: max-content !important;
    margin-right: 1em;
  }
}
</style>
