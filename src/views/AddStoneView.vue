<template>
  <div class="main" style="background-color: rgba(0, 0, 0, 0.05)">
    <div class="container">
      <div class="row addStone">
        <div class="col-md-offset-3 col-md-6">
          <form class="form-horizontal" @submit.prevent="onSubmit">
            <span class="heading">Добавление минерала</span>
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                id="description"
                placeholder="Содержание коллекции"
                style="height: 100px"
                v-model="name"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="location"
                required
                placeholder="Место нахождения"
                v-model="city"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="location"
                required
                placeholder="Место хранения"
                v-model="store"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="author"
                required
                placeholder="Автор"
                v-model="author"
              />
            </div>
            <div class="form-group">
              <input
                id="photo"
                type="file"
                name="photo"
                required
                accept="image/*,image/jpg"
              />
            </div>
            <div class="form-group d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">Добавить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.addStone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
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
</style>

<script>
export default {
  data() {
    return {
      name: "",
      city: "",
      author: "",
      store: "",
    };
  },
  methods: {
    onSubmit() {
        const formData = new FormData()
        formData.append("place", this.store)
        formData.append("author", this.author)
        formData.append("description", this.name)
        formData.append("city", this.city)
        formData.append("img", document.getElementById('photo').files[0])
        this.axios({
            method: "post",
            url: "http://localhost:5001/api/stone/create2",
            headers: {
                'Authorization': "bearer " + sessionStorage.token,
                // 'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
            data: {
                // place: this.store,
                // author: this.author,
                // descritpion: this.name,
                // city: this.city,
                // img: formData,
                formData
            }
        })
        .then((response) => {
            console.log(response.data)
            this.router.push("/admin");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
