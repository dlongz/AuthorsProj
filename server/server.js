const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

// Middle WARE
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors({
    origin:"http://localhost:3000"
}))

// Import Configs HERE
require("./config/mongoose.config")
// Import Routes HERE
const authorRoutes = require("./routes/authors.routes")
authorRoutes(app)

// const bookRoutes = require("./routes/books.routes")
// bookRoutes(app)


app.listen(port, ()=> {console.log("Ranger Ranger Initiating Sweep for 8000")})
