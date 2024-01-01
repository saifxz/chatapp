const express= require('express')
const app=express()
const http=require('http').createServer(app)
const port=5000
app.use(express.static('./public'))

http.listen(port,()=>{
    console.log("server is listening ..")
})

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })
//socket

const io=require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log("connected...")
    socket.on('message',(msg)=>{
        console.log(msg)
        socket.broadcast.emit('broadcast',msg)
    })
})

