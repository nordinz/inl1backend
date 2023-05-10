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
    <section class="search-wrapper">
      <div>
        <h2>Search for: {{ picked }}</h2>
      </div>
      <section>
        <input type="radio" id="one" value="books" v-model="picked" />
        <label for="one">Book</label>

        <input type="radio" id="two" value="authors" v-model="picked" />
        <label for="two">Author</label>
      </section>
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

<style scoped>
.wrapper {
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
.search-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
}
</style>
