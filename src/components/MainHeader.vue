<template>
  <RouterLink to="/">
    <header class="Header">
      <h1 class="Header__title">Каталог минералов</h1>
    </header>
  </RouterLink>
</template>

<style lang="scss">
.Header {
  width: 100%;
  height: 200px;
  background-image: url("../assets/stone-header.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-size: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  &__title {
    position: absolute;
    top: 7%;
    color: white;
    font-size: 50px;
  }
}
</style>
