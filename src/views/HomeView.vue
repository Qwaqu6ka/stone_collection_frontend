<script>
import StoneCard from "@/components/StoneCard.vue";
export default {
  data() {
    return {
      cards: [
        { id: 1, description: "Камень1", img: "../assets/stone-example.jpg" },
        {
          id: 2,
          description: "Очень длинный камень - Камень2",
          img: "@/assets/stone-example.jpg",
        },
        {
          id: 3,
          description: "Камень поменьше",
          img: "@/assets/stone-example.jpg",
        },
        {
          id: 4,
          description: "Камень4 - ПОТЯЖЕЛЕЕ",
          img: "@/assets/stone-example.jpg",
        },
        {
          id: 5,
          description: "Камень5 - обычный такой - пацанский камень",
          img: "@/assets/stone-example.jpg",
        },
        { id: 6, description: "Камень6", img: "@/assets/stone-example.jpg" },
        { id: 7, description: "Камень7", img: "@/assets/stone-example.jpg" },
        { id: 8, description: "Камень8", img: "@/assets/stone-example.jpg" },
      ],
    };
  },
  components: { StoneCard },
};
</script>

<template>
  <main>
    <div class="search">
      <form class="search__form">
        <input type="text" placeholder="Искать здесь..." />
        <button class="search_button" type="submit"></button>
      </form>
    </div>
    <div class="Grid">
      <StoneCard v-for="card in cards" :card="card" :key="card.id" />
    </div>
  </main>
</template>

<style lang="scss">
.Grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
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
