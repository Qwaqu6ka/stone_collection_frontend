<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class=" nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="" class="nav-link px-2 text-white">На главную</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search__forDetails">
          <input type="search" class="form-control form-control-dark" placeholder="Искать здесь..." aria-label="Search">
          <button class="search_button" type="submit"></button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerStoneDetails"
}
</script>

<style>
header {
  display: block;
}
.search__forDetails {
  position: relative;
  width: calc(100% - 75%);
  margin: 10px;
}

.search__forDetails form {
  position: relative;
  padding: 0;
  display: flex;
  width: 100%;
}

.search__forDetails input {
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 2px solid #7BA7AB;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #0d6efd;
}
.search__forDetails button {
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
.search__forDetails button:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #F9F0DA;
}
</style>