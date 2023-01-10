<template>
  <transition>
    <!--    modal zelf-->
    <div v-if="overlay" class="modal">
      <h1>Wijzig uw taak:</h1>
      <!--      de huidige taaknaam in het inputveld-->
      <input :placeholder="currentData.naam" v-model="taakNaam" />
      <div class="bg-pink py-1"></div>

      <!--      de save en verwijder knoppen-->
      <div class="d-flex gap-3">
        <button class="btn p-3 btn-dark rounded-0" @click="saveElement">
          save
        </button>
        <button class="btn p-3 btn-danger rounded-0" @click="deleteElement">
          delete
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      taakNaam: null,
    };
  },
  computed: {
    ...mapGetters(["overlay", "currentData"]),
    lists() {
      return this.$store.getters["lists"];
    },
  },
  methods: {
    // naam van taak aanpassen
    saveElement() {
      if (this.taakNaam === null) {
        this.taakNaam = this.currentData.naam;
      }
      const taak = {
        listId: this.currentData.listId,
        id: this.currentData.id,
        naam: this.taakNaam,
      };
      this.$store.dispatch("saveTaak", taak);
      this.taakNaam = null;
      this.$store.dispatch("toggleOverlay");
    },
    deleteElement() {
      this.$store.dispatch("deleteTaak", this.currentData);
      this.$store.dispatch("toggleOverlay");
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 10px;
  background-color: rgba(235, 236, 240, 1);
  z-index: 550;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  width: 250px;
  height: 50px;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgba(60, 60, 60, 0.2);
}
</style>
