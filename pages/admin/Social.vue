<template>
  <PageLayout
    name="Sosyal Medya"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/social"
  >
    <template v-slot:item="i">
      <td>
        <i class="bi" :class="i.data.icon"></i>
      </td>
      <td>
        {{ i.data.link }}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from "../../ts/global.types";
import { IServiceData } from "../../ts/data.types";
import publicURL from "../../ts/public-url";

const emptyData = {
  link: "",
  icon: "",
};

const tableHeadKeys = {
  icon: "İkon",
  link: "Bağlantı",
};

const dataFileds: IDataField[] = [
  {
    required: true,
    label: "Link",
    bind: "link",
    type: "input",
  },
  {
    title: "İkon",
    type: "single-icon",
    bind: "icon",
    social: true,
  },
];

const controllers: IControllers<IServiceData> = {};

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
    publicURL,
  },
});
</script>