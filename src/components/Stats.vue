<template>
  <div class="board-container">
    <div class="board" style="width: 350px">
      STATS: Permuations:{{ wordle.length ** 26 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wordle: String,
  },
  components: {},
  name: "Stats",
  data: function () {
    return {};
  },
};
</script>
<style scoped>
#board {
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
  background: red;
}
</style>