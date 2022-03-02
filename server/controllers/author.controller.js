const Author = require('../models/author.model')

module.exports = {

    // CRUD

    // Rectrieve All
    getAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors)=>res.json(allAuthors))
            .catch(err=>res.status(400).json(err))
    },

    // Retrieve One
    getOneAuthor: (req, res) => {
        Author.findById({_id: req.params.id})
            .then((oneAuthor)=>res.json(oneAuthor))
            .catch(err=>res.status(400).json(err))
    },
    
    // Create
    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor)=>res.json(newAuthor))
            .catch(err=>res.status(400).json(err))
    },

    // Update 
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators: true})
            .then(updatedAuthor=> res.json(updatedAuthor))
            .catch(err=>res.status(400).json(err))
    }, 

    // Delete
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(deletedAuthor=> {
                console.log(deletedAuthor)
                res.json(deletedAuthor)
            })
            .catch(err=>res.status(400).json(err))
    }
}