<template>
  <tr>
    <td class="td-description">{{ card.description }}</td>
    <td>{{ card.stone_place }}</td>
    <td>{{ card.stone_author }}</td>
    <td class="td__buttons">
      <a href="#" @click="removeItem">Удалить</a>
    </td>
    <td>{{ card.createdAt.slice(0, 10) }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
        .then((response) => {
            this.$emit('removeItem', this.card.id)
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
