const { createServer } = require('http');
const { Server } = require('socket.io');
const express = require('express');
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

const mainRoom = 'mainRoom';
const waitingRoom = 'waitingRoom';
let peopleInMainRoom = 0;
const maxPeopleInRoom = 2;

io.on('connection', (socket) => {
  peopleInMainRoom++;
  console.log(peopleInMainRoom);
  console.log('A user connected');
  if (peopleInMainRoom <= maxPeopleInRoom) {
    socket.join(mainRoom);
    socket.emit('serverMessage', {
      message: 'Välkommen till chatten!',
      isConnected: true,
    });
  } else {
    socket.join(waitingRoom);
    socket.emit('serverMessage', {
      message: 'Välkommen till väntrummet! Du är placerad i kö...',
      isConnected: false,
    });
  }
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    peopleInMainRoom--;
    console.log(peopleInMainRoom);
  });

  socket.on('sendMessage', (message) => {
    io.to(mainRoom).emit('chatMessage', message);
    console.log(message);
  });
});

httpServer.listen(3001);
