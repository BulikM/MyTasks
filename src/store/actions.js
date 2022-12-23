export default {
  createList(context, payload) {
    context.commit("createNewList", payload);
  },
  // nieuwe taak toevoegen
  maakTaak(context, payload) {
    context.commit("maakTaak", payload);
  },
  toggleOverlay(context) {
    context.commit("toggleOverlay");
  },
  openForm(context, payload) {
    context.commit("openForm", payload);
  },
  saveTaak(context, payload) {
    context.commit("saveTaak", payload);
  },
  deleteTaak(context, payload) {
    context.commit("deleteTaak", payload);
  },
};
