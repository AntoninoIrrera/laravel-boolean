<script>
export default {
    name: 'LibraryListBook',
    props: ['book'],
}
</script>

<template>
    <div class="card">
        <div class="card-header">{{ book.author.first_name }} {{ book.author.last_name }} / {{ book.publication_date
        }} ({{ book.price }}&euro;)</div>
        <img class="card-img-top" :src="book.cover_image" :alt="book.title">
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.description }}</p>
            <router-link :to="{ name: 'singlebook', params: { id: book.id } }" class="btn btn-success">Read
                more...</router-link>

        </div>
        <div class="card-footer">
            Editor: {{ book.editor }} - - - <span v-for="genre in book.genres">#{{ genre.name }}</span>
        </div>
    </div>
</template>

<style lang="scss"></style>