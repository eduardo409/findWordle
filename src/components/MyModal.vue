<template>
  <div class="modal-overlay">
    <div class="modal">
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
      <button @click="$emit('close-modal')">Go Home</button>
      <!-- {{wordle}} -->
      <ComboComponent
      v-bind:wordle="wordle" 
      />
    </div>
    <!-- <div class="close" @click="$emit('close-modal')">
      <div class="close-icon">
        <game-icon icon="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="var(--color-tone-1)"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </game-icon>
      </div>
    </div> -->
  </div>
</template>

<script>
import ComboComponent from "./ComboComponent.vue";
export default {
  name: "MyModal",
  components: {
    ComboComponent
  },
  props: {
    wordle: [],
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>