<template>
  <div class="wrapper">
    <div class="d-flex align-items-end mb-3">
      <button class="btn btn-primary" @click="setModalShow(true)">
        {{ name }} ekle
      </button>
    </div>

    <table class="table tabe-responsive table-striped table-bordered w-100">
      <thead>
        <tr>
          <td>#</td>
          <td v-for="(i, index) in tableHeadKeys" :key="index">
            {{ i }}
          </td>
          <td>İşlemler</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in dataList" :key="index">
          <td>{{ index + 1 }}</td>

          <slot name="item" :data="i"></slot>

          <td>
            <div class="d-flex">
              <div
                :id="`popover-button-variant${index}`"
                href="#"
                :tabindex="index"
              >
                <i class="bi bi-trash" style="margin-right: 1em" />
              </div>
              <i
                class="bi bi-pen-fill"
                @click="
                  data = i;
                  show = true;
                "
              />

              <b-popover
                :target="`popover-button-variant${index}`"
                variant="danger"
                triggers="focus"
              >
                <button
                  class="btn btn-danger"
                  @click="remove(i.seourl || i.id)"
                >
                  Onaylıyorum
                </button>
              </b-popover>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-show="dataList.length === 0">
      <small class="text-muted"> {{ name }} bulunamadı. &nbsp;&nbsp; </small>

      <button class="btn-sm btn btn-primary" @click="setModalShow(true)">
        Oluştur
      </button>
    </div>

    <Modal
      :title="name"
      :close="() => setModalShow(false)"
      :show="show"
      :err="err"
    >
      <template #body>
        <div class="field mb-3" v-for="(i, index) in dataFields" :key="index">
          <h5>{{ i.title }}</h5>

          <div class="form-check form-switch" v-if="i.EN">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              :checked="enFiled[i.bind]"
              @change="changeEnFiled(i.bind)"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              {{ i.label }} {{ enFiled[i.bind] ? "İngilizce" : "Türkçe" }}
            </label>
          </div>

          <!-- Image Field -->
          <div v-if="i.type === 'image'">
            <UploadImage :setBase64="setImage" :data="data.thumbnailURL" />
          </div>

          <!-- Input Filed -->
          <div v-else-if="i.type === 'input'">
            <div class="form-floating mb-3">
              <textarea
                :id="`filed-input${index}`"
                class="form-control"
                :placeholder="i.label"
                v-model.trim="data[enFiled[i.bind] ? i.bind + 'EN' : i.bind]"
                v-if="i.textArea"
                style="height: 200px"
              ></textarea>
              <input
                :id="`filed-input${index}`"
                class="form-control"
                :placeholder="i.label"
                :type="i.inputType"
                v-model.trim="data[enFiled[i.bind] ? i.bind + 'EN' : i.bind]"
                v-else
              />
              <label :for="`filed-input${index}`" v-if="i.label">
                {{ i.label }}

                <i class="required" v-if="i.required" />
              </label>
            </div>
          </div>

          <!-- Editor Filed -->
          <div v-else-if="i.type === 'editor'">
            <VueEditor
              v-model.trim="data[enFiled[i.bind] ? i.bind + 'EN' : i.bind]"
            />
          </div>

          <!-- Icon Field -->
          <div v-else-if="i.type === 'icon'">
            <div class="d-flex align-items-center">
              <IconSelect :on-select="(i) => (iconData.icon = i)" />

              <div class="form-floating" style="margin-right: 0.5em">
                <input
                  id="link"
                  v-model="iconData.link"
                  type="text"
                  class="form-control"
                  placeholder="link"
                  style="height: 50px"
                />
                <label for="link"> {{ i.label }} </label>
              </div>

              <button
                class="btn btn-success"
                style="height: 50px"
                @click="addSocial(i.bind)"
              >
                Ekle
              </button>
            </div>

            <div class="row mt-4">
              <div
                v-for="(k, index) in socialsConvert()"
                :key="index"
                class="col-1"
              >
                <div
                  class="icon cover-wrapper centered"
                  style="
                    width: 30px;
                    height: 30px;
                    border: 1px solid var(--border-2);
                    border-radius: 6px;
                  "
                >
                  <i class="bi" :class="k.icon" />

                  <div
                    v-b-tooltip.hover
                    class="red-cover"
                    :title="k.link"
                    style="z-index: 9999"
                    @click="deleteSocial(i.bind, index)"
                  >
                    <i class="bi bi-trash-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Icon -->
          <div v-else-if="i.type === 'single-icon'">
            <div class="d-flex align-items-center">
              <IconSelect :on-select="(ic) => (data[i.bind] = ic)" />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <button class="btn btn-primary" @click="save()" :disabled="loading">
          Kaydet
        </button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "../../components/ui/modal-component.vue";
