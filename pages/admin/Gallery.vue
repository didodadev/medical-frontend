<template>
  <PageLayout
    name="Galeri"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/image"
  >
    <template v-slot:item="i">
      <td>
        <img :src="publicURL(i.data.thumbnailURL)" width="100px">
      </td>
      <td>
        {{i.data.title}}
      </td>
      <td>
        {{i.data.subTitle}}
      </td>
      <td>
        {{i.data.category}}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from '../../ts/global.types'
import { IImageData, IImageView } from '../../ts/data.types'
import publicURL from '../../ts/public-url'


const emptyData: IImageView = {
  title: '',
  subTitle: '',
  category: ''
};

const tableHeadKeys = {
  thumbnailURL: "Resim",
  title: 'Başlık',
  subTitle: 'Alt Başlık',
  category: 'Kategori'
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
  },
  {
    required: true,
    label: "Alt Başlık",
    bind: "subTitle",
    type: "input",
  },
  {
    required: true,
    label: "Kategori",
    bind: "category",
    type: "input",
  },
];

const controllers: IControllers<IImageData> = {
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