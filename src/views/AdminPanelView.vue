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
            <form class="search">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Искать здесь..."
                aria-label="Search"
              />
              <button class="search_button" type="submit"></button>
            </form>
          </div>
        </div>
      </div>

        <h3 class="title__table">
            Список минералов
        </h3>
        <div class="button__add d-flex flex-row justify-content-end" >
            <button class="btn btn-primary addStone" @click="addStone">
                Добавить минерал
            </button>
        </div>

        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Местонахождения</th>
                <th scope="col">Автор</th>
                <th scope="col">Действия</th>
                <th scope="col">Создано</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Камень 1</td>
                <td class="td-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, et, libero. Accusantium architecto atque culpa esse eum exercitationem ipsam nihil quasi, tempora tenetur totam, vel?</td>
                <td>Приморье</td>
                <td>Иванов Иван</td>
                <td class="td__buttons">
                    <a href="">Удалить</a>
                </td>
                <td>03.04.2022</td>

            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Камень 2</td>
                <td class="td-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, et, libero. Accusantium architecto atque culpa esse eum exercitationem ipsam nihil quasi, tempora tenetur totam, vel?</td>
                <td>Приморье</td>
                <td>Иванов Иван</td>
                <td class="td__buttons">
                    <a href="">Удалить</a>
                </td>
                <td>03.04.2022</td>
            </tr>
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
</style>

<script>
import router from '../router';

export default {
    methods: {
        addStone() {
            router.push("/addStone");
        }
    }
};
</script>