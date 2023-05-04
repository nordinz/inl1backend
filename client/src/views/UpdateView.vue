<script setup>
import axios from 'axios';
import {ref, reactive} from 'vue'

const title = ref('')
const releaseYear = ref('')
const author = ref('')
const genreId = ref('')
const description = ref('')

function selectedAuthor(id) {
  author.value = id
  console.log(id);
}

function selectedGenre(idGenre) {
  genreId.value = idGenre
  console.log(id);
}

function onSubmit() {
  console.log(genreId.value);
  axios
  .post("http://localhost:3000/books", 
  { 
      authorId: author.value,
      title: title.value, 
      genre: genreId.value, 
      releaseYear: releaseYear.value })
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));
  title.value = ''
  releaseYear.value = ''
  description.value = ''
  author.value = ''
  genreId.value = ''
}

const authors = ref([]);
/* GET */
const getAllAuthors = () => {
  return axios
    .get("http://localhost:3000/authors")
    .then((res) => (authors.value = res.data))
    .catch((error) => console.log(error));
};
getAllAuthors()

const genres = ref([]);
/* GET */
const getAllGenres = () => {
  return axios
    .get("http://localhost:3000/genres")
    .then((res) => (genres.value = res.data))
    .catch((error) => console.log(error));
    
};

getAllGenres()

</script>


<template>
  <div class="form-wrapper">
<form @submit.prevent="onSubmit">
<input v-model="title" type="text" name="title" id="title" placeholder="Title">
<input v-model="releaseYear" type="number" name="releaseYear" id="releaseYear" placeholder="Release year">
<input v-model="description" type="text" name="description" id="description" placeholder="Description(optional)">

<select v-model="author">
  <option disabled value="">Select an Author</option>
  <option @click="selectedAuthor(author.author_id)" :value="author.author_id" v-for="author in authors" :key="author.author_id">{{ author.first_name }} {{ author.last_name }}</option>
</select>

<select v-model="genreId">
  <option disabled value="">Select a Genre</option>
  <option @click="selectedGenre(genre_id)" v-for="genre in genres" :key="genre.genre_id">{{ genre.genre }} {{ genre.genre_id }}</option>
</select>

<button @submit="onSubmit">Create New Book</button>
</form>
</div>
</template>

<style  scoped>
.form-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>