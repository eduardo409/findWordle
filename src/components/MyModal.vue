<template>
  <div class="modal-container">
    <button @click="show">show modal</button>t
    <modal name="my-first-modal" >
      <!-- <div v-for="(row, index) in data" :key="index">
        HI
        <ComboComponent v-bind:data="row"  />
      </div> -->
        <ComboComponent v-bind:wordle="wordle"  />

      <!-- {{wordle}} -->
    </modal>
  </div>
</template>

<script>
import ComboComponent from "./ComboComponent.vue";

export default {
  components: {
    ComboComponent,
  },
  props: {
    wordle: [],
  },
  name: "MyModal",
  data: function () {
    return {
      data:[]
    };
  },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mount() {
    this.show();
  },
};
</script>
<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
}
</style>