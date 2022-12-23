<template>
  <!--  verslepen van de taken-->
  <draggable :options="{ group: 'cards' }" group="cards" ghostClass="ghost">
    <!-- taken in de lijst-->
    <!--  togglePopup    modal voor het verwijderen van de taak-->
    <!--      weergave van de taak naam-->
    <span
      class="bg-light p-3 m-2 d-flex"
      v-for="(card, index) in cards"
      :key="index"
      @click="togglePopup(card)"
    >
      {{ card.name }}
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
    cards() {
      const cardFilteredByListId = this.$store.getters["cards"];
      return cardFilteredByListId.filter((card) => {
        if (card.listId === this.listId) {
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
