<template>
  <main class="container-fluid">
    <div class="row">
      <Overlay />
      <Popup />
      <!--      achtergrond + verdeling van de kaarten naast elkaar-->
      <section class="list-wrapper d-flex pt-4">
        <!--        taken kaartjes-->
        <draggable
          :options="{ group: 'lists' }"
          group="lists"
          ghostClass="ghost"
          class="d-flex"
        >
          <!--          v-bind van de lijst en de items in deze lijst-->
          <div class="px-2" v-for="(list, index) in lists" :key="index">
            <label class="list-header bg-pink p-1">{{ list.name }}</label>
            <!--            achtergrond taak+ extra ruimte voor slepen als de lijst leeg is-->
            <div class="bg-pink py-1">
              <CardsList :listId="list.id" :listName="list.name" />
            </div>
            <!--            rand rond maak taak aan-->
            <div class="bg-pink w-100 d-flex justify-content-center p-2">
              <!--              taak aanmaken via -->
              <taak :listId="list.id" />
            </div>
          </div>
        </draggable>
        <input
          type="text"
          class="input-new-list bg-pink col"
          placeholder="maak een lijst aan"
          v-model="listName"
          @keyup.enter="maakLijst"
        />
      </section>
    </div>
  </main>
</template>

<script>
// vue draggeble
import { VueDraggableNext } from "vue-draggable-next";
// taak
import CardsList from "@/components/CardList";
// invulveld om taak aan te maken
import taak from "@/components/MaakTaak.vue";

import Overlay from "@/components/OverLay";
// modal om de taak aan te passen
import Popup from "@/components/PopUp";

export default {
  components: {
    draggable: VueDraggableNext,
    CardsList,
    taak,
    Overlay,
    Popup,
  },
  data() {
    return {
      listName: null,
    };
  },
  methods: {
    maakLijst() {
      // maken dat de waarde niet leeg is
      if (this.listName !== "") {
        this.$store.dispatch("createList", this.listName);
        // terug leeg zetten van het inputveld
        this.listName = null;
      }
    },
  },
  computed: {
    lists() {
      return this.$store.getters["lists"];
    },
  },
};
</script>

<style>
.list-wrapper {
  box-sizing: border-box;
  min-width: 100vw;
  height: 80vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/img.png");
  overflow-x: scroll;
}

/*om de taak te blijven teruggeven op de originele plaats als u deze versleept*/
.ghost {
  opacity: 0.5;
  color: hotpink;
}

.input-new-list {
  height: 4rem;
  width: 280px;
}

/*naam van de lijst*/
.list-header {
  text-overflow: ellipsis;
  width: 280px;
  line-height: 50px;
  /*user-select: ;*/
}
</style>
