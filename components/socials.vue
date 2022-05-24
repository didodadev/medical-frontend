<template>
  <div class="socials">
    <div class="item">
      <i class="bi bi-instagram"></i>
    </div>

    <div class="item">
      <i class="bi bi-facebook"></i>
    </div>

    <div class="item">
      <i class="bi bi-youtube"></i>
    </div>
  </div>
</template>

<style>
:root {
  --social-item-height: 2em;
}

.socials {
  position: fixed;
  right: -1px;
  top: calc(50% - ((var(--social-item-height) * 3) / 2));
  border: 1px solid var(--border-2);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: white;
}

.socials .item {
  height: var(--social-item-height);
  width: var(--social-item-height);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 18px;
}
</style>