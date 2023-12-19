const express = require("express")
const server = express()
const port = process.env.PORT||3000
server.use(express.static('public'))
server.listen(port,()=>{
    console.log(`je suis la ${port}`)
})
server.get("/dinoname",async(req,res)=>{

})