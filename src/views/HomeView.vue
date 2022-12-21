<template>
  <div class="container-fluid">
    <div class="row float-start">
      <button
        class="btn btn-info mx-4 rounded-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Taak toevoegen
      </button>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            Maak hier uw nieuwe taak aan
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="form-floating">
            <form action="toevoegen">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Titel"
                  required
                />
                <label for="floatingInput">Titel</label>
              </div>
              <select
                class="form-select"
                aria-label="Default select example"
                required
              >
                <option selected>Open this select menu</option>
                <option value="1">Marilyn</option>
                <option value="2">Thijs</option>
                <option value="3">Tom</option>
              </select>
              <label for="floatingTextarea">Omschrijving</label>
              <textarea
                class="form-control"
                placeholder="Omschrijf uw project"
                id="floatingTextarea"
                required
              ></textarea>
              <button class="btn btn-info rounded-0 m-3">Aanmaken</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-5 d-flex justify-content-center">
      <div
        class="drop-zone mx-3 col"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h4 class="bg-info">Product Backlog</h4>
        <div
          class="drag-el"
          v-for="item in listOne"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="drop-zone mx-3 col"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h4 class="bg-info">Sprint Backlog</h4>
        <div
          class="drag-el"
          v-for="item in listTwo"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="drop-zone mx-3 col"
        @drop="onDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h4 class="bg-info">Progres</h4>
        <div
          class="drag-el"
          v-for="item in list3"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="drop-zone mx-3 col"
        @drop="onDrop($event, 4)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h4 class="bg-info">Done</h4>
        <div
          class="drag-el"
          v-for="item in list4"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item A",
          list: 1,
        },
        {
          id: 1,
          title: "Item B",
          list: 1,
        },
        {
          id: 2,
          title: "Item C",
          list: 2,
        },
      ],
    };
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    list3() {
      return this.items.filter((item) => item.list === 3);
    },
    list4() {
      return this.items.filter((item) => item.list === 4);
    },
  },
};
</script>
<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
