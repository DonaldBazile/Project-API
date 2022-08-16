/*
1.0. npm init

2.0. touch .gitignore && pico .gitignore
2.1. package.json
2.2. packages-lock.json
2.3. node_modules
2.4. cont x , y, enter

3.0. npm install cors express 

*/


const express = require("express")
const cors = require("cors")
const PORT = 4000 

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`API listen to ${PORT}`)
})

app.get('/',(request, response)=>{
    response.send('API RUNNING!')
}) 