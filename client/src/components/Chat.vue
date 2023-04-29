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
  <div class="message-box">
    <p v-for="message in state.chatMessages" :key="Math.floor(Math.random() * 1234)">{{ message }}</p>
  </div>
  
<input type="text" v-model="state.message">
<button @click="sendMessage">Send</button>
</div>
<div v-else class="wrapper">Waitingroom</div>
</template>

<style scoped>
.message-box {
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  min-width: 500px;
}
</style>
