<template>
  <div id="game">
    <header>
      <div class="title">FIND WORDLE</div>
    </header>
    <Stats :wordle="wordle" />
    <Board @update-board-event="boardTileClicked" :gameBoard="wordleBoard.board" />
    <PermBoard :wordle="wordle" />
    <Keyboard @update-alph-event="keyboardClicked" />
  </div>
</template>

<script>
import Board from "./Board.vue";
import Stats from "./Stats.vue";
import PermBoard from "./PermBoard.vue";
import Keyboard from "./Keyboard.vue";
import { Tile } from "../models/Tile";
import { GameBoard } from "../models/GameBoard";
export default {
  components: {
    Stats,
    Board,
    PermBoard,
    Keyboard,
  },
  name: "HomePage",
  props: {
    msg: String,
  },
  data: function () {
    return {
      wordleBoard: Object,
      wordle: " ",
    };
  },
  methods: {
    boardTileClicked: function (tileId) {
      console.log("emiting event from great grandchild");
      console.log(tileId);
      this.wordleBoard.tileClicked(tileId);      
    },
    keyboardClicked(key) {
      this.wordleBoard.updateBoardTileValue(1,key)
    },
  },
  created() {
    this.wordleBoard = new GameBoard(Tile);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#game {
  width: 100%;
  max-width: var(--game-max-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  touch-action: manipulation;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  color: var(--color-tone-1);
  border-bottom: 1px solid var(--color-tone-4);
}

.title {
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
}
div {
  display: block;
}
</style>
