<template>
  <div class="modal-container">
    <!-- <button @click="show">show modal</button> -->
    <modal name="my-first-modal" :adaptive="true" >
        <ComboComponent v-bind:wordle="wordle"  />
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
    showModal: Boolean
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
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; */
  /* overflow: hidden; */
}
</style>