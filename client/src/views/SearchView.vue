<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref([]);
const keyword = ref('');
const picked = ref('books');

const searchBooks = () => {
  return axios
    .get(`http://localhost:3000/${picked.value}/search`, {
      params: { q: keyword.value },
    })
    .then((res) => (data.value = res.data))

    .catch((error) => console.log(error));
};
</script>

<template>
  <form v-on:submit.prevent="searchBooks" class="wrapper">
    <section>
      <div>Search for: {{ picked }}</div>

      <input type="radio" id="one" value="books" v-model="picked" />
      <label for="one">Book</label>

      <input type="radio" id="two" value="authors" v-model="picked" />
      <label for="two">Author</label>
    </section>
    <input
      v-model="keyword"
      type="text"
      name="keyword"
      id="keyword"
      placeholder="search"
    />
    <button>Search</button>
  </form>

  <div class="main">
    <div v-if="picked === 'books'" class="books">
      <div v-for="book in data" :key="book.book_id" class="box">
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <p v-if="book.title">
          In Store: {{ book.in_store }}, total: {{ book.total }}
        </p>
      </div>
    </div>

    <div v-if="picked === 'authors'" class="author">
      <div v-for="author in data">
        <p>{{ author.first_name }} {{ author.last_name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
