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