<template>
  <!--  verslepen van de taken-->
  <p>test 1</p>
  <div
    :options="{ group: 'lists' }"
    group="lists"
    ghostClass="ghost"
    class="d-flex"
  >
    <div class="px-2" v-for="(list, index) in lists" :key="index">
      <div class="bg-pink d-flex justify-content-between p-2">
        <label class="list-header bg-pink p-1">{{ list.name }}</label>
      </div>
      <!--            rand rond maak taak aan-->
      <div class="bg-pink w-100 text-center p-2">
        <!--              taak aanmaken via -->
        <taak :listId="list.id" />
      </div>
    </div>
  </div>
  <draggable :options="{ group: 'taken' }" group="taken" ghostClass="ghost">
    <!-- taken in de lijst-->
    <!--  togglePopup    modal voor het verwijderen van de taak-->
    <!--      weergave van de taak naam-->
    <span
      class="bg-light p-3 m-2 d-flex"
      v-for="(taak, index) in taken"
      :key="index"
    >
      <p>test2</p>
      {{ taak.naam }}
    </span>
    <p>test3</p>
  </draggable>
  <p>test4</p>
</template>

<script>
// vue draggable
import { VueDraggableNext } from "vue-draggable-next";

export default {
  props: ["checkId", "listName"],
  components: {
    draggable: VueDraggableNext,
  },
  computed: {
    lists() {
      return this.$store.getters["checklistItem"];
    },
    overlayIsActive() {
      return this.$store.getters["overlay"];
    },
  },
};
</script>
