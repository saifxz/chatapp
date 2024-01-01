
const socket=io()
let username;
let textArea=document.querySelector('.textclass')
let messageArea=document.querySelector('.messageArea')

do{
   username= prompt("enter name")
}while(!username)

textArea.addEventListener('keyup',(evt)=>{
    if(evt.key=='Enter'){
        sendMessage(evt.target.value)
    }
})
function sendMessage(message){
    const msg={
        user:username,
        msg:message
    }
    appendChild(msg,'outgoing')
    socket.emit('message',msg)
}
function appendChild(msg,type){
    const Maindiv=document.createElement('div')
    Maindiv.classList.add(type,'message')
    let markup=`
    <h4>${msg.user} : ${msg.msg}</h4>
    
    `
    Maindiv.innerHTML=markup
    messageArea.appendChild(Maindiv)
}

socket.on('broadcast',(msg)=>{
    appendChild(msg,'incoming')
})