<template>
  <PageLayout
    name="Kurum"
    :emptyData="emptyData"
    :tableHeadKeys="tableHeadKeys"
    :dataFields="dataFileds"
    :controllers="controllers"
    url="/contract"
  >
    <template v-slot:item="i">
      <td>
        <img :src="publicURL(i.data.thumbnailURL)" width="100px">
      </td>
      <td>
        {{i.data.name}}
      </td>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import PageLayout from "../../components/admin/page-layout.vue";
import { IControllers, IDataField } from '../../ts/global.types'
import { IBlogData, IBlogView } from '../../ts/data.types'
import publicURL from '../../ts/public-url'


const emptyData: IBlogView = {
  title: '',
  content: '',
  coverLetter: ''
};

const tableHeadKeys = {
  thumbnailURL: "Resim",
  title: 'Kurum Adı',
};

const dataFileds: IDataField[] = [
  {
    title: "Resim",
    type: "image",
    bind: "image",
  },
  {
    required: true,
    label: "Kurum Adı",
    bind: "name",
    type: "input",
  },
  {
    required: true,
    title: "Kurum Açıklaması",
    bind: "content",
    type: "editor",
    EN: true
  },
];

const controllers: IControllers<IBlogData> = {
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