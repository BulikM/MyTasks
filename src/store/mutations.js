// import { indexOf } from "core-js/internals/array-includes";

export default {
  createNewList(state, payload) {
    state.lastListId++;
    const list = {
      id: state.lastListId,
      name: payload,
    };
    state.lists.push(list);
  },
  deleteList(state, payload) {
    const list = {
      name: payload,
    };
    state.lists.pop(list);
  },
  // taak een id geven
  maakTaak(state, payload) {
    // de vorige id +1 voor de nieuwe id
    state.lastTaakId++;
    const taak = {
      listId: payload.listId,
      id: state.lastTaakId,
      naam: payload.naam,
    };
    state.taken.push(taak);
  },
  toggleOverlay(state) {
    state.overlay = !state.overlay;
  },
  openForm(state, payload) {
    state.currentData = payload;
  },
  // het opslaan van de aangepaste taaknaam
  saveTaak(state, payload) {
    state.taken = state.taken.map((taak) => {
      if (taak.id === payload.id) {
        return Object.assign({}, taak, payload);
      }
      return taak;
    });
  },
  deleteTaak(state, payload) {
    const indexToDelete = state.taken
      .map((taak) => taak.id)
      .indexOf(payload.id);

    state.taken.splice(indexToDelete, 1);
  },
};
