<template>
  <div class="board-container">
    <div class="board" style="width: 350px; height: 420px;">
      <div v-for="(row, index) in gameBoard" :key="index">
        <GameRow v-bind:row="row" v-on="$listeners"
/>
      </div>
    </div>
  </div>
</template>

<script>
import GameRow from "./GameRow.vue";
export default {
  components: {
    GameRow,
  },
    props: {
    gameBoard: [],
  },
  name: "Board",
  data: function () {
    return { };
  },
};
</script>
<style scoped>
.board {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 5px;
    padding: 10px;
    box-sizing: border-box;
}
.board-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
}
</style>