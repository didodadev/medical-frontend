<template>
  <PageLayout
    name="Hizmet"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/service"
  >
    <template v-slot:item="i">
      <td>
        {{ i.data.title }}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from "../../ts/global.types";
import { IServiceView, IServiceData } from "../../ts/data.types";
import publicURL from "../../ts/public-url";

const emptyData = {
  title: "",
  content: "",
  image: "",
};

const tableHeadKeys = {
  title: "İsim",
};

const dataFileds: IDataField[] = [
  {
    title: "Hizmet Ön Resmi",
    type: "image",
    bind: "image",
  },
  {
    required: true,
    label: "Hizmet Adı",
    bind: "title",
    type: "input",
    lang: true,
  },
  {
    title: "Hizmet Açıklaması",
    bind: "content",
    type: "editor",
    lang: true,
  },
];

const controllers: IControllers<IServiceData> = {
  title: (d) =>
    d.title === ""
      ? { err: "Hizmet adı doldurulması zorunlu bir alandır." }
      : {},
  image: (d) => {
    if (d.thumbnailURL) return {};
    return d.image === "" || !d.image
      ? { err: "Hizmet için resim yüklenmelidir" }
      : {};
  },
};

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