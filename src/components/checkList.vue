<template>
  <!--  verslepen van de taken-->
  <input
    type="text"
    class="input-new-checklistItem bg-pink"
    placeholder="maak een omschrijving aan"
    v-model="checklistItemNaam"
    @keyup.enter="maakNewChecklistItem"
  />
  <draggable
    :options="{ group: 'checklistItem' }"
    group="checklistItem"
    ghostClass="ghost"
  >
    <!-- taken in de lijst-->
    <!--  togglePopup    modal voor het verwijderen van de taak-->
    <!--      weergave van de taak naam-->
    <span
      class="bg-light p-3 m-2 d-flex"
      v-for="(check, index) in checklistItem"
      :key="index"
    >
      {{ check.naam }}
    </span>
  </draggable>
</template>

<script>
// vue draggable
import { VueDraggableNext } from "vue-draggable-next";
export default {
  props: { checklist: Object },
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      checklistItemNaam: null,
    };
  },
  computed: {
    checklistItem() {
      return this.$store.getters["checklistItem"];
    },
  },
  maakNewChecklistItem() {
    console.log("test");
    // maken dat de waarde niet leeg is
    if (this.checklistItemNaam !== "") {
      this.$store.dispatch("checklistItem", this.checklistItemNaam);
      // terug leeg zetten van het inputveld
      this.checklistItemNaam = null;
    }
  },
};
</script>
