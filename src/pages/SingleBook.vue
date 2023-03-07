<script>
import axios from 'axios';

export default {
  name: 'SingleBook',
  data() {
    return {
      book: '',
      urlAddress: 'http://127.0.0.1:8000',
    }
  },
  methods: {
    getBook() {
      axios.get(this.urlAddress + `/api/books/${this.$route.params.id}`, {
        params: {
        }
      })
        .then((response) => {
          console.log(response.data.results.data)
          this.book = response.data.results.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  created() { 
    this.getBook()
  },
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>
            {{ book.title }}
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">{{ book.author }} / {{ book.publication_date }} ({{ book.price }})</div>
            <img class="card-img-top" :src="book.cover_image" alt="{{ book.title }}">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.content }}</p>

            </div>
            <div class="card-footer">
              Editor: {{ book.editor }} - - - Genre: {{ book.genre }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>