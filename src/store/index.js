import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      overlay: false,
      lastListId: 3,
      lastTaakId: 3,
      currentData: null,
      lists: [
        {
          id: 1,
          name: "list #1",
        },
        {
          id: 2,
          name: "list #2",
        },
        {
          id: 3,
          name: "list #3",
        },
      ],
      taken: [
        {
          listId: 1,
          id: 1,
          naam: "taak 1",
        },
        {
          listId: 2,
          id: 2,
          naam: "taak 2",
        },
        {
          listId: 3,
          id: 3,
          naam: "taak 3",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
