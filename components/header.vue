<template>
  <div class="header row">
    <div class="col-md-3">
      LOGO
      <!-- <img src="" alt=""> -->
    </div>

    <div class="col-md-9">
      <div class="navs d-flex">
        <div class="nav-item">
          <div class="title"> HOME <i class="bi bi-chevron-down"></i> </div>

          <div class="list">
            <div class="item">
              Index Multiple Layout Page 1
            </div>

            <div class="item">
              Index Multiple Layout Page 2
            </div>

            <div class="item">
              Index Multiple Layout Page 3
            </div>
          </div>
        </div>

        <div class="nav-item">
          <div class="title"> SERVICES <i class="bi bi-chevron-down"></i> </div>

          <div class="list">
            <div class="item">
              List item 1
            </div>

            <div class="item">
              List item 2
            </div>

            <div class="item">
              List item 2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-item {
  margin: 1em;
  position: relative;
}

.nav-item .title {
  background: var(--scondary);
  color: white;
  padding: .5em 1em;
  /* font-weight: 600; */
  border-radius: 30px;
}

.nav-item .list {
  position: absolute;
  background: white;
  padding: 1em;
  border-top: 2px solid black;
  width: max-content;
}

.nav-item .list .item {
  margin-bottom: .8em;
}
</style>