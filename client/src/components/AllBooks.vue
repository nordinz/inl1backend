<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const books = ref([]);
/* GET ALL BOOKS */
const getAllBooks = () => {
  return axios
    .get('http://localhost:3000/books')
    .then((res) => (books.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => {
  getAllBooks().then(() => {
    console.log(books.value);
  });
});
/* DELETE A BOOK */
function deleteBook(id) {
  axios
    .delete(`http://localhost:3000/books/${id}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  books.value = books.value.filter((book) => {
    console.log(book.book_id != id);
    return book.book_id != id;
  });
}
</script>

<template>
  <div class="main">
    <div v-for="book in books" :key="book.book_id" class="box">
      <h2>{{ book.title }}</h2>
      <h3>Copies: {{ book.total }} | In Store: {{ book.in_store }}</h3>
      <p>{{ book.description }}</p>
      <p>Genre {{ book.genre }}</p>
      <p>Release year: {{ book.release_year }} -ish</p>
      <p>Author: {{ book.first_name }} {{ book.last_name }}</p>
      <div class="btn-wrapper">
        <button @click="deleteBook(book.book_id)" class="btn-pink">
          Delete Book
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  border-radius: 20px;
  box-shadow: 0px 30px 40px -10px #f05c8c;
  padding-top: 30px;
  margin: 20px;
  max-width: 400px;
  text-align: center;
  gap: 1rem;
  background-color: rgb(255, 255, 255);
  border: 4px solid hsl(0, 0%, 90%);
}
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(248, 180, 202, 1) 79%,
    rgba(240, 92, 140, 1) 100%
  );
}
.red {
  color: red;
}
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
p {
  padding: 10px;
}
h2 {
  padding: 10px;
}
.btn-pink {
  width: 50%;
  background-color: hsl(0, 0%, 41%);
  color: #f05c8c;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