import IconSelect from "../../components/ui/icon-select.vue";
import UploadImage from "../../components/admin/upload-image.vue";
import { IDataField } from "~/ts/global.types";

export default Vue.extend({
  props: [
    "name",
    "tableHeadKeys",
    "emptyData",
    "url",
    "controllers",
    "dataFields",
  ],
  data() {
    return {
      dataList: [],
      data: { ...this.emptyData },
      enFiled: {},
      err: "",
      range: 10,
      show: false,
      loading: false,
      iconData: {
        icon: "",
        link: "",
      },
    };
  },
  components: {
    Modal,
    IconSelect,
    UploadImage,
  },
  created() {
    this.reloadList();
    this.dataFields.forEach((filed: IDataField) => {
      // @ts-expect-error
      this.enFiled[filed.bind] = false;
    });
  },
  methods: {
    controller() {
      for (const key in this.controllers) {
        const controller = this.controllers[key];
        const controllerResult = controller(this.data);

        if (controllerResult.err) {
          this.err = controllerResult.err;

          return true;
        }
      }

      return false;
    },

    changeEnFiled(bindName: string) {
      // @ts-expect-error
      this.enFiled[bindName] = !this.enFiled[bindName];

      this.$forceUpdate();
    },
    // Create And Save one function
    save() {
      if (this.controller()) return;

      const isUpdate = this.data.seourl || this.data.id;

      this.err = "";
      this.loading = true;

      this.$axios[isUpdate ? "put" : "post"](
        isUpdate ? `${this.url}/${this.data.seourl || this.data.id}` : this.url,
        this.data
      )
        .then(() => {
          this.reloadList();
          this.finallyAndCloseModal(true);
        })
        .finally(() => (this.loading = false));
    },
    finallyAndCloseModal(closeModal?: boolean) {
      this.clearData()
      this.loading = false;

      if (closeModal) this.show = false;
    },
    remove(seourl: string) {
      this.loading = true;

      this.$axios
        .delete(`${this.url}/${seourl}`)
        .then(this.reloadList)
        .finally(this.finallyAndCloseModal);
    },
    async reloadList() {
      this.dataList = (await this.$axios.get(this.url)).data.data.map(
        (d: any) => {
          if (d.socials) d.socials = JSON.parse(d.socials);

          return d;
        }
      );

      return this.dataList;
    },
    setImage(base64: string) {
      this.data.image = base64;
    },
    setModalShow(m: boolean = false) {
      this.show = m;

      if (!m) {
        this.clearData()
        this.err = "";
      }
    },
    addSocial(bindName: string) {
      console.log("data", this.data);
      console.log("bind name", bindName);
      this.data[bindName].push(this.iconData);

      this.iconData = { icon: "", link: "" };
    },
    deleteSocial(bindName: string, index: number) {
      this.data[bindName].splice(index, 1);
    },
    clearData() {
      this.data = { ...this.emptyData }
      this.data.socials = []

      this.$forceUpdate()
    },
    socialsConvert() {
      if (typeof this.data.socials === "object") return this.data.socials;
      else if (typeof this.data.socials === "string")
        return JSON.parse(this.data.socials);

      return this.data.socials;
    },
  },
});
</script>