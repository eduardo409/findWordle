<template>
  <div id="game">
    <MyModal 
    :wordle="wordleBoard.wordle"/>
    <!-- <Stats :numberOfCombinations="wordleBoard.numberOfCombinations" /> -->
    <Board
      @update-board-event="boardTileClicked"
      :gameBoard="wordleBoard.board"
    />
    <!-- <PermBoard :wordle="wordle" /> -->
    <Keyboard @update-alph-event="keyboardClicked" />
  </div>
</template>

<script>
import Board from "./Board.vue";
// import Stats from "./Stats.vue";
// import PermBoard from "./PermBoard.vue";
import Keyboard from "./Keyboard.vue";
import { GameBoard } from "../models/GameBoard";
import  MyModal from "./MyModal.vue"

export default {
  components: {
    // Stats,
    Board,
    // PermBoard,
    Keyboard,
    MyModal
  },
  name: "HomePage",
  props: {
    msg: String,
  },
  data: function () {
    return {
      wordleBoard: Object,
      wordle: "1",
    };
  },
  methods: {
    boardTileClicked: function (tileId) {
      console.log("emiting event from great grandchild");
      console.log(tileId);
      this.wordleBoard.tileClicked(tileId);
    },
    keyboardClicked(key) {
      this.wordleBoard.updateBoardTileValue(key);
    },
  },
  created() {
    console.log("created")
    this.wordleBoard = new GameBoard();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#game {
  width: 100%;
  max-width: var(--game-max-width);
  margin: 0 auto;
  height: calc(100% - var(--header-height));
  display: flex;
  flex-direction: column;
  touch-action: manipulation;
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
