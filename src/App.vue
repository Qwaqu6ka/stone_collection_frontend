<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
    <MainHeader />
    <RouterLink to="/addStone">Добавить камень(временная кнопка)</RouterLink>
    <RouterLink to="/register">Регистрация</RouterLink>
    <RouterLink to="login">Логин</RouterLink>
    <RouterView />
    <MainFooter />
</template>

<style>

</style>
