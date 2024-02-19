const http = require('http')
const server = http.createServer();
const socketIO = require('socket.io');

const io = socketIO(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', socket=>{
    console.log('Client connected :)');

    socket.on('disconnect', ()=>{
        console.log('Client disconnected :(');
    })
})

const PORT = process.env.PORT || 5500;

server.listen(PORT, ()=>{
    console.log('Server is running on PORT : '+PORT);
})