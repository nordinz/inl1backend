<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

/* GET */

const books = ref([]);
const title2 = ref('');
const releaseYear = ref('');
const author = ref('');
const genreId = ref('');
const message = ref('');
const bookIdToForm = ref('');

const getAllBooks = () => {
  return axios
    .get('http://localhost:3000/books')
    .then((res) => (books.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => {
  getAllBooks().then(() => {});
});
console.log(books);
function selectedAuthor(id) {
  author.value = id;
  console.log(id);
}

function selectedGenre(idGenre) {
  genreId.value = idGenre;
  console.log(idGenre);
}

function onSubmit() {
  axios
    .put(`http://localhost:3000/books/${bookIdToForm.value}`, {
      authorId: author.value,
      title: title.value,
      genre: genreId.value,
      releaseYear: releaseYear.value,
    })
    .then((res) => (message.value = res.data.message))
    .then(() => {
      title2.value = '';
      releaseYear.value = '';
      author.value = '';
      genreId.value = '';
      bookIdToForm.value = '';
      getAllBooks();
    })
    .catch((error) => console.log(error));
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

function handleClick(bookId) {
  const book = books.value.find((book) => book.book_id === bookId);

  console.log(books.value);
  title2.value = book.title;
  genreId.value = book.genre_id;
  releaseYear.value = book.release_year;
  author.value = book.author_id;
  bookIdToForm.value = book.book_id;
}
</script>

<template>
  <div class="main">
    <div class="book-wrapper">
      <div
        @click="handleClick(book.book_id)"
        v-for="book in books"
        :key="book.book_id"
        class="box"
      >
        <h2>{{ book.title }}</h2>
      </div>
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="onSubmit">
        <input
          v-model="bookIdToForm"
          type="number"
          name="bookId"
          id="bookId"
          placeholder="Book ID"
          disabled
        />
        <input
          v-model="title2"
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

        <button @submit="onSubmit">Upd Book</button>
      </form>
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.book-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  box-shadow: 0px 30px 40px -10px #000000;
  padding-top: 30px;
  margin: 20px;
  max-width: 400px;
  text-align: left;
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}
.form-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
