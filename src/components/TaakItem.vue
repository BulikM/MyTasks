<template>
  <!--  verslepen van de taken-->
  <draggable :options="{ group: 'taken' }" group="taken" ghostClass="ghost">
    <!-- taken in de lijst-->
    <!--  togglePopup    modal voor het verwijderen van de taak-->
    <!--      weergave van de taak naam-->
    <div class="bg-light p-3 m-2" v-for="(taak, index) in taken" :key="index">
      <button class="btn-info btn m-3" @click="togglePopup(taak)">modal</button>
      {{ taak.naam }}
      <!--      subtaak-->
      <div
        class="bg-light p-3 m-2 d-flex align-items-center"
        v-for="(check, index) in taken[0].checklist"
        :key="index"
      >
        <input
          class="form-check-input m-3"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />

        {{ check.naam }}
      </div>
    </div>
  </draggable>
</template>

<script>
// vue draggable
import { VueDraggableNext } from "vue-draggable-next";

export default {
  props: ["listId", "listName"],
  components: {
    draggable: VueDraggableNext,
  },
  methods: {
    togglePopup(data) {
      const currentData = {
        listId: this.listId,
        listName: this.listName,
        id: data.id,
        naam: data.naam,
      };
      this.$store.dispatch("toggleOverlay");
      this.$store.dispatch("openForm", currentData);
    },
  },
  computed: {
    taken() {
      const taakFilteredByListId = this.$store.getters["taken"];
      return taakFilteredByListId.filter((taak) => {
        if (taak.listId === this.listId) {
          return true;
        } else {
          return false;
        }
      });
    },
    overlayIsActive() {
      return this.$store.getters["overlay"];
    },
  },
};
</script>
