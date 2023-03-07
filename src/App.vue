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
      store,
    }
  },
  methods: {
    getBooks() {
      axios.get('http://127.0.0.1:8000/api/books', {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.results.data)
          this.store.bookList = response.data.results.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getBooks()
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
