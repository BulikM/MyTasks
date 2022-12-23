<template>
  <input
    class="input-card"
    type="text"
    placeholder="Maak een taak aan"
    v-model="cardName"
    @keyup.enter="maakTaak"
  />
</template>

<script>
export default {
  props: ["listId"],
  data() {
    return {
      cardName: "",
    };
  },
  methods: {
    maakTaak() {
      if (this.cardName !== "") {
        const card = {
          listId: this.listId,
          name: this.cardName,
        };
        this.$store.dispatch("maakTaak", card);
        this.cardName = "";
      }
    },
  },
};
</script>

<style>
.input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
}
</style>

<!--npm install vue-draggable-next-->
