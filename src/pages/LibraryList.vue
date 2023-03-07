<script>
import { store } from '../store.js';

export default {
  name: 'LibraryList',
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>
            Our Books
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-6 mb-4" v-for="book in store.bookList">
          <div class="card">
            <div class="card-header">{{ book.author }} / {{ book.publication_date }} ({{ book.price }}&euro;)</div>
            <img class="card-img-top" :src="book.cover_image" :alt="book.title">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <router-link :to="{ name: 'singlebook', params: { id: book.id } }" class="btn btn-success">Read
                more...</router-link>

            </div>
            <div class="card-footer">
              Editor: {{ book.editor }} - - - Genre: {{ book.genre }}
            </div>
          </div>
        </div>
      </div>
    </div>

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