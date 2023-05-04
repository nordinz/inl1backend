<script setup>
// import axios from 'axios'
import { ref, onMounted } from "vue";
import axios from "axios";

const books = ref([]);
/* GET */
const getAllBooks = () => {
  return axios
    .get("http://localhost:3000/books")
    .then((res) => (books.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => {
  getAllBooks().then(()=> {

    console.log(books.value);
  });
});

function deleteBook(id){
  axios
    .delete(`http://localhost:3000/books/${id}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

    books.value = books.value.filter((book)=>{
    console.log(book.book_id != id);
    return book.book_id != id
  })
}

function updateBook(bookId) {

}
console.log(books[0]);
</script>

<template>
 <div class="main">
    <div v-for="book in books" :key="book.book_id" class="box">
      <h2>{{ book.title }}</h2>
      <p>{{ book.description }}</p>
      <p>Genre {{ book.genre }}</p>
      <p>Release year: {{ book.release_year }} -ish</p> 
      <p>Author: {{ book.first_name }} {{ book.last_name }}</p>
      <div class="btn-wrapper">
        <button @click="deleteBook(book.book_id)" class="btn-pink">Delete Book</button>

        <button @click="updateBook(book.book_id)" class="btn-pink">Borrow Book</button>
        
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  box-shadow: 0px 30px 40px -10px #f05c8c;
  padding-top: 30px;
  margin: 20px;
  max-width: 400px;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-color: rgb(255, 255, 255);
}
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(248,180,202,1) 79%, rgba(240,92,140,1) 100%);
}
.red {
  color: red;
}
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
p{
  padding: 10px;
}
h2{
  padding: 10px;
}
.btn-pink{
    width: 50%;
    background-color: #f05c8c;
    padding: 10px 20px;
    color: #ffffff;
    border-radius: 20px;
    text-decoration: none;
    box-shadow: 0 -1px 0 #A10084 inset;
    cursor: pointer;
}
</style>