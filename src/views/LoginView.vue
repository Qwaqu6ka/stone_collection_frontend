<template>
  <div class="main content" style="background-color: rgba(0, 0, 0, 0.05)">
    <div class="container">
      <div class="row" style="align-items: center;">
        <div class="col-md-offset-3 col-md-6">
          <form class="form-horizontal" @submit.prevent="onSubmit">
            <span class="heading">Логин</span>
            <div class="form-group">
              <input
                type=""
                required
                class="form-control"
                id="inputLogin"
                placeholder="Логин"
                v-model="login"
              />
              <i class="fa fa-user"></i>
            </div>
            <div class="form-group help">
              <input
                required
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Пароль"
                v-model="pass"
              />
              <i class="fa fa-lock"></i>
              <a href="#" class="fa fa-question-circle"></a>
            </div>
            <div class="form-group d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main {
  min-height: calc(100vh - 0px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
}

.row {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
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

/* Form Style */
.form-horizontal {
  background: #fff;
  padding-bottom: 40px;
  border-radius: 15px;
  border: 1px solid grey;
  text-align: center;
}
.form-horizontal .heading {
  display: block;
  font-size: 35px;
  font-weight: 700;
  padding: 35px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 30px;
}
.form-horizontal .form-group {
  padding: 0 40px;
  margin: 0 0 25px 0;
  position: relative;
}
.form-horizontal .form-control {
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  box-shadow: none;
  padding: 0 20px 0 45px;
  height: 40px;
  transition: all 0.3s ease 0s;
}
.form-horizontal .form-control:focus {
  background: #e0e0e0;
  box-shadow: none;
  outline: 0 none;
}
.form-horizontal .form-group i {
  position: absolute;
  top: 12px;
  left: 60px;
  font-size: 17px;
  color: #c8c8c8;
  transition: all 0.5s ease 0s;
}
.form-horizontal .form-control:focus + i {
  color: #00b4ef;
}
.form-horizontal .fa-question-circle {
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 60px;
  font-size: 20px;
  color: #808080;
  transition: all 0.5s ease 0s;
}
.form-horizontal .fa-question-circle:hover {
  color: #000;
}
.form-horizontal .main-checkbox {
  float: left;
  width: 20px;
  height: 20px;
  background: #0d6efd;
  border-radius: 50%;
  position: relative;
  margin: 5px 0 0 5px;
  border: 1px solid #11a3fc;
}
.form-horizontal .main-checkbox label {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.form-horizontal .main-checkbox label:after {
  content: "";
  width: 10px;
  height: 5px;
  position: absolute;
  top: 5px;
  left: 4px;
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-horizontal .main-checkbox input[type="checkbox"] {
  visibility: hidden;
}
.form-horizontal .main-checkbox input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
.form-horizontal .text {
  float: left;
  margin-left: 7px;
  line-height: 20px;
  padding-top: 5px;
  text-transform: capitalize;
}
.form-horizontal .btn {
  float: right;
  font-size: 14px;
  color: #fff;
  background: #0d6efd;
  border-radius: 30px;
  padding: 10px 25px;
  border: none;
  text-transform: capitalize;
  transition: all 0.5s ease 0s;
}
</style>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      router: useRouter(),
      login: "",
      pass: "",
    };
  },
  methods: {
    onSubmit() {
      this.axios({
        method: "post",
        url: "http://localhost:5001/api/admin/login",
        data: {
          login: this.login,
          password: this.pass,
        },
      })
        .then((response) => {
          console.log(response.data);
          sessionStorage.token = response.data.jwtToken;
          this.router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
