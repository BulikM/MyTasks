<template>
  <input
    class="card w-100 p-3 rounded-0"
    type="text"
    placeholder="Maak een taak aan"
    v-model="TaakNaam"
    @keyup.enter="maakTaak"
  />
</template>

<script>
export default {
  props: ["listId"],
  data() {
    return {
      TaakNaam: "",
    };
  },
  methods: {
    maakTaak() {
      if (this.TaakNaam !== "") {
        const taak = {
          // in welke lijst moet de taak geplaatst worden
          listId: this.listId,
          // de ingevoerde naam toevoegen aan de taak
          naam: this.TaakNaam,
        };
        this.$store.dispatch("maakTaak", taak);
        this.TaakNaam = "";
      }
    },
  },
};
</script>
