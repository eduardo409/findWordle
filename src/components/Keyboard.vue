<template>
  <div class="keyboard">
    <div class="row">
      <button
        v-for="(key, index) in row1"
        :key="index + key"
        :value="key"
        v-on:click="click(key)"
      >
        {{ key }}
      </button>
    </div>
    <div class="row">
      <div class="spacer half"></div>
      <button
        v-for="(key, index) in row2"
        :key="index + key"
        :value="key"
        v-on:click="click(key)"
      >
        {{ key }}
      </button>
      <div class="spacer half"></div>
    </div>

    <div class="row">
      <button class="one-and-a-half" v-on:click="click(`enter`)">FIND</button>
      <button
        v-for="(key, index) in row3"
        :key="index + key"
        :value="key"
        v-on:click="click(key)"
      >
        {{ key }}
      </button>
      <button class="one-and-a-half" v-on:click="click(`backspace`)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="var(--color-tone-1)"
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Keyboard",
  data: function () {
    return {
      row1: "qwertyuiop",
      row2: "asdfghjkl",
      row3: "zxcvbnm",
    };
  },
  created() {},
  methods: {
    click: function (key) {
      this.$emit("update-alph-event", key);
    },
  },
};
</script>
<style scoped>
:host {
  height: var(--keyboard-height);
}

.row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}

.keyboard {
  margin: 0 8px;
  user-select: none;
  height: var(--keyboard-height);
}
button {
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: var(--key-bg);
  color: var(--key-text-color);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
}

button:focus {
  outline: none;
}

button.fade {
  transition: background-color 0.1s ease, color 0.1s ease;
}

button:last-of-type {
  margin: 0;
}

.half {
  flex: 0.5;
}

.one {
  flex: 1;
}

.one-and-a-half {
  flex: 1.5;
  font-size: 12px;
}

.two {
  flex: 2;
}
</style>