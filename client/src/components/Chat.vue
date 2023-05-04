<script setup>
import { io } from "socket.io-client";
import {reactive} from 'vue'
const socket = io("http://localhost:3001");
const state = reactive({message: '', isInMainChat: false, chatMessages:[], userName: ''})
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
// console.log(state.message);
socket.on('serverMessage', (data)=>{
  console.log(data);
  state.isInMainChat = data.isConnected
})

function sendMessage() {
  socket.emit('sendMessage', state.message)
  state.message=''
}

socket.on('chatMessage', (chatMessage)=>{
  state.chatMessages.push(chatMessage)
})

</script>

<template>
  <div v-if="state.isInMainChat" class="wrapper">
    <div class="text-top">Chat</div>
  <div class="message-box">
    <p v-for="message in state.chatMessages" :key="Math.floor(Math.random() * 1234)">{{ message }}</p>
  </div>
  
<input type="text" v-model="state.message">
<button @click="sendMessage">Send</button>
</div>
<div v-else class="wrapper">
  <div class="text-top">Waitingroom</div>
  <div class="panda">
    <img src="../assets/img/sleeping-panda.webp" alt="">
  </div>
</div>
</template>

<style scoped>
*{
  font-size: large;
}
img {
max-width: 100%;
width: 800px;
}
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.message-box {
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 80%;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  min-width: 500px;
}
.text-top{
  padding-top: 50px;
  padding-bottom: 100px;
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
</style>
