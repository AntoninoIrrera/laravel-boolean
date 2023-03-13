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
      apiUrlBooks: 'http://127.0.0.1:8000/api/books',
      apiUrlGenres: 'http://127.0.0.1:8000/api/genres',
    }
  },
  methods: {
    getBooks() {
      axios.get(this.apiUrlBooks, {
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

    getGenres() {
      axios.get(this.apiUrlGenres, {
        params: {

        }
      })
        .then((response) => {
          this.store.genreList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    prevPage() {
      this.apiUrlBooks = this.store.pageControl.prev_page_url
      this.getBooks();
      window.scrollTo(0, 0);
    },

    nextPage() {
      this.apiUrlBooks = this.store.pageControl.next_page_url
      this.getBooks();
      window.scrollTo(0, 0);
    },

    selectPage(selectUrl) {
      this.apiUrlBooks = selectUrl
      this.getBooks();
      window.scrollTo(0, 0);
    },

  },
  created() {
    this.getBooks()
    this.getGenres()
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
