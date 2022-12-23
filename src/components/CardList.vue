<template>
  <!--  verslepen van de taken-->
  <draggable :options="{ group: 'taken' }" group="taken" ghostClass="ghost">
    <!-- taken in de lijst-->
    <!--  togglePopup    modal voor het verwijderen van de taak-->
    <!--      weergave van de taak naam-->
    <span
      class="bg-light p-3 m-2 d-flex"
      v-for="(taak, index) in taken"
      :key="index"
      @click="togglePopup(taak)"
    >
      {{ taak.name }}
    </span>
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
        name: data.name,
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
