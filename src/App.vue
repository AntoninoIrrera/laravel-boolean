<script >
import AppHeader from './components/AppHeader.vue'
import axios from 'axios';
import { store } from './store.js';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
