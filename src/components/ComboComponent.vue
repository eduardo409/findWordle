<template>
  <div class="combo-container">
    <!-- hi this is combo component{{ wordle }} {{ listOfRows.length }} list of words -->
    <!-- {{ listOfRows }} -->
    <div class="board" style="width: 350px; height: 420px">
      <div v-for="(row, index) in listOfRows" :key="index">
        <!-- {{row}} -->
        <GameRow v-bind:row="row" />
      </div>
    </div>
  </div>
</template>

<script>
import GameRow from "./GameRow.vue";
var ComboCalculator = require("../services/ComboCalculator");
var listOfValidWords = require("../assets/listOfWords");

export default {
  components: {
    GameRow,
  },
  name: "ComboComponent",
  props: {
    wordle: [],
  },
  data: function () {
    return {
      listOfRows: [],
    };
  },
  computed: {},
  methods: {},
  created() {
    // new ComboCalculator(listOfValidWords);
    let calculator = new ComboCalculator(listOfValidWords);
    this.listOfRows = calculator.genListOfCombination(this.wordle);
    console.log("creating combo component");
    // console.log(this.listOfRows);
  },
};
</script>
<style scoped>
.board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 25px;
  box-sizing: border-box;
}

.combo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  /* overflow: hidden; */
  overflow-y: auto;
  /* touch-action: none; */
  /* overscroll-behavior: contain; */
}
</style>'
