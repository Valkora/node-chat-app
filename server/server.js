const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT||3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log("New user connected");

  socket.emit('newMessage', {
    from: "val1",
    text: "HEEEEEEEEEEEY",
    createAt: 12345
  });

  socket.on('createEmail', (newEmail) =>{
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (message) => {
    console.log("createMessage", message);
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
