<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';

const title = ref('');
const releaseYear = ref('');
const author = ref('');
const genreId = ref('');
const message = ref('');

function selectedAuthor(id) {
  author.value = id;
  console.log(id);
}

function selectedGenre(idGenre) {
  genreId.value = idGenre;
  console.log(idGenre);
}

function onSubmit() {
  console.log(genreId.value);
  axios
    .post('http://localhost:3000/books', {
      authorId: author.value,
      title: title.value,
      genre: genreId.value,
      releaseYear: releaseYear.value,
    })
    .then((res) => (message.value = res.data.message))
    .catch((error) => console.log(error));
  title.value = '';
  releaseYear.value = '';
  author.value = '';
  genreId.value = '';
}

const authors = ref([]);
/* GET */
const getAllAuthors = () => {
  return axios
    .get('http://localhost:3000/authors')
    .then((res) => (authors.value = res.data))
    .catch((error) => console.log(error));
};
getAllAuthors();

const genres = ref([]);
/* GET */
const getAllGenres = () => {
  return axios
    .get('http://localhost:3000/genres')
    .then((res) => (genres.value = res.data))
    .catch((error) => console.log(error));
};

getAllGenres();
</script>

<template>
  <div class="panda-container">
    <div class="panda">
      <img src="../assets/img/panda_create.png" alt="" />
    </div>
  </div>
  <div class="form-wrapper">
    <form @submit.prevent="onSubmit">
      <input
        v-model="title"
        type="text"
        name="title"
        id="title"
        placeholder="Title"
      />
      <input
        v-model="releaseYear"
        type="number"
        name="releaseYear"
        id="releaseYear"
        placeholder="Release year"
      />

      <select v-model="author">
        <option disabled value="">Select an Author</option>
        <option
          @click="selectedAuthor(author.author_id)"
          :value="author.author_id"
          v-for="author in authors"
          :key="author.author_id"
        >
          {{ author.first_name }} {{ author.last_name }}
        </option>
      </select>

      <select v-model="genreId">
        <option disabled value="">Select a Genre</option>
        <option
          @click="selectedGenre(genre.genre_id)"
          v-for="genre in genres"
          :value="genre.genre_id"
          :key="genre.genre_id"
        >
          {{ genre.genre }}
        </option>
      </select>

      <button @submit="onSubmit">Create New Book</button>
    </form>
  </div>
  <div class="message-wrapper">
    <div class="message">
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 100%);
  border: 4px solid hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.panda {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
}
img {
  height: auto;
  width: 600px;
  padding-bottom: 5%;
}
.message-wrapper {
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 100%);
  border: 4px solid hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
