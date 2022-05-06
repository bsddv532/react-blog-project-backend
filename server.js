const port = process.env.PORT ||  8000 ;
const express = require("express");
const cors = require("cors");
const mainRouter = require("./Routes")

const server = express();

server.use(cors());


server.use("/api/v1", mainRouter)

server.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port} `)
})
