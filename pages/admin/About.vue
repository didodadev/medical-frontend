<template>
  <div class="about">
    <div class="mt-5">
      <small class="text-muted">
        Eğer haftanın belirli bir günü kapalıysanız işlem kısmındaki seçeneği
        "Kapalı" hale getirebilirsiniz. <br>
        <br>

        Hakkımızda sayfası için açılış saatleriniz.
      </small>
    </div>
    <table class="table table-bordered mt-3">
      <thead>
        <tr>
          <td>Gün</td>
          <td>Açılış Saati</td>
          <td>Kapanış Saati</td>
          <td>İşlem</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in openingHours" :key="index">
          <td>{{ i.day }}</td>
          <td>
            <input v-model="i.openingHour" type="time">
          </td>
          <td>
            <input v-model="i.closingHour" type="time">
          </td>
          <td>
            <div class="form-check form-switch">
              <input
                id="flexSwitchCheckChecked"
                class="form-check-input"
                type="checkbox"
                role="switch"
                :checked="i.offDay"
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="mt-5">
      Hizmetler için açıklama
    </h3>
    <small class="text-muted">
      Hizmetleriniz hakkında genel bir açıklama metni.
    </small>

    <div class="form-floating mt-4">
      <textarea
        id="text"
        class="form-control"
        placeholder="Metin"
        style="height: 200px"
      />
      <label for="text">Metin</label>
    </div>

    <h3 class="mt-5">
      Hakkımızda Metni
    </h3>
    <div style="height: 50vh" class="mb-5 pb-5">
      <VueEditor class="h-100" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IOpeningHour {
  day: string;
  openingHour: Date;
  closingHour: Date;
  offDay: boolean;
}

interface IData {
  openingHours: IOpeningHour[];
}

export default Vue.extend({
  data: (): IData => ({
    openingHours: [
      {
        day: 'Pazartesi',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: true
      },
      {
        day: 'Salı',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: true
      },
      {
        day: 'Çarşamba',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: true
      },
      {
        day: 'Perşembe',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: true
      },
      {
        day: 'Cuma',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: true
      },
      {
        day: 'Cumartesi',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: false
      },
      {
        day: 'Pazar',
        openingHour: new Date(),
        closingHour: new Date(),
        offDay: false
      }
    ]
  })
})
</script>
