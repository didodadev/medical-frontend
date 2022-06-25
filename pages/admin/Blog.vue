<template>
  <PageLayout
    name="Blog"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/blog"
  >
    <template v-slot:item="i">
      <td>
        <img :src="publicURL(i.data.thumbnailURL)" width="100px" />
      </td>
      <td>
        {{ i.data.title }}
      </td>
      <td>
        {{ i.data.coverLetter }}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from "../../ts/global.types";
import { IBlogData, IBlogView } from "../../ts/data.types";
import publicURL from "../../ts/public-url";

const emptyData: IBlogView = {
  title: "",
  content: "",
  coverLetter: "",
};

const tableHeadKeys = {
  thumbnailURL: "Resim",
  title: "Başlık",
  coverLetter: "Ön Yazı",
};

const dataFileds: IDataField[] = [
  {
    title: "Resim",
    type: "image",
    bind: "image",
  },
  {
    required: true,
    label: "Başlık",
    bind: "title",
    type: "input",
    lang: true,
  },
  {
    required: true,
    label: "Ön yazı",
    bind: "coverLetter",
    type: "input",
    textArea: true,
    lang: true,
  },
  {
    required: true,
    bind: "content",
    type: "editor",
    title: "Blog İçeriği",
    lang: true,
  },
];

const controllers: IControllers<IBlogData> = {};

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