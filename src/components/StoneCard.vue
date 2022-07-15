<template>
  <div class="card" @click="pushToId">
    <img
      class="card-img-top"
      :src="'http://localhost:5001/' + card.img"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ card.description }}</h5>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin: 10px;
  width: 18rem;
  height: 430px;
  //opacity: 0.8;
}

.card:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
}

.card-body {
  height: 100%;
}

.card-img-top {
//   width: 100%;
//   height: calc(100% - 20%);
    min-height: 60%;
    object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: contain;
}

.h4 {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-top: -15px;
}
.bg:hover .blackout {
  opacity: 1;
}
.bg:hover .blackout h4 {
  margin-top: 0;
}
</style>

<script>
import router from "../router";

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pushToId() {
      router.push("/stone/" + this.card.id);
    },
  },
};
</script>
