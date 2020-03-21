const express = require('express');
const io =require('socket.io')();

const app =  express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
   
});


io.attach(server);

io.on('connection',(socket) => {
  console.log('user connected');
 
 
 
  socket.on('Created',(data)=>{
    socket.broadcast.emit('Created',(data))

  })

  socket.on('urName',(data)=>{
    socket.broadcast.emit('urName',(data))
  })

  socket.on('chatMessage', (data) =>{

    socket.broadcast.emit('chatMessage',(data))
  })


  socket.on('typing', (data) =>{

    socket.broadcast.emit('typing',(data))
  })

  socket.on('stopTyping', (data) =>{

    socket.broadcast.emit('stopTyping',(data))
  })

 

  })


  

  
  

  
   



  


