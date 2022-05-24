<template>
  <footer>
    <div class="top">
      <div class="container-xxl p-0">
        <div class="row m-0">
          <div class="l-bg-primary col-md-4 d-flex info p-4">
            <i class="bi bi-hospital-fill" style="margin-right: 0.5em"></i>

            <div>
              <h3>24 Hours Service</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>

          <div class="l-bg-secondary col-md-4 d-flex info p-4">
            <i class="bi bi-chat-text" style="margin-right: 0.5em"></i>

            <div>
              <h3>Online Help</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>

          <div class="l-bg-primary col-md-4 d-flex info p-4">
            <i
              class="bi bi-credit-card-2-back-fill"
              style="margin-right: 0.5em"
            ></i>

            <div>
              <h3>Online Payment</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <div class="container">
        <div class="row m-0 text-muted">
          <div class="col-md-3">
            <h1>LOGO</h1>

            <p>
              203, Envato Labs, Behind Alis Steet, Melbourne,
              Australia.immersion along the information close the loop on
              focusing
            </p>

            <div class="socials d-flex">
              <div class="item">
                <i class="bi bi-instagram"></i>
              </div>

              <div class="item">
                <i class="bi bi-facebook"></i>
              </div>

              <div class="item">
                <i class="bi bi-youtube"></i>
              </div>

              <div class="item">
                <i class="bi bi-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container">
        © 2021 ThemeMascot. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.info i {
  font-size: 40px;
  color: white;
}

.footer-content {
  background: #1a1b1b;
  padding: 2em;
}

.footer-content * {
  color: white;
}

.socials .item {
  width: 30px;
  height: 30px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
  border-radius: 5px;
}

.bottom {
  background: #2A2B2B;
  color: white;
  padding: 1em;
  padding-left: 2.8em;
}
</style>