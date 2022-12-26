export default {
  createList(context, payload) {
    context.commit("createNewList", payload);
  },
  // nieuwe taak toevoegen
  // de payload is om het volledige object over te dragen in vue
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
