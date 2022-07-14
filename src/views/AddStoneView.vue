

<template>
<div class="main" style="background-color: rgba(0, 0, 0, 0.05)">
    <div class="container">
          <div class="addStone">
            <div class="col-md-offset-3 col-md-6">
              <form class="form-horizontal" @submit.prevent="onSubmit">
                <span class="heading">Добавление минерала</span>
                <div class="form-group">
                  <input type="text" class="form-control" id="name" placeholder="Название минерала" v-model="name">
                </div>
                <div class="form-group">
                  <textarea type="text" class="form-control" id="description" placeholder="Описание" style="height: 100px"></textarea>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="location" placeholder="Местонахождения" v-model="place">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="author" placeholder="Автор" v-model="author">
                </div>
                <div class="form-group">
                  <input type="file" name="photo" multiple accept="image/*,image/jpeg">
                </div>
                <div class="form-group d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Добавить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  <MainFooter />
</template>

<style lang="scss">
.addStone {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.05);
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar {
    min-height: 100%;
}

//.main-content {
//    min-height: 100%;
//}

.title__table {
    margin: 10px;
}

.button__add {
    padding: 15px;
}

td {
    max-width: 150px;
}

.td-description{
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
            place: "",
            author: "",
        }
    },
    methods: {
        onSubmit() {
            console.log("Submit" + this.name)
        }
    }
}
</script>