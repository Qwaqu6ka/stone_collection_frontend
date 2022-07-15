<template>
  <tr>
    <td class="td-description">{{ card.description }}</td>
    <td>{{ card.stone_city }}</td>
    <td>{{ card.stone_author }}</td>
    <td>{{ card.stone_place }}</td>
    <td class="td__buttons">
      <a href="#" @click="removeItem">Удалить</a>
    </td>
    <td>{{ card.createdAt.slice(0, 10) }}</td>
  </tr>
</template>

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
    removeItem() {
      this.axios({
        method: "post",
        url: "http://localhost:5001/api/stone/remove",
        data: {
          id: this.card.id,
        },
        headers: {
          Authorization: "bearer " + sessionStorage.token,
        },
      })
        .then(() => {
          this.$emit("removeItem", this.card.id);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
