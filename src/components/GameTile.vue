<template>
  <div
    class="tile"
    data-state="empty"
    v-on:click="click(tile.getId())"
    data-animation="idle"
    :style="cssProps"
  >
    {{ tile.getChar() }}
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    tile: Object,
  },
  data: function () {
    return {
    };
  },
  methods: {
    click: function (id) {
      console.log("grandchild emit ");
      this.$emit("update-board-event", id);
    },
  },
  computed: {
    cssProps() {
      return {
        "--color-tile": this.tile.getColor(),
      };
    },
  },
};
</script>
<style scoped>
.tile[data-state="empty"] {
  border: 2px solid var(--color-tone-4);
}
.tile {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  color: var(--tile-text-color);
  background-color: var(--color-tile);
  text-transform: uppercase;
  user-select: none;
}

.tile::before {
  content: "";
  display: inline-block;
  padding-bottom: 100%;
}
</style>