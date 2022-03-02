const mongoose = require('mongoose')
const dbName = "Authors"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`We have Touched the Sun I mean We Reached the ${dbName} Database. Over`))
.catch(err => console.log("Looks like we made a wrong turn.", err))
