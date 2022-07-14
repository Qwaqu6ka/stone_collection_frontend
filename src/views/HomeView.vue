<script>
import StoneCard from "@/components/StoneCard.vue";
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
export default {
  data() {
    return {
      sessionStorage: sessionStorage,
      cardsToShow: [
        // { id: 1, description: "Камень1", img: "../assets/stone-example.jpg" },
        // {
        //     id: 2,
        //     description: "Очень длинный камень - Камень2",
        //     img: "@/assets/billy.jpg",
        // },
        // {
        //     id: 3,
        //     description: "Камень поменьше",
        //     img: "@/assets/falling.jpg",
        // },
        // {
        //     id: 4,
        //     description: "Камень4 - ПОТЯЖЕЛЕЕ",
        //     img: "@/assets/franz.jpg",
        // },
        // {
        //     id: 5,
        //     description: "Камень5 - обычный такой - пацанский камень",
        //     img: "@/assets/isaac.png",
        // },
        // {
        //     id: 6,
        //     description: "Камень6 - мокрый камень",
        //     img: "@/assets/Ray.jpg",
        // },
        // {
        //     id: 7,
        //     description: "Камень7",
        //     img: "@/assets/stone-header.jpg",
        // },
      ],
      originalCards: [],
      searchText: "",
    };
  },
  methods: {
    searchIt() {
      if (this.searchText === "") {
        this.cardsToShow = this.originalCards.slice();
      } else {
        const find = this.searchText.toLowerCase();
        this.cardsToShow = this.originalCards.filter(
          (it) => it.description.toLowerCase().indexOf(find) !== -1
        );
      }
    },
  },
  mounted() {
    this.axios
      .get("http://localhost:5001/api/stone")
      .then((response) => {
        this.originalCards = response.data.rows;
        this.originalCards.sort((a, b) =>
          ("" + a.description).localeCompare(b.description)
        );
        this.cardsToShow = this.originalCards.slice();
      })
      .catch((error) => console.log(error));
  },
  components: { MainHeader, MainFooter, StoneCard },
};
</script>

<template>
  <MainHeader />
  <main>
    <div class="signIn d-flex justify-content-end">
      <RouterLink
        class="btn btn-primary m-1"
        to="/admin"
        v-if="sessionStorage.token"
        >Админ-панель
      </RouterLink>
      <RouterLink class="btn btn-primary m-1" to="/login" v-else>
        Логин
      </RouterLink>
    </div>
    <div class="search">
      <form class="search__form" @submit.prevent="searchIt">
        <input type="text" placeholder="Искать здесь..." v-model="searchText" />
        <button class="search_button" type="submit"></button>
      </form>
    </div>
    <div class="container">
      <div class="main__cardZone">
        <StoneCard v-for="card in cardsToShow" :card="card" :key="card.id" />
      </div>
    </div>
  </main>
  <MainFooter />
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.05);
  min-height: 100%;
}

.main {
  min-height: 100%;
}

.main__cardZone {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  //grid-template-columns: repeat(4, 1fr);
}
.search {
  position: relative;
  width: calc(100% - 20px);
  margin: 10px;
}

.search form {
  /*position: relative;*/
  padding: 0;
  display: flex;
  width: 100%;
}

.search input {
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #0d6efd;
}
.search button {
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 100%;
  border: none;
  background: #0d6efd;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.search button:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #f9f0da;
}
</style>
