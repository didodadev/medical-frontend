<template>
  <div class="top-side-bar row">
    <div class="col-md-8">
      <div class="d-flex">
        <div class="item">
          <i class="bi bi-telephone-fill"></i> +440-98-5298
        </div>

        <div class="item">
          <i class="bi bi-envelope-fill"></i> info@example.com
        </div>

        <div class="item">
          <i class="bi bi-map-fill"></i> 121 King Street, Melbourne
        </div>
      </div>
    </div>

    <div class="col-md-4"></div>
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
  border-right: 1px white solid;
  padding: 0 1em;
  line-height: 14px;
}

.top-side-bar .item:last-child {
  border: none
}
</style>
