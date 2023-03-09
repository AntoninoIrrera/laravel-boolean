<script>
import { store } from '../store.js';
import LibraryListBook from '../components/LibraryListBook.vue';

export default {
  name: 'LibraryList',
  components: { LibraryListBook },
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
        <!-- Generate Books Cards -->
        <div class="col-6 mb-4" v-for="book in store.bookList">
          <!-- Import Card Template -->
          <LibraryListBook :book="book" />
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