<template>
  <div class="row">
    <!-- <div
      class="char"
      v-on:click="say(tile.getColor(), tile.getRow(), tile.getCol())"
      v-for="(tile, index) in row"
      :key="index"
    > -->
    <GameTile
      v-on:click="say(tile.getColor(), tile.getRow(), tile.getCol())"
      v-for="(tile, index) in row"
      :key="index"
      v-bind:tile="tile"
      v-on="$listeners"
    />
    <!-- </div> -->
  </div>
</template>

<script>
import GameTile from "./GameTile.vue";
export default {
  components: {
    GameTile,
  },
  name: "GameRow",
  props: {
    row: [],
    allowedWordLen: Number,
  },
  computed: {
    cssProps() {
      return {
        "--darkend": "red",
      };
    },
  },
  methods: {
    test: function () {
      // console.log("emiting event from parent")
      // console.log(message);
      // console.log(row);
      // console.log(col);
    },
  },
};
</script>
<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.char {
  background-color: var(--darkend);
}
</style>'
