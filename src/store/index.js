import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      overlay: false,
      lastListId: 1,
      lastTaakId: 1,
      currentData: null,
      lists: [
        {
          id: 1,
          name: "list #1",
        },
      ],
      taken: [
        {
          listId: 1,
          id: 1,
          naam: "taak 1",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
