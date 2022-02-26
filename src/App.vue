<template>
  <div id="app" class="nightmode">
    <header>
      <div class="title">FIND WORDLE</div>
    </header>
    <HomePage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

@media (min-width: 415px) {
  header {
    padding: 0px 16px;
  }
}

@media (max-width: 360px) {
  header .title {
    font-size: 22px;
    letter-spacing: 0.1rem;
  }
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 16px;
  height: var(--header-height);
  color: var(--color-tone-1);
  border-bottom: 1px solid var(--color-tone-4);
}

header .title {
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-align: center;
  left: 0;
  right: 0;
  pointer-events: none;
}

.nightmode {
  height: 100%;
  --color-tone-1: #d7dadc;
  --color-tone-2: #818384;
  --color-tone-3: #565758;
  --color-tone-4: #3a3a3c;
  --color-tone-5: #272729;
  --color-tone-6: #1a1a1b;
  --color-tone-7: #121213;
  --opacity-50: rgba(0, 0, 0, 0.5);
  --green: #6aaa64;
  --darkendGreen: #538d4e;
  --yellow: #c9b458;
  --darkendYellow: #b59f3b;
  --lightGray: #d8d8d8;
  --gray: #86888a;
  --darkGray: #939598;
  --white: #fff;
  --black: #212121;
  --orange: #f5793a;
  --blue: #85c0f9;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  --header-height: 50px;
  --keyboard-height: 200px;
  --game-max-width: 500px;
  --color-present: var(--darkendYellow);
  --color-correct: var(--darkendGreen);
  --color-absent: var(--color-tone-4);
  --tile-text-color: var(--color-tone-1);
  --key-text-color: var(--color-tone-1);
  --key-evaluated-text-color: var(--color-tone-1);
  --key-bg: var(--color-tone-2);
  --key-bg-present: var(--color-present);
  --key-bg-correct: var(--color-correct);
  --key-bg-absent: var(--color-absent);
  --modal-content-bg: var(--color-tone-7);

  background-color: var(--color-tone-7) !important;
}
</style>
