export default {
  lastListId(state) {
    return state.lastListId;
  },
  // het bijhouden van de laatste taak Id zodat deze kan worden gebruikt voor de volgende en in verschillende componenten
  lastTaakId(state) {
    return state.lastTaakId;
  },
  lists(state) {
    console.log("lists", state.lists);
    return state.lists;
  },
  taken(state) {
    console.log("taken", state.taken);
    return state.taken;
  },
  overlay(state) {
    return state.overlay;
  },
  currentData(state) {
    return state.currentData;
  },
};
