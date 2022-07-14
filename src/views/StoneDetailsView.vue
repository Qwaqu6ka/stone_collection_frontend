<script setup>
import MainFooter from "../components/MainFooter.vue";
import HeaderStoneDetails from "../components/HeaderStoneDetails.vue";
</script>

<template>
  <HeaderStoneDetails />
  <div class="stoneInfo">
    <div class="stoneInfo__image">
      <img
        class="d-block stoneInfo__pic"
        :src="'http://localhost:5001/' + stone.img"
        alt="Камень"
      />
    </div>
    <div class="stoneInfo__info">
      <div class="stoneInfo__description">
        <h6 class="title">Описание:</h6>
        <p>{{ stone.description }}</p>
      </div>
      <div class="stoneInfo__location">
        <span class="title">Место нахождения:</span>
        <p>{{ stone.stone_city }}</p>
      </div>
      <div class="stoneInfo__author">
        <span class="title"> Автор: </span>
        <p>{{ stone.stone_author }}</p>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<style>
.stoneInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.stoneInfo__pic {
  margin: 20px;
  width: calc(100%);
  height: 60vh;
}

.stoneInfo__info {
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.title {
  font-size: 16px;
  font-weight: bolder;
  color: black;
}

.nav-link:hover {
  color: blue;
  text-decoration: underline;
}
</style>

<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      stone: {},
    };
  },
  mounted() {
    const route = useRoute();
    this.axios
      .get("http://localhost:5001/api/stone/" + route.params.id)
      .then((response) => {
        this.stone = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
