export default {
  lastListId(state) {
    return state.lastListId;
  },
  // het bijhouden van de laatste taak Id zodat deze kan worden gebruikt voor de volgende en in verschillende componenten
  lastTaakId(state) {
    console.log("lastTaakId", state.lastTaakId);
    return state.lastTaakId;
  },
  lastCheckId(state) {
    return state.lastCheckId;
  },
  lists(state) {
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
  checklistItem(state) {
    console.log("check", state.checklistItem);
    return state.checklistItem;
  },
};
