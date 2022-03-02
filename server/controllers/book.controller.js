const Book = require('../models/book.model')

module.exports = {

    // CRUD

    // Rectrieve All
    getAllBooks: (req, res) => {
        Book.find()
            .then((allBooks)=>res.json(allBooks))
            .catch(err=>res.status(400).json(err))
    },

    // Retrieve One
    getOneBook: (req, res) => {
        Book.findById({_id: req.params._id})
            .then((oneBook)=>res.json(oneBook))
            .catch(err=>res.status(400).json(err))
    },
    
    // Create
    createNewBook: (req, res) => {
        Book.create(req.body)
            .then((newBook)=>res.json(newBook))
            .catch(err=>res.status(400).json(err))
    },

    // Update 
    updateBook: (req, res) => {
        Book.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new:true, runValidators: true})
            .then(updatedBook=> res.json(updatedBook))
            .catch(err=>res.status(400).json(err))
    }, 

    // Delete
    deleteBook: (req, res) => {
        Book.deleteOne({_id: req.params._id})
            .then(deleteBook=>res.json(deleteBook))
            .catch(err=>res.status(400).json(err))
    }
}