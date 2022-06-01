<template>
  <div class="socials">
    <div class="item">
      <i class="bi bi-instagram" />
    </div>

    <div class="item">
      <i class="bi bi-facebook" />
    </div>

    <div class="item">
      <i class="bi bi-youtube" />
    </div>
  </div>
</template>

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
