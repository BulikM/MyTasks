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
          listId: this.listId,
          name: this.TaakNaam,
        };
        this.$store.dispatch("maakTaak", taak);
        this.TaakNaam = "";
      }
    },
  },
};
</script>
<!--npm install vue-draggable-next-->
