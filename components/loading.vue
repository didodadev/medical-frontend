<template>
  <div class="introduction">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="KALENDER" width="300" />

      <br />

      <i class="bi bi-dash-lg"></i>
      <i class="bi bi-dash-lg"></i>
      <i class="bi bi-activity"></i>
      <i class="bi bi-activity"></i>
      <i class="bi bi-activity"></i>
      <i class="bi bi-activity"></i>
      <i class="bi bi-dash-lg"></i>
      <i class="bi bi-dash-lg"></i>
    </div>

    <div class="transition"></div>
  </div>
</template>

<style scoped>
.introduction {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999999999999999999;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: introduction forwards;
  animation-duration: 2s;
  animation-delay: 3s;
  opacity: 1;
  visibility: visible;
}

i {
  font-size: 10vw;
}

.transition {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  right: -100%;
  left: 100%;
  background-color: white;
  animation: _transition 2s backwards;
  animation-iteration-count: 1;
  animation-delay: 1s;
}

.logo {
  animation: logo 3s backwards;
  animation-delay: 2s;
  opacity: 0;
  text-align: center;
}

.logo i {
  color: var(--primary)
}

@keyframes _transition {
  60% {
    right: 100%;
    left: 0;
  }
  100% {
    left: -100%;
    right: 100%;
  }
}
@keyframes logo {
  100% {
    opacity: 1;
  }
}
@keyframes introduction {
  100% {
    visibility: hidden;
    opacity: 0;
  }
  end {
  }
}
</style>