<template>
  <PageLayout
    name="Fiyatlandırma"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/price"
  >
    <template v-slot:item="i">
      <td>
        {{i.data.title}}
      </td>
      <td>
        {{i.data.explanation}}
      </td>
      <td>
        {{i.data.price}}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from '../../ts/global.types'
import { IServiceView, IServiceData } from '../../ts/data.types'
import publicURL from '../../ts/public-url'


const emptyData = {
  title: "",
  content: "",
  image: "",
};

const tableHeadKeys = {
  title: "İsim",
  explanation: "Açıklama",
  price: "Fiyat"
};

const dataFileds: IDataField[] = [
  {
    title: "Fiyat Adı",
    type: "input",
    bind: "title",
    EN: true
  },
  {
    required: true,
    label: "Fiyat Açıklaması (Kısa bir cümle olması gerekir)",
    bind: "explanation",
    type: "input",
    EN: true
  },
  {
    title: "Fiyat",
    bind: "price",
    type: "input",
    EN: true
  },
];

const controllers: IControllers<IServiceData> = {
}

export default Vue.extend({
  data() {
    return {
      emptyData,
      tableHeadKeys,
      dataFileds,
      controllers,
    };
  },
  components: {
    PageLayout,
  },
  methods: {
    publicURL
  }
});
</script>