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
import { Tile } from "../models/Tile";

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
  methods: {
    createTile(word) {
      console.log(word);
      let t1 = new Tile();
      t1.setChar(word[0]);

      let t2 = new Tile();
      t2.setChar(word[1]);

      let t3 = new Tile();
      t3.setChar(word[2]);

      let t4 = new Tile();
      t4.setChar(word[3]);

      let t5 = new Tile();
      t5.setChar(word[4])
      return [t1, t2, t3, t4, t5];
    },
  },
  created() {
    const colomn1 = this.wordle[0];
    const colomn2 = this.wordle[1];
    const colomn3 = this.wordle[2];
    const colomn4 = this.wordle[3];
    const colomn5 = this.wordle[4];

    for (let char1 of colomn1) {
      let word = char1;
      for (let char2 of colomn2) {
        word = word.concat(char2);
        for (let char3 of colomn3) {
          word = word.concat(char3);
          for (let char4 of colomn4) {
            word = word.concat(char4);
            for (let char5 of colomn5) {
              word = word.concat(char5);
              this.listOfRows.push(this.createTile(word));
              word = char1 + char2 + char3 + char4;
            }
            word = char1 + char2 + char3;
          }
          word = char1 + char2;
        }
        word = char1;
      }
    }
    console.log("this component has been created");
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
  overflow-y:auto
}
</style>'
