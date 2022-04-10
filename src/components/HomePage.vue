<template>
  <div id="game">
    <!-- <modal name="my-first-modal" :adaptive="true">
      <ComboComponent v-bind:wordle="wordleBoard.wordle" />
    </modal> -->
    <!-- <MyModal :wordle="wordleBoard.wordle" /> -->
    <!-- <Stats :numberOfCombinations="wordleBoard.numberOfCombinations" /> -->
    <MyModal  
    v-if="showModal"
    :wordle="wordleBoard.wordle" 
    @close-modal="showModal = false"
    />
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
import MyModal from "./MyModal.vue"
// import ComboComponent from "./ComboComponent.vue";
import Keyboard from "./Keyboard.vue";
import { GameBoard } from "../models/GameBoard";

export default {
  components: {
    // Stats,
    Board,
    // PermBoard,
    Keyboard,
    // ComboComponent,
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
      showModal:false,
    };
  },
  methods: {
    boardTileClicked: function (tileId) {
      console.log("emiting event from great grandchild");
      console.log(tileId);
      this.wordleBoard.tileClicked(tileId);
    },
    keyboardClicked(key) {
      console.log("this is the character that was clicked " + key);
      if (key == "find") {
        this.showModal = true
        
      } else {
        this.wordleBoard.updateBoardTileValue(key);
      }
    },
    closeModal() {
      console.log("hi this is an emmit from modal")
      this.showModal = false;
    }
  },
  created() {
    console.log("created");
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

.modal-container {
      touch-action:none;
      overscroll-behavior: contain;
}
</style>
