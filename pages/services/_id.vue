<template>
  <div>
    <PaginationHeader title="service" subTitle="Example Service" />

    <div class="white-block p-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <b-list-group style="cursor: pointer">
              <b-list-group-item active>
                <i class="bi bi-chevron-right"></i> Cras justo
                odio</b-list-group-item
              >
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-list-group class="mt-5" style="cursor: pointer">
              <b-list-group-item active>
                <i class="bi bi-file-pdf"></i> {{$t('service-download-pdf')}}
              </b-list-group-item>
            </b-list-group>
          </div>

          <div class="col-md-9">
            <img
              src="https://kodesolution.com/html/2015/medinova-b5/images/bg/bg1.jpg"
              width="100%"
            />

            <h3 class="mt-5">Operation Theater</h3>

            <p class="mt-4">
              Tincidunt wisi euismod iaculis nunc vita Nostra dapibus varius et
              semper semper rutrum ad risus felis eros. Cursus libero viverra
              tempus netus diam vestibulum lorem tincidunt congue porta. Non
              <br />
              <br />
              ligula egestas commodo massa. Lorem non sit vivamus convallis elit
              mollis. Viverra sodales feugiat natoque sem morbi hac nunc
              ultricies nibh netus facilisis blandit. Pharetra luctus augue
              duis. Parturient tortor tortor sed tellus molestie neque Habitasse
              justo, sed justo. <br />
              <br />
              Senectus morbi, fermentum magna id tortor. Lacinia sociis morbi
              erat ultricies dictumst condimentum dictum nascetur? Vitae litora
              erat <br />
              <br />
              penatibus nam lorem. Euismod tempus, mollis leo tempus? Semper est
              cursus viverra senectus lectus feugiat id! Odio porta nibh
              dictumst nulla taciti lacus nam est praesent. Tincidunt habitant
              egestas erat <br />
              <br />
              lectus congue nisl dapibus nostra bibendum. In est in vitae
              dictumst varius lorem congue rutrum eget primis augue. At orci
              cubilia duis orci consequat libero malesuada mi. Porta facilisis
              dui, justo laoreet penatibus. Eros penatibus justo, tempor ligula
              vestibulum vestibulum lacus mauris himenaeos quisque proin.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationHeader from '../../components/pagination-header.vue'

export default {
  components: {
    PaginationHeader
  }
}
</script>