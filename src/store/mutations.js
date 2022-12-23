export default {
  createNewList(state, payload) {
    state.lastListId++;
    const list = {
      id: state.lastListId,
      name: payload,
    };
    state.lists.push(list);
  },
  // taak een id geven
  maakTaak(state, payload) {
    state.lastTaakId++;
    const taak = {
      listId: payload.listId,
      id: this.lastTaakId,
      name: payload.name,
    };
    state.taken.push(taak);
  },
  toggleOverlay(state) {
    state.overlay = !state.overlay;
  },
  openForm(state, payload) {
    state.currentData = payload;
  },
  saveCard(state, payload) {
    state.taak = state.taken.map((taak) => {
      if (taak.id === payload.id) {
        return Object.assign({}, taak, payload);
      }
      return taak;
    });
  },
  deleteCard(state, payload) {
    const indexToDelete = state.taken
      .map((taak) => taak.id)
      .indexOf(payload.id);
    state.taken.splice(indexToDelete, 1);
  },
};
