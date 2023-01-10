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
          handle=".handle"
        >
          <!--          v-bind van de lijst en de items in deze lijst-->
          <div class="px-2" v-for="(list, index) in lists" :key="index">
            <div class="bg-pink d-flex flex-wrap justify-content-between p-2">
              <!--              sleep balkje ipv op het hele object dankzij Milan-->
              <div class="w-100 handle bg-dark mb-2">sleep</div>
              <label class="list-header bg-pink p-1">{{ list.name }}</label
              ><button
                class="btn btn-danger rounded-0"
                @click="this.deleteList(index)"
              >
                weg
              </button>
            </div>
            <!--            achtergrond taak+ extra ruimte voor slepen als de lijst leeg is-->
            <div class="bg-pink py-1">
              <CardsList :listId="list.id" :listName="list.name" />
            </div>
            <!--            rand rond maak taak aan-->
            <div class="bg-pink w-100 text-center p-2">
              <!--              taak aanmaken via -->
              <taak :listId="list.id" />
            </div>
          </div>
        </draggable>
        <input
          type="text"
          class="input-new-list bg-pink"
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
import CardsList from "@/components/TaakItem";
// invulveld om taak aan te maken
import taak from "@/components/MaakTaak.vue";

import Overlay from "@/components/OverLay";
// modal om de taak aan te passen
import Popup from "@/components/modalPopUp";
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
    deleteList(index) {
      this.lists.splice(index, 1);
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
  width: 280px;
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
  line-height: 50px;
  /*user-select: ;*/
}
</style>
