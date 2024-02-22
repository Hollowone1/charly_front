<script>
import {RouterView} from 'vue-router'
import BasDePage from './components/Footer.vue';
import Navigation from './components/Header.vue';

export default {
    components: {
        RouterView,
        BasDePage,
        Navigation

    },
}
</script>

<template>
    <Navigation/>
    <RouterView/>
    <BasDePage/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: Comfortaa, sans-serif;
    background-color: #1F282F;
    color: white;
}
</style>