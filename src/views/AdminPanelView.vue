<template>
  <div class="content" style="background-color: rgba(0, 0, 0, 0.05)">
    <div class="sidebar">
      <div
        class="h-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style="width: 230px"
      >
        <p
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4 justify-content-center">Админка</span>
        </p>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Список минералов
            </a>
            <RouterLink class="nav-link text-white" aria-current="page" to="/">
              На главную
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-content w-100">
      <div class="p-3 text-black">
        <div class="container">
          <div
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
          >
            <form class="search" @submit.prevent="searchIt">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Искать здесь..."
                aria-label="Search"
                v-model="searchText"
              />
              <button class="search_button" type="submit"></button>
            </form>
          </div>
        </div>
      </div>

      <h3 class="title__table">Список минералов</h3>
      <div class="button__add d-flex flex-row justify-content-end">
        <button class="btn btn-primary addStone" @click="addStone">
          Добавить минерал
        </button>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Место нахождения</th>
            <th scope="col">Автор</th>
            <th scope="col">Место хранения</th>
            <th scope="col">Действия</th>
            <th scope="col">Создано</th>
          </tr>
        </thead>
        <tbody>
          <AdminListElem
            v-for="card in cardsToShow"
            :key="card.id"
            :card="card"
            @removeItem="removeItem"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.content {
  min-height: calc(100vh - 0px);
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.05);
}

.sidebar {
  min-height: 100%;
}

.main-content {
  min-height: 100%;
}

.title__table {
  margin: 10px;
}

.button__add {
  padding: 15px;
}

td {
  max-width: 150px;
}

.td-description {
  max-width: 200px;
  padding: 10px; /* Поля вокруг текста */
  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>

<script>
import router from "../router";
import AdminListElem from "../components/AdminListElem.vue";

export default {
  methods: {
    addStone() {
      router.push("/addStone");
    },
    removeItem(id) {
      this.originalCards = this.originalCards.filter((it) => it.id !== id);
      this.cardsToShow = this.cardsToShow.filter((it) => it.id !== id);
    },
    searchIt() {
      if (this.searchText === "") {
        this.cardsToShow = this.originalCards.slice();
      } else {
        const find = this.searchText.toLowerCase();
        this.cardsToShow = this.originalCards.filter(
          (it) =>
            it.stone_author.toLowerCase().indexOf(find) !== -1 ||
            it.stone_place.toLowerCase().indexOf(find) !== -1 ||
            it.description.toLowerCase().indexOf(find) !== -1
        );
      }
    },
  },
  components: { AdminListElem },
  data() {
    return {
      originalCards: [],
      cardsToShow: [],
      searchText: "",
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:5001/api/stone")
      .then((response) => {
        this.originalCards = response.data.rows;
        this.cardsToShow = this.originalCards.slice();
      })
      .catch((error) => console.log(error));
  },
};
</script>
