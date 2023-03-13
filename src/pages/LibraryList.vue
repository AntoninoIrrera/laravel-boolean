<script>
import { store } from '../store.js';
import axios from 'axios';
import LibraryListBook from '../components/LibraryListBook.vue';

export default {
  name: 'LibraryList',
  components: { LibraryListBook },
  data() {
    return {
      store,
      title: '',
      date: '',
      price: '',
      genre: '',
      apiUrl: 'http://127.0.0.1:8000/api/books',
    }
  },
   methods: {
    sendFilter() {
      axios.get(this.apiUrl, {
        params:{
          title: this.title,
          price: this.price,
          date: this.date,
          genre: this.genre

        }
      })
        .then((response) => {


          console.log(response.data.results.data)

          this.store.bookList = response.data.results.data
          this.store.pageControl = response.data.results
          
          this.title = ''
          this.date = ''
          this.price = ''
          this.genre = ''


        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h1>
            Our Books
          </h1>
        </div>
      </div>
        <div class="row g-3">
          <div class="col-sm">
            <input type="text" class="form-control" v-model="title" placeholder="title" >
          </div>
          <div class="col-sm">
            <input type="number" class="form-control" v-model="price" placeholder="price" >
          </div>
          <div class="col-sm">
            <input type="date" class="form-control" v-model="date" placeholder="date" >
          </div>
           <div class="col-sm">
            <select v-model="genre" class="form-control">
              <option v-for="genre in store.genreList">{{ genre.name }}</option>
            </select>
            </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mt-3">
            <button @click="sendFilter" class="btn btn-primary" type="submit">Cerca</button>
          </div>
        </div>
      <div class="row mt-3 d-flex justify-content-between">
        <!-- Generate Books Cards -->
        <div class="col-6 mb-4" v-for="book in store.bookList">
          <!-- Import Card Template -->
          <LibraryListBook :book="book" />
        </div>
        <div class="text-center fs-2 text-info" v-if="store.bookList.length == 0">
          <p>non sono stati trovati elementi</p>
        </div>
      </div>
    </div>


    <!-- Navigation -->
    <div class="d-flex">
      <nav aria-label="Page navigation example" class="m-auto mt-5">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" @click="$emit('prevPageClick')" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li class="page-item" v-for="page in store.pageControl.links" v-show="isFinite(page.label)">
            <button class="page-link" :class="(page.active) ? 'active' : ''"
              @click="$emit('pageSelect', page.url), selectedPage = page.url">{{
                page.label
              }}
            </button>
          </li>

          <li class="page-item">
            <button class="page-link" @click="$emit('nextPageClick')" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss"></style>