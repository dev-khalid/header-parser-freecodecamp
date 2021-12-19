const express = require('express'); 
const server = express(); 

server.get('/api/whoami',(req,res) => {  
  
  res.json({ 
    ipaddress: req.header('x-forwarded-for') || req.connection.remoteAddress ,
    language: req.get('Accept-Language'),
    software: req.header('user-agent'), 
    
  })
})



server.listen(3000,() => { 
  console.log("listening on port 3000"); 

})