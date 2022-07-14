<script>
import StoneCard from "@/components/StoneCard.vue";
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
export default {
    data() {
        return {
            cards: [
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
        };
    },
    mounted() {
        this.axios.get('http://localhost:5001/api/stone')
            .then(response => this.cards = response.data.rows)
            .catch(error => console.log(error)); 
    },
    components: {MainHeader, MainFooter, StoneCard },
};
</script>

<template>
  <MainHeader />
    <main>
      <div class="signIn d-flex justify-content-end">
        <button class="btn btn-primary m-1">Логин</button>
      </div>
        <div class="search">
            <form class="search__form">
                <input type="text" placeholder="Искать здесь..." />
                <button class="search_button" type="submit"></button>
            </form>
        </div>
      <div class="container">
        <div class="main__cardZone">
          <StoneCard
              v-for="card in cards"
              :card="card"
              :key="card.id"
          />
        </div>
      </div>

    </main>
  <MainFooter />
</template>

<style lang="scss">
body, html {
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
