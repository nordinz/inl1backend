<script setup></script>

<template>
  <main>
    <div class="wrapper">
      <h1>Welcome to the Panda Library!</h1>
    </div>
    <div class="panda-wrapper">
      <div class="panda search">
        <img src="../assets/img/panda_search.png" alt="" />
        <router-link v-slot="{ isActive }" to="/search">
          <li :class="[isActive && 'active', 'link']">
            Search for a book or author
          </li>
        </router-link>
      </div>
      <div class="panda register">
        <img src="../assets/img/panda_register.png" alt="" />
        <router-link v-slot="{ isActive }" to="/create">
          <li :class="[isActive && 'active', 'link']">Create s new book</li>
        </router-link>
      </div>
      <div class="panda chat">
        <img src="../assets/img/panda_chat.png" alt="" />
        <router-link v-slot="{ isActive }" to="/search">
          <li :class="[isActive && 'active', 'link']">Search for a book</li>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.panda {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  padding-top: 100px;
  padding-bottom: 50px;
  order: 2;
  color: #f05c8c;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.75em;
  text-align: center;
  text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
    3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
    6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
    6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
    9px 7px 1px #4af7ff;
}
img {
  height: auto;
  width: 300px;
  padding-bottom: 5%;
}
.panda-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 6%;
  flex-wrap: wrap;
}
li {
  text-transform: uppercase;
  --s: 0.1em; /* the thickness of the line */
  --c: #f05c8c; /* the color */

  color: #0000;
  padding-bottom: var(--s);
  background: linear-gradient(90deg, var(--c) 50%, #000 0)
      calc(100% - var(--_p, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.5s;
  font-family: system-ui, sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
}
li:hover {
  --_p: 100%;
}
</style>
