const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//require DB
require('./config/mongoose.config')
//add routes
const routes = require('./routes/movie.routes')
routes(app)

app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`)
})