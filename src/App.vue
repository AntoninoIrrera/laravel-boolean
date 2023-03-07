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
      apiUrl: 'http://127.0.0.1:8000/api/books'
    }
  },
  methods: {
    getBooks() {
      axios.get(this.apiUrl, {
        params: {

        }
      })
        .then((response) => {
          // console.log(response.data.results)
          this.store.bookList = response.data.results.data;
          this.store.pageControl = response.data.results
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    prevPage() {
      this.apiUrl = this.store.pageControl.prev_page_url
      this.getBooks();
      window.scrollTo(0, 0);
    },

    nextPage() {
      this.apiUrl = this.store.pageControl.next_page_url
      this.getBooks();
      window.scrollTo(0, 0);
    },

    selectPage(selectUrl) {
      this.apiUrl = selectUrl
      this.getBooks();
      window.scrollTo(0, 0);
    },

  },
  created() {
    this.getBooks()
  },
}
</script>

<template>
  <AppHeader />
  <router-view @prevPageClick="prevPage()" @nextPageClick="nextPage()" @pageSelect="selectPage"></router-view>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
