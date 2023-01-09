<template>
  <!--  verslepen van de taken-->

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
  computed: {
    checklistItem() {
      return this.$store.getters["checklistItem"];
    },
  },
};
</script>
