<template>
  <PageLayout
    name="Doktor"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/doctor"
  >
    <template v-slot:item="i">
      <td>
        {{ i.data.fullName }}
      </td>
      <td>
        {{ i.data.branch }}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from "../../ts/global.types";
import { IDoctorData, IDoctorView } from "../../ts/data.types";
import publicURL from "../../ts/public-url";

const emptyData: IDoctorView = {
  fullName: "",
  branch: "",
  socials: [],
  about: "",
};

const tableHeadKeys = {
  fullName: "İsim Soyisim",
  branch: "Alan",
};

const dataFileds: IDataField[] = [
  {
    title: "Doktorun Resmi",
    type: "image",
    bind: "image",
  },
  {
    required: true,
    label: "İsim Soyisim",
    bind: "fullName",
    type: "input",
  },
  {
    required: true,
    label: "Alan",
    bind: "branch",
    type: "input",
    lang: true
  },
  {
    required: true,
    label: "Doktor Hakkında Açıklama Metni",
    bind: "about",
    type: "editor",
    lang: true,
  },
  {
    title: "Sosyal Medya Linkleri",
    bind: "socials",
    type: "icon",
    label: "Link",
    social: true,
  },
];

const controllers: IControllers<IDoctorData> = {};

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